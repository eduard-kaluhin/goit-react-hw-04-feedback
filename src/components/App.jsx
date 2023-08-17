import  { useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = { good, neutral, bad };

  const onClick = type => {
    switch (type) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  // Метод для підрахунку загальної суми відгуків
  const getTotalFeedback = () => {
    return good + neutral + bad;
  };
  // Метод для підрахунку відсотку позитивних відгуків
  const getPositivePercentage = () => {
    const totalFeedback = getTotalFeedback();
    return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
  };
 
 
    const totalFeedback = getTotalFeedback();
  const positivePercentage = getPositivePercentage(); 

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions feedbackOptions={options} onClick={onClick} />
        {totalFeedback === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        totalFeedback={totalFeedback}
        positivePercentage={positivePercentage}
        feedbackOptions={options} 
          />
        )}
      </Section>
    );
  };

export default App;
