import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tooltip } from "./Tooltip";
import { Button } from "../Button/Button";
import { useState } from "react";
import { Input } from "../Input/Input";

const meta: Meta<typeof Tooltip> = {
  title: "UI/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Всплывающая подсказка, которая появляется при наведении на элемент.",
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "Текст подсказки",
      table: {
        category: "Контент",
        type: { summary: "string" },
      },
    },
    children: {
      description: "Элемент, при наведении на который появляется подсказка",
      table: {
        category: "Контент",
      },
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

// Базовая история с кнопкой
export const Default: Story = {
  render: () => (
    <Tooltip title="Это всплывающая подсказка">
      <Button>Наведи на меня</Button>
    </Tooltip>
  ),
};

// С длинным текстом
export const LongText: Story = {
  render: () => (
    <Tooltip title="Очень длинный текст подсказки, который может занимать несколько строк и содержать подробное описание функционала элемента">
      <Button>Подсказка с длинным текстом</Button>
    </Tooltip>
  ),
};

// С коротким текстом
export const ShortText: Story = {
  render: () => (
    <Tooltip title="Коротко">
      <Button>Короткая подсказка</Button>
    </Tooltip>
  ),
};

// На тексте
export const OnText: Story = {
  render: () => (
    <div className="text-center space-y-4">
      <p>
        Этот текст содержит{" "}
        <Tooltip title="HyperText Markup Language - язык разметки веб-страниц">
          <span className="border-b border-dashed border-primary text-primary cursor-help">
            HTML
          </span>
        </Tooltip>{" "}
        и{" "}
        <Tooltip title="Cascading Style Sheets - язык стилей">
          <span className="border-b border-dashed border-primary text-primary cursor-help">
            CSS
          </span>
        </Tooltip>{" "}
        термины
      </p>
    </div>
  ),
};

// С отключенным элементом
export const OnDisabledElement: Story = {
  render: () => (
    <Tooltip title="Элемент временно недоступен">
      <Button disabled>Отключенная кнопка</Button>
    </Tooltip>
  ),
};

// Несколько тултипов вместе
export const MultipleTooltips: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip title="Сохранить">
        <Button variant="default">💾</Button>
      </Tooltip>

      <Tooltip title="Удалить">
        <Button variant="default">🗑️</Button>
      </Tooltip>

      <Tooltip title="Редактировать">
        <Button variant="default">✏️</Button>
      </Tooltip>

      <Tooltip title="Копировать">
        <Button variant="default">📋</Button>
      </Tooltip>
    </div>
  ),
};

// В форме
export const InForm: Story = {
  render: () => (
    <div className="w-80 space-y-4 p-6 border rounded-lg">
      <div>
        <Tooltip title="Пароль должен содержать минимум 8 символов, включая цифры и специальные символы">
          <span className="cursor-help text-muted-foreground">(?)</span>
        </Tooltip>

        <Input
          label="Сложный пароль"
          type="password"
          className="w-full px-3 py-2 border rounded"
          placeholder="Введите пароль"
        />
      </div>
    </div>
  ),
};

// Интерактивный пример
export const Interactive: Story = {
  render: () => {
    const [tooltipText, setTooltipText] = useState("Измените текст подсказки");
    const [inputValue, setInputValue] = useState("Измените текст подсказки");

    return (
      <div className="w-96 space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium">Текст подсказки</label>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={() => setTooltipText(inputValue)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Введите текст для подсказки"
          />
        </div>

        <div className="border rounded-lg p-6 text-center">
          <Tooltip title={tooltipText}>
            <Button variant="primary">Наведите курсор</Button>
          </Tooltip>

          <p className="mt-4 text-sm text-muted-foreground">
            Текущий текст подсказки: "{tooltipText}"
          </p>
        </div>
      </div>
    );
  },
};
