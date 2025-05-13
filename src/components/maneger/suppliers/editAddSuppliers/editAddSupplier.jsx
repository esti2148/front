import React, { useEffect, useState } from "react";
import {
    Dialog, DialogTitle, DialogContent, DialogActions,
    Button, TextField, Grid, Typography, IconButton,
    Paper, Slide, InputAdornment, Box
} from '@mui/material';
import {
    Close as CloseIcon,
    Person as PersonIcon,
    Business as BusinessIcon,
    Phone as PhoneIcon,
    Email as EmailIcon,
    Add as AddIcon,
    Edit as EditIcon
} from '@mui/icons-material';
import './editAddSupplier.css';
import { useDispatch } from "react-redux";
// import { addSupplierThunk } from "../../../../redux/supplierSlice/addSupplierThunk";
// import { updateSupplierThunk } from "../../../../redux/supplierSlice/updateSupplierThunk";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const EditAddSupplier = ({ supplier, onClose, isAdd, onSave }) => {
    const [newSupplier, setNewSupplier] = useState({
        id: supplier?.id || 0,
        name: supplier?.name || '',
        companyName: supplier?.companyName || '',
        phone: supplier?.phone || '',
        email: supplier?.email || '',
        products: supplier?.products || []
    });

    const dispatch = useDispatch();

    // עדכון הנתונים כאשר הספק משתנה
    useEffect(() => {
        if (supplier) {
            setNewSupplier({
                id: supplier.id || 0,
                name: supplier.name || '',
                companyName: supplier.companyName || '',
                phone: supplier.phone || '',
                email: supplier.email || '',
                products: supplier.products || []
            });
        }
    }, [supplier]);

    const handleSave = () => {
        // בדיקת תקינות הנתונים
        if (!newSupplier.name.trim() || !newSupplier.companyName.trim()) {
            alert('נא להזין שם ספק ושם חברה');
            return;
        }

        // שליחת הנתונים המעודכנים/החדשים לקומפוננטת האב
        onSave(newSupplier, isAdd);
    };
    const handleUpdate =() =>{

    }
    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog
            open={true}
            onClose={handleClose}
            TransitionComponent={Transition}
            maxWidth="sm"
            fullWidth
            classes={{ paper: 'supplier-dialog-paper' }}
        >
            <DialogTitle className="dialog-title">
                <div className="dialog-title-content">
                    <Typography variant="h5" component="div" className="dialog-heading">
                        {isAdd ? (
                            <Box display="flex" alignItems="center">
                                <AddIcon style={{ marginLeft: '8px' }} />
                                {"הוספת ספק חדש"}
                            </Box>
                        ) : (
                            <Box display="flex" alignItems="center">
                                <EditIcon style={{ marginLeft: '8px' }} />
                                {"עריכת פרטי ספק"}
                            </Box>
                        )}
                    </Typography>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        className="close-button"
                    >
                        <CloseIcon />
                    </IconButton>
                </div>
            </DialogTitle>

            <DialogContent dividers className="dialog-content">
                <Paper elevation={3} className="form-container">
                    <Grid container spacing={3}>
                        {/* שדה קוד ספק - מוצג רק בעריכה, לא בהוספה */}
                        {!isAdd && (
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="קוד ספק"
                                    variant="outlined"
                                    disabled
                                    value={newSupplier.id}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PersonIcon color="primary" />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                        )}

                        {/* שם ספק */}
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                required
                                label="שם ספק"
                                variant="outlined"
                                placeholder="הזן שם ספק"
                                value={newSupplier.name}
                                onChange={e => setNewSupplier({ ...newSupplier, name: e.target.value })}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonIcon color="primary" />
                                        </InputAdornment>
                                    ),
                                }}
                                className="text-field"
                            />
                        </Grid>

                        {/* שם חברה */}
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                required
                                label="שם חברה"
                                variant="outlined"
                                placeholder="הזן שם חברה"
                                value={newSupplier.companyName}
                                onChange={e => setNewSupplier({ ...newSupplier, companyName: e.target.value })}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <BusinessIcon color="primary" />
                                        </InputAdornment>
                                    ),
                                }}
                                className="text-field"
                            />
                        </Grid>

                        {/* טלפון */}
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="טלפון"
                                variant="outlined"
                                placeholder="הזן מספר טלפון"
                                value={newSupplier.phone}
                                onChange={e => setNewSupplier({ ...newSupplier, phone: e.target.value })}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PhoneIcon color="primary" />
                                        </InputAdornment>
                                    ),
                                }}
                                className="text-field"
                            />
                        </Grid>

                        {/* אימייל */}
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="אימייל"
                                variant="outlined"
                                placeholder="הזן כתובת אימייל"
                                value={newSupplier.email}
                                onChange={e => setNewSupplier({ ...newSupplier, email: e.target.value })}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <EmailIcon color="primary" />
                                        </InputAdornment>
                                    ),
                                }}
                                className="text-field"
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </DialogContent>

            <DialogActions className="dialog-actions">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={isAdd? handleSave : handleUpdate(newSupplier.id)}
                    className="save-button"
                    startIcon={isAdd ? <AddIcon /> : <EditIcon />}
                >
                    {isAdd ? "הוסף ספק" : "עדכן פרטים"}
                </Button>
                <Button
                    variant="outlined"
                    onClick={handleClose}
                    className="cancel-button"
                    startIcon={<CloseIcon />}
                >
                    ביטול
                </Button>
            </DialogActions>
        </Dialog>
    );
};