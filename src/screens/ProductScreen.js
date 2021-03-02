import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch, } from 'react-redux'
import { Link } from 'react-router-dom'
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../componants/LoadingBox';
import MessageBox from '../componants/MessageBox';
import Rating from '../componants/Rating';


export default function ProductScreen(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const [qty, setQty] = useState(1);
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);

    const addToCartHandler = () => {
        props.history.push(`/cart/${productId}?qty=${qty}`);
    };

    const goback = () => {
        props.history.goBack()
    }

    return (
        <>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                        <div>
                            <Link onClick={goback} className=''><i className="fas fa-arrow-left "></i> Back </Link>
                            <div className="row top">
                                <div id='img-large' className='col-2'>
                                    <img className='large ' src={product.image} alt={product.name} />
                                </div>
                                <div className='col-1'>
                                    <ul>
                                        <li>
                                            <h1>{product.name}</h1>
                                        </li>
                                        <li>
                                            <Rating rating={product.rating} numReviews={product.numReviews} />
                                        </li>
                                        <li>Price : ${product.price}</li>
                                        <li>Description :
                                            <p style={{ fontSize: '1.3rem', fontFamily: 'sans-serif', }}>{product.description}</p>
                                        </li>
                                    </ul>

                                </div>
                                <div className='col-1'>
                                    <div className="card card-body">
                                        <ul>
                                            <li>
                                                <div className="row">
                                                    <div>Price</div>
                                                    <div className="price">${product.price}</div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="row">
                                                    <div>Status</div>
                                                </div>
                                                <div>
                                                    {product.countInStock > 0 ? (
                                                        <span className="success">In Stock</span>
                                                    ) : (
                                                            <span className="danger"> Unavailable</span>
                                                        )}
                                                </div>
                                            </li>
                                            {product.countInStock > 0 && (
                                                <>
                                                    <li>
                                                        <div className="row">
                                                            <div>Qty</div>
                                                            <div>
                                                                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                                                    {[...Array(product.countInStock).keys()].map(
                                                                        (x) => (
                                                                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                                        )
                                                                    )}
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <button onClick={addToCartHandler} className="primary block">Add to Cart</button>
                                                    </li>
                                                </>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
        </>
    )
}
