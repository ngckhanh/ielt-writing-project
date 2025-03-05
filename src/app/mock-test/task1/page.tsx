'use client';

import { useState } from 'react';

export default function Task1Submission() {
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content,
          userId: 1, // Replace with dynamic user ID
        }),
      });

      if (response.ok) {
        setMessage('Submission successful!');
        setContent('');
      } else {
        setMessage('Submission failed.');
      }
    } catch (error) {
      console.error(error);
      setMessage('An error occurred.');
    }
  };

  return (
    <div>
      <h1>Task 1 Submission</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter your essay here..."
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
