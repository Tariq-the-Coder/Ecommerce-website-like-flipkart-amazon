import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listProductCategories } from '../actions/productActions';
import LoadingBox from './LoadingBox'
import MessageBox from './MessageBox'

export default function Aside(props) {
    const dispatch = useDispatch();

    const productCategoryList = useSelector((state) => state.productCategoryList);
    const {
        loading: loadingCategories,
        error: errorCategories,
        categories,
    } = productCategoryList;
    useEffect(() => {
        dispatch(listProductCategories());
    }, [dispatch]);


    return (
        <>
            <aside className={props.sidebar ? 'open' : ''}>
                <ul className="categories">
                    <li>
                        <strong>Categories</strong>
                        <button
                            onClick={() => props.setSidebar(false)}
                            className="close-sidebar"
                            type="button"
                        >
                            <i className="fa fa-close"></i>
                        </button>
                    </li>
                    {loadingCategories ? (
                        <LoadingBox></LoadingBox>
                    ) : errorCategories ? (
                        <MessageBox variant="danger">{errorCategories}</MessageBox>
                    ) : (
                                categories.map((c) => (
                                    <li key={c}>
                                        <Link
                                            to={`/search/category/${c}`}
                                            onClick={() => props.setSidebar(false)}
                                        >
                                            {c}
                                        </Link>
                                    </li>
                                ))
                            )}
                </ul>
            </aside>
        </>
    )
}
