import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export const ShoppingCart = () => {
    const shoppingCardList = useSelector((select) => select.shopping.card);
    const history = useHistory()

    const bigShoppingCardsender = () => {
        history.push("/shoppingcard")
    }

    return (
        <div className='mt-6 border-2 w-[20rem] absolute top-24 right-4 z-50 bg-white '>
            <div className='text-center my-4'>
                Sepetim {<span>(</span>}{shoppingCardList?.length - 1} Ürün{<span>)</span>}
            </div>
            <hr />
            {shoppingCardList?.map((eleman, index) => (
                <div key={index} className='flex my-2'>
                    {eleman.product && eleman.product.images && eleman.product.images.length > 0 && (
                        <img
                            className='w-[5rem] h-[5rem]'
                            src={eleman.product.images[0].url}
                            alt='resim'
                        />
                    )}
                    <div className='ml-4'>
                        <h1 className='text-[1rem]'>{eleman.checked && eleman.product.name}</h1>
                        <div>
                            <h1 className='text-[0.8rem] font-bold text-[]'>{eleman.checked && `Adet : ${eleman.count}`}</h1>
                        </div>
                        <p className='text-[#FFA500]'>{eleman.checked && `Fiyat : ${eleman.product.price} ₺`} </p>
                    </div>
                </div>
            ))}
            <div className='flex justify-around mb-1'>
                <button onClick={() => bigShoppingCardsender()} className='px-4 py-2 rounded-md hover:bg-[#FFA500]'>Sepete Git</button>
                <button onClick={() => bigShoppingCardsender()}  className='px-4 py-2 rounded-md hover:bg-[#FFA500]'>Alışverisi Tamamla</button>
            </div>
        </div>
    );
};
