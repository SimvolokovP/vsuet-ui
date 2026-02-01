import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "default", "text"],
      description: "Вариант кнопки",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "none"],
      description: "Размер кнопки",
    },
    disabled: {
      control: "boolean",
      description: "Отключенное состояние",
    },
    className: {
      control: "text",
      description: "Дополнительные CSS классы",
    },
    children: {
      control: "text",
      description: "Содержимое кнопки",
    },
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Базовая кнопка с текстом по умолчанию
export const Default: Story = {
  args: {
    children: "Кнопка",
    variant: "default",
    size: "md",
  },
};

// Primary кнопка
export const Primary: Story = {
  args: {
    children: "Primary кнопка",
    variant: "primary",
    size: "md",
  },
};

// Text кнопка
export const Text: Story = {
  args: {
    children: "Text кнопка",
    variant: "text",
    size: "md",
  },
};

// Разные размеры
export const Small: Story = {
  args: {
    children: "Маленькая",
    size: "sm",
    variant: "default",
  },
};

export const Large: Story = {
  args: {
    children: "Большая",
    size: "lg",
    variant: "default",
  },
};

// Отключенная кнопка
export const Disabled: Story = {
  args: {
    children: "Отключена",
    disabled: true,
    variant: "primary",
  },
};

// Кнопка с иконкой (пример)
export const WithIcon: Story = {
  args: {
    children: (
      <>
        <span>Кнопка с иконкой</span>
        <span>→</span>
      </>
    ),
    variant: "primary",
  },
};

// Все варианты вместе в одной истории
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      <div className="flex gap-2">
        <Button variant="primary" size="sm">
          Primary sm
        </Button>
        <Button variant="primary" size="md">
          Primary md
        </Button>
        <Button variant="primary" size="lg">
          Primary lg
        </Button>
      </div>
      <div className="flex gap-2">
        <Button variant="default" size="sm">
          Default sm
        </Button>
        <Button variant="default" size="md">
          Default md
        </Button>
        <Button variant="default" size="lg">
          Default lg
        </Button>
      </div>
      <div className="flex gap-2">
        <Button variant="text" size="sm">
          Text sm
        </Button>
        <Button variant="text" size="md">
          Text md
        </Button>
        <Button variant="text" size="lg">
          Text lg
        </Button>
      </div>
    </div>
  ),
};

// Пример с кастомным классом
export const CustomClass: Story = {
  args: {
    children: "Кастомный стиль",
    className: "border-2 border-dashed border-gray-400",
    variant: "default",
  },
};

// Кнопка как ссылка (с onClick)
export const Clickable: Story = {
  args: {
    children: "Нажми меня",
    variant: "primary",
    onClick: () => console.log("Кнопка нажата!"),
  },
};
