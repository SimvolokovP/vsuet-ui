import type { Meta, StoryObj } from '@storybook/react-vite';
import { Modal } from './Modal';
import { fn } from "storybook/test";
import { Button } from './Button/Button';
import { Input } from './Input';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Открыто ли модальное окно',
    },
    onClose: {
      action: 'closed',
      description: 'Функция закрытия модального окна',
    },
    title: {
      control: 'text',
      description: 'Заголовок модального окна',
    },
    closeOnBackdropClick: {
      control: 'boolean',
      description: 'Закрывать при клике на фон',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Показывать кнопку закрытия',
    },
    preventBodyScroll: {
      control: 'boolean',
      description: 'Блокировать скролл тела страницы',
    },
    className: {
      control: 'text',
      description: 'Дополнительные CSS классы',
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: fn(),
    title: 'Модальное окно',
    children: (
      <div className="space-y-4">
        <p>Это содержимое модального окна. Вы можете разместить здесь любой контент.</p>
        <div className="flex justify-end gap-2">
          <Button variant="text" onClick={() => console.log('Отмена')}>
            Отмена
          </Button>
          <Button variant="primary" onClick={() => console.log('Подтвердить')}>
            Подтвердить
          </Button>
        </div>
      </div>
    ),
  },
};

export const WithoutTitle: Story = {
  args: {
    isOpen: true,
    onClose: fn(),
    children: (
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-4">Модалка без заголовка</h3>
        <p>Это модальное окно без заголовка в пропсах, но с заголовком внутри children.</p>
      </div>
    ),
  },
};

export const WithForm: Story = {
  args: {
    isOpen: true,
    onClose: fn(),
    title: 'Форма ввода',
    children: (
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Имя</label>
          <Input
            type="text"
            className="w-full px-3 py-2 border rounded"
            placeholder="Введите имя"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <Input
            type="email"
            className="w-full px-3 py-2 border rounded"
            placeholder="Введите email"
          />
        </div>
        <div className="flex justify-end gap-2 pt-4">
          <Button type="button" variant="text" onClick={() => console.log('Отмена')}>
            Отмена
          </Button>
          <Button type="submit" variant="primary">
            Отправить
          </Button>
        </div>
      </form>
    ),
  },
};

export const SmallContent: Story = {
  args: {
    isOpen: true,
    onClose: fn(),
    title: 'Простое сообщение',
    children: (
      <p>Вы уверены, что хотите выполнить это действие?</p>
    ),
  },
};

export const WithCustomActions: Story = {
  args: {
    isOpen: true,
    onClose: fn(),
    title: 'Действия',
    children: (
      <div className="space-y-4">
        <p>Выберите действие:</p>
        <div className="space-y-2">
          <Button variant="default" onClick={() => console.log('Действие 1')}>
            Действие 1
          </Button>
          <Button variant="default" onClick={() => console.log('Действие 2')}>
            Действие 2
          </Button>
          <Button variant="default" onClick={() => console.log('Действие 3')}>
            Действие 3
          </Button>
        </div>
      </div>
    ),
  },
};