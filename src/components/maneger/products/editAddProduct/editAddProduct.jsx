
import React, { useEffect, useState } from "react";
import {
    Dialog, DialogTitle, DialogContent, DialogActions,
    Button, TextField, Grid, Typography, IconButton,
    Paper, Slide, InputAdornment, Box, FormControl, InputLabel, Select, MenuItem
} from '@mui/material';
import {
    Close as CloseIcon,
    Inventory as InventoryIcon,  // שינוי: סמל מוצר במקום SchoolIcon
    Description as DescriptionIcon,  // שינוי: סמל תיאור במקום StoreIcon
    Straighten as StraightenIcon,  // שינוי: סמל מידה במקום LocationIcon
    AttachMoney as AttachMoneyIcon,  // שינוי: סמל מחיר במקום PhoneIcon
    LocalShipping as LocalShippingIcon,  // שינוי: סמל ספק במקום EmailIcon
    Inventory2 as Inventory2Icon,  // שינוי: סמל מלאי במקום AccountBalanceIcon
    Add as AddIcon,  // הוספה: סמל הוספה
    Edit as EditIcon  // הוספה: סמל עריכה
} from '@mui/icons-material';
import './editAddProduct.css';
import { useDispatch, useSelector } from "react-redux";
import { addCustomerThunk } from "../../../../redux/customerSlice/addCustomerThunk";
import { addProductThunk } from "../../../../redux/productSlice/addProductThunk";
import { getByNameSuppliersThunk } from "../../../../redux/supplierSlice/getByNameSuppliersThunk";
import { getProductThunk } from "../../../../redux/productSlice/getProductThunk";
import { updateProductThunk } from "../../../../redux/productSlice/editProductThunk";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const EditAddProduct = ({ customer, onClose, isAdd, onSave }) => {
    const [product, setnewProduct] = useState({
        id: customer?.id,
        productName: customer?.productName || '',
        dscribe: customer?.dscribe || '',
        size: customer?.size || 0,
        price: customer?.price || 0,
        idPurveyor: customer.idPurveyor || 0,
        namePurveyor: customer?.namePurveyor || '',
        stock: customer?.stock || 0
    });


    const sup = useSelector(state => state.supplier.supplierCurrent)
    console.log("sup"+sup);
    const dispatch = useDispatch()
    const supplierList = useSelector((state) => state.Product?.suppliers || []);
    // עדכון הנתונים כאשר הלקוח משתנה
    useEffect(() => {
        if (customer) {
            setnewProduct({
                id: customer.id,
                productName: customer.productName || '',
                dscribe: customer.dscribe || '',
                size: customer.size || '',
                price: customer.price || '',
                idPurveyor: customer.idPurveyor || '',
                namePurveyor: customer.namePurveyor || '',
                stock: customer.stock || '-'
            });
        }
    }, [customer]);
    useEffect(() => {
        debugger
        setnewProduct({ ...product, idPurveyor: sup.id })
        // dispatch(addProductThunk(product))
    }, [sup])

    const handleSave = async () => {
        debugger
        // בדיקת תקינות הנתונים
        if (!product.productName.trim()) {
            alert('נא להזין מוצר');
            // return;
        }
        else {

            let name = product.namePurveyor
            const namee = await dispatch(getByNameSuppliersThunk(name))
            if (namee.payload != undefined) {
                setnewProduct({ ...product, idPurveyor: namee.payload.id })

            }
            // שליחת הנתונים המעודכנים/החדשים לקומפוננטת האב
            onSave({...product,idPurveyor: namee.payload.id }, isAdd);
            onClose();
        }
    }
    const handleEdit =async () => {

        let id = product.id
        let name = product.namePurveyor
        const namee = await dispatch(getByNameSuppliersThunk(name))
        if (namee.payload != undefined) {
        dispatch(updateProductThunk({ id: id, product: {...product,idPurveyor:namee.payload.id} }));
        //dispatch(getProductThunk());
        onClose();}
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
                        {isAdd ? (
                            <Box display="flex" alignItems="center">
                                <AddIcon style={{ marginLeft: '8px' }} />
                                {"הוספת מוצר חדש"}
                            </Box>
                        ) : (
                            <Box display="flex" alignItems="center">
                                <EditIcon style={{ marginLeft: '8px' }} />
                                {"עריכת מוצר"}
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
                        {/* שדה קוד מוסד - מוצג רק בעריכה, לא בהוספה */}
                        {!isAdd && (
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="קוד מוצר"
                                    variant="outlined"
                                    disabled
                                    value={product.id}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <InventoryIcon color="primary" />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                        )}

                        {/* שם מוצר */}
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                required
                                label="שם מוצר"
                                variant="outlined"
                                placeholder="הזן שם מוצר"
                                value={product.productName}
                                onChange={e => setnewProduct({ ...product, productName: e.target.value })}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <InventoryIcon color="primary" />
                                        </InputAdornment>
                                    ),
                                }}
                                className="text-field"
                            />
                        </Grid>

                        {/* תאור  */}
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="תאור"
                                variant="outlined"
                                placeholder="הזן  תאור מוצר"
                                value={product.dscribe}
                                onChange={e => setnewProduct({ ...product, dscribe: e.target.value })}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <DescriptionIcon color="primary" />
                                        </InputAdornment>
                                    ),
                                }}
                                className="text-field"
                            />
                        </Grid>

                        {/* מידה */}
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="מידה"
                                variant="outlined"
                                placeholder="הזן מידה"
                                value={product.size}
                                onChange={e => setnewProduct({ ...product, size: e.target.value })}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <StraightenIcon color="primary" />
                                        </InputAdornment>
                                    ),
                                }}
                                className="text-field"
                            />
                        </Grid>

                        {/* מחיר */}
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="מחיר"
                                variant="outlined"
                                placeholder="הזן מחיר "
                                value={product.price}
                                onChange={e => setnewProduct({ ...product, price: e.target.value })}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AttachMoneyIcon color="primary" />
                                        </InputAdornment>
                                    ),
                                }}
                                className="text-field"
                            />
                        </Grid>

                        {/* ספק */}        
                        <Grid item xs={12} md={6}>
    <FormControl fullWidth>
        <InputLabel id="supplier-select-label">ספק</InputLabel>
        <Select
            labelId="supplier-select-label"
            id="supplier-select"
            value={product.namePurveyor}
            label="ספק"
            onChange={x => setnewProduct({ ...product, namePurveyor: x.target.value })}
            startAdornment={
                <InputAdornment position="start">
                    <LocalShippingIcon color="primary" />
                </InputAdornment>
            }
        >
            {supplierList.map(supp => (
                <MenuItem key={supp.id} value={supp.name}>{supp.name}</MenuItem>
            ))}
        </Select>
    </FormControl>
</Grid>
                        {/* סטוק*/}

                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="מלאי"
                                variant="outlined"
                                type="number"
                                value={product.stock}
                                // parseFloat(e.target.value) || 0
                                onChange={e => setnewProduct({ ...product, stock: e.target.value })}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Inventory2Icon color="primary" />
                                        </InputAdornment>
                                    ),
                                }}
                            //className={`text-field ${newCustomer.overPluseDebt < 0 ? 'negative-balance' : ''}`}
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </DialogContent>

            <DialogActions className="dialog-actions">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={isAdd ? handleSave : handleEdit}
                    className="save-button"
                    startIcon={isAdd ? <AddIcon /> : <EditIcon />}
                >
                    {isAdd ? "הוסף פריט" : "עדכן פרטים"}
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
}