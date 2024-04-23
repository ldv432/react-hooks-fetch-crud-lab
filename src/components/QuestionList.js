import React, {useEffect, useState} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({onQuestionDelete}) {
  const [questions, setQuestions] = useState([])

useEffect(()=> {
  fetch("http://localhost:4000/questions")
    .then(r => r.json())
    .then(data => setQuestions(data))
  }, [])



  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question, index) => (
        <QuestionItem 
        index={index}
        questions={questions}
        setQuestions={setQuestions}
        key={question.id}
        question={question} 
        prompt={question.prompt} 
        answers={question.answers}
        onQuestionDelete={onQuestionDelete}
        />
      ))}
      </ul>
    </section>
  );
}

export default QuestionList;
