import { useSelector } from 'react-redux';
import './menu.css';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Logo from './logo'; // ייבוא קומפוננטת הלוגו החדשה



export const Menu = () => {
    const isExist = useSelector(state => state.customer.isExist);
    const currentUser = useSelector(state => state.customer.currentCustomer);
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);

    // מעקב אחר גלילת העמוד להוספת אפקט צל כשגוללים למטה
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='menu-container'>
            <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
                <div className="logo" onClick={() => navigate("/")}>
                    <Logo height={40} />
                    <span>תלבושות בית ספר</span>
                </div>

                <nav className="main-nav">
                    <ul>
                        <li onClick={() => navigate("/")}>דף הבית</li>
                        <li onClick={() => navigate("order")}>הזמנת מוצרים</li>
                        <li onClick={() => navigate("shoppingBasket")}>סל הקניות</li>
                        <li onClick={() => navigate("prevOrder")}>הזמנות קודמות</li>
                    </ul>
                </nav>

                <div className="auth-section">
                    {isExist ? (
                        <div className="user-welcome">
                            <span className="welcome-text">שלום, {currentUser?.instituteName}</span>
                            <button className="account-button" onClick={() => navigate("account")}>
                                החשבון שלי
                            </button>
                        </div>
                    ) : (
                        <div className="auth-buttons">
                            <button className="secondary-button" onClick={() => navigate("login")}>
                                התחברות
                            </button>
                            <button className="primary-button" debugger onClick={() =>{  if (isExist) navigate("registration")}}>
                                הרשמה
                            </button>
                        </div>
                    )}
                </div>
            </header>

            <div className="page-content">
                <Outlet />
            </div>
        </div>
    );
}

export default Menu;
