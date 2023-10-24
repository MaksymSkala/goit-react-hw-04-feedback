import React, { useState } from 'react';
import Statistics from './Statistics/Statistics.jsx';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions.jsx';
import Section from './Section/Section.jsx';
import Notification from './Notification/Notification.jsx';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedbackPercentage = () => {
    return totalFeedback === 0 ? 0 : Math.round((feedback.good / totalFeedback) * 100);
  };

  const feedbackOptions = [
    { type: 'good', label: 'Good' },
    { type: 'neutral', label: 'Neutral' },
    { type: 'bad', label: 'Bad' },
  ];

  return (
    <div className="component-class">
      <Section title="Please leave feedback">
        <FeedbackOptions options={feedbackOptions} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      <Section title="Statistics">
        {totalFeedback === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
};

export default App;