import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './Select';
import { useState } from 'react';
import { fn } from 'storybook/test';

const meta: Meta<typeof Select> = {
  title: 'UI/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Выпадающий список для выбора одного значения из нескольких опций.',
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
    value: {
      control: 'text',
      description: 'Выбранное значение',
      table: {
        category: 'Состояние',
      },
    },
    defaultValue: {
      control: 'text',
      description: 'Значение по умолчанию',
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
    disabled: {
      control: 'boolean',
      description: 'Отключенное состояние',
      table: {
        category: 'Состояние',
      },
    },
    required: {
      control: 'boolean',
      description: 'Обязательное поле',
      table: {
        category: 'Валидация',
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
    onFocus: {
      action: 'focused',
      description: 'Обработчик фокуса',
      table: {
        category: 'События',
      },
    },
    onBlur: {
      action: 'blurred',
      description: 'Обработчик потери фокуса',
      table: {
        category: 'События',
      },
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// Примеры данных
const countries = [
  { value: '', label: 'Выберите страну' },
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
];

const fruits = [
  { value: '', label: 'Выберите фрукт' },
  { value: 'apple', label: 'Яблоко' },
  { value: 'banana', label: 'Банан' },
  { value: 'orange', label: 'Апельсин' },
  { value: 'grape', label: 'Виноград' },
  { value: 'strawberry', label: 'Клубника' },
  { value: 'pineapple', label: 'Ананас' },
  { value: 'mango', label: 'Манго' },
];

const programmingLanguages = [
  { value: '', label: 'Выберите язык' },
  { value: 'javascript', label: 'JavaScript' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
  { value: 'csharp', label: 'C#' },
  { value: 'php', label: 'PHP' },
  { value: 'ruby', label: 'Ruby' },
  { value: 'go', label: 'Go' },
];

// Базовые истории
export const Default: Story = {
  args: {
    name: 'country',
    label: 'Страна',
    options: countries,
    onChange: fn(),
  },
};

export const WithoutLabel: Story = {
  args: {
    name: 'language',
    options: programmingLanguages,
    onChange: fn(),
  },
};

export const WithSelectedValue: Story = {
  args: {
    name: 'fruit',
    label: 'Фрукт',
    options: fruits,
    defaultValue: 'banana',
    onChange: fn(),
  },
};

// Состояния
export const WithError: Story = {
  args: {
    name: 'country',
    label: 'Страна *',
    options: countries,
    error: { message: 'Поле обязательно для заполнения' },
    required: true,
    onChange: fn(),
  },
};

export const Disabled: Story = {
  args: {
    name: 'fruit',
    label: 'Фрукт (отключено)',
    options: fruits,
    disabled: true,
    value: 'apple',
    onChange: fn(),
  },
};

export const Required: Story = {
  args: {
    name: 'country',
    label: 'Страна *',
    options: countries,
    required: true,
    onChange: fn(),
  },
};

// С пустой опцией
export const WithEmptyOption: Story = {
  args: {
    name: 'language',
    label: 'Язык программирования',
    options: programmingLanguages,
    onChange: fn(),
  },
};

export const WithoutEmptyOption: Story = {
  args: {
    name: 'language',
    label: 'Язык программирования',
    options: programmingLanguages.slice(1), // Без пустой опции
    required: true,
    onChange: fn(),
  },
};

// Группированные опции (если поддерживается)
export const GroupedOptions: Story = {
  render: () => {
    const groupedOptions = [
      { value: '', label: 'Выберите транспорт' },
      { label: 'Наземный транспорт', value: 'group1' },
      { value: 'car', label: 'Автомобиль' },
      { value: 'bus', label: 'Автобус' },
      { value: 'bike', label: 'Велосипед' },
      { label: 'Воздушный транспорт', value: 'group2' },
      { value: 'plane', label: 'Самолет' },
      { value: 'helicopter', label: 'Вертолет' },
      { label: 'Водный транспорт', value: 'group3' },
      { value: 'ship', label: 'Корабль' },
      { value: 'boat', label: 'Лодка' },
    ];
    
    return (
      <Select
        name="transport"
        label="Тип транспорта"
        options={groupedOptions}
        onChange={fn()}
      />
    );
  },
};

// Интерактивные примеры
export const Interactive: Story = {
  render: () => {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('');
    
    return (
      <div className="w-96 space-y-6">
        <Select
          name="interactive-country"
          label="Страна проживания"
          options={countries}
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        />
        
        <Select
          name="interactive-language"
          label="Предпочитаемый язык"
          options={programmingLanguages}
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        />
        
        <div className="p-4 border rounded-lg space-y-2">
          <h4 className="font-medium">Выбранные значения:</h4>
          <div className="text-sm">
            <p>Страна: {selectedCountry ? countries.find(c => c.value === selectedCountry)?.label : 'Не выбрана'}</p>
            <p>Язык: {selectedLanguage ? programmingLanguages.find(l => l.value === selectedLanguage)?.label : 'Не выбран'}</p>
          </div>
        </div>
      </div>
    );
  },
};

// Примеры использования в реальных сценариях
export const InForm: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      country: '',
      fruit: '',
      language: '',
    });

    const handleChange = (field: string) => (e: React.ChangeEvent<HTMLSelectElement>) => {
      setFormData(prev => ({ ...prev, [field]: e.target.value }));
    };

    return (
      <div className="w-96 space-y-6 p-6 border rounded-lg">
        <h3 className="text-lg font-semibold">Форма с выпадающими списками</h3>
        
        <Select
          name="country"
          label="Страна проживания *"
          options={countries}
          value={formData.country}
          onChange={handleChange('country')}
          required
        />
        
        <Select
          name="fruit"
          label="Любимый фрукт"
          options={fruits}
          value={formData.fruit}
          onChange={handleChange('fruit')}
        />
        
        <Select
          name="language"
          label="Язык программирования"
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

export const RegistrationForm: Story = {
  render: () => {
    const genders = [
      { value: '', label: 'Выберите пол' },
      { value: 'male', label: 'Мужской' },
      { value: 'female', label: 'Женский' },
      { value: 'other', label: 'Другой' },
      { value: 'prefer-not-to-say', label: 'Предпочитаю не указывать' },
    ];
    
    const ageGroups = [
      { value: '', label: 'Выберите возраст' },
      { value: 'under-18', label: 'Меньше 18' },
      { value: '18-25', label: '18-25 лет' },
      { value: '26-35', label: '26-35 лет' },
      { value: '36-45', label: '36-45 лет' },
      { value: '46-60', label: '46-60 лет' },
      { value: 'over-60', label: 'Больше 60' },
    ];
    
    const educationLevels = [
      { value: '', label: 'Выберите образование' },
      { value: 'school', label: 'Среднее' },
      { value: 'college', label: 'Среднее специальное' },
      { value: 'bachelor', label: 'Бакалавр' },
      { value: 'master', label: 'Магистр' },
      { value: 'phd', label: 'Доктор наук' },
      { value: 'other', label: 'Другое' },
    ];
    
    const [form, setForm] = useState({
      gender: '',
      age: '',
      education: '',
    });
    
    const handleChange = (field: string) => (e: React.ChangeEvent<HTMLSelectElement>) => {
      setForm(prev => ({ ...prev, [field]: e.target.value }));
    };
    
    return (
      <div className="w-96 space-y-6 p-6 border rounded-lg">
        <h3 className="text-lg font-semibold">Анкета пользователя</h3>
        
        <Select
          name="gender"
          label="Пол"
          options={genders}
          value={form.gender}
          onChange={handleChange('gender')}
        />
        
        <Select
          name="age"
          label="Возрастная группа"
          options={ageGroups}
          value={form.age}
          onChange={handleChange('age')}
        />
        
        <Select
          name="education"
          label="Образование"
          options={educationLevels}
          value={form.education}
          onChange={handleChange('education')}
        />
        
        <div className="pt-4 border-t">
          <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded hover:bg-primary/90">
            Сохранить анкету
          </button>
        </div>
      </div>
    );
  },
};

// С кастомными стилями
export const CustomStyled: Story = {
  args: {
    name: 'styled-select',
    label: 'Стилизованный список',
    options: fruits,
    className: 'border-2 border-purple-500 focus:border-purple-700 bg-purple-50',
    onChange: fn(),
  },
};

export const SmallSelect: Story = {
  args: {
    name: 'small',
    label: 'Маленький список',
    options: [
      { value: '1', label: 'Опция 1' },
      { value: '2', label: 'Опция 2' },
      { value: '3', label: 'Опция 3' },
    ],
    className: 'text-sm py-1',
    onChange: fn(),
  },
};

// Много опций
export const ManyOptions: Story = {
  render: () => {
    const timezones = [
      { value: '', label: 'Выберите часовой пояс' },
      ...Array.from({ length: 24 }).map((_, i) => ({
        value: `utc${i >= 12 ? `+${i}` : i}`,
        label: `UTC${i >= 12 ? `+${i}` : i}`,
      })),
    ];
    
    return (
      <div className="w-80">
        <Select
          name="timezone"
          label="Часовой пояс"
          options={timezones}
          onChange={fn()}
        />
        <p className="mt-2 text-sm text-muted-foreground">
          Список с 25 опциями (часовые пояса UTC)
        </p>
      </div>
    );
  },
};

// Все состояния вместе
export const AllStates: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <Select
        name="normal"
        label="Нормальное состояние"
        options={fruits}
        onChange={fn()}
      />
      
      <Select
        name="with-error"
        label="С ошибкой"
        options={fruits}
        error={{ message: 'Обязательное поле' }}
        onChange={fn()}
      />
      
      <Select
        name="disabled"
        label="Отключено"
        options={fruits}
        disabled
        value="apple"
        onChange={fn()}
      />
      
      <Select
        name="selected"
        label="С выбранным значением"
        options={fruits}
        defaultValue="banana"
        onChange={fn()}
      />
      
      <Select
        name="required"
        label="Обязательное поле *"
        options={fruits}
        required
        onChange={fn()}
      />
    </div>
  ),
};

// Сравнение с другими элементами формы
export const WithOtherFormElements: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Имя</label>
        <input 
          type="text" 
          className="w-full px-3 py-2 border rounded"
          placeholder="Введите имя"
        />
      </div>
      
      <Select
        name="country"
        label="Страна"
        options={countries}
        onChange={fn()}
      />
      
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input 
          type="email" 
          className="w-full px-3 py-2 border rounded"
          placeholder="email@example.com"
        />
      </div>
      
      <Select
        name="language"
        label="Язык"
        options={programmingLanguages}
        onChange={fn()}
      />
      
      <div className="pt-4">
        <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded hover:bg-primary/90">
          Отправить форму
        </button>
      </div>
    </div>
  ),
};