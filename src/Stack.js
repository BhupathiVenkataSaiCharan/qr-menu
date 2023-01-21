import React, {useState, useEffect} from 'react';

const Stack = () => {

    // const [toggleState, setToggleState] = useState(1);

    const [mainArray, setMainArray] = useState();

    // const toggleTab = (index, name, item) => {
    //     let array = item ? item : mainArray;
    //     setToggleState(index);
    //     const filteredArray = array.filter((item) => item.Category === name)
    //     setData(filteredArray);
    //     };

    const [data, setData] = useState([]); //solved from stackoverflow

    const [search,setSearch] = useState("");
        
    useEffect(() => {
        async function fetchData(){
          try {
            // const response = await fetch(API_URL, {
            //   headers: {
            //     'Authorization': `Bearer ${API_KEY}`,
            //   },
            // });
            // const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const response = await fetch('https://63b6952d1907f863aafa9342.mockapi.io/menu/')
            const data = await response.json();
            setData(data);
            // toggleTab(1, "Pizza", data);
            // setMainArray(data);
          } catch (error) {
            console.error(error);
          }
        }
    
        fetchData();
      }, []);

    const [vegOnly, setVegOnly] = useState(false);

    const handleVegInputChange = (e) => {
    const isChecked = e.target.checked;
    setVegOnly(isChecked);
    };

    // const filteredData =
    // vegOnly === false ? data : data.filter((item) => item.Type === "veg"); //from above to here for filter veg only


    const filteredData = data
    .filter((item) => {
      return item.Name.toLowerCase().includes(search.toLowerCase());
    })
    .filter((item) => {
      if (vegOnly) {
        return item.Type === "veg";
      }
      return true;
    })
    .filter((item) => {
      if (category !== "All") {
        return item.Category === category;
      }
      return true;
    });

    // changing hardcoded left menu


    // const allCategory = filteredData.map((curElem)=>{
    //     return curElem.Category;
    // });                                                                        (1st step)

// const allCategory = new Set(filteredData.map((curElem)=>{return curElem.Category;}));  (2nd step to remove duplicate category values)
    
    const allCategory = ["All",...new Set(filteredData.map((curElem)=> curElem.Category))]; // 3rd step to make it array

    console.log(allCategory);

    const [catItems, setCatItems] = useState(allCategory);


    // const filterItem = (category) =>{

    //     if(category === "All"){
    //         setData(mainArray);
    //         return;
    //     }

    //     const updatedItems = mainArray.filter((curElem)=>{
    //         return curElem.Category === category;
    //     })
    //     setData(updatedItems);
    // }
    const filterItem = (category) => {
        setCategory(category);
      };

    const [category, setCategory] = useState("All");


  return (
    <div className='first'>
        <nav>
            <label><img src='/images/logo.svg' /></label>
            <ul>
                <li><a href="#" className='help'>Help</a></li>
                <li><a href="#"><img src='/images/signin.png'/>Signin</a></li>
            </ul>
        </nav>
        <div className='resinfo'>
            <div className='resdata'>
                <div className='resimage'>
                    <img src='/images/kfc.png'/>
                </div>
                <ul>
                    <li><h3>Shah Ghouse Hotel & Restaurant</h3></li>
                    <li><p>Abids,Hyderabad</p></li>
                    <li><p><img src='/images/rating.png'/><span>4.5 Rating | 09:00 A.M - 11:00 P.M</span></p></li>
                </ul>
            </div>
        </div>
        <div className='resinfo2'>
            <div className='rescategory'>
                <ul>
                    {
                        allCategory.map((curClem, index)=>{
                            return (
                                <>
                                    <li
                                    style={{color: curClem === category ? "lightgreen" : "inherit"}} 
                                    key={index} onClick={() => filterItem(curClem)}>{curClem}</li>
                                </>
                            )
                        })
                    }
                    {/* <li className={toggleState === 1 ? "tabs active" : "tabs"} onClick={()=>{toggleTab(1); setData(mainArray)}}>All</li>
                    <li className={toggleState === 2 ? "tabs active" : "tabs"} onClick={()=>toggleTab(2, "Pizza")}>Pizza</li>
                    <li className={toggleState === 3 ? "tabs active" : "tabs"} onClick={()=>toggleTab(3, "Bread")}>Bread</li>
                    <li className={toggleState === 4 ? "tabs active" : "tabs"} onClick={()=>toggleTab(4, "Shakes")}>Shakes</li>
                    <li className={toggleState === 5 ? "tabs active" : "tabs"} onClick={()=>toggleTab(5, "Ice-Cream")}>Ice Cream</li>
                    <li className={toggleState === 6 ? "tabs active" : "tabs"} onClick={()=>toggleTab(6, "Cakes")}>Cakes</li>
                    <li className={toggleState === 7 ? "tabs active" : "tabs"} onClick={()=>toggleTab(7, "Juices")}>Juices</li> */}
                    {/* <li onClick={()=>setData(mainArray)}>All</li>
                    <li onClick={()=>filterItem("Pizza")}>Pizza</li>
                    <li onClick={()=>filterItem("Bread")}>Bread</li>
                    <li onClick={()=>filterItem("Shakes")}>Shakes</li>
                    <li onClick={()=>filterItem("Ice-Cream")}>Ice Cream</li>
                    <li onClick={()=>filterItem("Cakes")}>Cakes</li>
                    <li onClick={()=>filterItem("Juices")}>Juices</li> */}
                </ul>
            </div>

            <div className='resitems'>
                <div className="box">
                    <input type="text" className="search-input" placeholder="Search for dishes" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                    <img src='/images/search.png'/>
                </div>

                <div className="contents">
                {
                    data 
                    ? 
                        (
                        <div>
                            <div className='checkbox'>
                                <label>
                                    <input type="checkbox"
                                        value={vegOnly}
                                        onChange={handleVegInputChange}
                                    />
                                    Veg Only
                                </label>
                            </div>

                            <div className='items'>

                                {filteredData.map(item=>
                                    <div>
                                        <div className='itemslist' key={item.id}>
                                            <ul>
                                                <li className={item.Type === 'veg' ? 'veg' : 'non-veg'}></li>
                                                <li>{item.Name}</li>
                                                <li>₹ {item.Price}</li>
                                                <img src='/images/pizza1.jpg'/>
                                                <div className='hr'></div>
                                            </ul>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                        ) 
                    : 
                        (<div className='loading'>Loading...</div>)
                }
            </div>
            </div>
            
            <div className='rescart'></div>
        </div>
    </div>
  )
}

export default Stack;
