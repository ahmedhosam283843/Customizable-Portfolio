import profile from "../assets/profile.png";
import circle from "../assets/circle.svg";
import flutter from "../assets/flutter.png";
import python from "../assets/python.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import cpp from "../assets/cpp.png";
import git from "../assets/git.png";
import gymtopia from "../assets/gymtopia.png";
import gazara from "../assets/gazara.png";
import kotlin from "../assets/kotlin.png";
import java from "../assets/java.png";

function getImage(name) {
  switch (name) {
    case "gazara":
      return gazara;
    case "git":
      return git;
    case "profile":
      return profile;
    case "gymtopia":
      return gymtopia;
    case "java":
      return java;
    case "circle":
      return circle;
    case "flutter":
      return flutter;
    case "python":
      return python;
    case "javascript":
      return javascript;
    case "react":
      return react;
    case "kotlin":
      return kotlin;

    case "cpp":
      return cpp;
    default:
      return null;
  }
}

export default {
  profile,
  circle,
  flutter,
  python,
  react,
  cpp,
  gazara,
  kotlin,
  gymtopia,
  java,
  git,
  javascript,
  getImage,
};
