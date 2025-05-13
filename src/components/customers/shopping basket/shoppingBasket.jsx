// import { useDispatch, useSelector } from 'react-redux'
// import { useState } from 'react';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
// import './shoppingBasket.css'
// import { changeCount, changeTotalSal, removeFromSal } from '../../../redux/customerSlice/customerSlice';
// import { useEffect } from 'react';
// import { Hidden } from '@mui/material';
// import { addOrderToCustomerThunk } from '../../../redux/customerSlice/addOrderToCustomerThunk';
// import { Label } from '@mui/icons-material';
// export const ShoppingBasket = () => {

//     const one = 1
//     const sal = useSelector(state => state.customer.listProduct)
    
//     console.log(sal);
//     const idCustomer = useSelector(state => state.customer.currentCustomer?.instituteId)
//     const debt = useSelector(state => state.customer.currentCustomer?.overPluseDebt)
//     const [flagdialog, setFlagDialog] = useState(false)
//     const [date, setDate] = useState()
//     const dispatch = useDispatch()



//     const pluss = (y) => {
//         debugger
//         console.log(y+"y");
        
//         let newProd = sal.find(x => x.id == y.id)
//         console.log(newProd+'newProd');
//         let priceOne = (Number)(newProd.TempSum / newProd.qty)
//         console.log(priceOne+'priceOne');
//         newProd = { id: newProd.id, productName: newProd.productName, dscribe: newProd.dscribe, size: newProd.size, qty: newProd?.qty + 1, TempSum: (newProd?.qty + 1) * priceOne }
//         dispatch(changeCount(newProd))
//         dispatch(changeTotalSal(newProd))
//     }
//     const minuss = (y) => {
//         debugger
//         if (y.qty > 1) {
//             let newProd = sal.find(x => x.id == y.id)
//             let priceOne = (Number)(newProd.TempSum / newProd.qty)
//             newProd = { id: newProd.id, productName: newProd.productName, dscribe: newProd.dscribe, size: newProd.size, qty: newProd?.qty - 1, TempSum: (newProd?.qty - 1) * priceOne }
//             dispatch(changeCount(newProd))
//             dispatch(changeTotalSal(newProd))
//         }
//         if (y.qty == 1) {
//             remove(y)
//         }
//     }
//     const remove = (x) => {
//         dispatch(removeFromSal(x))
//     }

//     const saveOrder = () => {
//         debugger
//         var order = {
//             orderId: 0,
//             instituteId: idCustomer,
//             toatlSum: 0,
//             orderDate: new Date(),
//             supplyDate: date,
//             itemOreders: sal
//         }
//         dispatch(addOrderToCustomerThunk({ order, idCustomer }))
//         setFlagDialog(false)
//         console.log(sal);
//     }

//     return <div className='allPage'>
//         {sal.length > 0 && sal?.map(x => {
//             return <section className='sal'>
//                 <section className='salProduct'>
//                     {/* <img className='imgPic'  src="shop.svg" alt="image not found"></img> */}
//                     <label className='label1'>שם מוצר:</label>
//                     <label className='label2'>{x?.productName}</label>
//                     <br></br>
//                     <label className='label1'>תיאור:</label>
//                     <label className='label2'>{x?.dscribe}</label>
//                     <br></br>
//                     <label className='label1'>מידה:</label>
//                     <label className='label2'>{x?.size}</label>
//                     <br></br>
//                     <label className='label1'>מחיר:</label>
//                     <label className='label2'>{x?.TempSum}</label>
//                     <br></br>
//                     <label className='label1'>כמות:</label>
//                     <label className='label2'>{x?.qty}</label>
//                 </section>
//                 <section className='buttonAll'>
//                     <section className='buttonPM'>
//                         <div className='buttonPlus' onClick={() => pluss(x)}  >➕</div>
//                         <div className='buttonMinus' onClick={() => minuss(x)}>➖</div>
//                     </section>
//                     <section className='buttonGE'>
//                         <div className='buttonGarbage' onClick={() => remove(x)}>🗑</div>
//                         <div className='buttonEmpty'>?</div>
//                     </section>
//                 </section>
//             </section>

//         })}


//        {sal.length>0 && <div className='total'>
//           { debt<0 &&<label>חוב קודם:</label>}
//           { debt<0 &&<label style={{color:'red'}}>{debt}</label>}
//            {debt<0 && <br></br>}
//             <label>סה"כ:</label>
//             <label>{sal.reduce((acc, curr) => acc + curr.TempSum, 0)}</label>
//             <br></br>
//             <label>מוצרים:</label>
//             <label>{sal.reduce((acc, curr) => acc + curr.qty, 0)}</label>
//             <br></br>
//             <label>תאריך:</label>
//             <label>{new Date().toLocaleDateString()}</label>
//             <div className='buttonsave'>
//                 <button className='buttonsaveorder' onClick={() => { setFlagDialog(true) }} >להזמנה ותשלום</button></div>
//             <dialog open={flagdialog}>
//                 <h1>פרטים</h1>
//                 <label>תאריך אספקה</label>
//                 <input type='date' onChange={(e) => setDate(e.target.value)} />
//                 <button onClick={saveOrder}>ok</button>
//             </dialog>
//         </div>
//         }
//     </div>
// }
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import './shoppingBasket.css';
import { changeCount, changeTotalSal, removeFromSal } from '../../../redux/customerSlice/customerSlice';
import { addOrderToCustomerThunk } from '../../../redux/customerSlice/addOrderToCustomerThunk';

export const ShoppingBasket = () => {
    const sal = useSelector(state => state.customer.listProduct);
    const idCustomer = useSelector(state => state.customer.currentCustomer?.instituteId);
    const debt = useSelector(state => state.customer.currentCustomer?.overPluseDebt);
    const [flagdialog, setFlagDialog] = useState(false);
    const [date, setDate] = useState('');
    const dispatch = useDispatch();

    const pluss = (y) => {
        let newProd = sal.find(x => x.id == y.id);
        let priceOne = (Number)(newProd.TempSum / newProd.qty);
        newProd = { 
            id: newProd.id, 
            productName: newProd.productName, 
            dscribe: newProd.dscribe, 
            size: newProd.size, 
            qty: newProd?.qty + 1, 
            TempSum: (newProd?.qty + 1) * priceOne 
        };
        dispatch(changeCount(newProd));
        dispatch(changeTotalSal(newProd));
    };

    const minuss = (y) => {
        if (y.qty > 1) {
            let newProd = sal.find(x => x.id == y.id);
            let priceOne = (Number)(newProd.TempSum / newProd.qty);
            newProd = { 
                id: newProd.id, 
                productName: newProd.productName, 
                dscribe: newProd.dscribe, 
                size: newProd.size, 
                qty: newProd?.qty - 1, 
                TempSum: (newProd?.qty - 1) * priceOne 
            };
            dispatch(changeCount(newProd));
            dispatch(changeTotalSal(newProd));
        }
        if (y.qty == 1) {
            remove(y);
        }
    };

    const remove = (x) => {
        dispatch(removeFromSal(x));
    };

    const saveOrder = () => {
        var order = {
            orderId: 0,
            instituteId: idCustomer,
            toatlSum: 0,
            orderDate: new Date(),
            supplyDate: date,
            itemOreders: sal
        };
        dispatch(addOrderToCustomerThunk({ order, idCustomer }));
        setFlagDialog(false);
    };

    const totalSum = sal.reduce((acc, curr) => acc + curr.TempSum, 0);
    const totalItems = sal.reduce((acc, curr) => acc + curr.qty, 0);

    return (
        <div className="shopping-basket-page">
            <div className="basket-header">
                <h1>סל הקניות שלך</h1>
                <p>{sal.length > 0 ? `${sal.length} מוצרים בסל` : 'הסל שלך ריק'}</p>
            </div>

            {sal.length > 0 ? (
                <div className="basket-content">
                    <div className="basket-items">
                        {sal.map((item, index) => (
                            <div className="basket-item" key={index}>
                                <div className="item-image">
                                    <img 
                                        src={`/images/products/${item.id}.jpg`} 
                                        alt={item.productName} 
                                        onError={(e) => {e.target.src = '/images/product-placeholder.jpg'}}
                                    />
                                </div>
                                <div className="item-details">
                                    <h3 className="item-name">{item.productName}</h3>
                                    <p className="item-description">{item.dscribe}</p>
                                    <div className="item-meta">
                                        <span className="item-size">מידה: {item.size}</span>
                                        <span className="item-price">₪{(item.TempSum / item.qty).toFixed(2)} ליחידה</span>
                                    </div>
                                </div>
                                <div className="item-actions">
                                    <div className="quantity-control">
                                        <button className="quantity-btn minus" onClick={() => minuss(item)}>
                                            <span>-</span>
                                        </button>
                                        <span className="quantity-display">{item.qty}</span>
                                        <button className="quantity-btn plus" onClick={() => pluss(item)}>
                                            <span>+</span>
                                        </button>
                                    </div>
                                    <div className="item-subtotal">
                                        <span>סה"כ:</span>
                                        <span className="subtotal-amount">₪{item.TempSum.toFixed(2)}</span>
                                    </div>
                                    <button className="remove-btn" onClick={() => remove(item)}>
                                        <span className="remove-icon">🗑</span>
                                        <span className="remove-text">הסר</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="basket-summary">
                        <h2>סיכום הזמנה</h2>
                        
                        <div className="summary-details">
                            <div className="summary-row">
                                <span>סה"כ מוצרים:</span>
                                <span>{totalItems}</span>
                            </div>
                            <div className="summary-row">
                                <span>סה"כ לתשלום:</span>
                                <span className="total-price">₪{totalSum.toFixed(2)}</span>
                            </div>
                            
                            {debt < 0 && (
                                <div className="summary-row debt">
                                    <span>חוב קודם:</span>
                                    <span className="debt-amount">₪{Math.abs(debt).toFixed(2)}</span>
                                </div>
                            )}
                            
                            {debt < 0 && (
                                <div className="summary-row grand-total">
                                    <span>סה"כ כולל חוב:</span>
                                    <span className="grand-total-amount">₪{(totalSum + Math.abs(debt)).toFixed(2)}</span>
                                </div>
                            )}
                        </div>
                        
                        <button className="checkout-btn" onClick={() => setFlagDialog(true)}>
                            המשך להזמנה ותשלום
                        </button>
                        
                        <div className="continue-shopping">
                            <a href="#" onClick={(e) => {e.preventDefault(); window.history.back();}}>
                                המשך בקניות
                            </a>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="empty-basket">
                    <div className="empty-basket-icon">🛒</div>
                    <h2>סל הקניות שלך ריק</h2>
                    <p>נראה שעדיין לא הוספת מוצרים לסל הקניות שלך.</p>
                    <button className="primary-button" onClick={() => window.location.href = '/order'}>
                        המשך לקניות
                    </button>
                </div>
            )}

            {flagdialog && (
                <div className="modal-overlay">
                    <div className="checkout-modal">
                        <h2>השלמת הזמנה</h2>
                        <div className="modal-content">
                            <div className="form-group">
                                <label htmlFor="supply-date">תאריך אספקה מבוקש</label>
                                <input 
                                    type="date" 
                                    id="supply-date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    min={new Date().toISOString().split('T')[0]}
                                    required
                                />
                            </div>
                            
                            <div className="order-summary">
                                <h3>סיכום הזמנה</h3>
                                <div className="summary-row">
                                    <span>סה"כ מוצרים:</span>
                                    <span>{totalItems}</span>
                                </div>
                                <div className="summary-row">
                                    <span>סה"כ לתשלום:</span>
                                    <span>₪{totalSum.toFixed(2)}</span>
                                </div>
                                {debt < 0 && (
                                    <div className="summary-row debt">
                                        <span>חוב קודם:</span>
                                        <span>₪{Math.abs(debt).toFixed(2)}</span>
                                    </div>
                                )}
                                {debt < 0 && (
                                    <div className="summary-row grand-total">
                                        <span>סה"כ כולל חוב:</span>
                                        <span>₪{(totalSum + Math.abs(debt)).toFixed(2)}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                        
                        <div className="modal-actions">
                            <button className="cancel-btn" onClick={() => setFlagDialog(false)}>
                                ביטול
                            </button>
                            <button 
                                className="confirm-btn" 
                                onClick={saveOrder}
                                disabled={!date}
                            >
                                אישור והזמנה
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
