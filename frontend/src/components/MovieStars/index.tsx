import {ReactComponent as StarFull } from 'assets/img/vectStarFull.svg'
import {ReactComponent as StarHalf } from 'assets/img/vectStarHalf.svg'
import {ReactComponent as StarEmpty } from 'assets/img/vectStarEmpyt.svg'
import './styles.css'
const MovieStars = () => {
  return (
    <div className="dsmovie-stars-container">
      <StarFull />
      <StarFull />
      <StarFull />
      <StarHalf />
      <StarEmpty />
    </div>
  );
};

export default MovieStars;
