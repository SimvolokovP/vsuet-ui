import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toggler } from './Toggler';
import { useState } from 'react';
import { fn } from 'storybook/test';

const meta: Meta<typeof Toggler> = {
  title: 'UI/Toggler',
  component: Toggler,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Переключатель между несколькими опциями. Используется для фильтрации, изменения режимов отображения и других сценариев.',
      },
    },
  },
  argTypes: {
    toggleList: {
      description: 'Список опций для переключения',
      table: {
        category: 'Данные',
        type: { summary: 'Array<{value: string, label: ReactNode}>' },
      },
    },
    activeToggleItem: {
      control: 'text',
      description: 'Активное значение',
      table: {
        category: 'Состояние',
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Отключенное состояние',
      table: {
        category: 'Состояние',
      },
    },
    onToggleChange: {
      action: 'toggled',
      description: 'Обработчик изменения значения',
      table: {
        category: 'События',
      },
    },
  },
} satisfies Meta<typeof Toggler>;

export default meta;
type Story = StoryObj<typeof meta>;

// Базовые данные
const simpleToggleList = [
  { value: 'all', label: 'Все' },
  { value: 'active', label: 'Активные' },
  { value: 'completed', label: 'Завершенные' },
];

const viewToggleList = [
  { value: 'list', label: 'Список' },
  { value: 'grid', label: 'Сетка' },
  { value: 'calendar', label: 'Календарь' },
];

const sizeToggleList = [
  { value: 'sm', label: 'S' },
  { value: 'md', label: 'M' },
  { value: 'lg', label: 'L' },
  { value: 'xl', label: 'XL' },
];

const iconToggleList = [
  { value: 'bold', label: 'B' },
  { value: 'italic', label: 'I' },
  { value: 'underline', label: 'U' },
  { value: 'strike', label: 'S' },
];

// Базовые истории
export const Default: Story = {
  args: {
    toggleList: simpleToggleList,
    activeToggleItem: 'active',
    onToggleChange: fn(),
  },
};

export const ThreeOptions: Story = {
  args: {
    toggleList: viewToggleList,
    activeToggleItem: 'grid',
    onToggleChange: fn(),
  },
};

export const FourOptions: Story = {
  args: {
    toggleList: sizeToggleList,
    activeToggleItem: 'md',
    onToggleChange: fn(),
  },
};

// С иконками и текстом
export const WithIcons: Story = {
  render: () => {
    const iconToggleList = [
      { value: 'day', label: '☀️ День' },
      { value: 'night', label: '🌙 Ночь' },
      { value: 'auto', label: '⚡ Авто' },
    ];
    
    return (
      <Toggler
        toggleList={iconToggleList}
        activeToggleItem="day"
        onToggleChange={fn()}
      />
    );
  },
};

export const OnlyIcons: Story = {
  render: () => {
    const iconOnlyList = [
      { value: 'play', label: '▶️' },
      { value: 'pause', label: '⏸️' },
      { value: 'stop', label: '⏹️' },
      { value: 'record', label: '🔴' },
    ];
    
    return (
      <Toggler
        toggleList={iconOnlyList}
        activeToggleItem="pause"
        onToggleChange={fn()}
      />
    );
  },
};

// Состояния
export const Disabled: Story = {
  args: {
    toggleList: simpleToggleList,
    activeToggleItem: 'active',
    disabled: true,
    onToggleChange: fn(),
  },
};

export const DisabledItem: Story = {
  render: () => {
    const [active, setActive] = useState('all');
    
    return (
      <Toggler
        toggleList={simpleToggleList}
        activeToggleItem={active}
        onToggleChange={setActive}
        disabled={active === 'completed'} // Пример: блокировка после выбора "completed"
      />
    );
  },
};

// Интерактивные примеры
export const Interactive: Story = {
  render: () => {
    const [activeView, setActiveView] = useState('list');
    
    return (
      <div className="space-y-6">
        <Toggler
          toggleList={viewToggleList}
          activeToggleItem={activeView}
          onToggleChange={setActiveView}
        />
        
        <div className="p-4 border rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm font-medium">Выбранный вид:</span>
            <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">
              {viewToggleList.find(t => t.value === activeView)?.label}
            </span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            {activeView === 'list' && 'Отображение в виде списка с элементами один под другим.'}
            {activeView === 'grid' && 'Отображение в виде сетки с карточками в несколько колонок.'}
            {activeView === 'calendar' && 'Отображение в виде календаря с днями и событиями.'}
          </div>
        </div>
      </div>
    );
  },
};

// Разные размеры и стили
export const SmallToggler: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="text-sm font-medium mb-2">Маленький (текст)</p>
        <Toggler
          toggleList={simpleToggleList}
          activeToggleItem="active"
          onToggleChange={fn()}
        />
      </div>
      
      <div>
        <p className="text-sm font-medium mb-2">С иконками</p>
        <Toggler
          toggleList={[
            { value: 'sun', label: '🌞' },
            { value: 'moon', label: '🌚' },
            { value: 'cloud', label: '⛅' },
          ]}
          activeToggleItem="sun"
          onToggleChange={fn()}
        />
      </div>
    </div>
  ),
};

// Много опций
export const ManyOptions: Story = {
  render: () => {
    const months = [
      'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
      'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'
    ];
    
    const toggleList = months.map((month, index) => ({
      value: (index + 1).toString(),
      label: month,
    }));
    
    return (
      <div className="w-full max-w-2xl">
        <Toggler
          toggleList={toggleList}
          activeToggleItem="3"
          onToggleChange={fn()}
        />
        <p className="mt-2 text-sm text-muted-foreground">
          Переключатель с 12 опциями (месяцы года)
        </p>
      </div>
    );
  },
};

// Все состояния вместе
export const AllStates: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium mb-2">Нормальное состояние</p>
        <Toggler
          toggleList={simpleToggleList}
          activeToggleItem="active"
          onToggleChange={fn()}
        />
      </div>
      
      <div>
        <p className="text-sm font-medium mb-2">Отключенное состояние</p>
        <Toggler
          toggleList={simpleToggleList}
          activeToggleItem="completed"
          disabled
          onToggleChange={fn()}
        />
      </div>
      
      <div>
        <p className="text-sm font-medium mb-2">С иконками</p>
        <Toggler
          toggleList={[
            { value: 'video', label: '🎬' },
            { value: 'audio', label: '🎵' },
            { value: 'image', label: '🖼️' },
          ]}
          activeToggleItem="audio"
          onToggleChange={fn()}
        />
      </div>
    </div>
  ),
};