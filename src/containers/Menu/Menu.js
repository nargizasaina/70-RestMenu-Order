import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Header from "../../components/Header/Header";
import Dishes from "../../components/Dishes/Dishes";
import {fetchDishes} from "../../store/actions/dishesActions";
import {addToCart, addToTotalPrice, postOrder, setPurchasingOpen} from "../../store/actions/cartActions";
import Cart from "../../components/Cart/Cart";
import OrderInfo from "../../components/OrderInfo/OrderInfo";
import Modal from "../../components/UI/Modal/Modal";
import './Menu.css';

const Menu = () => {
    const dispatch = useDispatch();
    const dishes = useSelector(state => state.menu.dishes);
    const cart = useSelector(state => state.cart.orders);
    const totalPrice = useSelector(state => state.cart.totalPrice);
    const purchasing = useSelector(state => state.cart.purchasing);

    const [contactData, setContactData] = useState({
        name: '',
        address: '',
        number: ''
    });

    useEffect(() => {
        dispatch(fetchDishes());
    }, [dispatch]);

    const onAddClick = (type, price) => {
        dispatch(addToCart(type));
        dispatch(addToTotalPrice(price));
    };

    const onRemoveClick = (type, price) => {

    };

    const onOrderClick = () => {
        dispatch(setPurchasingOpen(true));
    };

    const onOrderCancelClick = () => {
        dispatch(setPurchasingOpen(false));
    };

    const onChange = (e) => {
        const {name, value} = e.target;

        setContactData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const onOrderSubmit = async (e) => {
        e.preventDefault();
        let sendData = false;
        for (const key in contactData) {
            if (contactData[key] !== null && contactData[key] !== '' && contactData[key] !== ' ') {
                sendData = true;
            } else {
                sendData = false;
            }
        }

        if (sendData) {
            dispatch(postOrder({contactData, cart}));
            dispatch(setPurchasingOpen(false));
        } else {
            alert('Please enter all required information');
        }
    };

    return (
        <>
            <Modal
                show={purchasing}
                closed={onOrderCancelClick}
            >
                <OrderInfo
                    onChange={onChange}
                    contactData={contactData}
                    onSubmit={onOrderSubmit}
                />
            </Modal>
            <Header/>
            <div className="MainPart">
                <div className="Parts">
                    <h4 className="PartsTitle">Dinner Menu</h4>
                    {dishes.map(dish => (
                        <Dishes
                            key={dish.id}
                            name={dish.name}
                            price={dish.price}
                            image={dish.image}
                            onClick={() => onAddClick(dish.name, dish.price)}
                        >
                        </Dishes>
                    ))}
                </div>
                <Cart
                    cart={cart}
                    totalPrice={totalPrice}
                    onClick={onRemoveClick}
                    onOrderClick={onOrderClick}
                />
            </div>
        </>
    );
};

export default Menu;