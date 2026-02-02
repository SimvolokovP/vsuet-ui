import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';
import { useState } from 'react';

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Бейдж для отображения уведомлений, счетчиков или статусов поверх элементов интерфейса.',
      },
    },
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Текст внутри бейджа',
      table: {
        category: 'Контент',
        type: { summary: 'string' },
      },
    },
    isHide: {
      control: 'boolean',
      description: 'Скрыть бейдж',
      table: {
        category: 'Состояние',
        defaultValue: { summary: 'false' },
      },
    },
    className: {
      control: 'text',
      description: 'Дополнительные CSS классы для бейджа',
      table: {
        category: 'Стилизация',
      },
    },
    children: {
      description: 'Элемент, на который накладывается бейдж',
      table: {
        category: 'Контент',
      },
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// Примеры children элементов
const IconButton = () => (
  <button className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90">
    🔔
  </button>
);


// Базовые истории
export const Default: Story = {
  args: {
    text: '3',
    children: <IconButton />,
  },
};

export const WithLargeNumber: Story = {
  args: {
    text: '99+',
    children: <IconButton />,
  },
};

export const WithText: Story = {
  args: {
    text: 'New',
    children: <IconButton />,
  },
};

export const Hidden: Story = {
  args: {
    text: '99+',
    isHide: true,
    children: <IconButton />,
  },
};

export const NotificationCenter: Story = {
  render: () => {
    const [notifications, setNotifications] = useState([
      { id: 1, type: 'message', count: 3, read: false },
      { id: 2, type: 'alert', count: 12, read: false },
      { id: 3, type: 'update', count: 1, read: true },
      { id: 4, type: 'system', count: 0, read: true },
    ]);
    
    const markAllAsRead = () => {
      setNotifications(notifications.map(n => ({ ...n, read: true })));
    };
    
    return (
      <div className="w-80 space-y-4 p-4 border rounded-lg">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">Уведомления</h3>
          <button 
            onClick={markAllAsRead}
            className="text-sm text-primary hover:underline"
          >
            Прочитать все
          </button>
        </div>
        
        <div className="space-y-3">
          {notifications.map((notification) => (
            <div 
              key={notification.id}
              className={`flex items-center justify-between p-3 rounded ${
                notification.read ? 'bg-transparent' : 'bg-blue-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <Badge 
                    className='w-4 h-4'
                  text={notification.count.toString()} 
                  isHide={notification.count === 0 || notification.read}
                >
                  <div className="w-8 h-8 rounded flex items-center justify-center bg-gray-100">
                    {notification.type === 'message' && '💬'}
                    {notification.type === 'alert' && '⚠️'}
                    {notification.type === 'update' && '🔄'}
                    {notification.type === 'system' && '⚙️'}
                  </div>
                </Badge>
                <div>
                  <p className="font-medium">
                    {notification.type === 'message' && 'Сообщения'}
                    {notification.type === 'alert' && 'Оповещения'}
                    {notification.type === 'update' && 'Обновления'}
                    {notification.type === 'system' && 'Системные'}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {notification.count} новых
                  </p>
                </div>
              </div>
              {!notification.read && (
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  },
};

// Все варианты вместе
export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <div className="space-y-6">
        <div>
          <p className="text-sm font-medium mb-2">Маленькие числа</p>
          <div className="flex gap-4">
            <Badge text="1">
              <div className="w-10 h-10 bg-gray-100 rounded"></div>
            </Badge>
            <Badge text="3">
              <div className="w-10 h-10 bg-gray-100 rounded"></div>
            </Badge>
            <Badge text="9">
              <div className="w-10 h-10 bg-gray-100 rounded"></div>
            </Badge>
          </div>
        </div>
        
        <div>
          <p className="text-sm font-medium mb-2">Большие числа</p>
          <div className="flex gap-4">
            <Badge text="10">
              <div className="w-10 h-10 bg-gray-100 rounded"></div>
            </Badge>
            <Badge text="99+">
              <div className="w-10 h-10 bg-gray-100 rounded"></div>
            </Badge>
            <Badge text="128">
              <div className="w-10 h-10 bg-gray-100 rounded"></div>
            </Badge>
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        <div>
          <p className="text-sm font-medium mb-2">Текстовые</p>
          <div className="flex gap-4">
            <Badge text="New">
              <div className="w-10 h-10 bg-gray-100 rounded"></div>
            </Badge>
            <Badge text="Hot">
              <div className="w-10 h-10 bg-gray-100 rounded"></div>
            </Badge>
            <Badge text="Sale">
              <div className="w-10 h-10 bg-gray-100 rounded"></div>
            </Badge>
          </div>
        </div>
        
        <div>
          <p className="text-sm font-medium mb-2">Скрытые</p>
          <div className="flex gap-4">
            <Badge text="3" isHide>
              <div className="w-10 h-10 bg-gray-100 rounded"></div>
            </Badge>
            <Badge text="New" isHide>
              <div className="w-10 h-10 bg-gray-100 rounded"></div>
            </Badge>
            <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center text-xs text-muted-foreground">
              Пусто
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};