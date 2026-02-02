import type { Meta, StoryObj } from "@storybook/react-vite";

import { useState } from "react";
import { Button } from "../Button/Button";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Поле ввода текста с поддержкой валидации, лейблов и различных состояний.",
      },
    },
  },
  argTypes: {
    name: {
      control: "text",
      description: "Имя поля (используется для формы и htmlFor)",
      table: {
        category: "Основные",
        type: { summary: "string" },
      },
    },
    label: {
      control: "text",
      description: "Текст лейбла над полем",
      table: {
        category: "Основные",
        type: { summary: "string" },
      },
    },
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel", "url", "search"],
      description: "Тип поля ввода",
      table: {
        category: "Основные",
        defaultValue: { summary: "text" },
      },
    },
    placeholder: {
      control: "text",
      description: "Текст подсказки внутри поля",
      table: {
        category: "Контент",
        type: { summary: "string" },
      },
    },
    value: {
      control: "text",
      description: "Значение поля",
      table: {
        category: "Состояние",
      },
    },
    disabled: {
      control: "boolean",
      description: "Отключенное состояние",
      table: {
        category: "Состояние",
        defaultValue: { summary: "false" },
      },
    },
    readOnly: {
      control: "boolean",
      description: "Только для чтения",
      table: {
        category: "Состояние",
        defaultValue: { summary: "false" },
      },
    },
    required: {
      control: "boolean",
      description: "Обязательное поле",
      table: {
        category: "Валидация",
        defaultValue: { summary: "false" },
      },
    },
    error: {
      control: "object",
      description: "Объект ошибки с сообщением",
      table: {
        category: "Валидация",
        type: { summary: "{ message?: string }" },
      },
    },
    className: {
      control: "text",
      description: "Дополнительные CSS классы",
      table: {
        category: "Стилизация",
      },
    },
    onChange: {
      action: "changed",
      description: "Обработчик изменения значения",
      table: {
        category: "События",
      },
    },
    onFocus: {
      action: "focused",
      description: "Обработчик фокуса",
      table: {
        category: "События",
      },
    },
    onBlur: {
      action: "blurred",
      description: "Обработчик потери фокуса",
      table: {
        category: "События",
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// Базовая история
export const Default: Story = {
  args: {
    placeholder: "Введите текст...",
  },
};

// С лейблом
export const WithLabel: Story = {
  args: {
    label: "Имя пользователя",
    name: "username",
    placeholder: "Введите имя пользователя",
  },
};

// С ошибкой
export const WithError: Story = {
  args: {
    label: "Email",
    name: "email",
    placeholder: "email@example.com",
    error: { message: "Неверный формат email" },
    defaultValue: "неправильный-email",
  },
};

// Отключенное поле
export const Disabled: Story = {
  args: {
    label: "Отключенное поле",
    placeholder: "Нельзя редактировать",
    disabled: true,
    defaultValue: "Только чтение",
  },
};

// Только для чтения
export const ReadOnly: Story = {
  args: {
    label: "Только чтение",
    value: "Это значение нельзя изменить",
    readOnly: true,
  },
};

// Обязательное поле
export const Required: Story = {
  args: {
    label: "Обязательное поле",
    placeholder: "Заполните обязательно",
    required: true,
  },
};

// Разные типы полей
export const Email: Story = {
  args: {
    label: "Email",
    type: "email",
    placeholder: "user@example.com",
  },
};

export const Password: Story = {
  args: {
    label: "Пароль",
    type: "password",
    placeholder: "Введите пароль",
  },
};

export const Number: Story = {
  args: {
    label: "Возраст",
    type: "number",
    placeholder: "Введите возраст",
    min: 0,
    max: 120,
  },
};

// С кастомными стилями
export const CustomStyled: Story = {
  args: {
    label: "Кастомный стиль",
    placeholder: "Стилизованное поле",
    className:
      "border-2 border-dashed border-purple-500 focus:border-purple-700",
  },
};

// Интерактивная история
export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState("");
    const [error, setError] = useState<{ message?: string } | undefined>(
      undefined,
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setValue(newValue);

      // Простая валидация
      if (newValue && newValue.length < 3) {
        setError({ message: "Минимум 3 символа" });
      } else {
        setError(undefined);
      }
    };

    return (
      <div className="w-80 space-y-4">
        <Input
          label="Интерактивное поле"
          placeholder="Введите минимум 3 символа..."
          value={value}
          onChange={handleChange}
          error={error}
        />
        <div className="text-sm text-muted-foreground">
          <p>Текущее значение: {value || "(пусто)"}</p>
          <p>Количество символов: {value.length}</p>
        </div>
      </div>
    );
  },
};

// Пример с формой
export const InForm: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
    });

    const handleChange =
      (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
          ...prev,
          [field]: e.target.value,
        }));
      };

    return (
      <div style={{padding: "16px"}} className="space-y-6 rounded-lg bg-secondary">
        <div className="p-6 space-y-6">
          <h3 className="text-lg font-semibold">Форма регистрации</h3>

          <Input
            label="Полное имя"
            name="name"
            placeholder="Иван Иванов"
            value={formData.name}
            onChange={handleChange("name")}
            required
          />

          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="ivan@example.com"
            value={formData.email}
            onChange={handleChange("email")}
            required
          />

          <Input
            label="Пароль"
            name="password"
            type="password"
            placeholder="Создайте пароль"
            value={formData.password}
            onChange={handleChange("password")}
            required
          />

          <div className="pt-4">
            <Button
              variant="primary"
              className="w-full bg-primary text-primary-foreground py-2 px-4 rounded hover:bg-primary/90"
            >
              Зарегистрироваться
            </Button>
          </div>

          <div className="text-xs text-muted-foreground">
            <p>Заполненные данные:</p>
            <pre className="mt-2 p-2 bg-muted rounded text-xs overflow-auto">
              {JSON.stringify(formData, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    );
  },
};

// Все состояния вместе
export const AllStates: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <Input label="Нормальное поле" placeholder="Введите что-нибудь" />

      <Input
        label="Поле с ошибкой"
        placeholder="Неправильный ввод"
        error={{ message: "Ошибка валидации" }}
        defaultValue="ошибка"
      />

      <Input
        label="Отключенное поле"
        placeholder="Недоступно"
        disabled
        defaultValue="Заблокировано"
      />

      <Input label="Только чтение" value="Текст только для чтения" readOnly />

      <Input
        label="Обязательное поле"
        placeholder="Обязательно для заполнения"
        required
      />
    </div>
  ),
};

// Разные типы в одной истории
export const InputTypes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input label="Текст" type="text" placeholder="Простой текст" />
      <Input label="Email" type="email" placeholder="email@example.com" />
      <Input label="Пароль" type="password" placeholder="Секретный пароль" />
      <Input label="Число" type="number" placeholder="123" />
      <Input label="Телефон" type="tel" placeholder="+7 (900) 000-00-00" />
      <Input label="Поиск" type="search" placeholder="Поиск..." />
    </div>
  ),
};
