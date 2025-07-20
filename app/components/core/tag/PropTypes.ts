interface TagPropTypes {
  label: string;
  variant: 'outlined' | 'filled';
  color:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning';
  onClick?: () => void;
  selected?: boolean;
}

export default TagPropTypes;
