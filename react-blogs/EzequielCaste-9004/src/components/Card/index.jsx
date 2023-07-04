import PropTypes from 'prop-types';
import './card.styles.scss';
import { capitalize, humanize } from '../../utils/humanizeDate';

const Card = ({ data }) => {
  const { title, date, text } = data;
  const humanizeDate = capitalize(humanize(date));
  return (
    <div className="card">
      <img src="https://placehold.co/150x150" alt="blog post card" />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <time dateTime={date}>
          <span>{humanizeDate}</span>
        </time>
        <p className="card-text">
          {text}
        </p>
      </div>
    </div>
  )
}

Card.propTypes = {
  data: PropTypes.object
}

export default Card