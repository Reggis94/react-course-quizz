//IGNORING PROPTYPES AT THIS STAGE OF THE COURSE

// import PropTypes from "prop-types";

// QuizCard.PropTypes = {
//   imagePath: PropTypes.string,
//   title: PropTypes.string,
//   description: PropTypes.string,
//   difficultyLevel: PropTypes.number,
// };

function QuizCard(props: any) {
  return (
    <article>
      <div className="logo">
        <img src={props.imagePath} style={{ width: 100, height: 100 }} />
      </div>
      <div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <span>Difficulty: {props.difficultyLevel}</span>
      </div>
    </article>
  );
}
export default QuizCard;
