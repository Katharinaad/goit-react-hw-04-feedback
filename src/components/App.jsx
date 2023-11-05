import { useState } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { FeedbackOptions } from './Feedback/FeedbackOptions';

export function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = type => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };
  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() >= 1) {
      return Math.round((feedback.good / countTotalFeedback()) * 100);
    } else {
      return 0;
    }
  };
  const totalFeedback = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  // const feedbackGiven = good === 0 && neutral === 0 && bad === 0;
  const feedbackOpt = Object.keys(feedback);

  return (
    <>
      <Section title="Feedback App">
        <FeedbackOptions
          options={feedbackOpt}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      {totalFeedback > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
}
