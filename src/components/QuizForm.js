import React , {useState,useEffect} from 'react';
import API from '../utils/API';
import {Base64} from 'js-base64';
import FilterForm from './FilterForm';
import QuestionDiv from './QuestionDiv';


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
    // USer select all possible categories button 

    const handleAllSubmit=(event)=>{
        event.preventDefault();
        API.getQuestionsAnyCategory().then(response=>{
            decodeResults(response.data.results);
        })
    }
  // the api response comes with base-64 encoding , so the js-base64 package will decode it 
  // sort the answers, create an object the has category, question and answers
  const decodeResults=(results)=>{
        const decoded=[];
        results.forEach(object=>{
            const allOptions=[
                Base64.decode(object.incorrect_answers[0]),
                Base64.decode(object.incorrect_answers[1]),
                Base64.decode(object.incorrect_answers[2]),
                Base64.decode(object.correct_answer),
            ];
            allOptions.sort();
            const questionObject={
                category: Base64.decode(object.category),
                question: Base64.decode(object.question),
                correct_answer: Base64.decode(object.correct_answer),
                all_answers: allOptions,
            }
            decoded.push(questionObject);
        });
        grabCorrectAnswers(decoded);
    }
//  correct answers for the category are moved in an array
    const grabCorrectAnswers=(results)=>{
        const correctAnswers=[];
        results.forEach(result=>{
            correctAnswers.push(result.correct_answer);
        });
        setState({
            ...state,
            apiResults:results,
            correctAnswers:correctAnswers,
            filterDisplay:false
        })
    }

    //set the category that was selected
    const handleChange=(e)=>{
        e.preventDefault();
        setState({...state,categoryId:e.target.value});
    }
    //Similary this function is called when user selects one category
    const handleCategorySubmit = (event) => {
        event.preventDefault();
        API.getQuestionsByCategory(state.categoryId).then((response) => {
          decodeResults(response.data.results);
        });
      };

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
        {displayScore()}
        {displayFilter()}
      </div>
    )
}
export default QuizForm;