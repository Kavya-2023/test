
import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

function App() {
  const [questionType,setQuestionType]=useState("");
  const navigate=useNavigate();
  const handleSlectChange=(e)=>{
    const selectedType=e.target.value;
    setQuestionType(selectedType);
    if (selectedType ==="MCQ"){
      navigate('/mcq');
    }else if(selectedType === "FIB"){
      navigate('/fib');
    }
    else if(selectedType === "Numeric"){
      navigate('/numeric');
    }
    else{
      navigate('/');
    }
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 ">
      <h1 className="md:text-4xl font-bold mb-4  sm:text-sm text-blue-500">Submit Your Questions</h1>
      <p className="md:text-lg mb-4 md:text-md sm:text-sm">Choose Option to select Question Type</p>
      <select
      value={questionType}
      onChange={handleSlectChange}
      className="mb-4 p-2 border border-gray-300 rounded-md"
      >
        <option value="">Select</option>
        <option value="MCQ">MCQ</option>
        <option value="FIB">Fill in the Blank</option>
        <option value="Numeric">Numeric</option>
      </select>
      <button className="border-2 border-gray-300 p-2">
        <Link to="/display" className="text-blue-400 hover:underline">
           To see Questions
        </Link></button>
    </div>
  );
}

export default App;
