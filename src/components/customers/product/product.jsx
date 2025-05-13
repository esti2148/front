// import './product.css'
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
// import { useState ,useEffect} from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToSal, changeTotalSal } from '../../../redux/customerSlice/customerSlice';
// import {changeCount} from '../../../redux/customerSlice/customerSlice';
// import { customerSlice } from '../../../redux/customerSlice/customerSlice';
// export const Product = (props) => {
//     const [hiddenSal, setHiddenSal] = useState(false)
//     const { prod } = props
//     const dispatch=useDispatch()
//     const isexist=useSelector(state=>state.customer.isExist)
//     const list= useSelector(state=>state.customer.listProduct)
//     const [count, setCount] = useState(0)
//     const [curent, setCurent] = useState({})
//     let newProd=null ;
// useEffect(()=>{ 
//        debugger
//     var c= list.find(x=>x.id==prod.id)
//  if(c!=null){ 
//     setCurent(c)
//   setCount((Number) (c?.qty))}
// },[])

//     const minus = () => {
//         debugger
//         if (count > 0)
//       {
//         var cc=(Number)(count-1)
//         console.log(cc +" "+count);
//         setCount(cc)
//         setCurent({...curent,qty:cc})
//       }    
//     }

//     const plus = () => {
//         debugger
//         var cc=(Number)(count+1)
//         console.log(cc+" "+count);
//         setCount(cc)
//         setCurent({...curent,qty:cc})

//     }

//     const save=()=>{
//         debugger
//          newProd=list?.find(x=>x.id==prod.id)
//         if(newProd!=null){
//              let one=((Number)(newProd.TempSum/newProd.qty))
//             newProd = {id:prod.id,productName:prod.productName,dscribe:prod.dscribe,size:prod.size,qty:(Number)(count),TempSum:(Number)(one*count)}
//             dispatch(changeCount(newProd))
//             dispatch(changeTotalSal(newProd))
//             }
//         else{
//             newProd={id:prod.id,productName:prod.productName,dscribe:prod.dscribe,size:prod.size,qty:count,TempSum:prod.price*count}
//             dispatch(addToSal(newProd)) 
//         }
//      }


//     return <section className='ordersPr'>
        
        
//         <span className='op'>מוצר:</span>
//         <span className='oop'>{prod?.productName}</span>
//         <br></br>
       
//         <span className='op'>תיאור:</span> 
//         <span className='oop'>{prod?.dscribe}</span>
//         <br></br>
//         <span className='op'>מידה:</span>
//         <span className='oop'>{prod?.size}</span>
//         <br></br>
//         <span className='op'>מחיר:</span>
//         <span className='oop'>{prod?.price}</span>
//         <br></br>
//         <br/>
//         <span onClick={()=>plus()} className='pp'>➕</span>
//         <input type='number' className='number' value={curent?.qty} />
//         <span onClick={()=>minus()} className='pp'>➖</span>
//         <br/>
//        {isexist && <button className='buttonProduct' hidden={hiddenSal} onClick={()=>save()}>הוסף לסל</button>}
//     </section>
// }
import './product.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToSal, changeTotalSal, changeCount } from '../../../redux/customerSlice/customerSlice';
import { getProductThunk } from '../../../redux/productSlice/getProductThunk';

export const Product = (props) => {
    const [hiddenSal, setHiddenSal] = useState(false);
    const { prod } = props;
    const dispatch = useDispatch();
    const isexist = useSelector(state => state.customer.isExist);
    const list = useSelector(state => state.customer.listProduct);
    const [count, setCount] = useState(0);
    const [curent, setCurent] = useState({});
    
    useEffect(() => {
        const c = list.find(x => x.id == prod.id);
        if (c != null) {
            setCurent(c);
            setCount(Number(c?.qty));
        }
    }, []);
    useEffect(() => {
        debugger
        dispatch(getProductThunk())
    }, []);
    const minus = () => {
        if (count > 0) {
            const cc = Number(count - 1);
            setCount(cc);
            setCurent({...curent, qty: cc});
        }
    };

    const plus = () => {
        const cc = Number(count + 1);
        setCount(cc);
        setCurent({...curent, qty: cc});
    };

    const save = () => {
        let newProd = list?.find(x => x.id == prod.id);
        if (newProd != null) {
            let one = Number(newProd.TempSum / newProd.qty);
            newProd = {
                id: prod.id,
                productName: prod.productName,
                dscribe: prod.dscribe,
                size: prod.size,
                qty: Number(count),
                TempSum: Number(one * count)
            };
            dispatch(changeCount(newProd));
            dispatch(changeTotalSal(newProd));
        } else {
            newProd = {
                id: prod.id,
                productName: prod.productName,
                dscribe: prod.dscribe,
                size: prod.size,
                qty: count,
                TempSum: prod.price * count
            };
            dispatch(addToSal(newProd));
        }
    };

    return (
        <div className="product-card">
            <div className="product-image">
                <img src={`/images/products/${prod.id}.jpg`} alt={prod.productName} onError={(e) => {e.target.src = '/images/product-placeholder.jpg'}} />
            </div>
            <div className="product-details">
                <h3 className="product-name">{prod?.productName}</h3>
                <p className="product-description">{prod?.dscribe}</p>
                
                <div className="product-info">
                    <div className="info-item">
                        <span className="info-label">מידה:</span>
                        <span className="info-value">{prod?.size}</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">מחיר:</span>
                        <span className="info-value price">₪{prod?.price.toFixed(2)}</span>
                    </div>
                </div>
                
                <div className="product-actions">
                    <div className="quantity-control">
                        <button className="quantity-btn minus" onClick={minus}>
                            <span>-</span>
                        </button>
                        <input 
                            type="number" 
                            className="quantity-input" 
                            value={count} 
                            onChange={(e) => setCount(Number(e.target.value))} 
                            min="0"
                        />
                        <button className="quantity-btn plus" onClick={plus}>
                            <span>+</span>
                        </button>
                    </div>
                    
                    {isexist && (
                        <button 
                            className={`add-to-cart-btn ${hiddenSal ? 'disabled' : ''}`} 
                            disabled={hiddenSal || count === 0} 
                            onClick={save}
                        >
                            הוסף לסל
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
