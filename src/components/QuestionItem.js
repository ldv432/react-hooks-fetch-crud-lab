import React from "react";

function QuestionItem({questions, setQuestions, onQuestionDelete, question, index }) {
  const { id, prompt, answers, correctIndex } = question;
  const count = index += 1

  function handleChange(event) {
    console.log(event)
    // const { name, value } = event.target
    console.log(event.target.value)
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        correctIndex: parseInt(event.target.value),
      })
    })

  }

  function handleDeleteClick() {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE"
  })
    .then(r => r.json())
    .then(() => {
      const updatedArray = questions.filter(question => question.id !== id)
      setQuestions(updatedArray)
    })
  }

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {count}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleChange} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
