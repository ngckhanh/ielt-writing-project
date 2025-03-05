"use client";

import { useState } from "react";

interface Question {
  text: string;
  topic: string;
}

export default function Task2PracticePage() {
  const [filter, setFilter] = useState<string>(""); // For search input
  const [selectedTopic, setSelectedTopic] = useState<string>(""); // For topic dropdown

  // List of questions with associated topics
  const questions: Question[] = [
    {
      text: "The first chart below shows the percentage of school-aged girls and boys who were at secondary school in four regions of the world in 2000. The second chart shows the percentages of college-aged men and women in higher education in the same year.",
      topic: "bar chart",
    },
    {
      text: "The line graph below illustrates the percentage of people using different modes of transport (car, bus, train) in a European city between 1990 and 2020. Summarize the information by selecting and reporting the main features and making comparisons where relevant.",
      topic: "line graph",
    },
    {
      text: "The bar chart below shows the average number of hours worked per week in four European countries in 2022. Summarize the information by selecting and reporting the main features and making comparisons where relevant.",
      topic: "bar chart",
    },
    {
      text: "The table below provides information about the sales of five different products in a supermarket chain over a six-month period. Summarize the information by selecting and reporting the main features and making comparisons where relevant.",
      topic: "table",
    },
    {
      text: "The pie charts below show the distribution of energy consumption in the United States in 1990 and 2020. Summarize the information by selecting and reporting the main features and making comparisons where relevant.",
      topic: "pie chart",
    },
  ];

  // Handlers for input changes
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => setFilter(e.target.value);
  const handleTopicChange = (e: React.ChangeEvent<HTMLSelectElement>) => setSelectedTopic(e.target.value);

  // Filtered questions based on search and topic
  const filteredQuestions = questions.filter((question) => {
    const matchesFilter = question.text.toLowerCase().includes(filter.toLowerCase());
    const matchesTopic = selectedTopic ? question.topic === selectedTopic : true;
    return matchesFilter && matchesTopic;
  });

  // Extract unique topics for the dropdown
  const uniqueTopics = Array.from(new Set(questions.map((q) => q.topic)));

  return (
    <div className="p-4 max-w-4xl mx-auto">
      {/* Filters Section */}
      <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
        {/* Search Input */}
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search questions..."
            value={filter}
            onChange={handleFilterChange}
            className="h-full w-full p-3 border rounded-lg shadow-sm"
          />
        </div>

        {/* Topic Filter Dropdown */}
        <div className="flex-1 mt-3 md:mt-0">
          <select
            value={selectedTopic}
            onChange={handleTopicChange}
            className="h-full w-full p-3 border rounded-lg shadow-sm"
          >
            <option value="">All Topics</option>
            {uniqueTopics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Questions List */}
      <div>
        <h2 className="text-xl font-semibold mb-4">List of Questions</h2>
        <ul className="space-y-3">
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((question, index) => (
              <li
                key={index}
                className="p-3 border-1 border-gray-300 bg-white hover:bg-gray-100 rounded-lg shadow-sm cursor-pointer"
              >
                {question.text}
              </li>
            ))
          ) : (
            <li className="text-gray-500">No questions match your filter.</li>
          )}
        </ul>
      </div>
    </div>
  );
}
