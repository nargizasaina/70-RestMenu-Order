import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Header from "../../components/Header/Header";
import Dishes from "../../components/Dishes/Dishes";
import {fetchDishes} from "../../store/actions/dishesActions";
import {addToCart, addToTotalPrice} from "../../store/actions/cartActions";
import Cart from "../../components/Cart/Cart";
import './Menu.css';

const Menu = () => {
    const dispatch = useDispatch();
    const dishes = useSelector(state => state.menu.dishes);
    const cart = useSelector(state => state.cart.orders);
    const totalPrice = useSelector(state => state.cart.totalPrice);

    useEffect(() => {
        dispatch(fetchDishes());
    }, [dispatch]);

    const onAddClick = (type, price) => {
        dispatch(addToCart(type));
        dispatch(addToTotalPrice(price));
    };

    const onRemoveClick = (type, price) => {

    };

    return (
        <>
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
                />
            </div>
        </>
    );
};

export default Menu;