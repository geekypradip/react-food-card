import './card.css'
function Heading() {
    return ( 
        <div className='heading_holder'>
            <div className='title'>Tortellini</div>
            <div className='icon_holder'>
                <div className='icon'>
                    <img src="https://github.com/geekypradip/react-food-card/blob/main/src/foodCartCompont/images/Screenshot%20from%202021-11-19%2011-36-58.png?raw=true" alt="" />
                </div>
                <div className='icon'>
                    <img src="https://github.com/geekypradip/react-food-card/blob/main/src/foodCartCompont/images/Screenshot%20from%202021-11-19%2011-37-16.png?raw=true" alt="" />
                </div>
                <div className='icon'>
                    <img src="https://github.com/geekypradip/react-food-card/blob/main/src/foodCartCompont/images/Screenshot%20from%202021-11-19%2011-37-29.png?raw=true" alt="" />
                </div>
            </div>
        </div>
     );
}

export default Heading;