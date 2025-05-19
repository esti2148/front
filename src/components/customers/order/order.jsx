// import './order.css'
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import { getProductThunk } from '../../../redux/productSlice/getProductThunk';
// import { Product } from '../product/product';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

// export const Order = () => {

//     const prod = useSelector(state => state.Product.products);
//     const dis = useDispatch()


//     const doo = () => {
//         dis(getProductThunk())
//     }
//     useEffect(() => {
//         debugger
//         doo()
//     }, [])



//     return <div className='divOr'>
      
//         <div className='divbig'>
//             {prod?.length>0 && prod?.map((x, index) => {
//                 return<Product key={index} prod={x} /> 

//             })}

//         </div>
//     </div>
// }
import './order.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getProductThunk } from '../../../redux/productSlice/getProductThunk';
import { Product } from '../product/product';

export const Order = () => {
    const products = useSelector(state => state.Product.products);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            
            dispatch(getProductThunk());
            setLoading(false);
        };
        
        fetchProducts();
    }, [dispatch]);

    useEffect(() => {
        if (products?.length > 0) {
            // חילוץ קטגוריות ייחודיות מהמוצרים
            const uniqueCategories = [...new Set(products.map(p => p.category || 'כללי'))];
            setCategories(uniqueCategories);
        }
    }, [products]);

    const filteredProducts = products?.filter(product => {
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        const matchesSearch = product.productName.includes(searchTerm) || 
                             product.dscribe.includes(searchTerm);
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="order-page">
            <div className="order-header">
                <h1 >הזמנת מוצרים</h1>
                <p>בחרו מהמגוון הרחב של תלבושות בית ספר איכותיות</p>
            </div>
            
            <div className="order-filters">
                <div className="search-box">
                    <input 
                        type="text" 
                        placeholder="חיפוש מוצרים..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                
                <div className="category-filters">
                    <button 
                        className={`category-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                        onClick={() => setSelectedCategory('all')}
                    >
                        הכל
                    </button>
                    
                    {categories.map(category => (
                        <button 
                            key={category}
                            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
            
            <div className="order-content">
                {loading ? (
                    <div className="loading-spinner">טוען מוצרים...</div>
                ) : filteredProducts?.length > 0 ? (
                    <div className="products-grid">
                        {filteredProducts.map((product, index) => (
                            <Product key={index} prod={product} />
                        ))}
                    </div>
                ) : (
                    <div className="no-products">
                        <p>לא נמצאו מוצרים מתאימים לחיפוש</p>
                    </div>
                )}
            </div>
        </div>
    );
};
