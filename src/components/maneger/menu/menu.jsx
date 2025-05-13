import { Outlet, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { FaBoxOpen, FaUsers, FaTruckLoading, FaClipboardList, FaUserTie, FaSignOutAlt } from "react-icons/fa"
import './menu.css'

export const MenuManeger = () => {
    const navigate = useNavigate()
    const [scrolled, setScrolled] = useState(false)

    // טיפול באירוע גלילה
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 20) {
          setScrolled(true)
        } else {
          setScrolled(false)
        }
      }

      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [])

    // פונקציית התנתקות - מנווטת לדף הבית הראשי
    const handleLogout = () => {
      // כאן תוכלי להוסיף לוגיקה של התנתקות כמו ניקוי localStorage וכו'
      // לדוגמה:
      // localStorage.removeItem('token')
      // localStorage.removeItem('user')
      
      // ניווט לדף הבית הראשי
      navigate("/")
    }

    return (
      <div className="menu-container">
        <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
          <div className="logo" onClick={() => navigate("")}>
            <FaUserTie size={30} color="#3f51b5" />
            <span>פאנל ניהול</span>
          </div>
        
          <nav className="main-nav">
            <ul>
              <li onClick={() => navigate("suppliers")}>
                <FaTruckLoading className="nav-icon" />
                ספקים
              </li>
              <li onClick={() => navigate("products")}>
                <FaBoxOpen className="nav-icon" />
                מוצרים
              </li>
              <li onClick={() => navigate("customers")}>
                <FaUsers className="nav-icon" />
                לקוחות
              </li>
              <li onClick={() => navigate("orders")}>
                <FaClipboardList className="nav-icon" />
                הזמנות קרובות
              </li>
            </ul>
          </nav>
        
          <div className="auth-section">
            <div className="user-welcome">
              <span className="welcome-text">שלום, מנהל</span>
              <button className="account-button" onClick={handleLogout}>
                <FaSignOutAlt className="logout-icon" />
                התנתק
              </button>
            </div>
          </div>
        </header>
      
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    )
}