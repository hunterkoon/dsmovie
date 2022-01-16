import { ReactComponent as Arrow } from "assets/img/VectorArrowBue.svg";
import { MoviePage } from "constants/types";
import './styles.css';

type Props = {
  page : MoviePage,
  onChange : Function
}


const Pagination = ({page , onChange} : Props) => {

  return (
    <div className="dsmovie-pagination-container">
      <div className="dsmovie-pagination-box">
        <button className="dsmovie-pagination-button" onClick={()=> onChange(page.number -1 )} disabled={page.first}>
          <Arrow className="dsmovie-flip-horizontal" />
        </button>
        <p>{`${page.number + 1 } de ${page.totalPages}`}</p>
        <button className="dsmovie-pagination-button" onClick={()=> onChange(page.number + 1 )} disabled={page.last}>
          <Arrow />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
