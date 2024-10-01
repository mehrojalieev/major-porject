import React, { useState } from 'react';
import './CreateTemplatePage.scss';

const CreateTemplatePage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [questions, setQuestions] = useState([{ question: '', type: 'text' }]);

  const addQuestion = () => {
    setQuestions([...questions, { question: '', type: 'text' }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Backendga ma'lumotni jo'natish
  };

  return (
    <div className="template-page">
      <div className="template-container">
        <h2>Create Template</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Template Title"
            className="input"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="textarea"
          />
          {questions.map((q, index) => (
            <div key={index} className="question">
              <input
                type="text"
                value={q.question}
                onChange={(e) => {
                  const newQuestions = [...questions];
                  newQuestions[index].question = e.target.value;
                  setQuestions(newQuestions);
                }}
                placeholder="Question"
                className="input"
              />
              <select
                value={q.type}
                onChange={(e) => {
                  const newQuestions = [...questions];
                  newQuestions[index].type = e.target.value;
                  setQuestions(newQuestions);
                }}
                className="select"
              >
                <option value="text">Text</option>
                <option value="number">Number</option>
                <option value="choice">Multiple Choice</option>
              </select>
            </div>
          ))}
          <button type="button" onClick={addQuestion} className="add-btn">Add Question</button>
          <button type="submit" className="submit-btn">Create Template</button>
        </form>
      </div>
    </div>
  );
};

export default CreateTemplatePage;
