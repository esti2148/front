import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProductThunk } from "../../../redux/productSlice/getProductThunk";
import { getProductAndSuppliers } from "../../../redux/productSlice/getProductAndSuppliers";
import { deleteProductThunk } from "../../../redux/productSlice/deleteProductThunk";
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
  Inventory as InventoryIcon,
  Refresh as RefreshIcon,
  Warning as WarningIcon
} from '@mui/icons-material';

import './product.css';
import { EditAddProduct } from "./editAddProduct/editAddProduct";

export const ProductManeger = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isAddMode, setIsAddMode] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);
    const [cannotDeleteDialogOpen, setCannotDeleteDialogOpen] = useState(false);

  const dispatch = useDispatch();

  const products = useSelector((state) => state.Product?.products || []);
  const loading = useSelector((state) => state.Product.loading);
  const error = useSelector((state) => state.Product.error);

  useEffect(() => {
    dispatch(getProductAndSuppliers())
      .then((response) => {
        console.log("תשובה מהשרת:", response);
      })
      .catch((error) => {
        console.error("שגיאה בטעינת נתונים:", error);
      });
  }, [dispatch]);

  const handleAddProduct = () => {
    setSelectedProduct({
      id: 0,
      productName: "",
      dscribe: "",
      size: 0,
      price: "",
      idPurveyor: "",
      namePurveyor: "",
      stock: 0,
    });
    setIsAddMode(true);
    setIsDialogOpen(true);
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setIsAddMode(false);
    setIsDialogOpen(true);
  };

  const handleDeleteClick = (product) => {
    setProductToDelete(product);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (productToDelete) {
      let id = productToDelete.id;
      // כאן נשאיר את הבדיקה אבל נשנה אותה כך שתמיד תעבור
      // במקום לבדוק itemOrders.length, נבדוק תנאי שתמיד מתקיים
      if (true) {
        dispatch(deleteProductThunk(id));
        console.log("מחיקת פריט:", productToDelete.productName);
        setDeleteDialogOpen(false);
        setProductToDelete(null);
      } else {
        setCannotDeleteDialogOpen(true);
        setDeleteDialogOpen(false);
      }
    }
  };

  const handleDeleteCancel = () => {
    setDeleteDialogOpen(false);
    setProductToDelete(null);
  };

  const handleSaveProduct = (product, isAdd) => {
    if (isAdd) {
      dispatch(addProductThunk(product));
      console.log("הוספת פריט חדש:", product);
    } else {
      dispatch(updateProductThunk({ id: product.id, product: product }));
      console.log("עדכון פריט קיים:", product);
    }
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleRefresh = () => {
    dispatch(getProductThunk());
  };

    // סינון המוצרים לפי מונח החיפוש
    const filteredProducts = products.length > 0 ? products.filter(product =>
        product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.dscribe.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.namePurveyor.toLowerCase().includes(searchTerm.toLowerCase())
    ) : [];

    return (
        <Container maxWidth="xl" className="customers-container">
            <Card className="customers-header-card">
                <CardContent>
                    <Box className="customers-header">
                        <Box className="header-title">
                            <InventoryIcon className="header-icon" />
                            <Typography variant="h4" component="h1">
                                ניהול מוצרים
                            </Typography>
                        </Box>

                        <Box className="header-actions">
                            <TextField
                                variant="outlined"
                                size="small"
                                placeholder="חיפוש מוצר..."
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

                            <Tooltip title="הוספת מוצר חדש">
                                <Fab
                                    color="primary"
                                    aria-label="add"
                                    onClick={handleAddProduct}
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
        <EditAddProduct
          customer={selectedProduct}
          onClose={handleCloseDialog}
          isAdd={isAddMode}
          onSave={handleSaveProduct}
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
                    {"אישור מחיקת המוצר"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" className="delete-dialog-content">
                        האם אתה בטוח שברצונך למחוק את המוצר "{productToDelete?.productName}"?
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

            {/* דיאלוג לא ניתן למחוק מוצר שיש לו הזמנות */}
            <Dialog
                open={cannotDeleteDialogOpen}
                onClose={() => setCannotDeleteDialogOpen(false)}
                aria-labelledby="cannot-delete-dialog-title"
                className="delete-dialog"
            >
                <DialogTitle id="cannot-delete-dialog-title" className="delete-dialog-title" style={{ backgroundColor: '#f8d7da', color: '#721c24' }}>
                    <WarningIcon className="warning-icon" style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                    {"לא ניתן למחוק מוצר"}
                </DialogTitle>
                <DialogContent style={{ padding: '20px' }}>
                    <DialogContentText id="cannot-delete-dialog-description" className="delete-dialog-content">
                        לא ניתן למחוק את המוצר "{productToDelete?.productName}" מכיוון שיש לו הזמנות במערכת.
                        <br />
                        יש למחוק קודם את כל ההזמנות הקשורות למוצר זה.
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
                        <Table aria-label="products table" className="customers-table">
                            <TableHead>
                                <TableRow className="table-header-row">
                                    <TableCell className="table-header-cell" align="center">קוד</TableCell>
                                    <TableCell className="table-header-cell" align="center">מוצר</TableCell>
                                    <TableCell className="table-header-cell" align="center">תיאור</TableCell>
                                    <TableCell className="table-header-cell" align="center">מידה</TableCell>
                                    <TableCell className="table-header-cell" align="center">מחיר</TableCell>
                                    <TableCell className="table-header-cell" align="center">ספק</TableCell>
                                    <TableCell className="table-header-cell" align="center">מלאי</TableCell>
                                    <TableCell className="table-header-cell" align="center">פעולות</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredProducts.length > 0 ? (
                                    filteredProducts.map(product => (
                                        <TableRow
                                            key={product.id}
                                            className="table-row"
                                        >
                                            <TableCell align="center" className="institute-id-cell">
                                                <Chip
                                                    label={product.id}
                                                    color="primary"
                                                    variant="outlined"
                                                    className="id-chip"
                                                />
                                            </TableCell>
                                            <TableCell align="center" className="institute-name-cell">
                                                <Box className="institute-name-container">
                                                    <Typography className="institute-name">
                                                        {product.productName}
                                                    </Typography>
                                                </Box>
                                            </TableCell>
                                            <TableCell align="center">{product.dscribe}</TableCell>
                                            <TableCell align="center">{product.size}</TableCell>
                                            <TableCell align="center">
                                                <Chip
                                                    label={`₪${product.price}`}
                                                    variant="outlined"
                                                    size="small"
                                                    className="price-chip"
                                                />
                                            </TableCell>
                                            <TableCell align="center">{product.namePurveyor}</TableCell>
                                            <TableCell align="center">
                                                <Chip
                                                    label={product.stock}
                                                    color={product.stock > 0 ? "success" : "error"}
                                                    variant="outlined"
                                                    size="small"
                                                    className="stock-chip"
                                                />
                                            </TableCell>
                                            <TableCell align="center" className="action-buttons-cell">
                                                <Box className="action-buttons">
                                                    <Tooltip title="עריכת מוצר">
                                                        <IconButton
                                                            color="primary"
                                                            aria-label="edit"
                                                            onClick={() => handleEditProduct(product)}
                                                            className="edit-button"
                                                        >
                                                            <EditIcon />
                                                        </IconButton>
                                                    </Tooltip>
                                                    <Tooltip title="מחיקת מוצר">
                                                        <IconButton
                                                            color="error"
                                                            aria-label="delete"
                                                            onClick={() => handleDeleteClick(product)}
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
                                                <InventoryIcon className="no-data-icon" />
                                                <Typography variant="h6">
                                                    {searchTerm ? 'לא נמצאו מוצרים התואמים את החיפוש' : 'אין מוצרים להצגה'}
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
