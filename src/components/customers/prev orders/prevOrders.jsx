

import { useEffect } from 'react';
import { getByIdCustomerThunk } from '../../../redux/customerSlice/getByIdCustomerThunk';
import './prevOrders.css';
import { useDispatch, useSelector } from "react-redux";
import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useNavigate } from 'react-router-dom';

// פונקציה לפורמט תאריך
const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('he-IL');
};

export const PrevOrders = (props) => {
    const [open, setOpen] = React.useState(false);
    const { order } = props;

    return (
        <React.Fragment>
            <TableRow
                sx={{ '& > *': { borderBottom: 'unset' } }}
                className="order-row"
            >
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                        className="expand-button"
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row"></TableCell>
                <TableCell align="right" className="amount-cell">₪{order.toatlSum?.toFixed(2)}</TableCell>
                <TableCell align="right" className="date-cell">{formatDate(order.orderDate)}</TableCell>
                <TableCell align="right" className="date-cell">{formatDate(order.supplyDate)}</TableCell>
            </TableRow>

            {/* פרטי ההזמנה */}
            <TableRow className="order-details">
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }} className="order-details-content">
                            <Typography variant="h6" gutterBottom component="div" className="order-details-title">
                                פרטי הזמנה
                            </Typography>

                            <Table size="small" aria-label="purchases" className="items-table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell className='titleSub' align="right">שם מוצר</TableCell>
                                        <TableCell className='titleSub' align="right">תיאור</TableCell>
                                        <TableCell className='titleSub' align="right">מידה</TableCell>
                                        <TableCell className='titleSub' align="right">כמות</TableCell>
                                        <TableCell className='titleSub' align="right">סה"כ</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {order?.itemOreders.map((itemO, index) => (
                                        <TableRow key={index}>
                                            <TableCell align="right" component="th" scope="row">{itemO.productName}</TableCell>
                                            <TableCell align="right">{itemO.dscribe}</TableCell>
                                            <TableCell align="right">{itemO.size}</TableCell>
                                            <TableCell align="right">{itemO.qty}</TableCell>
                                            <TableCell align="right">₪{itemO.tempSum?.toFixed(2)}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>

                            <div className="order-summary">
                                <div className="order-summary-item">
                                    <div className="order-summary-label">סה"כ מוצרים:</div>
                                    <div className="order-summary-value">
                                        {order?.itemOreders.reduce((sum, item) => sum + item.qty, 0)}
                                    </div>
                                </div>
                                <div className="order-summary-item">
                                    <div className="order-summary-label">סה"כ לתשלום:</div>
                                    <div className="order-summary-value">₪{order.toatlSum?.toFixed(2)}</div>
                                </div>
                            </div>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
};

export default function PrevOrdersPage() {
    const navigate = useNavigate();
    const idCustomer = useSelector(state => state.customer.currentCustomer?.instituteId);
    const orders = useSelector(state => state.customer.currentCustomer?.orders);
    const customerName = useSelector(state => state.customer.currentCustomer?.instituteName);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getByIdCustomerThunk(idCustomer));
    }, []);

    return (
        <div className="prev-orders-page">
            <div className="prev-orders-header">
                <h1>ההזמנות הקודמות שלך</h1>
                <p>{customerName ? `${customerName}, כאן תוכל/י לצפות בהיסטוריית ההזמנות שלך` : 'צפייה בהיסטוריית ההזמנות'}</p>
            </div>

            {orders && orders.length > 0 ? (
                <TableContainer component={Paper} className="orders-table-container">
                    <Table aria-label="collapsible table" className="orders-table">
                        <TableHead>
                            <TableRow className='title'>
                                <TableCell className='title2' align="right" />
                                <TableCell className='title2' align="right" />
                                <TableCell className='title2' align="right">סה"כ</TableCell>
                                <TableCell className='title2' align="right">תאריך הזמנה</TableCell>
                                <TableCell className='title2' align="right">תאריך אספקה</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((order, index) => (
                                <PrevOrders key={index} order={order} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
                <div className="no-orders">
                    <div className="no-orders-icon">📋</div>
                    <h2>אין הזמנות קודמות</h2>
                    <p>נראה שעדיין לא ביצעת הזמנות באתר שלנו.</p>
                    <button className="order-button" onClick={() => navigate('/order')}>
                        לביצוע הזמנה ראשונה
                    </button>
                </div>
            )}
        </div>
    );
}

