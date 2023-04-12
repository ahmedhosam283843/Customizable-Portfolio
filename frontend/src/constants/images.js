import profile from '../assets/profile.png';
import circle from '../assets/circle.svg';
import flutter from '../assets/flutter.png';
import python from '../assets/python.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import cpp from '../assets/cpp.png';
import git from '../assets/git.png';

function getImage(name) {
  switch (name) {
    case 'git':
      return git;
    case 'profile':
      return profile;
    case 'circle':
      return circle;
    case 'flutter':
      return flutter;
    case 'python':
      return python;
    case 'javascript':
      return javascript;
    case 'react':
      return react;
    case 'cpp':
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
  git,
  javascript,
  getImage,
};
