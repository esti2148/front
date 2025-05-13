// import { useDispatch, useSelector } from "react-redux";
// import { getProductThunk } from '../../../redux/productSlice/getProductThunk';
// import { TableCell, TableContainer, TableHead, TableRow, TableBody, Table } from "@mui/material";
// import Fab from '@mui/material/Fab';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import './product.css'
// import { deleteProductThunk } from '../../../redux/productSlice/deleteProductThunk';
// import * as React from 'react';
// import AddIcon from '@mui/icons-material/Add';
// import { addProductThunk } from '../../../redux/productSlice/addProductThunk';
// import { getSuppliersThunk } from '../../../redux/supplierSlice/getSuppliersThunk';

// export const ProductManeger = () => {
//     const prod = useSelector(state => state.Product.products);
//     const supplierList = useSelector(state => state.supplier.suppliers)
//     const supplier = useSelector(state => state.supplier.supplierCurrent.name)
//     const [product, setProduct] = useState({ productName: '', stock: '', namePurveyor: '', size: '', price: '', dscribe: '' })
//     const dis = useDispatch()
//     const ref = useRef(false)
//     const doo = () => {
//         dis(getProductThunk());
//         dis(getSuppliersThunk())

//     }
//     useEffect(() => {
//         doo()
//         console.log("abc",supplierList);


//     }, [])
//     const funDelete = (id) => {
//         dis(deleteProductThunk(id))

//     }
//     const edit = (product) => {

//     }

//    const add=()=>{
//         // dis(addProductThunk(product))
//     }

//     return <div>

//         <TableContainer className='allTablee' sx={{ minWidth: 700 }} aria-label="customized table" >
//             <TableHead className='TableHead'>
//                 <TableRow className="tableRow">
//                     <TableCell className='table' align="center">מוצר</TableCell>
//                     <TableCell className='table' align="center">תיאור</TableCell>
//                     <TableCell className='table' align="center">מידה</TableCell>
//                     <TableCell className='table' align="center">מחיר</TableCell>
//                     <TableCell className='table' align="center">ספק</TableCell>
//                     <TableCell className='table' align="center">מלאי</TableCell>
//                     <TableCell className='table' align="center"></TableCell>
//                     <TableCell className='table' align="center"></TableCell>
//                     <TableCell className='table' align="center"></TableCell>
//                 </TableRow>
//             </TableHead>
//             <TableBody>
//                 {prod?.map(p =>
//                     <TableRow className="tableRow" component="th" scope="row" >
//                         <TableCell align="center">{p?.productName}</TableCell>
//                         <TableCell align="center">{p?.dscribe}</TableCell>
//                         <TableCell align="center">{p?.size}</TableCell>
//                         <TableCell align="center">{p?.price}</TableCell>
//                         <TableCell align="center">{p?.namePurveyor}</TableCell>
//                         <TableCell align="center">{p?.stock}</TableCell>
//                         <TableCell align="center"><Fab color="error" aria-label="DeleteIcon" onClick={funDelete(p.id)}>
//                             <DeleteIcon />
//                         </Fab></TableCell>
//                         <TableCell align="center"><Fab color="success" aria-label="edit"
//                         onClick={()=>{
//                              setEditFlag(true) 
//                              }
//                                } >
//                             <EditIcon />
//                         </Fab></TableCell>
//                         <TableCell align="center"><Fab color="primary" aria-label="add" onClick={()=>{
//                             setAddFlag(true)

//                         }}>
//                             <AddIcon />
//                         </Fab></TableCell>
//                     </TableRow>
//                 )}</TableBody>

//         </TableContainer>
//     </div>

//     // return <div>
//     //     <table>
//     //         <thead>
//     //             <tr>
//     //                 <td>מוצר:</td>
//     //                 <td>תיאור:</td>
//     //                 <td>מידה:</td>
//     //                 <td>מחיר:</td>
//     //                 <td>קוד ספק:</td>
//     //                 <td>סטוק:</td>
//     //             </tr>
//     //         </thead>

//     //         <tbody>

//     //             {prod?.map((p) => 
//     //                 <tr>
//     //                     <td>{p?.productName}</td>
//     //                     <td>{p?.dscribe}</td>
//     //                     <td>{p?.size}</td>
//     //                     <td>{p?.price}</td>
//     //                     <td>{p?.idPurveyor}</td>
//     //                     <td>{p?.stock}</td>
//     //                 </tr>
//     //            )}
//     //         </tbody>


//     //     </table>
//     // </div>
// }



// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// // ייבוא של פעולות Redux נוספות (יש להוסיף)
// // import { addCustomerThunk } from "../../../redux/customerSlice/addCustomerThunk"
// // import { updateCustomerThunk } from "../../../redux/customerSlice/updateCustomerThunk"
// // import { deleteCustomerThunk } from "../../../redux/customerSlice/deleteCustomerThunk"

// import {
//     TableCell, TableContainer, TableHead, TableRow, TableBody, Table, Paper,
//     Container, Typography, Box, Fab, IconButton, Tooltip, Chip, Avatar,
//     TextField, InputAdornment, Card, CardContent, Divider, Button,
//     Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions
// } from "@mui/material";

// import {
//     Add as AddIcon,
//     Edit as EditIcon,
//     Delete as DeleteIcon,
//     Search as SearchIcon,
//     School as SchoolIcon,
//     Refresh as RefreshIcon,
//     Warning as WarningIcon
// } from '@mui/icons-material';
// import './product.css';
// import { EditAddProduct } from "./editAddProduct/editAddProduct";
// import { getProductThunk } from "../../../redux/productSlice/getProductThunk";
// import { getSuppliersThunk } from "../../../redux/supplierSlice/getSuppliersThunk";
// import { addProductThunk } from "../../../redux/productSlice/addProductThunk";
// import { getProductAndSuppliers } from "../../../redux/productSlice/getProductAndSuppliers";
// import { deleteProductThunk } from "../../../redux/productSlice/deleteProductThunk";

// export const ProductManeger = () => {
//     const [selectedProduct, setSelectedProduct] = useState(null);
//     const [isDialogOpen, setIsDialogOpen] = useState(false);
//     const [isAddMode, setIsAddMode] = useState(false);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
//     const [productToDelete, setProductToDelete] = useState(null);
//     const [cannotDeleteDialogOpen, setCannotDeleteDialogOpen] = useState(false);

//     const fullState = useSelector(state => state);
//     console.log("מבנה מלא של ה-state:", fullState);
    
//     // בדוק את ה-state של Product
//     const productState = useSelector(state => state.Product);
//     console.log("מבנה ה-Product state:", productState);
//     const dispatch = useDispatch();
//     const products = useSelector((state) => state.Product?.products|| []);
//     //const supplierList = useSelector(state => state.supplier.suppliers)
//     // const supplier = useSelector(state => state.supplier.supplierCurrent.name)
//     const loading = useSelector(state => state.Product.loading);
//     const error = useSelector(state => state.Product.error);

//     useEffect(() => {
//         debugger
//         // הוסף console.log לפני הקריאה
//         console.log("מנסה לטעון נתונים...");
        
//         dispatch(getProductAndSuppliers())
//         .then(response => {
//         // בדוק את התשובה שחוזרת מהשרת
//         console.log("תשובה מהשרת:", response);
//         console.log("תשובה מהשרת - payload:", response.payload);
//       })
//       .catch(error => {
//         console.error("שגיאה בטעינת נתונים:", error);
//       });
//     }, [dispatch]);

//     const handleAddProduct = () => {
//         setSelectedProduct({
//             id:0,
//             productName: '',
//             dscribe: '',
//             size: 0,
//             price: '',
//             idPurveyor: '',
//             namePurveyor: '',
//             stock: 0
//         });
//         setIsAddMode(true);
//         setIsDialogOpen(true);
//     };

//     const handleEditProduct = (product) => {
//         setSelectedProduct(product);
//         setIsAddMode(false);
//         setIsDialogOpen(true);
//     };

//     const handleDeleteClick = (product) => {
//         setProductToDelete(product);
//         setDeleteDialogOpen(true);
//     };

//     const handleDeleteConfirm = () => {
//         if (productToDelete) {
            
//             let id=productToDelete.id
//             if(productToDelete.itemOreders.length==0)
//           {
//             dispatch(deleteProductThunk(id));
//             console.log("מחיקת פריט:", productToDelete.productName);
//             setDeleteDialogOpen(false);
//             setProductToDelete(null);
//           }
//           else{
//             setCannotDeleteDialogOpen(true);
//             setDeleteDialogOpen(false);
//           }
//         }
//     };


//     const handleDeleteCancel = () => {
//         setDeleteDialogOpen(false);
//         setProductToDelete(null);
//     };

//     const handleSaveProduct = (product, isAdd) => {
//         debugger
//         if (isAdd) {
//             dispatch(addProductThunk(product));
//             console.log("הוספת פריט חדש:", product);
//         } else {
//             // dispatch(updateCustomerThunk(customer));
//             console.log("עדכון פריט קיים:", product);
//         }
//     };

//     const handleCloseDialog = () => {
//         setIsDialogOpen(false);
//     };

//     const handleRefresh = () => {
//         dispatch(getProductThunk());
//     };

//     // סינון הלקוחות לפי מונח החיפוש
//     debugger
//     const filteredProducts = products.length>0 && products?.filter(product =>
//         product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         product.dscribe.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         product.namePurveyor.toLowerCase().includes(searchTerm.toLowerCase())

//     );

//     return (
//         <Container maxWidth="xl" className="customers-container">
//             <Card className="customers-header-card">
//                 <CardContent>
//                     <Box className="customers-header">
//                         <Box className="header-title">
//                             <SchoolIcon className="header-icon" />
//                             <Typography variant="h4" component="h1">
//                                 ניהול מוצרים
//                             </Typography>
//                         </Box>

//                         <Box className="header-actions">
//                             <TextField
//                                 variant="outlined"
//                                 size="small"
//                                 placeholder="חיפוש פריט..."
//                                 value={searchTerm}
//                                 onChange={(e) => setSearchTerm(e.target.value)}
//                                 className="search-field"
//                                 InputProps={{
//                                     startAdornment: (
//                                         <InputAdornment position="start">
//                                             <SearchIcon />
//                                         </InputAdornment>
//                                     ),
//                                 }}
//                             />

//                             <Tooltip title="רענון נתונים">
//                                 <IconButton
//                                     color="primary"
//                                     onClick={handleRefresh}
//                                     className="refresh-button"
//                                 >
//                                     <RefreshIcon />
//                                 </IconButton>
//                             </Tooltip>

//                             <Tooltip title="הוספת פריט חדש">
//                                 <Fab
//                                     color="primary"
//                                     aria-label="add"
//                                     onClick={handleAddProduct}
//                                     className="add-button"
//                                     size="medium"
//                                 >
//                                     <AddIcon />
//                                 </Fab>
//                             </Tooltip>
//                         </Box>
//                     </Box>
//                 </CardContent>
//             </Card>

//             {isDialogOpen && (
//                 <EditAddProduct
//                     customer={selectedProduct}
//                     onClose={handleCloseDialog}
//                     isAdd={isAddMode}
//                     onSave={handleSaveProduct}
//                 />
//             )}
//             {/* דיאלוג לא ניתן למחוק פריט שהוזמן */}
// <Dialog
//   open={cannotDeleteDialogOpen}
//   onClose={() => setCannotDeleteDialogOpen(false)}
//   aria-labelledby="cannot-delete-dialog-title"
//   className="delete-dialog"
// >
//   <DialogTitle id="cannot-delete-dialog-title" className="delete-dialog-title" style={{ backgroundColor: '#f8d7da', color: '#721c24' }}>
//     <WarningIcon className="warning-icon" style={{ marginRight: '8px', verticalAlign: 'middle' }} />
//     {"לא ניתן למחוק לקוח"}
//   </DialogTitle>
//   <DialogContent style={{ padding: '20px' }}>
//     <DialogContentText id="cannot-delete-dialog-description" className="delete-dialog-content">
//       לא ניתן למחוק את הפריט "{productToDelete?.productName}" מכיוון שיש לו הזמנות במערכת.
//       <br />
//       יש למחוק קודם את כל ההזמנות הקשורות לפריט זה.
//     </DialogContentText>
//   </DialogContent>
//   <DialogActions className="delete-dialog-actions" style={{ padding: '16px', borderTop: '1px solid #e0e0e0' }}>
//     <Button 
//       onClick={() => setCannotDeleteDialogOpen(false)} 
//       color="primary" 
//       variant="contained" 
//       autoFocus
//     >
//       הבנתי
//     </Button>
//   </DialogActions>
// </Dialog>
//             {/* דיאלוג אישור מחיקה */}
//             <Dialog
//                 open={deleteDialogOpen}
//                 onClose={handleDeleteCancel}
//                 aria-labelledby="alert-dialog-title"
//                 aria-describedby="alert-dialog-description"
//                 className="delete-dialog"
//             >
//                 <DialogTitle id="alert-dialog-title" className="delete-dialog-title">
//                     <WarningIcon className="warning-icon" />
//                     {"אישור מחיקת המוצר"}
//                 </DialogTitle>
//                 <DialogContent>
//                     <DialogContentText id="alert-dialog-description" className="delete-dialog-content">
//                         האם אתה בטוח שברצונך למחוק את המוצר "{productToDelete?.productName}"?
//                         <br />
//                         פעולה זו אינה ניתנת לביטול.
//                     </DialogContentText>
//                 </DialogContent>
//                 <DialogActions className="delete-dialog-actions">
//                     <Button onClick={handleDeleteCancel} color="primary" variant="outlined">
//                         ביטול
//                     </Button>
//                     <Button onClick={handleDeleteConfirm} color="error" variant="contained" autoFocus>
//                         מחיקה
//                     </Button>
//                 </DialogActions>
//             </Dialog>

//             <Box className="table-container">
//                 {loading ? (
//                     <Box className="loading-container">
//                         <Typography variant="h6">טוען נתונים...</Typography>
//                     </Box>
//                 ) : error ? (
//                     <Box className="error-container">
//                         <Typography variant="h6" color="error">שגיאה בטעינת נתונים: {error}</Typography>
//                         <Button
//                             variant="contained"
//                             color="primary"
//                             onClick={handleRefresh}
//                             startIcon={<RefreshIcon />}
//                             className="retry-button"
//                         >
//                             נסה שנית
//                         </Button>
//                     </Box>
//                 ) : (
//                     <TableContainer component={Paper} className="customers-table-container">
//                         <Table aria-label="customers table" className="customers-table">
//                             <TableHead>
//                                 <TableRow className="table-header-row">
//                                     <TableCell className="table-header-cell" align="center">קוד</TableCell>
//                                     <TableCell className="table-header-cell" align="center">מוצר</TableCell>
//                                     <TableCell className="table-header-cell" align="center">תיאור</TableCell>
//                                     <TableCell className="table-header-cell" align="center">מידה</TableCell>
//                                     <TableCell className="table-header-cell" align="center">מחיר</TableCell>
//                                     <TableCell className="table-header-cell" align="center"> ספק</TableCell>
//                                     <TableCell className="table-header-cell" align="center">מלאי</TableCell>
//                                     <TableCell className="table-header-cell" align="center"></TableCell>
//                                     <TableCell className="table-header-cell" align="center"></TableCell>
//                                 </TableRow>
//                             </TableHead>
//                             <TableBody>
//                                 {filteredProducts?.length > 0 ? (
//                                     filteredProducts.map(p => (
//                                         <TableRow
//                                             key={p.id}
//                                             className={`table-row`}
//                                         >

//                                           <TableCell align="center" className="institute-id-cell">
//                                                 <Chip
//                                                     label={p.id}
//                                                     color="primary"
//                                                     variant="outlined"
//                                                     className="id-chip"
//                                                 />
//                                             </TableCell>  
//                                             <TableCell align="center" className="institute-name-cell">
//                                                 <Box className="institute-name-container">
//                                                     <Typography className="institute-name">
//                                                         {p.productName}
//                                                     </Typography>
//                                                 </Box>

//                                             </TableCell>
//                                             <TableCell align="center">{p.dscribe}</TableCell>
//                                             <TableCell align="center">{p.size}</TableCell>
//                                             <TableCell align="center">
//                                                 <Chip
//                                                     label={p.price}
//                                                     variant="outlined"
//                                                     size="small"
//                                                     className="phone-chip"
//                                                     clickable
//                                                     onClick={() => window.open(`tel:${p.price}`)}
//                                                 />
//                                             </TableCell>
//                                             <TableCell align="center">{p.namePurveyor}</TableCell>
//                                             <TableCell align="center">
//                                                 {p.stock}
//                                             </TableCell>
//                                             <TableCell align="center" className="action-buttons-cell">
//                                                 <Box className="action-buttons">
//                                                     <Tooltip title="עריכת מוצר ">
//                                                         <IconButton
//                                                             color="primary"
//                                                             aria-label="edit"
//                                                             onClick={() => handleEditProduct(p)}
//                                                             className="edit-button"
//                                                         >
//                                                             <EditIcon />
//                                                         </IconButton>
//                                                     </Tooltip>
//                                                     <Tooltip title="מחיקת פריט">
//                                                         <IconButton
//                                                             color="error"
//                                                             aria-label="delete"
//                                                             onClick={() => handleDeleteClick(p)}
//                                                             className="delete-button"
//                                                         >
//                                                             <DeleteIcon />
//                                                         </IconButton>
//                                                     </Tooltip>
//                                                 </Box>
//                                             </TableCell>
//                                         </TableRow>
//                                     ))
//                                 ) : (
//                                     <TableRow>
//                                         <TableCell colSpan={8} align="center" className="no-data-cell">
//                                             <Box className="no-data-container">
//                                                 <SchoolIcon className="no-data-icon" />
//                                                 <Typography variant="h6">
//                                                     {searchTerm ? 'לא נמצאו מוצרים התואמים את החיפוש' : 'אין מוצרים להצגה'}
//                                                 </Typography>
//                                                 {searchTerm && (
//                                                     <Button
//                                                         variant="outlined"
//                                                         color="primary"
//                                                         onClick={() => setSearchTerm('')}
//                                                         className="clear-search-button"
//                                                     >
//                                                         נקה חיפוש
//                                                     </Button>
//                                                 )}
//                                             </Box>
//                                         </TableCell>
//                                     </TableRow>
//                                 )}
//                             </TableBody>
//                         </Table>
//                     </TableContainer>
//                 )}
//             </Box>
//         </Container>
//     );
// };




import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductThunk } from "../../../redux/productSlice/getProductThunk";
import { getSuppliersThunk } from "../../../redux/supplierSlice/getSuppliersThunk";
import { addProductThunk } from "../../../redux/productSlice/addProductThunk";
import { getProductAndSuppliers } from "../../../redux/productSlice/getProductAndSuppliers";
import { deleteProductThunk } from "../../../redux/productSlice/deleteProductThunk";
import { FaBox, FaBoxOpen, FaShoppingCart, FaWarehouse, FaTruck, FaSearch, FaFilter, FaEdit, FaTrash, FaPlus, FaAngleDown, FaAngleUp } from "react-icons/fa";
import './product.css';
import { EditAddProduct } from "./editAddProduct/editAddProduct";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";

export const Product = (props) => {
    const [open, setOpen] = useState(false);
    const { product, onEdit, onDelete } = props;
  
    return (
        <div className="product-card">
            <div className="product-header" onClick={() => setOpen(!open)}>
                <div className="product-expand-icon">
                    {open ? <FaAngleUp /> : <FaAngleDown />}
                </div>
                <div className="product-info">
                    <div className="product-name">{product.productName}</div>
                    <div className="product-description">{product.dscribe}</div>
                </div>
                <div className="product-details">
                    <div className="product-size">
                        <span className="detail-label">מידה:</span> {product.size}
                    </div>
                    <div className="product-price">
                        <span className="detail-label">מחיר:</span> ₪{product.price}
                    </div>
                </div>
                <div className="product-supplier">
                    <div className="supplier-name">
                        <FaTruck className="supplier-icon" />
                        {product.namePurveyor}
                    </div>
                    <div className="product-stock">
                        <FaWarehouse className="stock-icon" />
                        מלאי: {product.stock}
                    </div>
                </div>
                <div className="product-actions">
                    <button 
                        className="action-button edit-button" 
                        onClick={(e) => {
                            e.stopPropagation();
                            onEdit(product);
                        }}
                    >
                        <FaEdit />
                    </button>
                    <button 
                        className="action-button delete-button" 
                        onClick={(e) => {
                            e.stopPropagation();
                            onDelete(product);
                        }}
                    >
                        <FaTrash />
                    </button>
                </div>
            </div>
            
            <div className={`product-orders ${open ? 'open' : ''}`}>
                <div className="orders-header">
                    <h3>הזמנות של מוצר זה</h3>
                    <div className="orders-count">{product.itemOreders?.length || 0} הזמנות</div>
                </div>
                
                <div className="orders-table-container">
                    {product.itemOreders && product.itemOreders.length > 0 ? (
                        <table className="orders-table">
                            <thead>
                                <tr>
                                    <th>מזהה הזמנה</th>
                                    <th>תאריך</th>
                                    <th>לקוח</th>
                                    <th>כמות</th>
                                    <th>סטטוס</th>
                                </tr>
                            </thead>
                            <tbody>
                                {product.itemOreders.map((order) => (
                                    <tr key={order.id}>
                                        <td>{order.id}</td>
                                        <td>{new Date(order.date).toLocaleDateString('he-IL')}</td>
                                        <td>{order.customerName || 'לא צוין'}</td>
                                        <td>{order.quantity}</td>
                                        <td>{order.status || 'בטיפול'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className="no-orders">
                            <FaShoppingCart size={30} />
                            <p>אין הזמנות למוצר זה</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export const ProductManeger = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isAddMode, setIsAddMode] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('all');
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);
    const [cannotDeleteDialogOpen, setCannotDeleteDialogOpen] = useState(false);

    const dispatch = useDispatch();
    const products = useSelector((state) => state.Product?.products || []);
    const loading = useSelector(state => state.Product.loading);
    const error = useSelector(state => state.Product.error);

    useEffect(() => {
        dispatch(getProductAndSuppliers())
            .then(response => {
                console.log("תשובה מהשרת:", response);
            })
            .catch(error => {
                console.error("שגיאה בטעינת נתונים:", error);
            });
    }, [dispatch]);

    const handleAddProduct = () => {
        setSelectedProduct({
            id: 0,
            productName: '',
            dscribe: '',
            size: 0,
            price: '',
            idPurveyor: '',
            namePurveyor: '',
            stock: 0
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
            if (productToDelete.itemOreders?.length === 0) {
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
            // dispatch(updateProductThunk(product));
            console.log("עדכון פריט קיים:", product);
        }
        setIsDialogOpen(false);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    const handleRefresh = () => {
        dispatch(getProductThunk());
    };

    // סינון המוצרים לפי מונח החיפוש וסוג הפילטר
    const filteredProducts = products.length > 0 ? products.filter(product => {
        const matchesSearch = searchTerm === '' || 
            product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.dscribe.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.namePurveyor.toLowerCase().includes(searchTerm.toLowerCase());
        
        if (filterType === 'all') return matchesSearch;
        if (filterType === 'inStock') return matchesSearch && product.stock > 0;
        if (filterType === 'outOfStock') return matchesSearch && product.stock <= 0;
        
        return matchesSearch;
    }) : [];

    return (
        <div className="products-manager-container">
            <div className="products-header-section">
                <h1>ניהול מוצרים</h1>
                <p className="section-description">צפייה וניהול של מוצרי החנות</p>
                <button className="add-product-button" onClick={handleAddProduct}>
                    <FaPlus /> הוסף מוצר חדש
                </button>
            </div>

            <div className="products-statistics-section">
                <div className="statistics-container">
                    <div className="statistic-item">
                        <div className="statistic-icon">
                            <FaBox />
                        </div>
                        <div className="statistic-value">{products ? products.length : 0}</div>
                        <div className="statistic-label">מוצרים</div>
                    </div>
                    
                    <div className="statistic-item">
                        <div className="statistic-icon">
                            <FaWarehouse />
                        </div>
                        <div className="statistic-value">
                            {products ? products.reduce((total, product) => total + (parseInt(product.stock) || 0), 0) : 0}
                        </div>
                        <div className="statistic-label">פריטים במלאי</div>
                    </div>
                    
                    <div className="statistic-item">
                        <div className="statistic-icon">
                            <FaTruck />
                        </div>
                        <div className="statistic-value">
                            {products ? new Set(products.map(p => p.namePurveyor)).size : 0}
                        </div>
                        <div className="statistic-label">ספקים</div>
                    </div>
                    
                    <div className="statistic-item">
                        <div className="statistic-icon">
                            <FaShoppingCart />
                        </div>
                        <div className="statistic-value">
                            {products ? products.reduce((total, product) => total + (product.itemOreders?.length || 0), 0) : 0}
                        </div>
                        <div className="statistic-label">הזמנות</div>
                    </div>
                </div>
            </div>

            <div className="products-filter-section">
                <div className="filter-container">
                    <div className="search-box">
                        <FaSearch className="search-icon" />
                        <input 
                            type="text" 
                            placeholder="חיפוש לפי שם מוצר, תיאור או ספק..." 
                            className="search-input"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    
                    <div className="filter-box">
                        <FaFilter className="filter-icon" />
                        <select 
                            className="filter-select"
                            value={filterType}
                            onChange={(e) => setFilterType(e.target.value)}
                        >
                            <option value="all">כל המוצרים</option>
                            <option value="inStock">במלאי</option>
                            <option value="outOfStock">חסר במלאי</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="products-list-section">
                {loading ? (
                    <div className="loading-container">
                        <div className="loading-spinner"></div>
                        <p>טוען מוצרים...</p>
                    </div>
                ) : error ? (
                    <div className="error-container">
                        <p className="error-message">שגיאה בטעינת נתונים: {error}</p>
                        <button className="refresh-button" onClick={handleRefresh}>נסה שנית</button>
                    </div>
                ) : filteredProducts.length === 0 ? (
                    <div className="no-products">
                        <FaBox size={50} />
                        <h3>לא נמצאו מוצרים</h3>
                        <p>לא נמצאו מוצרים התואמים את החיפוש שלך</p>
                    </div>
                ) : (
                    <div className="products-list">
                        {filteredProducts.map((product) => (
                            <Product 
                                key={product.id} 
                                product={product} 
                                onEdit={handleEditProduct}
                                onDelete={handleDeleteClick}
                            />
                        ))}
                    </div>
                )}
            </div>

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
                    {/* <WarningIcon className="warning-icon" /> */}
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
<FaTrash className="warning-icon" />
{"לא ניתן למחוק מוצר"}
</DialogTitle>
<DialogContent>
<DialogContentText id="cannot-delete-dialog-description" className="delete-dialog-content">
לא ניתן למחוק את המוצר "{productToDelete?.productName}" מכיוון שיש לו הזמנות במערכת.
<br />
יש למחוק קודם את כל ההזמנות הקשורות למוצר זה.
</DialogContentText>
</DialogContent>
<DialogActions className="delete-dialog-actions">
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
</div>
);
};
