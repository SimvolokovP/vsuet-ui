import type { Meta, StoryObj } from '@storybook/react-vite';
import { Skeleton } from './Skeleton';
import { useEffect, useState } from 'react';

const meta: Meta<typeof Skeleton> = {
  title: 'UI/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Компонент для отображения заглушки во время загрузки контента.',
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Дополнительные CSS классы',
      table: {
        category: 'Стилизация',
      },
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

// Базовые истории
export const Default: Story = {
  args: {
    className: 'h-4 w-32',
  },
};

// Разные размеры
export const Small: Story = {
  args: {
    className: 'h-2 w-24',
  },
};

export const Medium: Story = {
  args: {
    className: 'h-4 w-48',
  },
};

export const Large: Story = {
  args: {
    className: 'h-6 w-64',
  },
};

export const ExtraLarge: Story = {
  args: {
    className: 'h-8 w-96',
  },
};

// Разные формы
export const Circle: Story = {
  args: {
    className: 'h-12 w-12 rounded-full',
  },
};

export const Square: Story = {
  args: {
    className: 'h-12 w-12',
  },
};

export const Rectangle: Story = {
  args: {
    className: 'h-8 w-32',
  },
};

// Примеры использования в реальных компонентах
export const AvatarSkeleton: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-24" />
      </div>
    </div>
  ),
};

export const CardSkeleton: Story = {
  render: () => (
    <div className="w-64 space-y-3">
      <Skeleton className="h-40 w-full rounded-lg" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-2/3" />
      </div>
      <div className="flex justify-between pt-2">
        <Skeleton className="h-8 w-20" />
        <Skeleton className="h-8 w-8 rounded-full" />
      </div>
    </div>
  ),
};

export const ListSkeleton: Story = {
  render: () => (
    <div className="w-96 space-y-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex items-center justify-between p-3 border rounded">
          <div className="flex items-center space-x-3">
            <Skeleton className="h-10 w-10 rounded" />
            <div className="space-y-2">
              <Skeleton className="h-3 w-32" />
              <Skeleton className="h-2 w-24" />
            </div>
          </div>
          <Skeleton className="h-8 w-20" />
        </div>
      ))}
    </div>
  ),
};

export const TableSkeleton: Story = {
  render: () => (
    <div className="w-full overflow-hidden rounded-lg border">
      <div className="bg-muted p-3 border-b">
        <div className="grid grid-cols-4 gap-4">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-16" />
        </div>
      </div>
      <div className="divide-y">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="p-3">
            <div className="grid grid-cols-4 gap-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const ProfileSkeleton: Story = {
  render: () => (
    <div className="w-80 space-y-6">
      <div className="flex flex-col items-center space-y-4">
        <Skeleton className="h-24 w-24 rounded-full" />
        <div className="text-center space-y-2">
          <Skeleton className="h-5 w-32 mx-auto" />
          <Skeleton className="h-3 w-48 mx-auto" />
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-10 w-full" />
        </div>
        
        <div className="space-y-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-10 w-full" />
        </div>
        
        <div className="space-y-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-20 w-full" />
        </div>
      </div>
      
      <div className="flex space-x-3">
        <Skeleton className="h-10 w-1/2" />
        <Skeleton className="h-10 w-1/2" />
      </div>
    </div>
  ),
};

export const ProductCardSkeleton: Story = {
  render: () => (
    <div className="w-56 space-y-3">
      <Skeleton className="h-40 w-full rounded-lg" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-full" />
      </div>
      <div className="flex items-center justify-between">
        <Skeleton className="h-5 w-16" />
        <Skeleton className="h-8 w-8 rounded-full" />
      </div>
    </div>
  ),
};

export const ArticleSkeleton: Story = {
  render: () => (
    <div className="w-full max-w-2xl space-y-6">
      <Skeleton className="h-8 w-3/4" />
      <div className="flex items-center space-x-4">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-3 w-32" />
          <Skeleton className="h-2 w-24" />
        </div>
      </div>
      <Skeleton className="h-64 w-full rounded-lg" />
      <div className="space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  ),
};

export const DashboardSkeleton: Story = {
  render: () => (
    <div className="w-full max-w-6xl space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Skeleton className="h-32 w-full rounded-lg" />
        <Skeleton className="h-32 w-full rounded-lg" />
        <Skeleton className="h-32 w-full rounded-lg" />
        <Skeleton className="h-32 w-full rounded-lg" />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-64 w-full rounded-lg" />
        </div>
        
        <div className="space-y-4">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-64 w-full rounded-lg" />
        </div>
      </div>
    </div>
  ),
};

// Разные варианты анимации (если поддерживаются)
export const CustomAnimation: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="text-sm font-medium mb-2">Быстрая анимация</p>
        <Skeleton className="h-4 w-32 animate-pulse-fast" />
      </div>
      
      <div>
        <p className="text-sm font-medium mb-2">Медленная анимация</p>
        <Skeleton className="h-4 w-32 animate-pulse-slow" />
      </div>
      
      <div>
        <p className="text-sm font-medium mb-2">Без анимации</p>
        <Skeleton className="h-4 w-32 animate-none" />
      </div>
    </div>
  ),
};

// Сравнение с реальным контентом
export const WithRealContentComparison: Story = {
  render: () => {
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
      const timer = setTimeout(() => setIsLoading(false), 3000);
      return () => clearTimeout(timer);
    }, []);
    
    return (
      <div className="w-80 space-y-4">
        <button 
          onClick={() => setIsLoading(true)}
          className="px-4 py-2 bg-primary text-primary-foreground rounded text-sm hover:bg-primary/90"
        >
          Загрузить снова
        </button>
        
        <div className="border rounded-lg p-4">
          {isLoading ? (
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-3 w-24" />
                </div>
              </div>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"></div>
                <div>
                  <h3 className="font-semibold">Иван Иванов</h3>
                  <p className="text-sm text-muted-foreground">Frontend разработчик</p>
                </div>
              </div>
              <p>Это пример реального контента, который заменяет скелетон после загрузки.</p>
              <p>Все данные успешно загружены и отображаются.</p>
            </div>
          )}
        </div>
        
        <div className="text-sm text-muted-foreground">
          Состояние: {isLoading ? 'Загрузка...' : 'Загружено'}
        </div>
      </div>
    );
  },
};

// Все варианты вместе
export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
      <div className="space-y-4">
        <div>
          <p className="text-sm font-medium mb-2">Текст</p>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4 mt-2" />
        </div>
        
        <div>
          <p className="text-sm font-medium mb-2">Заголовок</p>
          <Skeleton className="h-6 w-48" />
        </div>
        
        <div>
          <p className="text-sm font-medium mb-2">Кнопка</p>
          <Skeleton className="h-10 w-32 rounded" />
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <p className="text-sm font-medium mb-2">Аватар</p>
          <Skeleton className="h-12 w-12 rounded-full" />
        </div>
        
        <div>
          <p className="text-sm font-medium mb-2">Картинка</p>
          <Skeleton className="h-40 w-full rounded-lg" />
        </div>
        
        <div>
          <p className="text-sm font-medium mb-2">Форма</p>
          <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-10 w-full" />
          </div>
        </div>
      </div>
    </div>
  ),
};

// Интерактивный пример
export const Interactive: Story = {
  render: () => {
    const [width, setWidth] = useState(32);
    const [height, setHeight] = useState(4);
    const [rounded, setRounded] = useState('md');
    
    const roundedClasses = {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    };
    
    return (
      <div className="w-96 space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Ширина: {width}rem
            </label>
            <input
              type="range"
              min="4"
              max="96"
              value={width}
              onChange={(e) => setWidth(Number(e.target.value))}
              className="w-full"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">
              Высота: {height}px
            </label>
            <input
              type="range"
              min="2"
              max="24"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
              className="w-full"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">
              Скругление углов
            </label>
            <div className="flex gap-2">
              {Object.entries(roundedClasses).map(([key, className]) => (
                <button
                  key={key}
                  className={`px-3 py-1 text-sm border rounded ${
                    rounded === key
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted'
                  }`}
                  onClick={() => setRounded(key)}
                >
                  {key}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border rounded-lg p-6 text-center">
          <Skeleton
            className={`h-${height} w-${width} ${roundedClasses[rounded as keyof typeof roundedClasses]}`}
          />
          <p className="mt-4 text-sm text-muted-foreground">
            Применяемые классы: <code>h-{height} w-{width} {roundedClasses[rounded as keyof typeof roundedClasses]}</code>
          </p>
        </div>
      </div>
    );
  },
};