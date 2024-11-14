const Modal=({itemData,show,onclose})=>{
    const data=itemData;
    console.log(itemData);
    if(!show){
        document.body.style.overflow="auto";
        return null;

    }
    else{
        document.body.style.overflow="hidden";
    }
    console.log(show);
    
    
    return(
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onclose}>x</button>
                <div className="details">
                <h2>{data[0].strMeal}</h2>
                <h4>{data[0].strCategory}</h4>
                </div>
                <img src={data[0].strMealThumb} className="modal-img" alt="" />
                <p>{data[0].strInstructions}</p>
            </div>

        </div>
    )
}
export default Modal;