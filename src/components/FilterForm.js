import React from 'react';
import './FilterForm.css';

const FilterForm=(props)=>{
    return(
    <form>
        <div>
            <p>
                <button onClick={props.handleAllSubmit}>
                    I want Questions from All Categories 
                    </button>
            </p>
            <h2>OR ..</h2>
            <div>
                <div>
                    <div>
                        <select onChange={props.handleChange}>
                          {props.allCategories.map(category=>(
                        <option id="options" key={category.id} value={category.id}>
                            {category.name}
                        </option>
                          ))}
                        </select>
                    </div>
                </div>
            </div>
            <p>
                <button onClick={props.handleCategorySubmit}>
                    Choose Category
                </button>
            </p>
        </div>
    </form>
    )
}
export default FilterForm;