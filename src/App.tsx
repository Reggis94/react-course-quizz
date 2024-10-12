import QuizCard from "./QuizCard";
import javascriptLogo from "./assets/card-language-images/javascript-logo.webp";
import phpLogo from "./assets/card-language-images/php-logo.png";

//List of courses
let listQuizes = [
  {
    imagePath: javascriptLogo,
    title: "Javascript",
    description: "A Javascript quizz",
    difficultyLevel: 1,
  },
  {
    imagePath: phpLogo,
    title: "PHP",
    description: "A PHP quizz",
    difficultyLevel: 1,
  },
];

function App() {
  let listQuizRender = listQuizes.map((quizz) => (
    <QuizCard imagePath={quizz.imagePath}></QuizCard>
  ));
  return <>{listQuizRender}</>;
}

export default App;
