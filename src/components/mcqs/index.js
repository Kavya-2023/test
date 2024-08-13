import React ,{useState} from 'react'
import { useQuestionContext } from '../../contexts/questions'; 
const MCQs = () => {
    const [questionText, setQuestionText] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);
  const { addQuestion } = useQuestionContext();
  const handleOptionChange=(index,value)=>{
    const newOption=[...options];
    newOption[index]=value;
    setOptions(newOption)
  }
  const handleCorrectAnswerChange=(index)=>{
    setCorrectAnswerIndex(index);
  }
  const handleSaveQuestion=()=>{
    if (!questionText || options.some(option => option.trim() === "") || correctAnswerIndex === null) {
        alert("Please fill all the feilds");
        return;
      }
  
      const newQuestion = {
        questionText,
        questionType: "MCQ",
        options,
        correctAnswer: options[correctAnswerIndex], 
      };
      addQuestion(newQuestion);
      console.log("Question Saved:", newQuestion);
      setQuestionText("");
      setOptions(["", "", "", ""]);
      setCorrectAnswerIndex(null);
  }
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">MCQ Question Form</h2>
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
      <label className="block text-lg font-medium text-gray-700">Options:</label>
      {options.map((option, index) => (
        <div key={index} className="flex items-center mb-2">
          <span className="mr-2 text-lg font-medium text-gray-700">
            {String.fromCharCode(65 + index)}.
          </span>
          <input
            type="text"
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
            placeholder={`Write an answer for option ${index + 1}`}
            className="mr-2 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <input
            type="checkbox"
            checked={correctAnswerIndex === index}
            onChange={() => handleCorrectAnswerChange(index)}
            className="mr-2 mt-1"
          />
          <span className="text-gray-700">X</span>
        </div>
      ))}
    </div>
    <button
      onClick={handleSaveQuestion}
      className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none  focus:ring-indigo-500"
    >
      Save Question
    </button>
  </div>
  )
}

export default MCQs
