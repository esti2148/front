
// import { useEffect, useState } from "react"
// import '../editAddCustomer/editAddCustomer.css'
// export const EditAddCustomer = ({ customer, onClose, isAdd, onSave }) => {
//     const [isOpen, setIsOpen] = useState(true);
//     const [newCustomer, setnewCustomer] = useState({
//         instituteId: customer?.instituteId || 0,
//         instituteName: customer?.instituteName || '',
//         address: customer?.address || '',
//         sellingPlace: customer?.sellingPlace || '',
//         phone: customer?.phone || '',
//         email: customer?.email || '',
//         overPluseDebt: customer?.overPluseDebt || 0
//     });

//     // עדכון הנתונים כאשר הלקוח משתנה
//     useEffect(() => {
//         if (customer) {
//             setnewCustomer({
//                 instituteId: customer.instituteId || 0,
//                 instituteName: customer.instituteName || '',
//                 address: customer.address || '',
//                 sellingPlace: customer.sellingPlace || '',
//                 phone: customer.phone || '',
//                 email: customer.email || '',
//                 overPluseDebt: customer.overPluseDebt || 0
//             });
//         }
//     }, [customer]);

//     const handleSave = () => {
//         // שליחת הנתונים המעודכנים/החדשים לקומפוננטת האב
//         onSave(newCustomer, isAdd);
//         onClose();
//     }

//     const handleClose = () => {
//         onClose();
//     }

//     return (
//         <dialog open={isOpen}>
//             <h2>{isAdd ? "הוספת לקוח חדש" : "עריכת פרטי לקוח"}</h2>

//             {/* שדה קוד מוסד - מוצג רק בעריכה, לא בהוספה */}
//             {!isAdd && (
//                 <>
//                     <label>קוד מוסד:</label>
//                     <br />
//                     <input
//                         type="text"
//                         disabled
//                         value={newCustomer.instituteId}
//                     />
//                     <br />
//                 </>
//             )}

//             <label>שם מוסד:</label>
//             <br />
//             <input
//                 type="text"
//                 placeholder="שם מוסד"
//                 value={newCustomer.instituteName}
//                 onChange={x => setnewCustomer({ ...newCustomer, instituteName: x.target.value })}
//             />
//             <br />

//             <label>מקום המכירה:</label>
//             <br />
//             <input
//                 type="text"
//                 placeholder="מקום"
//                 value={newCustomer.sellingPlace}
//                 onChange={x => setnewCustomer({ ...newCustomer, sellingPlace: x.target.value })}
//             />
//             <br />

//             <label>כתובת:</label>
//             <br />
//             <input
//                 type="text"
//                 placeholder="כתובת"
//                 value={newCustomer.address}
//                 onChange={x => setnewCustomer({ ...newCustomer, address: x.target.value })}
//             />
//             <br />

//             <label>טלפון:</label>
//             <br />
//             <input
//                 type="text"
//                 placeholder="טלפון"
//                 value={newCustomer.phone}
//                 onChange={x => setnewCustomer({ ...newCustomer, phone: x.target.value })}
//             />
//             <br />

//             <label>אימייל:</label>
//             <br />
//             <input
//                 type="text"
//                 placeholder="אימייל"
//                 value={newCustomer.email}
//                 onChange={x => setnewCustomer({ ...newCustomer, email: x.target.value })}
//             />
//             <br />

//             {/* שדה יתרה/חוב - אופציונלי בהוספה */}
//             <label>יתרה/חוב:</label>
//             <br />
//             <input
//                 type="number"
//                 placeholder="0"
//                 value={newCustomer.overPluseDebt}
//                 onChange={x => setnewCustomer({ ...newCustomer, overPluseDebt: parseFloat(x.target.value) || 0 })}
//             />
//             <br />

//             <div className="dialog-buttons">
//                 <button onClick={handleSave}>{isAdd ? "הוסף" : "עדכן"}</button>
//                 <button onClick={handleClose}>ביטול</button>
//             </div>
//         </dialog>
//     )
// }
// **********************************
import React, { useEffect, useState } from "react";
import {
    Dialog, DialogTitle, DialogContent, DialogActions,
    Button, TextField, Grid, Typography, IconButton,
    Paper, Slide, InputAdornment
} from '@mui/material';
import {
    Close as CloseIcon,
    School as SchoolIcon,
    LocationOn as LocationIcon,
    Phone as PhoneIcon,
    Email as EmailIcon,
    AccountBalance as AccountBalanceIcon,
    Store as StoreIcon
} from '@mui/icons-material';
import './editAddCustomer.css';
import { useDispatch } from "react-redux";
import { addCustomerThunk } from "../../../../redux/customerSlice/addCustomerThunk";
import { updateCustomerThunk } from "../../../../redux/customerSlice/updateCustomerThunk";
import { getCustomerThunk } from "../../../../redux/customerSlice/getCustomerThunk";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const EditAddCustomer = ({ customer, onClose, isAdd, onSave }) => {
    const [newCustomer, setnewCustomer] = useState({
        instituteId: customer?.instituteId || 0,
        instituteName: customer?.instituteName || '',
        address: customer?.address || '',
        sellingPlace: customer?.sellingPlace || '',
        phone: customer?.phone || '',
        email: customer?.email || '',
        overPluseDebt: customer?.overPluseDebt || 0
    });
    const dispatch = useDispatch()
    // עדכון הנתונים כאשר הלקוח משתנה
    useEffect(() => {
        if (customer) {
            setnewCustomer({
                instituteId: customer.instituteId || 0,
                instituteName: customer.instituteName || '',
                address: customer.address || '',
                sellingPlace: customer.sellingPlace || '',
                phone: customer.phone || '',
                email: customer.email || '',
                overPluseDebt: customer.overPluseDebt || 0
            });
        }
    }, [customer]);

    const handleSave = () => {
        // בדיקת תקינות הנתונים
        debugger
        if (!newCustomer.instituteName.trim()) {
            alert('נא להזין שם מוסד');

        }
        else {
            dispatch(addCustomerThunk(newCustomer))
            // שליחת הנתונים המעודכנים/החדשים לקומפוננטת האב
            onSave(newCustomer, isAdd);
            onClose();
        }
    }
    const handleEdit = () => {

        let id = newCustomer.instituteId
        dispatch(updateCustomerThunk({ newCustomer, id }));
      
        onClose();
    }

    const handleClose = () => {
        onClose();
    }

    return (
        <Dialog
            open={true}
            onClose={handleClose}
            TransitionComponent={Transition}
            maxWidth="sm"
            fullWidth
            classes={{ paper: 'customer-dialog-paper' }}
        >
            <DialogTitle className="dialog-title">
                <div className="dialog-title-content">
                    <Typography variant="h5" component="div" className="dialog-heading">
                        {isAdd ? "הוספת לקוח חדש" : "עריכת פרטי לקוח"}
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
                        {/* שדה קוד מוסד - מוצג רק בעריכה, לא בהוספה */}
                        {!isAdd && (
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="קוד מוסד"
                                    variant="outlined"
                                    disabled
                                    value={newCustomer.instituteId}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SchoolIcon color="primary" />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                        )}

                        {/* שם מוסד */}
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                required
                                label="שם מוסד"
                                variant="outlined"
                                placeholder="הזן שם מוסד"
                                value={newCustomer.instituteName}
                                onChange={e => setnewCustomer({ ...newCustomer, instituteName: e.target.value })}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SchoolIcon color="primary" />
                                        </InputAdornment>
                                    ),
                                }}
                                className="text-field"
                            />
                        </Grid>

                        {/* מקום המכירה */}
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="מקום המכירה"
                                variant="outlined"
                                placeholder="הזן מקום מכירה"
                                value={newCustomer.sellingPlace}
                                onChange={e => setnewCustomer({ ...newCustomer, sellingPlace: e.target.value })}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <StoreIcon color="primary" />
                                        </InputAdornment>
                                    ),
                                }}
                                className="text-field"
                            />
                        </Grid>

                        {/* כתובת */}
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="כתובת"
                                variant="outlined"
                                placeholder="הזן כתובת"
                                value={newCustomer.address}
                                onChange={e => setnewCustomer({ ...newCustomer, address: e.target.value })}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LocationIcon color="primary" />
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
                                value={newCustomer.phone}
                                onChange={e => setnewCustomer({ ...newCustomer, phone: e.target.value })}
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
                                value={newCustomer.email}
                                onChange={e => setnewCustomer({ ...newCustomer, email: e.target.value })}
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

                        {/* יתרה/חוב */}
                        {!isAdd && (
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="יתרה/חוב"
                                    variant="outlined"
                                    disabled
                                    type="number"
                                    value={newCustomer.overPluseDebt}
                                    onChange={e => setnewCustomer({ ...newCustomer, overPluseDebt: parseFloat(e.target.value) || 0 })}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <AccountBalanceIcon color="primary" />
                                            </InputAdornment>
                                        ),
                                    }}
                                    className={`text-field ${newCustomer.overPluseDebt < 0 ? 'negative-balance' : ''}`}
                                />
                            </Grid>)}
                    </Grid>
                </Paper>
            </DialogContent>

            <DialogActions className="dialog-actions">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={isAdd ? handleSave : handleEdit}
                    className="save-button"
                >
                    {isAdd ? "הוסף לקוח" : "עדכן פרטים"}
                </Button>
                <Button
                    variant="outlined"
                    onClick={handleClose}
                    className="cancel-button"
                >
                    ביטול
                </Button>
            </DialogActions>
        </Dialog>
    );
}










