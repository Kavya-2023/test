import React from 'react';
import { useQuestionContext } from '../../contexts/questions'; 

const DisplayQuestions = () => {
  const { questions } = useQuestionContext(); 
  console.log(questions);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">All Questions</h2>
      {questions.length === 0 ? (
        <p className="text-gray-600">No questions available.</p>
      ) : (
        <ul className="list-decimal pl-6">
          {questions.map((question, index) => (
            <li key={index} className="mb-4">
              <div className="mb-2">
                <strong>Question Text:</strong> {question.questionText} 
              </div>
              <div className="mb-2">
                <strong>Type:</strong> {question.questionType}
              </div>
              {question.questionType === 'MCQ' && (
                <div className="mb-2">
                  <strong>Options:</strong>
                  <ol className="letter-list pl-6 mt-2 ">
                    {question.options.map((option, idx) => (
                      <li key={idx} className="text-gray-600">
                        {option}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
              <div >
                <strong>Correct Answer:</strong> {question.correctAnswer}
              </div>
             
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DisplayQuestions;
