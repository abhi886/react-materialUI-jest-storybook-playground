// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from '@storybook/react';
import Input from "./Input";
const meta: Meta<typeof Input> = {
  title: 'components/core/Input',
  component: Input,
  tags:['autodocs'],
   parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<typeof Input>;
// ✅ Default story
export const Default: Story = {
  args: {
    id: 'default-input',
    label: 'Default Input',
    variant:'standard',
    placeholder: 'Enter something...',
    value: 'Default',
    onChange: () => {}, 
  },
}; 

// Variations
export const Variations: Story = {
"name": "Input Variations",
render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <Input
        id="input-standard"
        label="Standard"
        variant="standard"
        placeholder="Standard"
        onChange={() => {}}
        fullWidth={true}
        value=''
      />
      <Input
        id="input-outlined"
        label="Outlined"
        variant="outlined"
        placeholder="Outlined"
        onChange={() => {}}
        fullWidth
        value=''
      />
      <Input
        id="input-filled"
        label="Filled"
        variant="filled"
        placeholder="Filled"
        onChange={() => {}}
        fullWidth
        value=''
      />
    </div>
  ),
}

// Variations
export const FullWidth: Story = {
"name": "Full Width",
 render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ width: '100%' }}>
        <Input
          id="full-width"
          label="Full Width"
          variant="outlined"
          placeholder="Fills container"
          onChange={() => {}}
          fullWidth
          value=""
        />
      </div>
      <div style={{ width: '300px', border: '1px dashed grey' }}>
        <Input
          id="not-full-width"
          label="Fixed Width Container"
          variant="outlined"
          placeholder="Also fullWidth, but container is small"
          onChange={() => {}}
          fullWidth={false}
          value=""
        />
      </div>
    </div>
  ),
}