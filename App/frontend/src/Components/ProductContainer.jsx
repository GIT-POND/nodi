import React from 'react'

const ProductContainer = (props) => { 
    return (<>

        <style>{`
            .product {
                margin: .5em;
                width: 17em;

                display: flex;
                flex-direction: column;

                border-radius: .5em;
            }

            .productImg {
                width: 17em;
                margin-bottom: auto;
            }

            .productDesc {
                font-size: small;
                font-weight: 500;
                padding-bottom: .5em;

            }

            .productName{
                word-wrap: normal;
            }
        `}</style>

        <div className='product' key={props.slug}>
            <img className='productImg' src={props.image} alt={props.name} />
            <section className='productDesc'>
                <p className='productName'>{props.name}</p>
                <p>{props.brand}</p>
                <p>${props.price} USD</p>
            </section>
        </div>

    </>)
}

export default ProductContainer