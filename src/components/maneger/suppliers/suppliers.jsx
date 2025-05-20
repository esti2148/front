import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSuppliersThunk } from "../../../redux/supplierSlice/getSuppliersThunk"
import { FaTruck, FaBoxOpen, FaPhoneAlt, FaEnvelope, FaBuilding, FaUser, FaAngleDown, FaAngleUp, FaSearch, FaFilter, FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import * as React from 'react';
import './suppliers.css';
import { EditAddSupplier } from "./editAddSuppliers/editAddSupplier";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";
import { deleteSupplierThunk } from "../../../redux/supplierSlice/delete Supplier Thunk";

export const Supplier = (props) => {
    const [open, setOpen] = useState(false);
    const { supplier, onEdit, onDelete } = props;
  
    return (
        <div className="supplier-card">
            <div className="supplier-header" onClick={() => setOpen(!open)}>
                <div className="supplier-expand-icon">
                    {open ? <FaAngleUp /> : <FaAngleDown />}
                </div>
                <div className="supplier-info">
                    <div className="supplier-name">{supplier.name}</div>
                    <div className="supplier-company">{supplier.companyName}</div>
                </div>
                <div className="supplier-contact">
                    <div className="supplier-phone">
                        <FaPhoneAlt className="contact-icon" />
                        {supplier.phone}
                    </div>
                    <div className="supplier-email">
                        <FaEnvelope className="contact-icon" />
                        {supplier.email}
                    </div>
                </div>
                <div className="supplier-actions">
                    <button 
                        className="action-button edit-button" 
                        onClick={(e) => {
                            e.stopPropagation();
                            onEdit(supplier);
                        }}
                    >
                        <FaEdit />
                    </button>
                    <button 
                        className="action-button delete-button" 
                        onClick={(e) => {
                            e.stopPropagation();
                            onDelete(supplier);
                        }}
                    >
                        <FaTrash />
                    </button>
                </div>
            </div>
            
            <div className={`supplier-products ${open ? 'open' : ''}`}>
                <div className="products-header">
                    <h3>מוצרים מספק זה</h3>
                    <div className="products-count">{supplier.products.length} מוצרים</div>
                </div>
                
                <div className="products-table-container">
                    <table className="products-table">
                        <thead>
                            <tr>
                                <th>מזהה</th>
                                <th>שם מוצר</th>
                                <th>תיאור</th>
                                <th>מידה</th>
                                <th>מזהה ספק</th>
                                <th>מחיר</th>
                                <th>מלאי</th>
                            </tr>
                        </thead>
                        <tbody>
                            {supplier.products.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.productName}</td>
                                    <td>{product.dscribe}</td>
                                    <td>{product.size}</td>
                                    <td>{product.idPurveyor}</td>
                                    <td className="price-cell">₪{product.price}</td>
                                    <td className="stock-cell">{product.stock}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default function SuppliersManeger() {
    const suppliers = useSelector(state => state.supplier.suppliers)
    const dispatch = useDispatch()
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('all');
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isAddMode, setIsAddMode] = useState(false);
    const [selectedSupplier, setSelectedSupplier] = useState(null);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [supplierToDelete, setSupplierToDelete] = useState(null);

    useEffect(() => {
        dispatch(getSuppliersThunk())
    }, [dispatch])

    // פילטור ספקים לפי חיפוש
    const filteredSuppliers = suppliers && suppliers.length > 0 
        ? suppliers.filter(supplier => {
            const matchesSearch = searchTerm === '' || 
                supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                supplier.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                supplier.email.toLowerCase().includes(searchTerm.toLowerCase());
            
            return matchesSearch;
        })
        : [];

    const handleAddSupplier = () => {
        setSelectedSupplier({
            id: 0,
            name: '',
            companyName: '',
            phone: '',
            email: '',
            products: []
        });
        setIsAddMode(true);
        setIsDialogOpen(true);
    };

    const handleEditSupplier = (supplier) => {
        
        setSelectedSupplier(supplier);
        setIsAddMode(false);
        setIsDialogOpen(true);
    };

    const handleDeleteClick = (supplier) => {
        setSupplierToDelete(supplier);
        setDeleteDialogOpen(true);
    };

    const handleDeleteConfirm = () => {
        if (supplierToDelete) {
            // כאן תוסיף את הלוגיקה למחיקת ספק
            dispatch(deleteSupplierThunk(supplierToDelete.id));
            console.log("מחיקת ספק:", supplierToDelete.id);
            setDeleteDialogOpen(false);
            setSupplierToDelete(null);
        }
    };

    const handleDeleteCancel = () => {
        setDeleteDialogOpen(false);
        setSupplierToDelete(null);
    };

    const handleSaveSupplier = (supplier, isAdd) => {
        debugger
        if (isAdd) {
            // dispatch(addSupplierThunk(supplier));
            console.log("הוספת ספק חדש:", supplier);
        } else {
            // dispatch(updateSupplierThunk(supplier));
            console.log("עדכון ספק קיים:", supplier);
        }
        setIsDialogOpen(false);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <div className="suppliers-manager-container">
            <div className="suppliers-header-section">
                <h1>ניהול ספקים</h1>
                <p className="section-description">צפייה וניהול של ספקי החנות והמוצרים שלהם</p>
                <button className="add-supplier-button" onClick={handleAddSupplier}>
                    <FaPlus /> הוסף ספק חדש
                </button>
            </div>

            <div className="suppliers-statistics-section">
                <div className="statistics-container">
                    <div className="statistic-item">
                        <div className="statistic-icon">
                            <FaTruck />
                        </div>
                        <div className="statistic-value">{suppliers ? suppliers.length : 0}</div>
                        <div className="statistic-label">ספקים פעילים</div>
                    </div>
                    
                    <div className="statistic-item">
                        <div className="statistic-icon">
                            <FaBoxOpen />
                        </div>
                        <div className="statistic-value">
                            {suppliers ? suppliers.reduce((total, supplier) => total + supplier.products.length, 0) : 0}
                        </div>
                        <div className="statistic-label">מוצרים מספקים</div>
                    </div>
                    
                    <div className="statistic-item">
                        <div className="statistic-icon">
                            <FaBuilding />
                        </div>
                        <div className="statistic-value">
                            {suppliers ? new Set(suppliers.map(s => s.companyName)).size : 0}
                        </div>
                        <div className="statistic-label">חברות</div>
                    </div>
                    
                    <div className="statistic-item">
                        <div className="statistic-icon">
                            <FaUser />
                        </div>
                        <div className="statistic-value">
                            {suppliers ? new Set(suppliers.map(s => s.name)).size : 0}
                        </div>
                        <div className="statistic-label">אנשי קשר</div>
                    </div>
                </div>
            </div>

            <div className="suppliers-filter-section">
                <div className="filter-container">
                    <div className="search-box">
                        <FaSearch className="search-icon" />
                        <input 
                            type="text" 
                            placeholder="חיפוש לפי שם ספק, חברה או אימייל..." 
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
                            <option value="all">כל הספקים</option>
                            <option value="active">ספקים פעילים</option>
                            <option value="inactive">ספקים לא פעילים</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="suppliers-list-section">
                {filteredSuppliers.length === 0 ? (
                    <div className="no-suppliers">
                        <FaTruck size={50} />
                        <h3>לא נמצאו ספקים</h3>
                        <p>לא נמצאו ספקים התואמים את החיפוש שלך</p>
                    </div>
                ) : (
                    <div className="suppliers-list">
                        {filteredSuppliers.map((supplier) => (
                            <Supplier 
                                key={supplier.id || supplier._id} 
                                supplier={supplier} 
                                onEdit={() => handleEditSupplier(supplier)}
                                onDelete={handleDeleteClick}
                            />
                        ))}
                    </div>
                )}
            </div>

            {isDialogOpen && (
                <EditAddSupplier
                    supplier={selectedSupplier}
                    onClose={handleCloseDialog}
                    isAdd={isAddMode}
                    onSave={handleSaveSupplier}
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
                    <FaTrash className="warning-icon" />
                    {"אישור מחיקת ספק"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" className="delete-dialog-content">
                        האם אתה בטוח שברצונך למחוק את הספק "{supplierToDelete?.name}" מחברת "{supplierToDelete?.companyName}"?
                        <br />
                        פעולה זו אינה ניתנת לביטול.
                        {supplierToDelete?.products.length > 0 && (
                            <div className="warning-message">
                                <strong>שים לב:</strong> לספק זה יש {supplierToDelete.products.length} מוצרים. מחיקת הספק תשפיע על מוצרים אלה.
                            </div>
                        )}
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
        </div>
    );
}
