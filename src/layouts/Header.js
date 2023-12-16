import React, { useState } from "react";
import { BsInstagram, BsTelephone, BsSearch } from "react-icons/bs";
import {
    AiOutlineMail,
    AiOutlineShoppingCart,
    AiOutlineHeart,
} from "react-icons/ai";
import { FiTwitter, FiYoutube } from "react-icons/fi";
import { BiUserCircle } from "react-icons/bi";
import { CiFacebook } from "react-icons/ci"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from 'react-router-dom';
import md5 from "md5";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../store/actions/loadingAction";
import { setProductList } from "../store/actions/productActions";
import { api } from "../api/api";
import { ShoppingCart } from "../components/ShoppingCart";



export default function Header() {
    const [dropDown, setDropDown] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector((select) => select.user.user)
    const productList = useSelector((state) => state.global?.categories[0]);
    const femaleProducts = productList?.filter(product => product.code?.includes("k:"));
    const maleProducts = productList?.filter(product => product.code?.includes("e:"));
    const [showShoppingCard, setShowShoppingCard] = useState(false)
    const shoppingCardList = useSelector((select) => select.shopping.card);
    const [showCardProductNumber, setShowCardProductNumber] = useState(true)

    console.log("GRAVATA ICIN USER : ", user)

    const showCardProductNumberHandler = () => {
        setShowCardProductNumber(!showCardProductNumber)
    }

    const shoppingCardOnClickHandler = () => {
        setShowShoppingCard(!showShoppingCard)
    }

    const toggleDropDown = () => {
        setDropDown(!dropDown);
    };

    const handleNavLinkClick = (e) => {
        if (e.target.classList.contains('toggle-dropdown')) {
            toggleDropDown();
        }
    };

    const dropDownHandler = (data) => {
        console.log("NE VAR BU DATA  , ", data);
        dispatch(setLoading(true))
        setTimeout(() => {
            api.get(`products?filter=${data.gender === "k" ? "kadın" : "erkek"}&category=${data.id}`)
                .then((response) => {
                    console.log("REPONSE DATA , ", response)
                    dispatch(setProductList(response.data.products))
                    dispatch(setLoading(false));
                })
        }, 1000)
    }


    let gravatarUrl = "";

    if (user && user.email) {
        gravatarUrl = `https://www.gravatar.com/avatar/${md5(user.email)}`;
    }

    return (
        <div className="relative">
            <div className="bg-[#252B42] mobile:hidden">
                <div className="flex justify-between items-center h-16 text-white mx-16">
                    {/* NAVBAR SOL ÜST */}
                    <div className="flex ">
                        <div className="flex gap-4">
                            <BsTelephone className="mt-1" />
                            <span>0225 555-0118</span>
                        </div>
                        <div className="flex gap-4 ml-4">
                            <AiOutlineMail className="mt-1" />
                            <p>michelle.rivera@example.com</p>
                        </div>
                    </div>
                    {/* NAVBAR ORTA */}
                    <div className="flex">
                        <p>Follow Us and get a chance to win 80% off</p>
                    </div>
                    {/* Navbar Sağ Üst */}
                    <div className="flex gap-4">
                        <span>Follow Us : </span>
                        <BsInstagram className="mt-1" />
                        <FiYoutube className="mt-1" />
                        <CiFacebook className="mt-1 " />
                        <FiTwitter className="mt-1" />
                    </div>
                </div>
            </div>
            {/* Burası Bandage olan kısım */}
            <div className="mt-4 ">
                <div className="text-black flex flex-wrap  justify-between mx-16 mobile:mx-4">
                    <h1 className="text-[1.5rem] font-bold text-[#252B42] mobile:mx-auto">Bandage</h1>
                    <div className="flex mobile:flex-col mobile:mr-0 mobile:mt-20 gap-5 mr-80 mt-1">
                        <NavLink to={"/"} className="text-[#737373] font-bold" >Home</NavLink>
                        <div className={dropDown ? "w-48 text-center" : "w-20"} onClick={handleNavLinkClick}>
                            <NavLink to="/products" >
                                <span className="text-[#737373]  text-center font-bold cursor-pointer">
                                    Products
                                </span>
                            </NavLink>
                            <span className="text-[#737373] font-bold toggle-dropdown cursor-pointer">{"                          "}↓</span>
                            {dropDown && (
                                <div className="absolute opacity-90 z-4 w-48 ">
                                    <div className="bg-white text-red-600 font-bold text-center p-2 mt-2 shadow-md">
                                        <span className="underline text-[0.8rem]">KADIN</span>
                                        {femaleProducts &&
                                            femaleProducts.map((category, index) => (
                                                <NavLink
                                                    key={index}
                                                    onClick={() => dropDownHandler(category)}
                                                    to={`/products/${category.gender === "k" ? "kadın" : "erkek"}/${category.title}`}
                                                    className="text-[#737373] text-center text-[0.8rem] font-bold block py-2"

                                                >
                                                    {category.title}
                                                </NavLink>
                                            ))}
                                    </div>
                                    <div>
                                        <div className="bg-white text-blue-600 font-bold p-2 text-center shadow-md">
                                            <span className="underline text-[0.8rem]">ERKEK</span>
                                            {maleProducts &&
                                                maleProducts.map((category, index) => (
                                                    <NavLink
                                                        key={index}
                                                        onClick={() => dropDownHandler(category)}
                                                        to={`/products/${category.gender === "k" ? "kadın" : "erkek"}/${category.title}`}
                                                        className="text-[#737373] text-[0.8rem] text-center font-bold block py-2"

                                                    >
                                                        {category.title}
                                                    </NavLink>
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <NavLink to={"/about"} className="text-[#737373] font-bold" >About</NavLink>
                        <NavLink to={"/contact"} className="text-[#737373] font-bold" >Contact</NavLink>
                        <NavLink to={"/productlistpage"} className="text-[#737373] font-bold" >Pages</NavLink>
                        {/* <NavLink to={"/pricing"} className="text-[#737373] font-bold" >Pricing</NavLink> */}
                        <NavLink to={"/team"} className="text-[#737373] font-bold" >Team</NavLink>
                    </div>

                    <div className="flex gap-2 font-bold mobile:mt-0 mobile:mx-auto">
                        <div className="flex gap-4">
                            {user ? (
                                <div className="flex gap-2 text-center">
                                    <img
                                        className="w-8 h-8 rounded-full"
                                        src={gravatarUrl}
                                        alt="User"
                                    />
                                    <p className="text-[#757575] mx-4">{user.name}</p>
                                </div>
                            ) : (
                                <div className="flex gap-2">
                                    <BiUserCircle className="mt-1 cursor-pointer mobile:hidden" />
                                    <Link to="/login" className="cursor-pointer mobile:hidden">Login</Link>
                                    <Link to="/signup" className="cursor-pointer mobile:hidden">/ Register</Link>
                                </div>
                            )}
                            <BsSearch className="mt-1" />
                            {/* ... diğer ikonlar */}
                        </div>

                        <div
                            onClick={() => {
                                shoppingCardOnClickHandler();
                                showCardProductNumberHandler();
                            }}
                            className={`${showShoppingCard ? 'block' : 'flex'} cursor-pointer mr-2`}
                        >
                            <div className="flex">
                                <AiOutlineShoppingCart className="mt-1 mx-auto cursor-pointer" />{showCardProductNumber && <span className="mt-1">{shoppingCardList.length - 1}</span>}
                            </div>
                            {showShoppingCard && <ShoppingCart />}
                        </div>

                        <div className="flex cursor-pointer">
                            <AiOutlineHeart className="mt-1" />
                            <span className="mt-1">1</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}