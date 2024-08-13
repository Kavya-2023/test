import React from 'react'
import { useState } from 'react';
import { useQuestionContext } from '../../contexts/questions'; 

const Numeric = () => {
    const [questionText, setQuestionText] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const { addQuestion } = useQuestionContext();
  const handleSaveQuestion=()=>{
    if(questionText.trim() || isNaN(correctAnswer) || correctAnswer.trim()==""){
        alert("Please fill all details");
        return;
    }
    const newQuestion = {
        questionText,
        questionType: "Numeric",
        correctAnswer: parseFloat(correctAnswer), 
      };
      addQuestion(newQuestion); 
      console.log("Numeric Question Saved:", newQuestion);
      setQuestionText("");
      setCorrectAnswer("");
  } 
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Numeric Question Form</h2>
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700">Question Text:</label>
        <input
          type="text"
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          placeholder='Enter question text here'
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700">Correct Answer:</label>
        <input
          type="number"
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
          placeholder='Enter correct answer here'
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <button
        onClick={handleSaveQuestion}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Save Question
      </button>
    </div>
  )
}

export default Numeric
