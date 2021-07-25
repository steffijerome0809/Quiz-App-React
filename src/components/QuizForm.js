import React , {useState,useEffect} from 'react';
import API from '../utils/API';
import {Base64} from 'js-base64';


const QuizForm=()=>

{

    const[state,setState]=useState({
        apiResults:[],
        categoryId:'9',
        allCategories:[],
        correctAnswers:[],
        question1:'',
        question2:'',
        question3:'',
        question4:'',
        question5:'',
        question6:'',
        question7:'',
        question8:'',
        question9:'',
        question10:'',
        question11:'',
        question12:'',
        question13:'',
        question14:'',
        question15:'',
        userAnswers:[],
        score:0,
        showAnswers:false,
        filterDisplay:true,
        displayScore:false

    });
    // Component loads and get the list of questions from all possible categories
    useEffect(()=>{
        API.getPossibleCategories().then(response=>{
            setState({...state,allCategories:response.data.trivia_categories});
        })

    },[]);

    //set the category that was selected
    const handleChange=(e)=>{
        e.preventDefault();
        setState({...state,categoryId:e.target.value});
    }


    //Conditional Rendering to display the filter form or Questions Div
    const displayFilter=()=>{
        if(state.filterDisplay===true)
        {
            return(
                <FilterForm
                handleChange={handleChange}
                filterDisplay={state.filterDisplay}
                handleAllSubmit={handleAllSubmit}
                handleCategorySubmit={handleCategorySubmit}
                allCategories={state.allCategories}
                />
            )
        }
        else{
            return(
                <QuestionDiv/>
            )
        }
    }

    return(
        <div className="container">
         {displayFilter()}

        </div>
    )
}
export default QuizForm;