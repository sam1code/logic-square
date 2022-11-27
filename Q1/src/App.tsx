import CSS from "csstype";
import Question1 from "./q1/Question1";

function App() {
  return (
    <div className="App">
      <Question1 />
      <div style={style.submission}>
        Submittion by: Soumyakanta Pattanaik <br /> Email: samcse95@gmail.com{" "}
        <br />
        Github: github.com/sam1code <br /> Phone: 8144303002 <br />
        Linkedin: linkedin.com/in/samcse95
      </div>
    </div>
  );
}

export default App;

interface IAppStyle {
  submission: CSS.Properties;
  q1: CSS.Properties;
}

const style: IAppStyle = {
  submission: {
    position: "absolute",
    right: "10px",
    bottom: "10px",
  },
  q1: {},
};
