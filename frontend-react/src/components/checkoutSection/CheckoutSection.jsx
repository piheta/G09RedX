import ProductCard from "../productCard/ProductCard";
import './CheckoutSection.css';


function CheckoutSection({product}) {
    return (
        <section className={'checkout-section'}>
            <div className={'product-choices'}>
                <h1>qwerqwer</h1>
            </div>
            <div className={'checkout'}>
                <ProductCard imageUrl={'/images/oneDayCourseCard.jpeg'} title={'qwerqwer'} imageAlt={'asdfasdf'} description={'Lorem Ipsum cha cha xx'}/>
            </div>
        </section>
    )
};

export default CheckoutSection;