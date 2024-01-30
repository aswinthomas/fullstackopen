import { useState } from 'react'

const Button = (props) => {
  return (
    <button type="button" onClick={props.handleClick}>{props.name}</button>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, bad, neutral }) => {
  const total = good + neutral + bad
  if (total == 0) {
    return (
      <p>No feedback given</p>
    )
  }
  const positive = (good/total) + ' %'
  const average = (good * 1 + neutral * 0 + bad * -1) / total
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive} />
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button name="good" handleClick={() => setGood(good + 1)} />
      <Button name="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button name="bad" handleClick={() => setBad(bad + 1)} />
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />

    </div>
  )
}

export default App