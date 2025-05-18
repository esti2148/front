      // import { useEffect, useState } from "react"
      // import { useDispatch, useSelector } from "react-redux"
      // import { getCustomerThunk } from "../../../redux/customerSlice/getCustomerThunk"
      // // ייבוא של פעולות Redux נוספות (יש להוסיף)
      // // import { addCustomerThunk } from "../../../redux/customerSlice/addCustomerThunk"
      // // import { updateCustomerThunk } from "../../../redux/customerSlice/updateCustomerThunk"
      // // import { deleteCustomerThunk } from "../../../redux/customerSlice/deleteCustomerThunk"
      // import { TableCell, TableContainer, TableHead, TableRow, TableBody, Table, Paper } from "@mui/material";
      // import Fab from '@mui/material/Fab';
      // import EditIcon from '@mui/icons-material/Edit';
      // import DeleteIcon from '@mui/icons-material/Delete';
      // import AddIcon from '@mui/icons-material/Add';
      // import './customers.css'
      // import './editAddCustomer/editAddCustomer.css'
      // import { EditAddCustomer } from "./editAddCustomer/editAddCustomer";

      // export const CustomersManeger = () => {
      //     const [selectedCustomer, setSelectedCustomer] = useState(null);
      //     const [isDialogOpen, setIsDialogOpen] = useState(false);
      //     const [isAddMode, setIsAddMode] = useState(false);

      //     const dispatch = useDispatch();
      //     const customers = useSelector(state => state.customer.customerOrders);

      //     useEffect(() => {
      //         dispatch(getCustomerThunk());
      //     }, [dispatch]);

      //     const handleAddCustomer = () => {
      //         setSelectedCustomer({
      //             instituteId: 0,
      //             instituteName: '',
      //             address: '',
      //             sellingPlace: '',
      //             phone: '',
      //             email: '',
      //             overPluseDebt: 0
      //         });
      //         setIsAddMode(true);
      //         setIsDialogOpen(true);
      //     };

      //     const handleEditCustomer = (customer) => {
      //         setSelectedCustomer(customer);
      //         setIsAddMode(false);
      //         setIsDialogOpen(true);
      //     };

      //     const handleDeleteCustomer = (customer) => {
      //         if (window.confirm(`האם אתה בטוח שברצונך למחוק את המוסד "${customer.instituteName}"?`)) {
      //             // dispatch(deleteCustomerThunk(customer.instituteId));
      //             console.log("מחיקת לקוח:", customer.instituteId);
      //         }
      //     };

      //     const handleSaveCustomer = (customer, isAdd) => {
      //         if (isAdd) {
      //             // dispatch(addCustomerThunk(customer));
      //             console.log("הוספת לקוח חדש:", customer);
      //         } else {
      //             // dispatch(updateCustomerThunk(customer));
      //             console.log("עדכון לקוח קיים:", customer);
      //         }
      //     };

      //     const handleCloseDialog = () => {
      //         setIsDialogOpen(false);
      //     };

      //     return (
      //         <div className="customers-container">
      //             <div className="customers-header">
      //                 <h2>ניהול לקוחות</h2>
      //                 <Fab 
      //                     color="primary" 
      //                     aria-label="add" 
      //                     onClick={handleAddCustomer}
      //                     className="add-button"
      //                 >
      //                     <AddIcon />
      //                 </Fab>
      //             </div>

      //             {isDialogOpen && (
      //                 <EditAddCustomer 
      //                     customer={selectedCustomer}
      //                     onClose={handleCloseDialog}
      //                     isAdd={isAddMode}
      //                     onSave={handleSaveCustomer}
      //                 />
      //             )}

      //             <TableContainer component={Paper} className='allTable'>
      //                 <Table sx={{ minWidth: 700 }} aria-label="customized table">
      //                     <TableHead>
      //                         <TableRow className="tableRow">
      //                             <TableCell className='table' align="center">קוד מוסד</TableCell>
      //                             <TableCell className='table' align="center">שם מוסד</TableCell>
      //                             <TableCell className='table' align="center">מקום המכירה</TableCell>
      //                             <TableCell className='table' align="center">כתובת</TableCell>
      //                             <TableCell className='table' align="center">טלפון</TableCell>
      //                             <TableCell className='table' align="center">אימייל</TableCell>
      //                             <TableCell className='table' align="center">יתרה/חוב</TableCell>
      //                             <TableCell className='table' align="center">פעולות</TableCell>
      //                         </TableRow>
      //                     </TableHead>
      //                     <TableBody>
      //                         {customers?.length > 0 ? (
      //                             customers.map(customer => (
      //                                 <TableRow key={customer.instituteId} className="tableRow">
      //                                     <TableCell align="center">{customer.instituteId}</TableCell>
      //                                     <TableCell align="center">{customer.instituteName}</TableCell>
      //                                     <TableCell align="center">{customer.sellingPlace}</TableCell>
      //                                     <TableCell align="center">{customer.address}</TableCell>
      //                                     <TableCell align="center">{customer.phone}</TableCell>
      //                                     <TableCell align="center">{customer.email}</TableCell>
      //                                     <TableCell 
      //                                         align="center" 
      //                                         style={{ color: (customer.overPluseDebt < 0) ? 'red' : 'inherit' }}
      //                                     >
      //                                         {customer.overPluseDebt}
      //                                     </TableCell>
      //                                     <TableCell align="center" className="action-buttons">
      //                                         <Fab 
      //                                             size="small"
      //                                             color="success" 
      //                                             aria-label="edit"
      //                                             onClick={() => handleEditCustomer(customer)}
      //                                         >
      //                                             <EditIcon />
      //                                         </Fab>
      //                                         <Fab 
      //                                             size="small"
      //                                             color="error" 
      //                                             aria-label="delete"
      //                                             onClick={() => handleDeleteCustomer(customer)}
      //                                         >
      //                                             <DeleteIcon />
      //                                         </Fab>
      //                                     </TableCell>
      //                                 </TableRow>
      //                             ))
      //                         ) : (
      //                             <TableRow>
      //                                 <TableCell colSpan={8} align="center">
      //                                     אין לקוחות להצגה
      //                                 </TableCell>
      //                             </TableRow>
      //                         )}
      //                     </TableBody>
      //                 </Table>
      //             </TableContainer>
      //         </div>
      //     );
      // }

      import { useEffect, useState } from "react";
      import { useDispatch, useSelector } from "react-redux";
      import { getCustomerThunk } from "../../../redux/customerSlice/getCustomerThunk";
      import {
        TableCell, TableContainer, TableHead, TableRow, TableBody, Table, Paper,
        Container, Typography, Box, Fab, IconButton, Tooltip, Chip, Avatar,
        TextField, InputAdornment, Card, CardContent, Divider, Button,
        Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions
      } from "@mui/material";

      import {
        Add as AddIcon,
        Edit as EditIcon,
        Delete as DeleteIcon,
        Search as SearchIcon,
        School as SchoolIcon,
        Refresh as RefreshIcon,
        Warning as WarningIcon
      } from '@mui/icons-material';

      import './customers.css';
      import { EditAddCustomer } from "./editAddCustomer/editAddCustomer";
      import { deleteCustomerThunk } from "../../../redux/customerSlice/deleteCustomerThunk";

      export const CustomersManeger = () => {
        const [selectedCustomer, setSelectedCustomer] = useState(null);
        const [isDialogOpen, setIsDialogOpen] = useState(false);
        const [isAddMode, setIsAddMode] = useState(false);
        const [searchTerm, setSearchTerm] = useState('');
        const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
        const [customerToDelete, setCustomerToDelete] = useState(null);
        const [cannotDeleteDialogOpen, setCannotDeleteDialogOpen] = useState(false);

        const dispatch = useDispatch();
        const customers = useSelector(state => state.customer.customerOrders);
        const loading = useSelector(state => state.customer.loading);
        const error = useSelector(state => state.customer.error);

        useEffect(() => {
          dispatch(getCustomerThunk());
        }, [dispatch]);

        const handleAddCustomer = () => {

          setSelectedCustomer({
            instituteId: 0,
            instituteName: '',
            address: '',
            sellingPlace: '',
            phone: '',
            email: '',
            overPluseDebt: 0
          });
          setIsAddMode(true);
          setIsDialogOpen(true);
        };

        const handleEditCustomer = (customer) => {
          setSelectedCustomer(customer);
          setIsAddMode(false);
          setIsDialogOpen(true);

        };

        const handleDeleteClick = (customer) => {
          setCustomerToDelete(customer);
          setDeleteDialogOpen(true);
        };

        const handleDeleteConfirm = () => {
          debugger
          if (customerToDelete) {
            if (customerToDelete.orders.length == 0) {
              let id = customerToDelete.instituteId
              dispatch(deleteCustomerThunk(id))
              console.log("מחיקת לקוח:", customerToDelete.instituteId);
              setDeleteDialogOpen(false);
              setCustomerToDelete(null);
            }
            else {
                setDeleteDialogOpen(false);
                setCannotDeleteDialogOpen(true);
            }
          }
        };


        const handleDeleteCancel = () => {
          setDeleteDialogOpen(false);
          setCustomerToDelete(null);
        };

        const handleSaveCustomer = (customer, isAdd) => {
          if (isAdd) {
            // dispatch(addCustomerThunk(customer));
            console.log("הוספת לקוח חדש:", customer);
          } else {
            // dispatch(updateCustomerThunk(customer));
            console.log("עדכון לקוח קיים:", customer);
          }
        };

        const handleCloseDialog = () => {
          setIsDialogOpen(false);
        };

        const handleRefresh = () => {
          dispatch(getCustomerThunk());
        };

        // סינון הלקוחות לפי מונח החיפוש
        const filteredCustomers = customers?.filter(customer =>
          customer.instituteName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          customer.sellingPlace.toLowerCase().includes(searchTerm.toLowerCase()) ||
          customer.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
          customer.email.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return (
          <Container maxWidth="xl" className="customers-container">
            <Card className="customers-header-card">
              <CardContent>
                <Box className="customers-header">
                  <Box className="header-title">
                    <SchoolIcon className="header-icon" />
                    <Typography variant="h4" component="h1">
                      ניהול לקוחות
                    </Typography>
                  </Box>

                  <Box className="header-actions">
                    <TextField
                      variant="outlined"
                      size="small"
                      placeholder="חיפוש לקוח..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="search-field"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon />
                          </InputAdornment>
                        ),
                      }}
                    />

                    <Tooltip title="רענון נתונים">
                      <IconButton
                        color="primary"
                        onClick={handleRefresh}
                        className="refresh-button"
                      >
                        <RefreshIcon />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="הוספת לקוח חדש">
                      <Fab
                        color="primary"
                        aria-label="add"
                        onClick={handleAddCustomer}
                        className="add-button"
                        size="medium"
                      >
                        <AddIcon />
                      </Fab>
                    </Tooltip>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            {isDialogOpen && (
              <EditAddCustomer
                customer={selectedCustomer}
                onClose={handleCloseDialog}
                isAdd={isAddMode}
                onSave={handleSaveCustomer}
              />
            )}

            {/* דיאלוג אישור מחיקה */}
            <Dialog
              open={deleteDialogOpen}
              onClose={handleDeleteCancel}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              className="delete-dialog"
            >
              <DialogTitle id="alert-dialog-title" className="delete-dialog-title">
                <WarningIcon className="warning-icon" />
                {"אישור מחיקת לקוח"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description" className="delete-dialog-content">
                  האם אתה בטוח שברצונך למחוק את המוסד "{customerToDelete?.instituteName}"?
                  <br />
                  פעולה זו אינה ניתנת לביטול.
                </DialogContentText>
              </DialogContent>
              <DialogActions className="delete-dialog-actions">
                <Button onClick={handleDeleteCancel} color="primary" variant="outlined">
                  ביטול
                </Button>
                <Button onClick={handleDeleteConfirm} color="error" variant="contained" autoFocus>
                  מחיקה
                </Button>
              </DialogActions>
            </Dialog>
            {/* דיאלוג לא ניתן למחוק לקוח שהזמין מוצר */}
            <Dialog
        open={cannotDeleteDialogOpen}
        onClose={() => setCannotDeleteDialogOpen(false)}
        aria-labelledby="cannot-delete-dialog-title"
        className="delete-dialog"
      >
        <DialogTitle id="cannot-delete-dialog-title" className="delete-dialog-title" style={{ backgroundColor: '#f8d7da', color: '#721c24' }}>
          <WarningIcon className="warning-icon" style={{ marginRight: '8px', verticalAlign: 'middle' }} />
          {"לא ניתן למחוק לקוח"}
        </DialogTitle>

        <DialogContent style={{ padding: '20px' }}>
          <DialogContentText id="cannot-delete-dialog-description" className="delete-dialog-content">
            לא ניתן למחוק את המוסד "{customerToDelete?.instituteName}" מכיוון שיש לו הזמנות במערכת.
            <br />
            יש למחוק קודם את כל ההזמנות הקשורות ללקוח זה.
          </DialogContentText>
        </DialogContent>
        <DialogActions className="delete-dialog-actions" style={{ padding: '16px', borderTop: '1px solid #e0e0e0' }}>
          <Button 
            onClick={() => setCannotDeleteDialogOpen(false)} 
            color="primary" 
            variant="contained" 
            autoFocus
          >
            הבנתי
          </Button>
        </DialogActions>
      </Dialog>
            <Box className="table-container">
              {loading ? (
                <Box className="loading-container">
                  <Typography variant="h6">טוען נתונים...</Typography>
                </Box>
              ) : error ? (
                <Box className="error-container">
                  <Typography variant="h6" color="error">שגיאה בטעינת נתונים: {error}</Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleRefresh}
                    startIcon={<RefreshIcon />}
                    className="retry-button"
                  >
                    נסה שנית
                  </Button>
                </Box>
              ) : (
                <TableContainer component={Paper} className="customers-table-container">
                  <Table aria-label="customers table" className="customers-table">
                    <TableHead>
                      <TableRow className="table-header-row">
                        <TableCell className="table-header-cell" align="center">קוד מוסד</TableCell>
                        <TableCell className="table-header-cell" align="center">שם מוסד</TableCell>
                        <TableCell className="table-header-cell" align="center">מקום המכירה</TableCell>
                        <TableCell className="table-header-cell" align="center">כתובת</TableCell>
                        <TableCell className="table-header-cell" align="center">טלפון</TableCell>
                        <TableCell className="table-header-cell" align="center">אימייל</TableCell>
                        <TableCell className="table-header-cell" align="center">יתרה/חוב</TableCell>
                        <TableCell className="table-header-cell" align="center">פעולות</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {filteredCustomers?.length > 0 ? (
                        filteredCustomers.map(customer => (
                          <TableRow
                            key={customer.instituteId}
                            className={`table-row ${customer.overPluseDebt < 0 ? 'negative-balance-row' : ''}`}
                          >
                            <TableCell align="center" className="institute-id-cell">
                              <Chip
                                label={customer.instituteId}
                                color="primary"
                                variant="outlined"
                                className="id-chip"
                              />
                            </TableCell>
                            <TableCell align="center" className="institute-name-cell">
                              <Box className="institute-name-container">
                                {/* <Avatar className="institute-avatar">
                                  {customer.instituteName.charAt(0)}
                                </Avatar> */}
                                <Typography className="institute-name">
                                  {customer.instituteName}
                                </Typography>
                              </Box>
                            </TableCell>
                            <TableCell align="center">{customer.sellingPlace}</TableCell>
                            <TableCell align="center">{customer.address}</TableCell>
                            <TableCell align="center">
                              <a href={`tel:${customer.phone}`} className="phone-link">
                                {customer.phone}
                              </a>
                            </TableCell>
                            <TableCell align="center">
                              <a href={`mailto:${customer.email}`} className="email-link">
                                {customer.email}
                              </a>
                            </TableCell>
                            <TableCell align="center">
                              <span className={customer.overPluseDebt < 0 ? "negative-balance" : "positive-balance"}>
                                {customer.overPluseDebt}
                              </span>
                            </TableCell>
                            <TableCell align="center" className="action-buttons-cell">
                              <Box className="action-buttons">
                                <Tooltip title="עריכת פרטי לקוח">
                                  <IconButton
                                    color="primary"
                                    aria-label="edit"
                                    onClick={() => handleEditCustomer(customer)}
                                    className="edit-button"
                                  >
                                    <EditIcon />
                                  </IconButton>
                                </Tooltip>
                                <Tooltip title="מחיקת לקוח">
                                  <IconButton
                                    color="error"
                                    aria-label="delete"
                                    onClick={() => handleDeleteClick(customer)}
                                    className="delete-button"
                                  >
                                    <DeleteIcon />
                                  </IconButton>
                                </Tooltip>
                              </Box>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={8} align="center" className="no-data-cell">
                            <Box className="no-data-container">
                              <SchoolIcon className="no-data-icon" />
                              <Typography variant="h6">
                                {searchTerm ? 'לא נמצאו לקוחות התואמים את החיפוש' : 'אין לקוחות להצגה'}
                              </Typography>
                              {searchTerm && (
                                <Button
                                  variant="outlined"
                                  color="primary"
                                  onClick={() => setSearchTerm('')}
                                  className="clear-search-button"
                                >
                                  נקה חיפוש
                                </Button>
                              )}
                            </Box>
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </Box>
          </Container>
        );
      };







