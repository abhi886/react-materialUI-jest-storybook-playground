import { Chip } from '@mui/material';
import styled from 'styled-components';

const StyledTag = styled(Chip)<{ selected?: boolean }>`
  font-weight: 500;
  letter-spacing: 0.5px;
  border-radius: 8px;

  &.MuiChip-outlined {
  }

  &.MuiChip-outlined:hover {
  }

  &.MuiChip-outlined:focus-visible,
  &.MuiChip-filled:focus-visible {
    outline: 2px solid ${({ selected }) => (selected ? '#3f51b5' : '#888')};
    outline-offset: 4px;
  }

  &.MuiChip-outlined:active {
    box-shadow: 0 0 0 4px rgba(63, 81, 181, 0.3);
  }
`;

export default StyledTag;
