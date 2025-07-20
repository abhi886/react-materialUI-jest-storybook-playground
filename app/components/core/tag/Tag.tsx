import React from 'react';
import TagPropTypes from './PropTypes';
import StyledTag from './tag.styled';

const Tag = ({
  label,
  variant = 'outlined',
  color = 'default',
  onClick,
  selected = false,
}: TagPropTypes) => {
  const resolvedVariant = selected ? 'filled' : variant || 'outlined';

  return (
    <StyledTag
      label={label}
      variant={resolvedVariant}
      color={color}
      onClick={onClick}
      selected={selected}
      role="checkbox"
      aria-checked={selected}
      tabIndex={0}
    />
  );
};

export default Tag;
