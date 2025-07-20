// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from '@storybook/react';
import Tag from './Tag';
import { Box, Grid, Stack } from '@mui/material';

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof Tag> = {
  title: 'components/core/Tag',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    label: 'Action Tag',
    variant: 'outlined',
    color: 'primary',
    selected: false,
  },
};

export const Variant: Story = {
  name: 'Tag Variations',
  render: () => (
    <Stack direction="row" spacing={2}>
      <Tag label="Outlined Variation" variant="outlined" color="default"></Tag>
      <Tag label="Filled Variation" variant="filled" color="default"></Tag>
    </Stack>
  ),
};

export const Color: Story = {
  name: 'Color Variations',
  render: () => (
    <Grid container spacing={4}>
      {/* Outlined column */}
      <Grid size={6}>
        <Box display="flex" flexDirection="column" gap={1} p={2}>
          <Tag label="Outlined Default" variant="outlined" color="default" />
          <Tag label="Outlined Primary" variant="outlined" color="primary" />
          <Tag
            label="Outlined Secondary"
            variant="outlined"
            color="secondary"
          />
          <Tag label="Outlined Error" variant="outlined" color="error" />
          <Tag label="Outlined Info" variant="outlined" color="info" />
          <Tag label="Outlined Success" variant="outlined" color="success" />
          <Tag label="Outlined Warning" variant="outlined" color="warning" />
        </Box>
      </Grid>
      {/* Filled column */}
      <Grid size={6}>
        <Box display="flex" flexDirection="column" gap={1} p={2}>
          <Tag label="Filled Default" variant="filled" color="default" />
          <Tag label="Filled Primary" variant="filled" color="primary" />
          <Tag label="Filled Secondary" variant="filled" color="secondary" />
          <Tag label="Filled Error" variant="filled" color="error" />
          <Tag label="Filled Info" variant="filled" color="info" />
          <Tag label="Filled Success" variant="filled" color="success" />
          <Tag label="Filled Warning" variant="filled" color="warning" />
        </Box>
      </Grid>
    </Grid>
  ),
};

export const Selected: Story = {
  name: 'Selected Tag',
  render: () => (
    <Grid container spacing={4}>
      {/* <p>Outlined</p> */}
      {/* Outlined column */}
      <Grid size={6}>
        <Box display="flex" flexDirection="column" gap={1} p={2}>
          <Tag label="Unselected Default" variant="outlined" color="default" />
          <Tag label="Unselected Primary" variant="outlined" color="primary" />
          <Tag
            label="Unselected Secondary"
            variant="outlined"
            color="secondary"
          />
          <Tag label="Unselected Error" variant="outlined" color="error" />
          <Tag label="Unselected Info" variant="outlined" color="info" />
          <Tag label="Unselected Success" variant="outlined" color="success" />
          <Tag label="Unselected Warning" variant="outlined" color="warning" />
        </Box>
      </Grid>
      <Grid size={6}>
        <Box display="flex" flexDirection="column" gap={1} p={2}>
          <Tag
            label="Selected Default"
            variant="outlined"
            color="default"
            selected
          />
          <Tag
            label="Selected Primary"
            variant="outlined"
            color="primary"
            selected
          />
          <Tag
            label="Selected Secondary"
            variant="outlined"
            color="secondary"
            selected
          />
          <Tag
            label="Selected Error"
            variant="outlined"
            color="error"
            selected
          />
          <Tag label="Selected Info" variant="outlined" color="info" selected />
          <Tag
            label="Selected Success"
            variant="outlined"
            color="success"
            selected
          />
          <Tag
            label="Selected Warning"
            variant="outlined"
            color="warning"
            selected
          />
        </Box>
      </Grid>

      {/* Filled column */}
      <Grid size={6}>
        <Box display="flex" flexDirection="column" gap={1} p={2}>
          <Tag label="Filled Default" variant="filled" color="default" />
          <Tag label="Filled Primary" variant="filled" color="primary" />
          <Tag label="Filled Secondary" variant="filled" color="secondary" />
          <Tag label="Filled Error" variant="filled" color="error" />
          <Tag label="Filled Info" variant="filled" color="info" />
          <Tag label="Filled Success" variant="filled" color="success" />
          <Tag label="Filled Warning" variant="filled" color="warning" />
        </Box>
      </Grid>
      <Grid size={6}>
        <Box display="flex" flexDirection="column" gap={1} p={2}>
          <Tag
            label="Filled Default"
            variant="filled"
            color="default"
            selected={true}
          />
          <Tag
            label="Filled Primary"
            variant="filled"
            color="primary"
            selected={true}
          />
          <Tag
            label="Filled Secondary"
            variant="filled"
            color="secondary"
            selected={true}
          />
          <Tag
            label="Filled Error"
            variant="filled"
            color="error"
            selected={true}
          />
          <Tag
            label="Filled Info"
            variant="filled"
            color="info"
            selected={true}
          />
          <Tag
            label="Filled Success"
            variant="filled"
            color="success"
            selected={true}
          />
          <Tag
            label="Filled Warning"
            variant="filled"
            color="warning"
            selected={true}
          />
        </Box>
      </Grid>
    </Grid>
  ),
};
