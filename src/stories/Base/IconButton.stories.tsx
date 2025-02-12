import { Meta, StoryObj } from '@storybook/react';
import IconButton from '../../components/IconButton';
import AddIcon from '../../icons/AddIcon';
import TrashIcon from '../../icons/TrashIcon';

const meta: Meta<typeof IconButton> = {
  title: 'Base/IconButton', // Ruta donde se va a mostrar en el sidebar
  component: IconButton,
  parameters: {
    layout: 'centered', // Centra el componente en el canvas
  },
  tags: ['autodocs'], // Con esto generamos un archivo de documentacion automatico
  argTypes: {
    isLoading: { control: 'boolean' }, // Aqui se definen los tipos de controladores
    className: {
      control: 'select',
      options: ['white-custom', 'text-custom'],
      mapping: {
        'white-custom': 'bg-white-custom',
        'text-custom': 'bg-text-custom',
      },
    },
    children: {
      control: 'select',
      options: ['AddIcon', 'TrashIcon'],
      mapping: {
        AddIcon: <AddIcon />,
        TrashIcon: <TrashIcon />,
      },
    },
  },
  args: {
    // Aqui se definen los valores por defecto para todos los casos
    className: 'bg-text-custom',
  },
};

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    isLoading: false,
    children: <AddIcon />,
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    children: <AddIcon />,
  },
};

export default meta;
