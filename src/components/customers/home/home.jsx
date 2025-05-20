import './home.css';

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaTruck, FaTshirt, FaUndo, FaHeadset, FaStar, FaQuoteRight, FaArrowLeft, FaSignInAlt, FaUserPlus, FaUser } from 'react-icons/fa';
import { getCustomerThunk } from '../../../redux/customerSlice/getCustomerThunk';
// יבוא תמונות ילדות בקטגוריות המובילות
import skirtImage from '../../img/girls/4.jpg';
import shirtImage from '../../img/girls/9.webp';
import sweaterImage from '../../img/girls/3.jpg';
import jumperImage from '../../img/girls/5.jpg';
//יבוא תמונות במוצרים המובילים
import skirtImageHader from '../../img/skirt/4.jpg';
import shirtImageHeader from '../../img/uniform/4.jpg';
import sweaterImageHeader from '../../img/sweater/2.jpg';
import jumperImageHeader from '../../img/jumper/2.jpg';
// יבוא תמונות בתי ספר
import testimonialsOfek from '../../img/school/5.jpg';
import testimonialsChasidy from '../../img/school/2.jpg';
import testimonialsViznitzh from '../../img/school/6.jpg';


// import './home.css';

export const Home = () => {
  const navigate = useNavigate();
  const isExist = useSelector(state => state.customer.isExist);
  const currentUser = useSelector(state => state.customer.currentCustomer);
  const dispatch = useDispatch()

  // מידע על מוצרים מובילים - בפרויקט אמיתי יגיע מהשרת
  const featuredProducts = [
    { id: 1, name: 'חולצת גור', price: 59.90, image: shirtImageHeader, rating: 4.8, sales: 120 },
    { id: 2, name: 'סרפן בית ספר כחול', price: 129.90, image: jumperImageHeader, rating: 4.6, sales: 95 },
    { id: 3, name: 'חצאית בית ספר כחולה', price: 249.90, image: skirtImageHader, rating: 4.7, sales: 85 },
    { id: 4, name: ' סוודר', price: 99.90, image: sweaterImageHeader, rating: 4.9, sales: 150 }
  ];

  // מידע על בתי ספר - בפרויקט אמיתי יגיע מהשרת
  const schools = [
    { 
      id: 1, 
      name: 'בית ספר יסודי "אופק"', 
      image: '/images/school1.jpg',
      students: 450,
      location: 'תל אביב',
      yearJoined: 2019,
      testimonial: 'שיתוף הפעולה עם החברה שלכם שיפר משמעותית את תהליך רכישת התלבושות עבור התלמידים שלנו.'
    },
    { 
      id: 2, 
      name: 'תיכון "רעות"', 
      image: '/images/school2.jpg',
      students: 780,
      location: 'חיפה',
      yearJoined: 2020,
      testimonial: 'האיכות של התלבושות והשירות המהיר הם הסיבות שאנחנו ממשיכים לעבוד איתכם שנה אחרי שנה.'
    },
    { 
      id: 3, 
      name: 'חטיבת ביניים "גלים"', 
      image: '/images/school3.jpg',
      students: 520,
      location: 'ירושלים',
      yearJoined: 2018,
      testimonial: 'ההורים והתלמידים מרוצים מאוד מהאיכות והנוחות של התלבושות. תודה על השירות המעולה!'
    },
    { 
      id: 4, 
      name: 'בית ספר "אורנים"', 
      image: '/images/school4.jpg',
      students: 380,
      location: 'באר שבע',
      yearJoined: 2021,
      testimonial: 'המחירים ההוגנים והאיכות הגבוהה הם שילוב מנצח. שמחים להיות חלק מהמשפחה שלכם.'
    }
  ];

  const mySchools = useSelector(state => state.customer.customerOrders);

  // const mySchools = 
  // סטטיסטיקות - בפרויקט אמיתי יגיע מהשרת
  const statistics = [
    { id: 1, label: 'בתי ספר', value: '120+' },
    { id: 2, label: 'תלמידים', value: '45,000+' },
    { id: 3, label: 'שנות ניסיון', value: '15+' },
    { id: 4, label: 'מוצרים', value: '200+' }
  ];

  // עדויות לקוחות - בפרויקט אמיתי יגיע מהשרת
  const testimonials = [
    {
      id: 1,
      text: "התלבושות באיכות מעולה והשירות מהיר ואדיב. ממליצה בחום!",
      author: "מיכל כהן",
      position: "מנהלת בית ספר \"אופק\"",
      image: testimonialsOfek
    },
    {
      id: 2,
      text: "כבר שנה שלישית שאנחנו רוכשים תלבושות דרך האתר. מחירים הוגנים ואיכות מעולה.",
      author: "זלדי בוים",
      position: "יו\"ר ועד הורים, תיכון \"ויזניץ\"",
      image: testimonialsViznitzh
    },
    {
      id: 3,
      text: "ההזמנה הגיעה מהר והתלמידים מרוצים מאיכות התלבושות. נמשיך להזמין גם בשנה הבאה.",
      author: "אילה קמינר",
      position: "רכזת שכבה, ביהס \"חסידי\"",
      image: testimonialsChasidy
    }
  ];

  // קטגוריות מוצרים - בפרויקט אמיתי יגיע מהשרת

  const categories = [
    { id: 1, name: 'חולצות', image: shirtImage, count: 45 },
    { id: 2, name: 'סרפנים', image: jumperImage, count: 32 },
    { id: 3, name: 'חצאיות', image: skirtImage, count: 28 },
    { id: 4, name: 'סוודרים', image: sweaterImage, count: 20 }
  ];

  // פונקציה להוספה לסל
  const addToCart = (productId, event) => {
    event.stopPropagation();
    // כאן תהיה הלוגיקה להוספה לסל
    console.log(`הוספת מוצר ${productId} לסל`);
  };

  useEffect(() => {
    dispatch(getCustomerThunk());
    console.log(mySchools + 'mySchools');
  }, [dispatch]);

  return (
    <div className="home-new-container">
    {/* Header Auth Section - חדש */}
    <div className="auth-header">
      <div className="auth-container">
        {isExist ? (
          <div className="user-welcome">
            <FaUser className="auth-icon" />
            <span>שלום, {currentUser?.instituteName}</span>
            <button className="auth-button profile-button" onClick={() => navigate("profile")}>
              הפרופיל שלי
            </button>
            <button className="auth-button logout-button" onClick={() => navigate("logout")}>
              התנתקות
            </button>
          </div>
        ) : (
          <div className="auth-buttons">
            <button className="auth-button login-button" onClick={() => navigate("login")}>
              <FaSignInAlt className="auth-icon" /> התחברות
            </button>
            <button className="auth-button register-button" onClick={() => navigate("registration")}>
              <FaUserPlus className="auth-icon" /> הרשמה
            </button>
          </div>
        )}
      </div>
    </div>

    {/* Hero Section - עם אנימציה וקריאה לפעולה בולטת */}
    <section className="hero-section-new">
      <div className="hero-overlay"></div>
      <div className="hero-content-new">
        <h1 className="animate-fade-in">תלבושות בית ספר איכותיות במחירים משתלמים</h1>
        <p className="animate-fade-in delay-1">מגוון רחב של תלבושות לכל בתי הספר, בכל המידות ובמחירים אטרקטיביים</p>
        <div className="hero-buttons-new animate-fade-in delay-2">
          <button className="primary-button-new" onClick={() => navigate("order")}>
            הזמנת מוצרים
          </button>
          <button className="secondary-button-new" onClick={() => navigate("shoppingBasket")}>
            צפייה בסל הקניות
          </button>
        </div>
        {!isExist && (
          <div className="hero-auth-prompt animate-fade-in delay-3">
            <p>עדיין לא רשומים? <button className="text-button-white" onClick={() => navigate("registration")}>הירשמו עכשיו</button> וקבלו 10% הנחה בהזמנה הראשונה!</p>
          </div>
        )}
      </div>
    </section>
    <div className="home-new-container">

      {/* סטטיסטיקות */}
      <section className="statistics-section">
        <div className="statistics-container">
          {statistics.map(stat => (
            <div className="statistic-item" key={stat.id}>
              <div className="statistic-value">{stat.value}</div>
              <div className="statistic-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Welcome Section - עם כרטיס מעוצב */}
      {isExist && (
        <section className="welcome-section-new">
          <div className="welcome-card-new">
            <div className="welcome-icon"></div>
            <h2>ברוכים הבאים, {currentUser?.instituteName}!</h2>
            <p>שמחים לראות אותך שוב באתר שלנו. כאן תוכלו למצוא את כל המידע על ההזמנות שלכם והצעות מיוחדות.</p>
            <button className="text-button-new" onClick={() => navigate("prevOrder")}>
              צפייה בהזמנות קודמות <FaArrowLeft className="icon-left" />
            </button>
          </div>
        </section>
      )}

      {/* קטגוריות מוצרים */}
      <section className="categories-section">
        <div className="section-header-new">
          <h2>קטגוריות מובילות</h2>
          <div className="section-line"></div>
        </div>
        <div className="categories-grid">
          {categories.map(category => (
            <div className="category-card" key={category.id} onClick={() => navigate(`order?category=${category.id}`)}>
              <div className="category-image">
                <img src={category.image} alt={category.name} />
                <div className="category-overlay">
                  <span className="category-count">{category.count} מוצרים</span>
                </div>
              </div>
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products - עם כרטיסי מוצר משופרים */}
      <section className="featured-section-new">
        <div className="section-header-new">
          <h2>המוצרים המובילים שלנו</h2>
          <div className="section-line"></div>
          <button className="text-button-new view-all" onClick={() => navigate("order")}>
            לכל המוצרים <FaArrowLeft className="icon-left" />
          </button>
        </div>
        <div className="products-grid-new">
          {featuredProducts.map(product => (
            <div className="product-card-new" key={product.id} onClick={() => navigate(`order/${product.id}`)}>
              <div className="product-image-new">
                <img src={product.image} alt={product.name} />
                <div className="product-badge">מוביל</div>
              </div>
              <div className="product-info-new">
                <h3>{product.name}</h3>
                <div className="product-meta">
                  <div className="product-rating">
                    <FaStar className="star-icon" />
                    <span>{product.rating}</span>
                  </div>
                  <div className="product-sales">{product.sales} נמכרו</div>
                </div>
                <p className="price-new">₪{product.price.toFixed(2)}</p>
              </div>
              {/* <button 
                className="add-to-cart-button-new" 
                onClick={(e) => addToCart(product.id, e)}
              >
                הוספה לסל
              </button> */}
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section - עם אייקונים ואנימציות */}
      <section className="benefits-section-new">
        <div className="section-header-new">
          <h2>למה לבחור בנו?</h2>
          <div className="section-line"></div>
        </div>
        <div className="benefits-container">
          <div className="benefit-card-new">
            <div className="benefit-icon-new">
              <FaTruck />
            </div>
            <h3>משלוח מהיר</h3>
            <p>משלוח עד הבית תוך 3-5 ימי עסקים לכל רחבי הארץ, עם אפשרות למעקב משלוחים</p>
          </div>
          <div className="benefit-card-new">
            <div className="benefit-icon-new">
              <FaTshirt />
            </div>
            <h3>איכות מעולה</h3>
            <p>בדים איכותיים ועמידים לאורך זמן, שעוברים בדיקות איכות קפדניות</p>
          </div>
          <div className="benefit-card-new">
            <div className="benefit-icon-new">
              <FaUndo />
            </div>
            <h3>החזרות קלות</h3>
            <p>אפשרות להחזרה תוך 14 יום, ללא שאלות וללא התחייבות</p>
          </div>
          <div className="benefit-card-new">
            <div className="benefit-icon-new">
              <FaHeadset />
            </div>
            <h3>שירות לקוחות</h3>
            <p>צוות שירות הלקוחות שלנו זמין עבורכם בטלפון, בצ'אט ובמייל</p>
          </div>
        </div>
      </section>

      {/* Schools Section - עם מידע מורחב */}
      <section className="schools-section-new">
        <div className="section-header-new">
          <h2>בתי ספר שעובדים איתנו</h2>
          <div className="section-line"></div>
        </div>
        <div className="schools-slider">
          {mySchools.map(school => (
            <div className="school-card-new" key={school.instituteId}>
              <div className="school-image-new">
                <img src={school.image} alt={school.instituteName} />
                <div className="school-overlay">
                  <div className="school-details">
                    {/* <p><strong>מיקום:</strong> {school.location}</p>
                    <p><strong>תלמידים:</strong> {school.students}</p>
                    <p><strong>הצטרף בשנת:</strong> {school.yearJoined}</p> */}
                  </div>
                </div>
              </div>
              <div className="school-info">
                <h3>{school.name}</h3>
                <p className="school-testimonial">"{school.testimonial}"</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section - עם רקע גרדיאנט ואנימציה */}
      <section className="cta-section-new">
        <div className="cta-content">
          <h2>מוכנים להזמין את התלבושות לשנת הלימודים הבאה?</h2>
          <p>הזמינו עכשיו ותיהנו ממבצעים מיוחדים והנחות לרכישה מוקדמת</p>
          <div className="cta-features">
            <div className="cta-feature">
              <div className="feature-icon">✓</div>
              <span>הנחה של 10% על הזמנות מוקדמות</span>
            </div>
            <div className="cta-feature">
              <div className="feature-icon">✓</div>
              <span>משלוח חינם בהזמנה מעל ₪500</span>
            </div>
            <div className="cta-feature">
              <div className="feature-icon">✓</div>
              <span>אחריות לשנה על כל המוצרים</span>
            </div>
          </div>
          <button className="primary-button-new cta-button" onClick={() => navigate("order")}>
            להזמנת מוצרים
          </button>
        </div>
      </section>

      {/* Testimonials - עם עיצוב מודרני */}
      <section className="testimonials-section-new">
        <div className="section-header-new">
          <h2>מה הלקוחות שלנו אומרים</h2>
          <div className="section-line"></div>
        </div>
        <div className="testimonials-container-new">
          {testimonials.map(testimonial => (
            <div className="testimonial-card-new" key={testimonial.id}>
              <div className="testimonial-quote">
                <FaQuoteRight className="quote-icon" />
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author-new">
                <div className="author-image">
                  <img src={testimonial.image} alt={testimonial.author} />
                </div>
                <div className="author-info">
                  <p className="author-name">{testimonial.author}</p>
                  <p className="author-position">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="section-header-new">
          <h2>שאלות נפוצות</h2>
          <div className="section-line"></div>
        </div>
        <div className="faq-container">
          <div className="faq-item">
            <div className="faq-question">
              <h3>איך אני יכול להזמין תלבושות עבור בית הספר שלי?</h3>
            </div>
            <div className="faq-answer">
              <p>ניתן להזמין תלבושות באמצעות האתר שלנו. פשוט בחרו את המוצרים הרצויים, הוסיפו אותם לסל הקניות והשלימו את תהליך ההזמנה. אם אתם מייצגים בית ספר, תוכלו ליצור חשבון מוסדי שיאפשר לכם לבצע הזמנות מרוכזות.</p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              <h3>מה זמני האספקה?</h3>
            </div>
            <div className="faq-answer">
              <p>זמני האספקה הם בין 3-5 ימי עסקים לרוב אזורי הארץ. בתקופות עמוסות כמו תחילת שנת הלימודים, זמני האספקה עשויים להתארך מעט. אנו מציעים להזמין מראש כדי להבטיח אספקה בזמן.</p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              <h3>האם ניתן להדפיס לוגו של בית הספר על התלבושות?</h3>
            </div>
            <div className="faq-answer">
              <p>בהחלט! אנו מציעים שירותי הדפסה והטבעה של לוגו בית הספר על כל סוגי התלבושות. ניתן לשלוח אלינו את הלוגו בפורמט דיגיטלי, ואנחנו נדאג להדפיס אותו באיכות גבוהה.</p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              <h3>מה מדיניות ההחזרות שלכם?</h3>
            </div>
            <div className="faq-answer">
              <p>אנו מאפשרים החזרת מוצרים תוך 14 יום מיום קבלתם, בתנאי שהם במצב חדש עם התוויות המקוריות. עבור הזמנות מוסדיות גדולות, אנא צרו קשר עם שירות הלקוחות שלנו לתיאום החזרה.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2>הישארו מעודכנים</h2>
          <p>הירשמו לניוזלטר שלנו וקבלו עדכונים על מבצעים, מוצרים חדשים וטיפים לתחזוקת תלבושות</p>
          <div className="newsletter-form">
            <input type="email" placeholder="הזינו את כתובת האימייל שלכם" />
            <button className="newsletter-button"  onClick={() => navigate("registration")}>הרשמה</button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="section-header-new">
          <h2>צרו קשר</h2>
          <div className="section-line"></div>
        </div>
        <div className="contact-container">

          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon phone-icon"></div>
              <div>
                <h3>טלפון</h3>
                <p>03-1234567</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon email-icon"></div>
              <div>
                <h3>אימייל</h3>
                <p>info@schooluniforms.co.il</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon address-icon"></div>
              <div>
                <h3>כתובת</h3>
                <p>רחוב ישא ברכה 6, ירושלים</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon hours-icon"></div>
              <div>
                <h3>שעות פעילות</h3>
                <p>א'-ה': 9:00-18:00, ו': 9:00-13:00</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <h3>שלחו לנו הודעה</h3>
            <form>
              <div className="form-group">
                <input type="text" placeholder="שם מלא" />
              </div>
              <div className="form-group">
                <input type="email" placeholder="אימייל" />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="טלפון" />
              </div>
              <div className="form-group">
                <textarea placeholder="תוכן ההודעה"></textarea>
              </div>
              <button type="submit" className="contact-submit-button">שליחה</button>
            </form>
          </div>
        </div>
      </section>
    </div>

 {!isExist && (
        <div className="mobile-auth-button" onClick={() => navigate("login")}>
          <FaSignInAlt />
          <span>התחברות</span>
        </div>
      )}
    </div>
  );
};


export default Home;