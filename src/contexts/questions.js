import React, { createContext, useState, useContext, useEffect } from 'react';

export const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  console.log(questions)

 
  useEffect(() => {
    const savedQuestions = localStorage.getItem('questions');
    if (savedQuestions) {
      setQuestions(JSON.parse(savedQuestions));
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem('questions', JSON.stringify(questions));
  }, [questions]);

  const addQuestion = (question) => {
    setQuestions((prevQuestions) => [...prevQuestions, question]);
  };

  return (
    <QuestionContext.Provider value={{ questions, addQuestion }}>
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestionContext = () => {
  return useContext(QuestionContext);
};
