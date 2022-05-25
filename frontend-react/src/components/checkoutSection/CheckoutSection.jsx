import './CheckoutSection.css';
import {Autocomplete, DatePicker} from "@mui/lab";
import {TextField} from "@mui/material";

function CheckoutSection({product}) {

    function getTomorrowsDate() {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        return tomorrow.toISOString().split('T')[0];
    }

    return (
        <section className={'checkout-section'}>
            <div className={'product'}>
                <img className={'product-image'} src={'/images/squoosed-product1.jpg'}/>
                <div className={'related-products'}>
                    <div className={'related-product'}>
                        <img className={'related-product-images'} src={'/images/squoosed-product2.jpg'}/>
                        <p className={'related-product-tag'}>Two Day Course</p>
                    </div>
                    <div className={'related-product'}>
                        <img className={'related-product-images'} src={'/images/squoosed-product3.jpg'}/>
                        <p className={'related-product-tag'}>Short consultation</p>
                    </div>
                </div>
            </div>
            <form className={'choices'}>
                <div className={'choice'}>
                    <h3>Morning/Evening course</h3>
                    <div className={'option'}>
                        <label>
                            <input type={'checkbox'}/>Morning Course
                        </label>
                    </div>
                    <div className={'option'}>
                        <label>
                            <input type={'checkbox'}/>Evening course
                        </label>
                    </div>
                </div>
                <div className={'choice'}>
                    <h3>Language</h3>
                    <div className={'option'}>
                        <label>
                            <input type={'checkbox'}/>Norwegian
                        </label>
                    </div>
                    <div className={'option'}>
                        <label>
                            <input type={'checkbox'}/>English
                        </label>
                    </div>
                </div>
                <div className={'choice'}>
                    <h3>Group size</h3>
                    <div className={'option'}>
                        <label>
                            <input type={'checkbox'}/>1 person
                        </label>
                    </div>
                    <div className={'option'}>
                        <label>
                            <input type={'checkbox'}/>5 people
                        </label>
                    </div>
                </div>
                <div className={'choice'}>
                    <h3>Choose a date</h3>
                    <input type={"date"} defaultValue={getTomorrowsDate()} min={getTomorrowsDate()}/>
                </div>
                <button>BUY NOW</button>
            </form>
        </section>
    )
};

export default CheckoutSection;