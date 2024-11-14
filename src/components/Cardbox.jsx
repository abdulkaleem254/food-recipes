import { useState } from "react";
import "../App.css"
import Modal from "./Modal";
export default function Cardbox(props) {
    const [showModal,setShowModal]=useState(false);
    const [ItemData,setItemData]=useState()
    const data = props.data;
    console.log(data);
    const getID=(id)=>{
        const item=data.filter(item=>item.idMeal==id);
        setItemData(item);
        console.log(item);
        setShowModal(!showModal);

        
    }
    const handleClose=()=>{
        setShowModal(false);
    }
    return (
        <>
        <div className="box">
            {data?(<><p>Found {data.length} results</p>
        <div className="card-items">
            {data && data.map((item) => {
                return (
                    <div className="card-section">
                        <div key={item.idMeal} className="card-img"><img src={item.strMealThumb} alt={item.strMeal} /></div>

                        <div className="card-body">
                            <h2>{item.strMeal}</h2>
                            <p className="category">{item.strCategory} </p>
                            <p>{item.strInstructions.slice(0, 110) + "..."}</p>
                            <div className="actions">
                                <a href={item.strYoutube}>Watch video</a>
                                <button className="recipe-btn" onClick={()=>{getID(item.idMeal)}}>Check Recipe</button>
                            </div>
                        </div>
                    </div>
                )
            })}


        </div>
            </>):(<p>No results found`:)`</p>)}
            

        </div>
        <Modal itemData={ItemData} show={showModal} onclose={handleClose}/>
        </>
        

    )
}
