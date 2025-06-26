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
        type={'text'}
      />
      <Input
        id="input-outlined"
        label="Outlined"
        variant="outlined"
        placeholder="Outlined"
        onChange={() => {}}
        fullWidth
        value=''
        type={'text'}
      />
      <Input
        id="input-filled"
        label="Filled"
        variant="filled"
        placeholder="Filled"
        onChange={() => {}}
        fullWidth
        value=''
        type={'text'}
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
          type={'text'}
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
          type={'text'}
        />
      </div>
    </div>
  ),
}
// Types
export  const Type:Story = {
  "name": 'Types of input',
 render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ width: '100%' }}>
        <Input
          id="input-text"
          label="Text"
          variant="standard"
          placeholder="Enter the text here"
          onChange={() => {}}
          fullWidth
          value=""
          type={'text'}
        />
      </div>
      <div style={{ width: '100%' }}>
        <Input
          id="input-password"
          label="Password"
          variant="standard"
          placeholder="Enter the password here"
          onChange={() => {}}
          fullWidth
          value=""
          type={'password'}
        />
      </div>
      <div style={{ width: '100%' }}>
        <Input
          id="input-email"
          label="Email"
          variant="standard"
          placeholder="Enter the email"
          onChange={() => {}}
          fullWidth
          value=""
          type={'email'}
        />
      </div>
       <div style={{ width: '100%' }}>
        <Input
          id="input-date"
          label=""
          variant="standard"
          placeholder="Enter the date"
          onChange={() => {}}
          fullWidth
          value=""
          type={'date'}
        />
      </div>
    </div>
  ),    
}