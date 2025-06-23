import Input from "@/app/components/input/Input";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

describe("Input component", () => {
  it("renders the input component correctly", () => {
    render(
        <Input
          id="search"
          label="Search-Catalogue"
          variant="outlined"
          fullWidth
          value={"Abhishek"}
          onChange={jest.fn()}
          placeholder="Search catalogue..."
          slotProps={{
            htmlInput: {
              "data-testid": "search-id",
            },
          }}
        />
    );

    expect(screen.getByLabelText("Search-Catalogue")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search catalogue..."))
  });
});
