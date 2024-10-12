import QuizCard from "./QuizCard";
import javascriptLogo from "./assets/card-language-images/javascript-logo.webp";
import phpLogo from "./assets/card-language-images/php-logo.png";

//List of courses
let listQuizes = [
  {
    imagePath: javascriptLogo,
    title: "Javascript",
    description: "A Javascript quiz",
    difficultyLevel: 1,
  },
  {
    imagePath: phpLogo,
    title: "PHP",
    description: "A PHP quiz",
    difficultyLevel: 3,
  },
];

function App() {
  let listQuizRender = listQuizes.map((quiz) => (
    <QuizCard
      imagePath={quiz.imagePath}
      title={quiz.title}
      description={quiz.description}
      difficultyLevel={quiz.difficultyLevel}
    ></QuizCard>
  ));
  return (
    <>
      <section>{listQuizRender}</section>
    </>
  );
}

export default App;
