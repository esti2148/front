  // import { useDispatch, useSelector } from 'react-redux';
  // import { useState } from 'react';
  // import './shoppingBasket.css';
  // import { changeCount, changeTotalSal, removeFromSal } from '../../../redux/customerSlice/customerSlice';
  // import { addOrderToCustomerThunk } from '../../../redux/customerSlice/addOrderToCustomerThunk';






  // export const ShoppingBasket = () => {
  //     const sal = useSelector(state => state.customer.listProduct);
  //     const idCustomer = useSelector(state => state.customer.currentCustomer?.instituteId);
  //     const debt = useSelector(state => state.customer.currentCustomer?.overPluseDebt);
  //     const [flagdialog, setFlagDialog] = useState(false);
  //     const [date, setDate] = useState('');
  //     const dispatch = useDispatch();








  //     const pluss = (y) => {
  //         let newProd = sal.find(x => x.productId == y.productId);
  //         let priceOne = (Number)(newProd.TempSum / newProd.qty);
  //         newProd = { 
  //             id: newProd.productId, 
  //             productName: newProd.productName, 
  //             dscribe: newProd.dscribe, 
  //             size: newProd.size, 
  //             qty: newProd?.qty + 1, 
  //             TempSum: (newProd?.qty + 1) * priceOne 
  //         };
  //         dispatch(changeCount(newProd));
  //         dispatch(changeTotalSal(newProd));
  //     };















  //     const minuss = (y) => {
  //         if (y.qty > 1) {
  //             let newProd = sal.find(x => x.productId == y.productId);
  //             let priceOne = (Number)(newProd.TempSum / newProd.qty);
  //             newProd = { 
  //                 productId: newProd.productId, 
  //                 productName: newProd.productName, 
  //                 dscribe: newProd.dscribe, 
  //                 size: newProd.size, 
  //                 qty: newProd?.qty - 1, 
  //                 TempSum: (newProd?.qty - 1) * priceOne 
  //             };
  //             dispatch(changeCount(newProd));
  //             dispatch(changeTotalSal(newProd));
  //         }
  //         if (y.qty == 1) {
  //             remove(y);
  //         }
  //     };




















  //     const remove = (x) => {
  //         dispatch(removeFromSal(x));
  //     };




  //     const saveOrder = () => {
  //         var order = {
  //             orderId: 0,
  //             instituteId: idCustomer,
  //             toatlSum: 0,
  //             orderDate: new Date(),
  //             supplyDate: date,
  //             itemOreders: sal
  //         };
  //         dispatch(addOrderToCustomerThunk({ order, idCustomer }));
  //         setFlagDialog(false);
  //     };













  //     const totalSum = sal.reduce((acc, curr) => acc + curr.TempSum, 0);
  //     const totalItems = sal.reduce((acc, curr) => acc + curr.qty, 0);



  //     return (
  //         <div className="shopping-basket-page">
  //             <div className="basket-header">
  //                 <h1>סל הקניות שלך</h1>
  //                 <p>{sal.length > 0 ? `${sal.length} מוצרים בסל` : 'הסל שלך ריק'}</p>
  //             </div>







  //             {sal.length > 0 ? (
  //                 <div className="basket-content">
  //                     <div className="basket-items">
  //                         {sal.map((item, index) => (
  //                             <div className="basket-item" key={index}>
  //                                 <div className="item-image">
  //                                     <img 
  //                                         src={`/images/products/${item.productId}.jpg`} 
  //                                         alt={item.productName} 
  //                                         onError={(e) => {e.target.src = '/images/product-placeholder.jpg'}}
  //                                     />
  //                                 </div>
  //                                 <div className="item-details">
  //                                     <h3 className="item-name">{item.productName}</h3>
  //                                     <p className="item-description">{item.dscribe}</p>
  //                                     <div className="item-meta">
  //                                         <span className="item-size">מידה: {item.size}</span>
  //                                         <span className="item-price">₪{(item.TempSum / item.qty).toFixed(2)} ליחידה</span>
  //                                     </div>
  //                                 </div>
  //                                 <div className="item-actions">
  //                                     <div className="quantity-control">
  //                                         <button className="quantity-btn minus" onClick={() => minuss(item)}>
  //                                             <span>-</span>
  //                                         </button>
  //                                         <span className="quantity-display">{item.qty}</span>
  //                                         <button className="quantity-btn plus" onClick={() => pluss(item)}>
  //                                             <span>+</span>
  //                                         </button>
  //                                     </div>
  //                                     <div className="item-subtotal">
  //                                         <span>סה"כ:</span>
  //                                         <span className="subtotal-amount">₪{item.TempSum.toFixed(2)}</span>
  //                                     </div>
  //                                     <button className="remove-btn" onClick={() => remove(item)}>
  //                                         <span className="remove-icon">🗑</span>
  //                                         <span className="remove-text">הסר</span>
  //                                     </button>
  //                                 </div>
  //                             </div>
  //                         ))}
  //                     </div>














































  //                     <div className="basket-summary">
  //                         <h2>סיכום הזמנה</h2>
                        









  //                         <div className="summary-details">
  //                             <div className="summary-row">
  //                                 <span>סה"כ מוצרים:</span>
  //                                 <span>{totalItems}</span>
  //                             </div>
  //                             <div className="summary-row">
  //                                 <span>סה"כ לתשלום:</span>
  //                                 <span className="total-price">₪{totalSum.toFixed(2)}</span>
  //                             </div>
                            






  //                             {debt < 0 && (
  //                                 <div className="summary-row debt">
  //                                     <span>חוב קודם:</span>
  //                                     <span className="debt-amount">₪{Math.abs(debt).toFixed(2)}</span>
  //                                 </div>
  //                             )}
                            







  //                             {debt < 0 && (
  //                                 <div className="summary-row grand-total">
  //                                     <span>סה"כ כולל חוב:</span>
  //                                     <span className="grand-total-amount">₪{(totalSum + Math.abs(debt)).toFixed(2)}</span>
  //                                 </div>
  //                             )}
  //                         </div>
                        



  //                         <button className="checkout-btn" onClick={() => setFlagDialog(true)}>
  //                             המשך להזמנה ותשלום
  //                         </button>
                        

















  //                         <div className="continue-shopping">
  //                             <a href="#" onClick={(e) => {e.preventDefault(); window.history.back();}}>
  //                                 המשך בקניות
  //                             </a>
  //                         </div>
  //                     </div>
  //                 </div>
  //             ) : (
  //                 <div className="empty-basket">
  //                     <div className="empty-basket-icon">🛒</div>
  //                     <h2>סל הקניות שלך ריק</h2>
  //                     <p>נראה שעדיין לא הוספת מוצרים לסל הקניות שלך.</p>
  //                     <button className="primary-button" onClick={() => window.location.href = '/order'}>
  //                         המשך לקניות
  //                     </button>
  //                 </div>
  //             )}

















  //             {flagdialog && (
  //                 <div className="modal-overlay">
  //                     <div className="checkout-modal">
  //                         <h2>השלמת הזמנה</h2>
  //                         <div className="modal-content">
  //                             <div className="form-group">
  //                                 <label htmlFor="supply-date">תאריך אספקה מבוקש</label>
  //                                 <input 
  //                                     type="date" 
  //                                     id="supply-date"
  //                                     value={date}
  //                                     onChange={(e) => setDate(e.target.value)}
  //                                     min={new Date().toISOString().split('T')[0]}
  //                                     required
  //                                 />
  //                             </div>
                            
























  //                             <div className="order-summary">
  //                                 <h3>סיכום הזמנה</h3>
  //                                 <div className="summary-row">
  //                                     <span>סה"כ מוצרים:</span>
  //                                     <span>{totalItems}</span>
  //                                 </div>
  //                                 <div className="summary-row">
  //                                     <span>סה"כ לתשלום:</span>
  //                                     <span>₪{totalSum.toFixed(2)}</span>
  //                                 </div>
  //                                 {debt < 0 && (
  //                                     <div className="summary-row debt">
  //                                         <span>חוב קודם:</span>
  //                                         <span>₪{Math.abs(debt).toFixed(2)}</span>
  //                                     </div>
  //                                 )}
  //                                 {debt < 0 && (
  //                                     <div className="summary-row grand-total">
  //                                         <span>סה"כ כולל חוב:</span>
  //                                         <span>₪{(totalSum + Math.abs(debt)).toFixed(2)}</span>
  //                                     </div>
  //                                 )}
  //                             </div>
  //                         </div>
                        























  //                         <div className="modal-actions">
  //                             <button className="cancel-btn" onClick={() => setFlagDialog(false)}>
  //                                 ביטול
  //                             </button>
  //                             <button 
  //                                 className="confirm-btn" 
  //                                 onClick={saveOrder}
  //                                 disabled={!date}
  //                             >
  //                                 אישור והזמנה
  //                             </button>
  //                         </div>
  //                     </div>
  //                 </div>
  //             )}
  //         </div>
  //     );
  // };
  ///////****************************///////////////////////////////////
  import { useDispatch, useSelector } from 'react-redux';
  import { useState } from 'react';
  import './shoppingBasket.css';
  import { changeCount, changeTotalSal, removeFromSal } from '../../../redux/customerSlice/customerSlice';
  import { addOrderToCustomerThunk } from '../../../redux/customerSlice/addOrderToCustomerThunk';
  import { useNavigate } from 'react-router-dom';











  export const ShoppingBasket = () => {
      const sal = useSelector(state => state.customer.listProduct);
      const idCustomer = useSelector(state => state.customer.currentCustomer?.instituteId);
      const debt = useSelector(state => state.customer.currentCustomer?.overPluseDebt);
      const [flagdialog, setFlagDialog] = useState(false);
      const [paymentDialog, setPaymentDialog] = useState(false);
      const [successDialog, setSuccessDialog] = useState(false);
      const [paymentSuccessDialog, setPaymentSuccessDialog] = useState(false);
      const [date, setDate] = useState('');
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [isProcessingPayment, setIsProcessingPayment] = useState(false);
    
      // פרטי תשלום
      const [paymentDetails, setPaymentDetails] = useState({
          cardNumber: '',
          expiryDate: '',
          cvv: '',
          cardHolder: '',
          amount: 0
      });
    
      const dispatch = useDispatch();
      const navigate = useNavigate();















      const pluss = (y) => {
          let newProd = sal.find(x => x.productId == y.productId);
          let priceOne = (Number)(newProd.TempSum / newProd.qty);
          newProd = { 
              id: newProd.productId, 
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
              let newProd = sal.find(x => x.productId == y.productId);
              let priceOne = (Number)(newProd.TempSum / newProd.qty);
              newProd = { 
                  productId: newProd.productId, 
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



      const proceedToPayment = () => {
          setIsSubmitting(true);
        









          // חישוב הסכום הכולל
          const totalAmount = debt < 0 ? totalSum + Math.abs(debt) : totalSum;
        




          setPaymentDetails(prev => ({
              ...prev,
              amount: totalAmount
          }));
        
          setFlagDialog(false);
          setPaymentDialog(true);
          setIsSubmitting(false);
      };

      const processPayment = async () => {
          setIsProcessingPayment(true);
        
          try {
              // סימולציה של תשלום - כאן תוכל להתחבר לחברת האשראי האמיתית
              await simulatePayment(paymentDetails);
            
              // אם התשלום הצליח, שמור את ההזמנה
              const order = {
                  orderId: 0,
                  instituteId: idCustomer,
                  toatlSum: paymentDetails.amount,
                  orderDate: new Date(),
                  supplyDate: date,
                  itemOreders: sal,
                  status: 0,
                  paymentStatus: 'paid'
              };
            
              await dispatch(addOrderToCustomerThunk({ order, idCustomer }));
            
              setPaymentDialog(false);
              setPaymentSuccessDialog(true);
            
              // ניקוי הסל לאחר 3 שניות וניווט לדף הבית
              setTimeout(() => {
                  const productsToRemove = [...sal];
                  productsToRemove.forEach(product => {
                      dispatch(removeFromSal(product));
                  });
                  setPaymentSuccessDialog(false);
                  navigate('/');
              }, 3000);
            
          } catch (error) {
              console.error("שגיאה בתשלום:", error);
              alert("שגיאה בעיבוד התשלום. אנא נסה שוב.");
          } finally {
              setIsProcessingPayment(false);
          }
      };

      // סימולציה של תשלום
      const simulatePayment = (details) => {
          return new Promise((resolve, reject) => {
              setTimeout(() => {
                  // בדיקות בסיסיות
                  if (details.cardNumber.length < 16 || details.cvv.length < 3) {
                      reject(new Error("פרטי כרטיס לא תקינים"));
                      return;
                  }
                
















                  // סימולציה של הצלחה (90% הצלחה)
                  if (Math.random() > 0.1) {
                      resolve({ success: true, transactionId: Math.random().toString(36).substr(2, 9) });
                  } else {
                      reject(new Error("התשלום נדחה"));
                  }
              }, 2000); // סימולציה של זמן עיבוד
          });
      };



      const handlePaymentInputChange = (field, value) => {
          let formattedValue = value;
        
          // עיצוב מספר כרטיס
          if (field === 'cardNumber') {
              formattedValue = value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ').trim();
              if (formattedValue.length > 19) return; // מגביל ל-16 ספרות + רווחים
          }
        
          // עיצוב תאריך תפוגה
          if (field === 'expiryDate') {
              formattedValue = value.replace(/\D/g, '').replace(/(\d{2})(\d{2})/, '$1/$2');
              if (formattedValue.length > 5) return;
          }
        
          // עיצוב CVV
          if (field === 'cvv') {
              formattedValue = value.replace(/\D/g, '');
              if (formattedValue.length > 4) return;
          }
        
          setPaymentDetails(prev => ({
              ...prev,
              [field]: formattedValue
          }));
      };

      const isPaymentValid = () => {
          return (
              paymentDetails.cardNumber.replace(/\s/g, '').length >= 16 &&
              paymentDetails.expiryDate.length === 5 &&
              paymentDetails.cvv.length >= 3 &&
              paymentDetails.cardHolder.trim().length > 0 &&
              paymentDetails.amount > 0
          );
      };

      const totalSum = sal.reduce((acc, curr) => acc + curr.TempSum, 0);
      const totalItems = sal.reduce((acc, curr) => acc + curr.qty, 0);
    



      // וידוא שיש תאריך תקף
      const today = new Date().toISOString().split('T')[0];
      const isDateValid = date && date >= today;







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
                                          src={`/images/products/${item.productId}.jpg`} 
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









              {/* דיאלוג משופר לבחירת תאריך אספקה */}
              {/* {flagdialog && (
                  <div className="modal-overlay">
                      <div className="checkout-modal">
                          <div className="modal-header">
                              <h2>השלמת הזמנה</h2>
                              <button className="close-modal" onClick={() => setFlagDialog(false)}>×</button>
                          </div>
                        















                          <div className="modal-content">
                              <div className="form-group">
                                  <label htmlFor="supply-date">תאריך אספקה מבוקש</label>
                                  <input 
                                      type="date" 
                                      id="supply-date"
                                      value={date}
                                      onChange={(e) => setDate(e.target.value)}
                                      min={today}
                                      required
                                  />
                                  {date && !isDateValid && (
                                      <p className="date-error">יש לבחור תאריך עתידי</p>
                                  )}
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
                                  disabled={!isDateValid || isSubmitting}
                              >
                                  {isSubmitting ? 'מעבד...' : 'אישור והזמנה'}
                              </button>
                          </div>
                      </div>
                  </div>
              )} */}
              {flagdialog && (
                  <div className="modal-overlay">
                      <div className="checkout-modal">
                          <div className="modal-header">
                              <h2>השלמת הזמנה</h2>
                              <button className="close-modal" onClick={() => setFlagDialog(false)}>×</button>
                          </div>

//                         <div className="modal-actions">
//                             <button className="cancel-btn" onClick={() => setFlagDialog(false)}>
//                                 ביטול
//                             </button>
//                             <button 
//                                 className="confirm-btn" 
//                                 onClick={saveOrder}
//                                 disabled={!date}
//                             >
//                                 אישור והזמנה
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };
///////****************************///////////////////////////////////
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import './shoppingBasket.css';
import { changeCount, changeTotalSal, removeFromSal } from '../../../redux/customerSlice/customerSlice';
import { addOrderToCustomerThunk } from '../../../redux/customerSlice/addOrderToCustomerThunk';
import { useNavigate } from 'react-router-dom';

export const ShoppingBasket = () => {
    const sal = useSelector(state => state.customer.listProduct);
    const idCustomer = useSelector(state => state.customer.currentCustomer?.instituteId);
    const debt = useSelector(state => state.customer.currentCustomer?.overPluseDebt);
    const [flagdialog, setFlagDialog] = useState(false);
    const [successDialog, setSuccessDialog] = useState(false);
    const [date, setDate] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const pluss = (y) => {
        let newProd = sal.find(x => x.productId == y.productId);
        let priceOne = (Number)(newProd.TempSum / newProd.qty);
        newProd = { 
            id: newProd.productId, 
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
            let newProd = sal.find(x => x.productId == y.productId);
            let priceOne = (Number)(newProd.TempSum / newProd.qty);
            newProd = { 
                productId: newProd.productId, 
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
        debugger
        setIsSubmitting(true);
        
        let order = {
            orderId: 0,
            instituteId: idCustomer,
            customerName: '',
            toatlSum: 0,
            orderDate: new Date(),
            supplyDate: date,
            status: 0,
            itemOreders: sal,
        
        };
        
        
        dispatch(addOrderToCustomerThunk({ order, idCustomer }))
            .then(() => {
                setFlagDialog(false);
                setSuccessDialog(true);
                
                // ניקוי הסל לאחר 3 שניות וניווט לדף הבית
                setTimeout(() => {
                    // מסיר כל מוצר מהסל
                    const productsToRemove = [...sal];
                    productsToRemove.forEach(product => {
                        dispatch(removeFromSal(product));
                    });
                    setSuccessDialog(false);
                    navigate('/');
                }, 3000);
            })
            .catch(error => {
                console.error("שגיאה בשמירת ההזמנה:", error);
                setIsSubmitting(false);
            });
    };

    const totalSum = sal.reduce((acc, curr) => acc + curr.TempSum, 0);
    const totalItems = sal.reduce((acc, curr) => acc + curr.qty, 0);
    
    // וידוא שיש תאריך תקף
    const today = new Date().toISOString().split('T')[0];
    const isDateValid = date && date >= today;

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
                                        src={`/images/products/${item.productId}.jpg`} 
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

                        
                          <div className="modal-content">
                              <div className="form-group">
                                  <label htmlFor="supply-date">בחר תאריך אספקה</label>
                                  <div className="date-input-container">
                                      <input 
                                          type="date" 
                                          id="supply-date"
                                          value={date}
                                          onChange={(e) => setDate(e.target.value)}
                                          min={today}
                                          required
                                      />
                                      {/* <div className="calendar-icon">📅</div> */}
                                  </div>
                                  {date && !isDateValid && (
                                      <p className="date-error">יש לבחור תאריך עתידי</p>
                                  )}
                              </div>
                            
                              <div className="order-summary">
                                  <h3>סיכום הזמנה</h3>
                                
                                  <div className="summary-items">
                                      {sal.map((item, index) => (
                                          <div className="summary-item" key={index}>
                                              <div className="summary-item-name">{item.productName}</div>
                                              <div className="summary-item-details">
                                                  <span>{item.qty} × ₪{(item.TempSum / item.qty).toFixed(2)}</span>
                                                  <span className="summary-item-total">₪{item.TempSum.toFixed(2)}</span>
                                              </div>
                                          </div>
                                      ))}
                                  </div>
                                
                                  <div className="summary-totals">
                                      <div className="summary-row">
                                          <span>סה"כ מוצרים:</span>
                                          <span>{totalItems}</span>
                                      </div>
                                      <div className="summary-row">
                                          <span>סה"כ לתשלום:</span>
                                          <span className="total-amount">₪{totalSum.toFixed(2)}</span>
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
                            
                              <div className="delivery-note">
                                  <div className="note-icon">🚚</div>
                                  <div className="note-text">
                                      <p>המשלוח יגיע בתאריך הנבחר בין השעות 9:00-17:00</p>
                                      <p>משלוח חינם בהזמנה מעל ₪300</p>
                                  </div>
                              </div>
                          </div>
                        
                          <div className="modal-actions">
                              <button className="cancel-btn" onClick={() => setFlagDialog(false)}>
                                  ביטול
                              </button>
                              <button 
                                  className="confirm-btn" 
                                  onClick={proceedToPayment}
                                  disabled={!isDateValid || isSubmitting}
                              >
                                  {isSubmitting ? (
                                      <span className="loading-spinner-btn"></span>
                                  ) : (

                                      <>המשך לתשלום</>
                                  )}
                              </button>
                          </div>
                      </div>
                  </div>
              )}



              {/* דיאלוג תשלום */}
              {paymentDialog && (
                  <div className="modal-overlay">
                      <div className="payment-modal">
                          <div className="modal-header">
                              <h2>פרטי תשלום</h2>
                              <button className="close-modal" onClick={() => setPaymentDialog(false)}>×</button>
                          </div>
                        
                          <div className="payment-content">
                              <div className="payment-summary">
                                  <div className="payment-amount">
                                      <span>סכום לתשלום:</span>
                                      <span className="amount">₪{paymentDetails.amount.toFixed(2)}</span>
                                  </div>
                              </div>

                              <div className="payment-form">
                                  <div className="card-visual">
                                      <div className="card-front">
                                          <div className="card-chip">💳</div>
                                          <div className="card-number">
                                              {paymentDetails.cardNumber || '**** **** **** ****'}
                                          </div>
                                          <div className="card-info">
                                              <div className="card-holder">
                                                  {paymentDetails.cardHolder || 'שם בעל הכרטיס'}
                                              </div>
                                              <div className="card-expiry">
                                                  {paymentDetails.expiryDate || 'MM/YY'}
                                              </div>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-group">
                                      <label htmlFor="cardNumber">מספר כרטיס אשראי</label>
                                      <input
                                          type="text"
                                          id="cardNumber"
                                          value={paymentDetails.cardNumber}
                                          onChange={(e) => handlePaymentInputChange('cardNumber', e.target.value)}
                                          placeholder="1234 5678 9012 3456"
                                          maxLength="19"
                                      />
                                  </div>

                                  <div className="form-row">
                                      <div className="form-group">
                                          <label htmlFor="expiryDate">תאריך תפוגה</label>
                                          <input
                                              type="text"
                                              id="expiryDate"
                                              value={paymentDetails.expiryDate}
                                              onChange={(e) => handlePaymentInputChange('expiryDate', e.target.value)}
                                              placeholder="MM/YY"
                                              maxLength="5"
                                          />
                                      </div>
                                      <div className="form-group">
                                          <label htmlFor="cvv">CVV</label>
                                          <input
                                              type="text"
                                              id="cvv"
                                              value={paymentDetails.cvv}
                                              onChange={(e) => handlePaymentInputChange('cvv', e.target.value)}
                                              placeholder="123"
                                              maxLength="4"
                                          />
                                      </div>
                                  </div>

                                  <div className="form-group">
                                      <label htmlFor="cardHolder">שם בעל הכרטיס</label>
                                      <input
                                          type="text"
                                          id="cardHolder"
                                          value={paymentDetails.cardHolder}
                                          onChange={(e) => handlePaymentInputChange('cardHolder', e.target.value)}
                                          placeholder="שם מלא כפי שמופיע על הכרטיס"
                                      />
                                  </div>

                                  <div className="form-group">
                                      <label htmlFor="paymentAmount">סכום לתשלום</label>
                                      <input
                                          type="number"
                                          id="paymentAmount"
                                          value={paymentDetails.amount}
                                          onChange={(e) => handlePaymentInputChange('amount', parseFloat(e.target.value) || 0)}
                                          min="0"
                                          step="0.01"
                                      />
                                  </div>
                              </div>

                              <div className="security-note">
                                  <div className="security-icon">🔒</div>
                                  <p>התשלום מאובטח ומוצפן. פרטי הכרטיס שלך מוגנים</p>
                              </div>
                          </div>
                        
                          <div className="modal-actions">
                              <button className="cancel-btn" onClick={() => setPaymentDialog(false)}>
                                  ביטול
                              </button>
                              <button 
                                  className="pay-btn" 
                                  onClick={processPayment}
                                  disabled={!isPaymentValid() || isProcessingPayment}
                              >
                                  {isProcessingPayment ? (
                                      <>
                                          <span className="loading-spinner-btn"></span>
                                          מעבד תשלום...
                                      </>
                                  ) : (
                                      <>שלם ₪{paymentDetails.amount.toFixed(2)}</>
                                  )}
                              </button>
                          </div>
                      </div>
                  </div>
              )}

              {/* דיאלוג אישור תשלום */}
              {paymentSuccessDialog && (
                  <div className="modal-overlay">
                      <div className="success-modal">
                          <div className="success-icon">✓</div>


                          <h2>התשלום בוצע בהצלחה!</h2>
                          <p>תודה שהזמנת אצלנו. התשלום עבר בהצלחה וההזמנה שלך נקלטה במערכת.</p>
                          <div className="payment-details">
                              <p>סכום ששולם: <strong>₪{paymentDetails.amount.toFixed(2)}</strong></p>
                              <p>תאריך אספקה: <strong>{new Date(date).toLocaleDateString('he-IL')}</strong></p>
                          </div>
                          <p className="redirect-message">מועבר לדף הבית בעוד רגע...</p>
                      </div>
                  </div>
              )}
          </div>
      );
  };
  // export default ShoppingBasket;