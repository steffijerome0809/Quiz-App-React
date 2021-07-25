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

    })

}
export default QuizForm;