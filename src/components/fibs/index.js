import React ,{useState }from 'react'
import { useQuestionContext } from '../../contexts/questions'; 
const FIBs = () => {
    const [questionText, setQuestionText] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const { addQuestion } = useQuestionContext(); 
  const handleSaveQuestion=()=>{
    if(!questionText.trim() || !correctAnswer.trim()){
        alert("Please fill all feilds");
        return;
    }
    const newQuestion={
        questionText,
        questionType:"FIB",
        correctAnswer,
    }
    addQuestion(newQuestion);
    setQuestionText("");
    setCorrectAnswer("");
    console.log("question fib saved");
  }
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">FIB Question Form</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Question Text:</label>
        <input
          type="text"
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter the question text"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Correct Answer:</label>
        <input
          type="text"
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter the correct answer"
        />
      </div>
      <button
        onClick={handleSaveQuestion}
        className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Save Question
      </button>
    </div>
  )
}

export default FIBs
