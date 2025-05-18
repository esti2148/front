import React, { useState, useEffect } from 'react'
import './ordersToBeMade.css'
import { FaShoppingBag, FaCheck, FaTimes, FaSpinner, FaSearch, FaFilter, FaBoxOpen, FaShippingFast, FaRegClock } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderThunk } from '../../../redux/orderSlice/getOrderThunk'

const OrdersToBeMade = () => {

  const dispatch = useDispatch()
 const ord=useSelector(state => state.Order.order)
  useEffect(() => {
    debugger
    dispatch(getOrderThunk());
  }, [dispatch]);

  //  const order = useSelector(state => state.Order.order)

    // מידע לדוגמה - במציאות יגיע מהשרת
    // const [orders, setOrders] = useState([
    //   { id: 1, customer: 'ישראל ישראלי', items: ['חולצה כחולה', 'מכנסיים שחורים'], date: '2023-06-15', status: 'pending', total: 199.90 },
    //   { id: 2, customer: 'חיים כהן', items: ['שמלה אדומה', 'חצאית'], date: '2023-06-14', status: 'processing', total: 249.50 },
    //   { id: 3, customer: 'שרה לוי', items: ['חולצה לבנה', 'ג׳ינס'], date: '2023-06-13', status: 'pending', total: 179.90 },
    //   { id: 4, customer: 'רחל גולדברג', items: ['סוודר חורף', 'צעיף'], date: '2023-06-12', status: 'completed', total: 159.90 },
    //  ]) 

    const [orders, setOrders] = useState()
    const [loading, setLoading] = useState(false)
    const [filter, setFilter] = useState('all')
    const [searchTerm, setSearchTerm] = useState('')


    // פונקציה לטיפול בשינוי סטטוס הזמנה
    const handleStatusChange = (orderId, newStatus) => {
      setOrders(orders.map(order => 
        order.id === orderId ? { ...order, status: newStatus } : order
      ))
    
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
    const filteredOrders = ord.filter(order => {
      const matchesFilter = filter === 'all' || order.status === filter
      const matchesSearch = order.customer.includes(searchTerm) || 
                            order.items.some(item => item.includes(searchTerm))
      return matchesFilter && matchesSearch
    })

    useEffect(() => {
      fetchOrders()
    }, [])

    // פונקציה להצגת סטטוס בעברית
    const getStatusText = (status) => {
      switch(status) {
        case 'pending': return 'ממתינה'
        case 'processing': return 'בטיפול'
        case 'completed': return 'הושלמה'
        case 'cancelled': return 'בוטלה'
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
              <div className="statistic-value">{ord.filter(o => o.status === 'pending').length}</div>
              <div className="statistic-label">ממתינות</div>
            </div>
          
            <div className="statistic-item">
              <div className="statistic-icon processing-icon">
                <FaShippingFast />
              </div>
              <div className="statistic-value">{ord.filter(o => o.status === 'processing').length}</div>
              <div className="statistic-label">בטיפול</div>
            </div>
          
            <div className="statistic-item">
              <div className="statistic-icon completed-icon">
                <FaCheck />
              </div>
              <div className="statistic-value">{ord.filter(o => o.status === 'completed').length}</div>
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
          {filteredOrders.length === 0 ? (
            <div className="no-orders">
              <FaShoppingBag size={50} />
              <h3>אין הזמנות לביצוע</h3>
              <p>כרגע אין הזמנות שתואמות את החיפוש שלך</p>
            </div>
          ) : (
            <div className="orders-grid">
              {filteredOrders.map(order => (
                <div key={order.id} className={`order-card ${order.status}`}>
                  <div className="order-header">
                    <div className="order-id">הזמנה #{order.id}</div>
                    <div className={`order-status ${order.status}`}>
                      {getStatusText(order.status)}
                    </div>
                  </div>
                
                  <div className="order-details">
                    <div className="order-customer-info">
                      <div className="info-label">לקוח:</div>
                      <div className="info-value">{order.customer}</div>
                    </div>
                  
                    <div className="order-date-info">
                      <div className="info-label">תאריך:</div>
                      <div className="info-value">{new Date(order.date).toLocaleDateString('he-IL')}</div>
                    </div>
                  
                    <div className="order-items-info">
                      <div className="info-label">פריטים:</div>
                      <ul className="items-list">
                        {order.items.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  
                    <div className="order-total-info">
                      <div className="info-label">סה"כ:</div>
                      <div className="info-value price-value">₪{order.total.toFixed(2)}</div>
                    </div>
                  </div>
                
                  <div className="order-actions">
                    {order.status === 'pending' && (
                      <button 
                        className="primary-button-new process-button"
                        onClick={() => handleStatusChange(order.id, 'processing')}
                      >
                        <FaShippingFast /> התחל טיפול
                      </button>
                    )}
                  
                    {order.status === 'processing' && (
                      <button 
                        className="primary-button-new complete-button"
                        onClick={() => handleStatusChange(order.id, 'completed')}
                      >
                        <FaCheck /> סמן כהושלם
                      </button>
                    )}
                  
                    {order.status !== 'completed' && order.status !== 'cancelled' && (
                      <button 
                        className="secondary-button-new cancel-button"
                        onClick={() => handleStatusChange(order.id, 'cancelled')}
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