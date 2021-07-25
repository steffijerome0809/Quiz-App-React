import React from 'react';


const FilterForm=(props)=>{
    return(
    <form className="my-6">
        <div className="is-grouped">
            <p className="control">
                <button onClick={props.handleAllSubmit} id="allbtn" className="button is-fullwidth" type="submit">
                    I want Questions from All Categories 
                    </button>
            </p>
            <h2 className="my-4 control">OR ..</h2>
            <div className="filed is-grouped">
                <div className="control is-expanded">
                    <div className="select is-fullwidth">
                        <select onChange={props.handleChange} id="select">
                          {props.allCategories.map(category=>(
                        <option id="options" key={category.id} value={category.id}>
                            {category.name}
                        </option>
                          ))}
                        </select>
                    </div>
                </div>
            </div>
            <p className="control">
                <button onClick={props.handleCategorySubmit} id="searchbtn" className="button is-info" type="submit">
                    Choose Category
                </button>
            </p>
        </div>
    </form>
    )
}
export default FilterForm;