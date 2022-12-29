import React, { useState } from 'react';


const Menu = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) =>{
        setToggleState(index);
    }

  return (
    
    <div className='main-content'>
        <div className='restaurant-card'>
            <div className='image'>
                <img src='/images/kfc.png'/>
            </div>
            <div className='restaurant-details'>
                <h2>KFC</h2>
                <p>Abids, Hyderabad</p>
                <p><img src='/images/rating.png'/><span>4.5 Rating | 09:00 A.M - 11:00 P.M</span></p>
            </div>
        </div>
        <div className='item-category'>
            <h3>Categories</h3>
            <ul>
                <li className={toggleState === 1 ? "tabs active" : "tabs"} onClick={()=>toggleTab(1)}>Pizza</li>
                <li className={toggleState === 2 ? "tabs active" : "tabs"} onClick={()=>toggleTab(2)}>Bread</li>
                <li className={toggleState === 3 ? "tabs active" : "tabs"} onClick={()=>toggleTab(3)}>Shakes</li>
                <li className={toggleState === 4 ? "tabs active" : "tabs"} onClick={()=>toggleTab(4)}>Ice Cream</li>
                <li className={toggleState === 5 ? "tabs active" : "tabs"} onClick={()=>toggleTab(5)}>Cakes</li>
                <li className={toggleState === 6 ? "tabs active" : "tabs"} onClick={()=>toggleTab(6)}>Juices</li>
            </ul>
            
        </div>
        <div className='item-list'>
            <div className="box">
                <input type="text" className="search-input" placeholder="Search for dishes"/>
                <img src='/images/search.png'/>
            </div>
            <div className=''></div>
            <div className={toggleState === 1 ? "content active-content" : "content"}>
                <h2>Pizza's (4 items)</h2>
                <div className='items'>
                    <ul>
                        <li>
                            <div className='non-veg'></div>
                            <h2>Chicken Pizza</h2>
                            <p>₹ 376</p>
                        </li>
                        <div className='hr'></div>
                        <li>
                            <div className='veg'></div>
                            <h2>Paneer Cheese Pizza</h2>
                            <p>₹ 350</p>
                        </li>
                        <div className='hr'></div>
                        <li>
                            <div className='veg'></div>
                            <h2>Veg Cheese Pizza</h2>
                            <p>₹ 260</p>
                        </li>
                        <div className='hr'></div>
                        <li>
                            <div className='non-veg'></div>
                            <h2>Chicken Cheese Pizza</h2>
                            <p>₹ 610</p>
                        </li>
                        <div className='hr'></div>
                    </ul>
                </div>
               
            </div>
            <div className={toggleState === 2 ? "content active-content" : "content"}>
                <h2>Bread (4 items)</h2>
                <div className='items'>
                    <ul>
                        <li>
                            <div className='veg'></div>
                            <h2>Fruit Bread</h2>
                            <p>₹ 36</p>
                        </li>
                        <div className='hr'></div>
                        <li>
                            <div className='veg'></div>
                            <h2>Milk Bread</h2>
                            <p>₹ 23</p>
                        </li>
                        <div className='hr'></div>
                        <li>
                            <div className='veg'></div>
                            <h2>Brown Bread</h2>
                            <p>₹ 45</p>
                        </li>
                        <div className='hr'></div>
                        <li>
                            <div className='veg'></div>
                            <h2>Wheat Bread</h2>
                            <p>₹ 30</p>
                        </li>
                        <div className='hr'></div>
                    </ul>
                </div>
            </div>
            <div className={toggleState === 3 ? "content active-content" : "content"}>
                <h2>Shakes (3 items)</h2>
                <div className='items'>
                    <ul>
                        <li>
                            <div className='veg'></div>
                            <h2>Oreo Milkshake</h2>
                            <p>₹ 130</p>
                        </li>
                        <div className='hr'></div>
                        <li>
                            <div className='veg'></div>
                            <h2>Nutella fruit shake</h2>
                            <p>₹ 110</p>
                        </li>
                        <div className='hr'></div>
                        <li>
                            <div className='veg'></div>
                            <h2>Chocolate chip milkshake</h2>
                            <p>₹ 140</p>
                        </li>
                        <li>
                            <div className='veg'></div>
                            <h2>Banana milkshake</h2>
                            <p>₹ 140</p>
                        </li>
                        <div className='hr'></div>
                    </ul>
                </div>
            </div>
            <div className={toggleState === 4 ? "content active-content" : "content"}>
                <h2>Ice Cream (4 items)</h2>
                <div className='items'>
                    <ul>
                        <li>
                            <div className='veg'></div>
                            <h2>Choco Chip Icecream</h2>
                            <p>₹ 160</p>
                        </li>
                        <div className='hr'></div>
                        <li>
                            <div className='veg'></div>
                            <h2>Pista Icecream</h2>
                            <p>₹ 140</p>
                        </li>
                        <div className='hr'></div>
                        <li>
                            <div className='veg'></div>
                            <h2>Vanilla Icecream</h2>
                            <p>₹ 110</p>
                        </li>
                        <li>
                            <div className='veg'></div>
                            <h2>Mixed Fruit Icecream</h2>
                            <p>₹ 140</p>
                        </li>
                        <div className='hr'></div>
                    </ul>
                </div>
            </div>
            <div className={toggleState === 5 ? "content active-content" : "content"}>
                <h2>Cakes (4 items)</h2>
                <div className='items'>
                    <ul>
                        <li>
                            <div className='veg'></div>
                            <h2>Chocolate Cake</h2>
                            <p>₹ 360/kg</p>
                        </li>
                        <div className='hr'></div>
                        <li>
                            <div className='veg'></div>
                            <h2>Vanilla Cake</h2>
                            <p>₹ 280/kg</p>
                        </li>
                        <div className='hr'></div>
                        <li>
                            <div className='veg'></div>
                            <h2>Nutella Chocolate Chips Cake</h2>
                            <p>₹ 450/kg</p>
                        </li>
                        <div className='hr'></div>
                        <li>
                            <div className='veg'></div>
                            <h2>Plum Cake</h2>
                            <p>₹ 200/kg</p>
                        </li>
                        <div className='hr'></div>
                    </ul>
                </div>
            </div>
            <div className={toggleState === 6 ? "content active-content" : "content"}>
                <h2>Juices</h2>
                <div className='items'>
                    <ul>
                        <li>
                            <div className='veg'></div>
                            <h2>Watermelon Juice</h2>
                            <p>₹ 50</p>
                        </li>
                        <div className='hr'></div>
                        <li>
                            <div className='veg'></div>
                            <h2>Mango Juice</h2>
                            <p>₹ 50</p>
                        </li>
                        <div className='hr'></div>
                        <li>
                            <div className='veg'></div>
                            <h2>Banana Juice</h2>
                            <p>₹ 40</p>
                        </li>
                        <li>
                            <div className='veg'></div>
                            <h2>Badam Milk</h2>
                            <p>₹ 60</p>
                        </li>
                        <div className='hr'></div>
                    </ul>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Menu;