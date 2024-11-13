export default function Cardbox(props) {
    const data = props.data;
    console.log(data);


    return (
        <div className="box">
            {data?(<><p>Found {data.length} results</p>
        <div className="card-items">
            {data && data.map((item) => {
                return (
                    <div className="card-section">
                        <div key={item.id} className="card-img"><img src={item.strMealThumb} alt={item.strMeal} /></div>

                        <div className="card-body">
                            <h2>{item.strMeal}</h2>
                            <p className="category">{item.strCategory} </p>
                            <p>{item.strInstructions.slice(0, 110) + "..."}</p>
                            <a href={item.strYoutube}>Watch video</a>
                        </div>
                    </div>
                )
            })}


        </div>
            </>):(<p>No results found</p>)}
            

        </div>

    )
}
