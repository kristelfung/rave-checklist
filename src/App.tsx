import { ChangeEvent, useState } from "react";

const App = () => {
  const [points, setPoints] = useState(0);

  const positiveActivities = [
    {
      id: "moreSteps",
      label: "Taking More Steps Than Someone Else",
      emoji: "👣",
    },
    { id: "10kSteps", label: "Walking ≥ 10k Steps", emoji: "🚶" },
    { id: "climbing", label: "Climbing ≥ 1 Hour", emoji: "🧗" },
    { id: "running", label: "Per 5k Running", emoji: "🏃" },
    { id: "jumpRope", label: "Per 15 min Jump Rope", emoji: "⭐" },
    { id: "dancing", label: "Dancing ≥ 30 min", emoji: "💃" },
    { id: "hiking", label: "Hiking ≥ 1 Hour", emoji: "🏃‍♂️" },
    { id: "weights", label: "Lifting Weights ≥ 30 min", emoji: "🏋️" },
    { id: "bodyweight", label: "Bodyweight Workout ≥ 20 min", emoji: "💪" },
    { id: "legDay", label: "Leg Day (Squats, Deadlifts, Lunges)", emoji: "🦵" },
    { id: "core", label: "Core Workout ≥ 10 min", emoji: "🎯" },
    { id: "yoga", label: "Stretching/Yoga ≥ 20 min", emoji: "🧘" },
    { id: "protein", label: "High Protein Meal (> 25g)", emoji: "🥩" },
    {
      id: "proteinGoal",
      label: "Hitting Protein Goal (1g per lb)",
      emoji: "🎯",
    },
    {
      id: "homeCooking",
      label: "Eating Home-Cooked Meals All Day",
      emoji: "🍳",
    },
    { id: "water", label: "Drinking ≥ 2L Water", emoji: "💧" },
    { id: "noAlcohol", label: "No Alcohol or Sugary Drinks", emoji: "🚫" },
    {
      id: "fasting",
      label: "Intermittent Fasting (16:8 or 18:6)",
      emoji: "⏰",
    },
    { id: "coldShower", label: "Cold Shower/Ice Bath", emoji: "🧊" },
    { id: "sleep", label: "Sleeping ≥ 7 Hours", emoji: "😴" },
    {
      id: "raveStamina",
      label: "Practicing Rave Stamina (Shuffling, Jumping)",
      emoji: "🕺",
    },
  ];

  const negativeActivities = [
    { id: "eatingOut", label: "Eating Out", emoji: "🍔" },
    { id: "sugarBinge", label: "Sugary/Snack Binge (> 500 kcal)", emoji: "🍪" },
    { id: "alcohol", label: "Drinking Alcohol", emoji: "🍺" },
    { id: "lowSteps", label: "< 5k Steps in a Day", emoji: "🛋️" },
  ];

  const handleActivityToggle =
    (isPositive: number) => (event: ChangeEvent<HTMLInputElement>) => {
      const change = isPositive ? 1 : -1;
      setPoints(points + (event.target.checked ? change : -change));
    };

  return (
    <div className="container">
      <div className="header">
        <div className="header-content">
          <span>RAVE BODY CHALLENGE</span>
          <div className="points-display">
            <span className="points-value">{points}</span>
            <span>✨</span>
          </div>
        </div>
      </div>

      <div className="main-content">
        <div className="section">
          <div>
            <h2 className="section-heading positive-heading">
              <span>✨</span>
              Positive Points
            </h2>
            <div className="activity-list">
              {positiveActivities.map((activity) => (
                <div key={activity.id} className="activity-item">
                  <input
                    type="checkbox"
                    id={activity.id}
                    onChange={handleActivityToggle(true)}
                    className="activity-checkbox positive-checkbox"
                  />
                  <label htmlFor={activity.id} className="activity-label">
                    <span className="emoji">{activity.emoji}</span>
                    {activity.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="section-heading negative-heading">
              <span>❌</span>
              Negative Points
            </h2>
            <div className="activity-list">
              {negativeActivities.map((activity) => (
                <div key={activity.id} className="activity-item">
                  <input
                    type="checkbox"
                    id={activity.id}
                    onChange={handleActivityToggle(false)}
                    className="activity-checkbox negative-checkbox"
                  />
                  <label htmlFor={activity.id} className="activity-label">
                    <span className="emoji">{activity.emoji}</span>
                    {activity.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="footer">
          <p className="footer-text">
            Goal: Get the highest score possible every day & get rave-ready!
            Track your progress by checking off completed activities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
