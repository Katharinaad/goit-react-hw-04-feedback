import { Component, useState } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { FeedbackOptions } from './Feedback/FeedbackOptions';

export function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = type => {
    setFeedback(prevFeedback => ({
      [type]: prevFeedback[type] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };
  const countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() >= 1) {
      return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    } else {
      return 0;
    }
  };

  const { good, neutral, bad } = this.state;
  const totalFeedback = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  // const feedbackGiven = good === 0 && neutral === 0 && bad === 0;
  const feedbackOpt = Object.keys(this.state);

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
            good={good}
            neutral={neutral}
            bad={bad}
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
