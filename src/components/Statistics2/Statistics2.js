import PropTypes from 'prop-types';
import colorMaker from '../../js/colorMaker';
import { StyledList, StyledItem, StyledLabel } from './Statistics.styled';

export default function Statistics2({ stats }) {
  return (
    <StyledList>
      {stats.map(item => (
        <StyledItem
          key={item.id}
          style={{
            backgroundColor: colorMaker(),
            width: item.percentage + '%',
          }}
        >
          <StyledLabel>{item.label}</StyledLabel>
          <span>{item.percentage}%</span>
        </StyledItem>
      ))}
    </StyledList>
  );
}

Statistics2.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
