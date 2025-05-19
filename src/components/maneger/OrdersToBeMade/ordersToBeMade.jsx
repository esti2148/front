import React, { useState, useEffect } from 'react'
import './ordersToBeMade.css'
import { FaShoppingBag, FaCheck, FaTimes, FaSpinner, FaSearch, FaFilter, FaBoxOpen, FaShippingFast, FaRegClock } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderThunk } from '../../../redux/orderSlice/getOrderThunk'
import { updateOrderThunk } from '../../../redux/orderSlice/updateOrderThunk'

const OrdersToBeMade = () => {

  const dispatch = useDispatch()
 const ord=useSelector(state => state.Order.order)
  useEffect(() => {
    debugger
    dispatch(getOrderThunk());
  }, [dispatch]);

    const [orders, setOrders] = useState()
    const [loading, setLoading] = useState(false)
    const [filter, setFilter] = useState('all')
    const [searchTerm, setSearchTerm] = useState('')


    // פונקציה לטיפול בשינוי סטטוס הזמנה
    function handleStatusChange(order, newStatus) {
      debugger
     dispatch(updateOrderThunk({ newOrder:{...order, status : newStatus}, id: order.orderId  }))
    // setOrders(orders.map(order => 
    //   order.id === orderId ? { ...order, status: newStatus } : order
    // ))
    // כאן יש להוסיף קריאת API לעדכון הסטטוס בשרת
  }

    // פונקציה לטעינת הזמנות מהשרת
    const fetchOrders = () => {
      setLoading(true)
      // כאן תהיה קריאת API אמיתית
      setTimeout(() => {
        // דוגמה בלבד - במציאות יגיע מהשרת
        setLoading(false)
      }, 1000)
    }

    // פילטור הזמנות לפי סטטוס וחיפוש
    const filteredOrders = ord.filter((order,index) => {
      console.log(index ,order);
       const matchesFilter = filter === 'all' || order?.status === filter
       console.log(matchesFilter);
      // const matchesSearch = order?.customer?.includes(searchTerm) || 
      //                       order.items.some(item => item?.includes(searchTerm))
      //return matchesFilter// && matchesSearch

      if(matchesFilter) //&& matchesSearch
      return order
    })

    useEffect(() => {
      fetchOrders()
    }, [])

    // פונקציה להצגת סטטוס בעברית
    const getStatusText = (status) => {
      switch(status) {
        case 0: return 'ממתינה'
        case 1: return 'בטיפול'
        case 2: return 'הושלמה'
        case 3: return 'בוטלה'
        default: return status
      }
    }

    return (
      <div className="orders-to-be-made-container">
        <div className="orders-header-section">
          <h1>הזמנות לביצוע</h1>
          <p className="section-description">ניהול וטיפול בהזמנות חדשות של לקוחות</p>
        </div>

        <div className="orders-statistics-section">
          <div className="statistics-container">
            <div className="statistic-item">
              <div className="statistic-icon pending-icon">
                <FaRegClock />
              </div>
              <div className="statistic-value">{ord.filter(o => o?.status === 0).length}</div>
              <div className="statistic-label">ממתינות</div>
            </div>
          
            <div className="statistic-item">
              <div className="statistic-icon processing-icon">
                <FaShippingFast />
              </div>
              <div className="statistic-value">{ord.filter(o => o?.status === 1).length}</div>
              <div className="statistic-label">בטיפול</div>
            </div>
          
            <div className="statistic-item">
              <div className="statistic-icon completed-icon">
                <FaCheck />
              </div>
              <div className="statistic-value">{ord.filter(o => o?.status === 2).length}</div>
              <div className="statistic-label">הושלמו</div>
            </div>
          
            <div className="statistic-item">
              <div className="statistic-icon total-icon">
                <FaBoxOpen />
              </div>
              <div className="statistic-value">{ord.length}</div>
              <div className="statistic-label">סה"כ הזמנות</div>
            </div>
          </div>
        </div>

        <div className="orders-filter-section">
          <div className="filter-container">
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input 
                type="text" 
                placeholder="חיפוש לפי שם לקוח או פריט..." 
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          
            <div className="filter-box">
              <FaFilter className="filter-icon" />
              <select 
                className="filter-select"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">כל ההזמנות</option>
                <option value="pending">ממתינות</option>
                <option value="processing">בטיפול</option>
                <option value="completed">הושלמו</option>
              </select>
            </div>
          
            <button className="primary-button-new refresh-button" onClick={fetchOrders} disabled={loading}>
              {loading ? <FaSpinner className="spinner" /> : 'רענן הזמנות'}
            </button>
          </div>
        </div>

        <div className="orders-list-section">
          {filteredOrders?.length === 0 ? (
            <div className="no-orders">
              <FaShoppingBag size={50} />
              <h3>אין הזמנות לביצוע</h3>
              <p>כרגע אין הזמנות שתואמות את החיפוש שלך</p>
            </div>
          ) : (
            <div className="orders-grid">
              {filteredOrders?.map(order => (
                <div key={order?.id} className={`order-card ${order?.status}`}>
                  <div className="order-header">
                    <div className="order-id">הזמנה #{order?.orderId}</div>
                    <div className={`order-status ${order?.status}`}>
                      {getStatusText(order?.status)}
                    </div>
                  </div>
                
                  <div className="order-details">
                    <div className="order-customer-info">
                      <div className="info-label">לקוח:</div>
                      <div className="info-value">{order?.instituteId}</div>
                    </div>
                  
                    <div className="order-date-info">
                      <div className="info-label">תאריך הזמנה:</div>
                      <div className="info-value">{new Date(order?.orderDate).toLocaleDateString('he-IL')}</div>
                    </div>
                    <div className="order-date-info">
                      <div className="info-label">תאריך אספקה:</div>
                      <div className="info-value">{new Date(order?.supplyDate)?.toLocaleDateString('he-IL')}</div>
                    </div>
                    <div className="order-items-info">
                      <div className="info-label">פריטים:</div>
                      <ul className="items-list">
                        {order?.itemOreders?.map((item, index) => (
                          <li key={index}>{item.productName}</li>
                        ))}
                      </ul>
                    </div>
                  
                    <div className="order-total-info">
                      <div className="info-label">סה"כ:</div>
                      <div className="info-value price-value">₪{order?.toatlSum?.toFixed(2)}</div>
                    </div>

                    
                  </div>
                
                  <div className="order-actions">
                    {order?.status === 0 && (
                      <button 
                        className="primary-button-new process-button"
                        onClick={() => handleStatusChange(order, 1)}
                      >
                        <FaShippingFast /> התחל טיפול
                      </button>
                    )}
                  
                    {order?.status === 1 && (
                      <button 
                        className="primary-button-new complete-button"
                        onClick={() => handleStatusChange(order, 2)}
                      >
                        <FaCheck /> סמן כהושלם
                      </button>
                    )}
                  
                    {order?.status !== 1 && order?.status !== 2 && (
                      <button 
                        className="secondary-button-new cancel-button"
                        onClick={() => handleStatusChange(order,3)}
                      >
                        <FaTimes /> בטל הזמנה
                      </button>
                    )}
                  
                    <button className="text-button-new view-button">
                      צפה בפרטים מלאים
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    )
}

export default OrdersToBeMade