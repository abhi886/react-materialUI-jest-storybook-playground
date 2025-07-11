// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from '@storybook/react';
import Counter from './Counter';

const meta: Meta<typeof Counter> = {
  title: 'components/Counter',
  component: Counter,
  tags:['autodocs'],
     parameters: {
    layout: 'centered',
  },
  argTypes: {
     color: {
    description: 'The color of the counter',
    options: ['Primary', 'Negative', 'Dark', 'Light'],
    control: { type: 'select' },
    defaultValue: 'Primary',  
     table: {
        type: {
            summary: `'Primary' | 'Negative' | 'Dark' | 'Light'`,
        },
        defaultValue: {
            summary: 'Primary',
        },
    }, 
},
    
count: {
    control: 'number',
    description: 'The count value',
  },
    size: {
    control: { type: 'select' },
    options: ['XS', 'Small', 'Large'],
    description: 'Counter size variant',
         table: {
        type: {
            summary: `'XS' | 'Small' | 'Large'`,
        },
        defaultValue: {
            summary: 'XS',
        },
    },
  },
   kind: {
    control: { type: 'select' },
    options: ['line', 'fill'],
    description: 'The visual style of a counter',
      table: {
        type: {
            summary: `'fill' | 'line'`,
        },
        defaultValue: {
            summary: 'fill',
        },
    },
  },
  }
};

export default meta;

type Story = StoryObj<typeof Counter>;


// ✅ Default story
export const Default: Story = {
}; 

export const Size: Story = {
    "name":"Sizes of Counter",
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', width: '300px' }}>
                <Counter count={0} size={'XS'} color={'Primary'} kind={'fill'} maxDigits={0} />
                                <Counter count={0} size={'Small'} color={'Primary'} kind={'fill'} maxDigits={0} />
                <Counter count={0} size={'Large'} color={'Primary'} kind={'fill'} maxDigits={0} />

    </div>
        );
    }

}

export const Color: Story = {
    "name":"The color of the Counter",
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', width: '300px' }}>
                <Counter count={0} size={'Large'} color={'Primary'} kind={'fill'} maxDigits={1} />
                <Counter count={0} size={'Large'} color={'Negative'} kind={'fill'} maxDigits={1} />
                <Counter count={0} size={'Large'} color={'Dark'} kind={'fill'} maxDigits={1} />
                <Counter count={0} size={'Large'} color={'Light'} kind={'fill'} maxDigits={1} />
    </div>
        );
    }

}

export const Outline: Story = {
    "name":"Outline Counter",
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', width: '300px' }}>
                <Counter count={0} size={'Large'} color={'Primary'} kind={'line'} maxDigits={1} />
                <Counter count={0} size={'Large'} color={'Negative'} kind={'line'} maxDigits={1} />
                <Counter count={0} size={'Large'} color={'Dark'} kind={'line'} maxDigits={1} />
                <Counter count={0} size={'Large'} color={'Light'} kind={'line'} maxDigits={1} />
    </div>
        );
    }

}

export const Limits: Story = {
    "name":"Outline Counter",
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', width: '300px' }}>
                <Counter count={11} size={'Large'} color={'Primary'} kind={'line'} maxDigits={1} />
                <Counter count={111} size={'Large'} color={'Negative'} kind={'line'} maxDigits={2} />
                <Counter count={1111} size={'Large'} color={'Dark'} kind={'line'} maxDigits={3} />
    </div>
        );
    }

}

