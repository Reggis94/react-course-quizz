import { useContext, useState } from "react";
import { QuizContext } from "./App";
import { useParams } from "react-router-dom";

function Question() {
  const listQuizes: any = useContext(QuizContext);
  const { id } = useParams();
  console.log(listQuizes);
  const quiz = listQuizes.find((quiz: any) => {
    return quiz.id == id;
  });
  let questionNumber = useState(0);
  let totalNumberQuestions = quiz.questions.length;
  return (
    <>
      <div>
        <form>
          <div>
            <b>Question 1/{totalNumberQuestions}</b>
            <p>The question?</p>
          </div>
          <div>
            <input type="radio" name="question-input" value="True" />
            <label>True</label>
            <input type="radio" name="question-input" value="False" />
            <label>False</label>
            <button type="submit">Validate</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Question;
