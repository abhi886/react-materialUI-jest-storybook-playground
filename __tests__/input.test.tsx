import Input from '@/app/components/core/input/Input';
import { InputProps } from '@/app/components/core/input/PropTypes';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const mockOnclickHandler = jest.fn();
describe('Input component', () => {
  const createMockInputProps = (
    overrides?: Partial<InputProps>
  ): InputProps => ({
    // overrides? is an optional paramerte - you do not have to pass anything in.
    // if you do pass something, it must match the shape of Partial<InputProps>, some or all of the InputProps.
    id: 'search',
    label: 'Search-Catalogue',
    variant: 'filled',
    fullWidth: true,
    value: 'Abhishek',
    onChange: mockOnclickHandler,
    placeholder: 'Search catalogue...',
    slotProps: {
      htmlInput: {
        'data-testid': 'search-id',
      },
    },
    type: 'text',
    ...overrides,
  });
  beforeEach(() => {
    mockOnclickHandler.mockClear();
  });

  it('renders correctly with input props', () => {
    render(<Input {...createMockInputProps()} />);
    // check if the label appears
    expect(screen.getByLabelText('Search-Catalogue')).toBeInTheDocument();

    // check if the value is rendered
    expect(screen.getByDisplayValue('Abhishek')).toBeInTheDocument();
  });

  it('calls the onchange handler when user types on the text area', () => {
    render(<Input {...createMockInputProps()} />);
    fireEvent.change(screen.getByTestId('search-id'), {
      target: { value: 'test' },
    });
    expect(mockOnclickHandler).toHaveBeenCalled();
  });

  it('renders without optional prop placeholder', () => {
    render(<Input {...createMockInputProps({ placeholder: undefined })} />);
    expect(
      screen.queryByPlaceholderText('Search Catalogue...')
    ).not.toBeInTheDocument();
  });

  it('renders without optional slot props', () => {
    render(<Input {...createMockInputProps({ slotProps: undefined })} />);
    expect(screen.queryByTestId('search-id')).not.toBeInTheDocument();
  });

  it('should render if the value is empty', () => {
    render(<Input {...createMockInputProps({ value: '' })} />);
    expect(screen.getByDisplayValue('')).toBeInTheDocument();
  });

  it('renders with outlined variant', () => {
    render(<Input {...createMockInputProps({ variant: 'outlined' })} />);

    // Get the input wrapper (TextField applies classes to this div)
    const inputWrapper =
      screen.getByLabelText('Search-Catalogue').parentElement;

    // Check that the outlined class is applied
    expect(inputWrapper).toHaveClass('MuiOutlinedInput-root');
  });
  it('renders with filled variant', () => {
    render(<Input {...createMockInputProps({ variant: 'filled' })} />);

    const inputWrapper =
      screen.getByLabelText('Search-Catalogue').parentElement;
    expect(inputWrapper).toHaveClass('MuiFilledInput-root');
  });

  it('renders with standard variant', () => {
    render(<Input {...createMockInputProps({ variant: 'standard' })} />);

    const inputWrapper =
      screen.getByLabelText('Search-Catalogue').parentElement;
    expect(inputWrapper).toHaveClass('MuiInput-root');
  });

  it('applies fullWidth class when fullWidth is true', () => {
    render(<Input {...createMockInputProps()} />);
    const inputWrapper =
      screen.getByLabelText('Search-Catalogue').parentElement;
    expect(inputWrapper).toHaveClass('MuiInputBase-fullWidth');
  });

  it('sets the correct id attribute', () => {
    render(<Input {...createMockInputProps()} />);
    expect(screen.getByLabelText('Search-Catalogue')).toHaveAttribute(
      'id',
      'search'
    );
  });

  it('sets input type to text when type is set to text', () => {
    render(<Input {...createMockInputProps({ type: 'text' })} />);
    expect(screen.getByTestId('search-id')).toHaveAttribute('type', 'text');
  });

  it('set input type to password when input type is select as password', () => {
    render(<Input {...createMockInputProps({ type: 'password' })} />);
    expect(screen.getByTestId('search-id')).toHaveAttribute('type', 'password');
  });

  it('set input type to email when input type is select as email', () => {
    render(<Input {...createMockInputProps({ type: 'email' })} />);
    expect(screen.getByTestId('search-id')).toHaveAttribute('type', 'email');
  });

  it('set input type to date when input type is select as date', () => {
    render(<Input {...createMockInputProps({ type: 'date' })} />);
    expect(screen.getByTestId('search-id')).toHaveAttribute('type', 'date');
  });
});
