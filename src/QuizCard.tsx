//IGNORING PROPTYPES AT THIS STAGE OF THE COURSE

import { Link } from "react-router-dom";

// import PropTypes from "prop-types";

// QuizCard.PropTypes = {
//   imagePath: PropTypes.string,
//   title: PropTypes.string,
//   description: PropTypes.string,
//   difficultyLevel: PropTypes.number,
// };

function QuizCard(props: any) {
  //The difficulty element must have a different color depending on the value of props.difficultyLevel
  //We must use conditions but it is not possible to use conditions inside JSX
  console.log(props);
  return (
    <section className="quizCard">
      <div className="logo">
        <img src={props.imagePath} style={{ width: 100, height: 100 }} />
      </div>
      <div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <span
          style={{
            backgroundColor:
              props.difficultyLevel > 4
                ? "#f8d7da"
                : props.difficultyLevel > 2
                ? "#fff3cd"
                : "#d4edda",
            color:
              props.difficultyLevel > 4
                ? "#721c24"
                : props.difficultyLevel > 2
                ? "#856404"
                : "#155724",
            padding: "7px",
            borderRadius: "15px",
          }}
        >
          Difficulty: {props.difficultyLevel}
        </span>
        <button>
          <Link to={`/quiz/${props.id}`}>Start Quiz</Link>
        </button>
      </div>
    </section>
  );
}
export default QuizCard;
