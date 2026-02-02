import type { Meta, StoryObj } from '@storybook/react-vite';
import { AutoComplete } from './AutoComplete';
import { useState } from 'react';
import { fn } from 'storybook/test';

const meta: Meta<typeof AutoComplete> = {
  title: 'UI/AutoComplete',
  component: AutoComplete,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Поле автодополнения с выпадающим списком опций.',
      },
    },
  },
  argTypes: {
    name: {
      control: 'text',
      description: 'Имя поля',
      table: {
        category: 'Основные',
      },
    },
    label: {
      control: 'text',
      description: 'Лейбл поля',
      table: {
        category: 'Основные',
      },
    },
    placeholder: {
      control: 'text',
      description: 'Плейсхолдер',
      table: {
        category: 'Основные',
      },
    },
    value: {
      control: 'text',
      description: 'Выбранное значение',
      table: {
        category: 'Состояние',
      },
    },
    options: {
      control: 'object',
      description: 'Список опций',
      table: {
        category: 'Данные',
        type: { summary: 'Array<{value: string, label: string}>' },
      },
    },
    error: {
      control: 'object',
      description: 'Объект ошибки',
      table: {
        category: 'Валидация',
        type: { summary: '{ message?: string }' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Обязательное поле',
      table: {
        category: 'Валидация',
      },
    },
    isLoading: {
      control: 'boolean',
      description: 'Состояние загрузки',
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
    className: {
      control: 'text',
      description: 'Дополнительные CSS классы',
      table: {
        category: 'Стилизация',
      },
    },
    onChange: {
      action: 'changed',
      description: 'Обработчик изменения значения',
      table: {
        category: 'События',
      },
    },
  },
} satisfies Meta<typeof AutoComplete>;

export default meta;
type Story = StoryObj<typeof meta>;

// Пример данных
const countries = [
  { value: 'ru', label: 'Россия' },
  { value: 'us', label: 'США' },
  { value: 'de', label: 'Германия' },
  { value: 'fr', label: 'Франция' },
  { value: 'it', label: 'Италия' },
  { value: 'es', label: 'Испания' },
  { value: 'jp', label: 'Япония' },
  { value: 'cn', label: 'Китай' },
  { value: 'br', label: 'Бразилия' },
  { value: 'in', label: 'Индия' },
  { value: 'ca', label: 'Канада' },
  { value: 'au', label: 'Австралия' },
  { value: 'mx', label: 'Мексика' },
  { value: 'kr', label: 'Южная Корея' },
  { value: 'gb', label: 'Великобритания' },
];

const fruits = [
  { value: 'apple', label: 'Яблоко' },
  { value: 'banana', label: 'Банан' },
  { value: 'orange', label: 'Апельсин' },
  { value: 'grape', label: 'Виноград' },
  { value: 'strawberry', label: 'Клубника' },
  { value: 'pineapple', label: 'Ананас' },
  { value: 'mango', label: 'Манго' },
  { value: 'watermelon', label: 'Арбуз' },
  { value: 'peach', label: 'Персик' },
  { value: 'pear', label: 'Груша' },
];

const programmingLanguages = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
  { value: 'csharp', label: 'C#' },
  { value: 'php', label: 'PHP' },
  { value: 'ruby', label: 'Ruby' },
  { value: 'go', label: 'Go' },
  { value: 'rust', label: 'Rust' },
  { value: 'kotlin', label: 'Kotlin' },
];

// Базовые истории
export const Default: Story = {
  args: {
    name: 'country',
    label: 'Страна',
    placeholder: 'Выберите страну...',
    options: countries,
    onChange: fn(),
  },
};

export const WithSelectedValue: Story = {
  args: {
    name: 'fruit',
    label: 'Фрукт',
    placeholder: 'Выберите фрукт...',
    value: 'banana',
    options: fruits,
    onChange: fn(),
  },
};

export const WithoutLabel: Story = {
  args: {
    name: 'language',
    placeholder: 'Выберите язык программирования...',
    options: programmingLanguages,
    onChange: fn(),
  },
};

// Состояния
export const WithError: Story = {
  args: {
    name: 'country',
    label: 'Страна',
    placeholder: 'Выберите страну...',
    options: countries,
    error: { message: 'Поле обязательно для заполнения' },
    required: true,
    onChange: fn(),
  },
};

export const Disabled: Story = {
  args: {
    name: 'country',
    label: 'Страна (отключено)',
    placeholder: 'Выберите страну...',
    options: countries,
    disabled: true,
    value: 'ru',
    onChange: fn(),
  },
};

export const Loading: Story = {
  args: {
    name: 'country',
    label: 'Страна',
    placeholder: 'Загрузка опций...',
    options: [],
    isLoading: true,
    onChange: fn(),
  },
};

export const Required: Story = {
  args: {
    name: 'country',
    label: 'Страна *',
    placeholder: 'Выберите страну...',
    options: countries,
    required: true,
    onChange: fn(),
  },
};

// С фильтрацией
export const WithFiltering: Story = {
  render: () => {
    const [value, setValue] = useState('');
    
    return (
      <div className="w-80">
        <AutoComplete
          name="search"
          label="Поиск страны"
          placeholder="Начните вводить название..."
          options={countries}
          value={value}
          onChange={setValue}
        />
        <div className="mt-4 text-sm text-muted-foreground">
          <p>Выбранное значение: {value || '(не выбрано)'}</p>
          <p>Выбранная страна: {countries.find(c => c.value === value)?.label || '(не выбрана)'}</p>
        </div>
      </div>
    );
  },
};

// Примеры использования
export const InForm: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      country: '',
      fruit: '',
      language: '',
    });

    const handleChange = (field: string) => (value: string) => {
      setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
      <div className="w-96 space-y-6 p-6 border rounded-lg">
        <h3 className="text-lg font-semibold">Форма с автодополнением</h3>
        
        <AutoComplete
          name="country"
          label="Страна проживания"
          placeholder="Выберите страну..."
          options={countries}
          value={formData.country}
          onChange={handleChange('country')}
          required
        />
        
        <AutoComplete
          name="fruit"
          label="Любимый фрукт"
          placeholder="Выберите фрукт..."
          options={fruits}
          value={formData.fruit}
          onChange={handleChange('fruit')}
        />
        
        <AutoComplete
          name="language"
          label="Язык программирования"
          placeholder="Выберите язык..."
          options={programmingLanguages}
          value={formData.language}
          onChange={handleChange('language')}
        />
        
        <div className="pt-4 border-t">
          <h4 className="text-sm font-medium mb-2">Заполненные данные:</h4>
          <pre className="text-xs p-3 bg-muted rounded overflow-auto">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      </div>
    );
  },
};

// С кастомными стилями
export const CustomStyled: Story = {
  args: {
    name: 'country',
    label: 'Стилизованный выбор',
    placeholder: 'Выберите опцию...',
    options: countries,
    className: 'border-2 border-purple-500 focus:border-purple-700',
    onChange: fn(),
  },
};

// С пустым списком
export const NoOptions: Story = {
  args: {
    name: 'empty',
    label: 'Пустой список',
    placeholder: 'Опций нет...',
    options: [],
    onChange: fn(),
  },
};

// Много опций
export const ManyOptions: Story = {
  args: {
    name: 'many',
    label: 'Большой список (A-Z)',
    placeholder: 'Выберите букву...',
    options: Array.from({ length: 26 }, (_, i) => ({
      value: String.fromCharCode(65 + i),
      label: `Опция ${String.fromCharCode(65 + i)}`,
    })),
    onChange: fn(),
  },
};

// Интерактивная демонстрация
export const InteractiveDemo: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    
    const filteredLanguages = programmingLanguages.filter(lang =>
      lang.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return (
      <div className="w-96 space-y-6">
        <div>
          <AutoComplete
            name="interactive"
            label="Язык программирования"
            placeholder="Начните вводить..."
            options={filteredLanguages}
            value={selectedValue}
            onChange={setSelectedValue}
          />
        </div>
        
        <div className="space-y-4 p-4 border rounded-lg">
          <div className="space-y-2">
            <label className="block text-sm font-medium">Фильтр опций</label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Фильтровать языки..."
              className="w-full px-3 py-2 border rounded text-sm"
            />
            <p className="text-xs text-muted-foreground">
              Отфильтровано: {filteredLanguages.length} из {programmingLanguages.length} опций
            </p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Выбранное значение:</span>
              <span className="text-sm">
                {selectedValue || <span className="text-muted-foreground">Не выбрано</span>}
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Выбранная опция:</span>
              <span className="text-sm">
                {selectedValue 
                  ? programmingLanguages.find(l => l.value === selectedValue)?.label
                  : <span className="text-muted-foreground">Не выбрано</span>
                }
              </span>
            </div>
          </div>
        </div>
        
        <div className="text-xs text-muted-foreground">
          <p className="font-medium">Доступные команды:</p>
          <ul className="list-disc pl-4 mt-1 space-y-1">
            <li>Начните вводить текст для фильтрации опций</li>
            <li>Кликните на опцию для выбора</li>
            <li>Нажмите на крестик для очистки</li>
            <li>Используйте Escape для закрытия списка</li>
          </ul>
        </div>
      </div>
    );
  },
};

// Все состояния вместе
export const AllStates: Story = {
  render: () => (
    <div className="space-y-6 w-96">
      <AutoComplete
        name="normal"
        label="Нормальное состояние"
        placeholder="Выберите..."
        options={fruits}
        onChange={fn()}
      />
      
      <AutoComplete
        name="with-error"
        label="С ошибкой"
        placeholder="Выберите..."
        options={fruits}
        error={{ message: 'Обязательное поле' }}
        onChange={fn()}
      />
      
      <AutoComplete
        name="disabled"
        label="Отключено"
        placeholder="Недоступно..."
        options={fruits}
        disabled
        value="apple"
        onChange={fn()}
      />
      
      <AutoComplete
        name="loading"
        label="Загрузка"
        placeholder="Загрузка..."
        options={[]}
        isLoading
        onChange={fn()}
      />
      
      <AutoComplete
        name="selected"
        label="С выбранным значением"
        placeholder="Выберите..."
        options={fruits}
        value="banana"
        onChange={fn()}
      />
    </div>
  ),
};