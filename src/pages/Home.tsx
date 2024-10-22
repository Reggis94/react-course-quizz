import { useContext } from "react";
import QuizCard from "../QuizCard";
import { QuizContext } from "../App";

function Home() {
  const listQuizes: any = useContext(QuizContext);
  let listQuizRender = listQuizes.map((quiz: any) => (
    <QuizCard
      id={quiz.id}
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

export default Home;
