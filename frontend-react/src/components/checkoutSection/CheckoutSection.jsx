import './CheckoutSection.css';
import '../../styles/global.css'
import {FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import CheckOutModal from "../checkoutModal/CheckOutModal";
import {useSelector} from "react-redux";

/**
 * Creates the checkout section of the product page, with a product picture
 * and choices.
 * @param products all the products in the db.
 * @param productId the id of the product to be displayed on product page.
 * @returns {JSX.Element}
 */
function CheckoutSection({products, productId}) {

    const [price, setPrice] = useState('');
    const [currentProduct, setCurrentProduct] = useState({});
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [displayModal, setDisplayModal] = useState(false);
    const isLogged = useSelector(state => state.isLogged.isLogged);
    const navigate = useNavigate();

    /**
     * The choices a user picks for a product.
     */
    const [choices, setChoices] = useState({
        timeOfDay: 'Morning',
        language: 'Norwegian',
        groupSize: 1,
        date: getTomorrowsDate(),
    })


    /**
     * Lets the user close modals by pressing outside of it.
     */
    const handleClickOutside = (event) => {
        if (event.target.className === 'checkout-modal' || event.target.className === 'checkout-modal-exit') {
            setDisplayModal(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    /**
     * Returns tomorrows date as a string.
     */
    function getTomorrowsDate() {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        return tomorrow.toISOString().split('T')[0];
    }

    /**
     * Switches the choices.groupSize variable based on which radio button
     * is pressed.
     */
    function handleGroupChange(newGroupSize) {
        if (parseInt(newGroupSize) === 1) {
            setPrice(currentProduct.basePrice);
            setChoices({...choices, groupSize : newGroupSize})
        } else {
            setPrice(currentProduct.groupPrice);
            setChoices({...choices, groupSize : newGroupSize})
        }
    }

    /**
     * Switches the choices.timeOfDay variable based on which radio
     * button is pressed.
     */
    function handleTimeOfDayChange(newTime) {
        setChoices({...choices, timeOfDay : newTime})
    }

    /**
     * Switches the choices.language variable based on which radio
     * button is pressed.
     */
    function handleLanguageChange(newLanguage) {
        setChoices({...choices, language : newLanguage})
    }

    /**
     * Switches the choices.date variable based on which radio
     * button is pressed.
     */
    function handleDateChange(newDate) {
        choices.date = newDate;
    }

    /**
     * Sets the currentProduct and related products to be displayed each time products
     * or the productId changes (change of product page etc.).
     */
    useEffect(() => {
        if (products.length > 0) {
            setCurrentProduct(products.find(product => parseInt(product.productId) === parseInt(productId)));
            setRelatedProducts(products.filter(product => parseInt(product.productId) !== parseInt(productId)));
        }
    }, [products, productId]);

    /**
     * Sets the price to be originally displayed on the product card.
     * Changes every time currentProduct & productId changes.
     */
    useEffect(() => {
        if (currentProduct && currentProduct.basePrice) {
            setPrice(currentProduct.basePrice);
        }
    }, [currentProduct, productId]);

    return (
        <section id={'checkout-and-related-products'}>
            <div className={'product-section'}>
                <div className={'product'}>
                    <img alt={currentProduct.productName} className={'product-image'}
                         src={'/images/squoosed-product' + productId + '.jpg'}/>
                </div>
                <div className={"choices"}>
                    <form key={productId}>
                        <h1 className={'product-title'}>{currentProduct.productName}</h1>
                        <RadioGroup onChange={(event, value) => handleTimeOfDayChange(value)}
                                     defaultValue={'Morning'}>
                            <h3 className={'choice-title'}>Time of day</h3>
                            <FormControlLabel
                                control={<Radio
                                    sx={{'&.Mui-checked': {color: "#ec361e"}, '& .MuiSvgIcon-root': {fontSize: 25}}}/>}
                                label={<label className={'radio-label'}>Morning course</label>}
                                value={'Morning'}
                            />
                            <FormControlLabel
                                control={<Radio
                                    sx={{'&.Mui-checked': {color: "#ec361e"}, '& .MuiSvgIcon-root': {fontSize: 25}}}/>}
                                label={<label className={'radio-label'}>Evening course</label>}
                                value={'Evening'}
                            />
                        </RadioGroup>
                        <RadioGroup onChange={(event, value) => handleLanguageChange(value)}
                                    defaultValue={'Norwegian'}>
                            <h3 className={'choice-title'}>Language</h3>
                            <FormControlLabel
                                control={<Radio
                                    sx={{'&.Mui-checked': {color: "#ec361e"}, '& .MuiSvgIcon-root': {fontSize: 25}}}/>}
                                label={<label className={'radio-label'}>Norwegian</label>}
                                value={'Norwegian'}
                            />
                            <FormControlLabel
                                control={<Radio
                                    sx={{'&.Mui-checked': {color: "#ec361e"}, '& .MuiSvgIcon-root': {fontSize: 25}}}/>}
                                label={<label className={'radio-label'}>English</label>}
                                value={'English'}
                            />
                        </RadioGroup>
                        <RadioGroup  defaultValue={1}
                                    onChange={(event, value) => handleGroupChange(value)}>
                            <h3 className={'choice-title'}>Group size</h3>
                            <FormControlLabel
                                control={<Radio
                                    sx={{'&.Mui-checked': {color: "#ec361e"}, '& .MuiSvgIcon-root': {fontSize: 25}}}/>}
                                label={<label className={'radio-label'}>One person</label>}
                                value={1}
                            />
                            <FormControlLabel
                                control={<Radio
                                    sx={{'&.Mui-checked': {color: "#ec361e"}, '& .MuiSvgIcon-root': {fontSize: 25}}}/>}
                                label={<label className={'radio-label'}>Five people</label>}
                                value={5}
                            />
                        </RadioGroup>
                        <h3 className={'date-choice-title'}>Choose a date</h3>
                        <input onChange={(event) => handleDateChange(event.target.value)} key={productId + choices.date}
                               className={'date-chooser'} type={'date'} min={getTomorrowsDate()}
                               defaultValue={getTomorrowsDate()}/>
                        <h2 className={'price'}>{price},-</h2>
                    </form>
                    <button onClick={() => isLogged ? setDisplayModal(true) : navigate("/login")} className={'buynow-button'}>SIGN UP NOW</button>
                </div>
            </div>
            <div className={"related-products-wrapper"}>
                <h1 id={'related-products-header'} className={'related-products-header'}>Related products</h1>
                <hr />
                {
                    /*
                    * Displays the modal with info over the product you checked out.
                    */
                    displayModal ?
                        <CheckOutModal timeOfDay={choices.timeOfDay} language={choices.language}
                                       groupSize={choices.groupSize} date={choices.date} price={price}/>
                        : null
                }
                <div id={'related-products'} className={'related-products'}>
                    {
                        relatedProducts.length > 0 ? relatedProducts.map((product) => {
                            return (
                                <div className={'related-product'}>
                                    <h4>{product.productName}</h4>
                                    <a key={product.productId} href={'/checkout/' + product.productId}
                                       className={'related-product-image'}>
                                        <img alt={'Related product, ' + product.productName} className={'related-product-images'}
                                             src={'/images/squoosed-product' + product.productId + '.jpg'}/>
                                    </a>
                                </div>
                            )
                        }) : null
                    }
                </div>
            </div>
        </section>
    )
};

export default CheckoutSection;
