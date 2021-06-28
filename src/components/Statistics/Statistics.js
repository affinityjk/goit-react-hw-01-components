import PropTypes from 'prop-types';
import { getRandomColor } from '../../utils/randomColor';

const Statistics = ({ title, stats}) => {
  return (
    <section class="statistics">

      {title && <h2>{title}</h2>}

      <ul class="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li
            class="item"
            key={id}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span class="label">{label}</span>
            <span class="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.defaaultProps = {
  title: "",
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;