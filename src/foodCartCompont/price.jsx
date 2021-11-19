import './card.css';
import Btn from "./orderBtn"
function PriceAndBtn() {
    return (  
        <div className='price_and_btn_holder'>
            <div className='original_price'>$23.90</div>
            <div className='discount_price'>$29.90</div>
            <div><Btn/></div>
              
        </div>
    );
}

export default PriceAndBtn;