# W-UI Component Library

Modern UI component library yang dibangun untuk Next.js applications dengan TypeScript dan Tailwind CSS.

## ✨ Features

- 🚀 **Kompatible dengan Next.js** - Mendukung App Router dan Pages Router
- 📦 **TypeScript** - Type definitions lengkap untuk developer experience yang optimal
- 🎨 **Tailwind CSS** - Styling modern dengan utility-first approach
- 🌳 **Tree-shakable** - Import hanya komponen yang dibutuhkan
- 📱 **Responsive** - Desain yang responsive out-of-the-box
- ♿ **Accessible** - Komponen yang accessible dan semantic
- 🔧 **Customizable** - Mudah dikustomisasi sesuai design system

## 🚀 Quick Start

### Installation

```bash
npm install w-ui
# atau
yarn add w-ui
# atau
pnpm add w-ui
```

### Setup Tailwind CSS

W-UI menggunakan Tailwind CSS. Pastikan Anda sudah menginstall Tailwind di project Next.js Anda:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Kemudian update `tailwind.config.js` Anda untuk include W-UI components:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // PENTING: Include path ke w-ui library
    "./node_modules/w-ui/dist/**/*.{js,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        secondary: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
          950: "#030712",
        },
      },
    },
  },
  plugins: [],
};
```

### Basic Usage

```tsx
import { Button, Card, CardHeader, CardContent, Input } from "w-ui";

export default function MyPage() {
  return (
    <Card>
      <CardHeader>
        <h2>Welcome to W-UI</h2>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input label="Email" type="email" placeholder="Enter your email" />
          <Button variant="primary">Get Started</Button>
        </div>
      </CardContent>
    </Card>
  );
}
```

## 📚 Components

### Button

Komponen button dengan berbagai variant dan state.

```tsx
import { Button } from 'w-ui';

// Basic usage
<Button>Click me</Button>

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>

// With icons
<Button leftIcon={<Icon />}>With Left Icon</Button>
<Button rightIcon={<Icon />}>With Right Icon</Button>

// Loading state
<Button loading>Loading...</Button>
```

#### Button Props

| Prop        | Type                                                                | Default     | Description           |
| ----------- | ------------------------------------------------------------------- | ----------- | --------------------- |
| `variant`   | `"primary" \| "secondary" \| "outline" \| "ghost" \| "destructive"` | `"primary"` | Button variant        |
| `size`      | `"sm" \| "md" \| "lg" \| "xl"`                                      | `"md"`      | Button size           |
| `loading`   | `boolean`                                                           | `false`     | Show loading state    |
| `leftIcon`  | `React.ReactNode`                                                   | -           | Icon di sebelah kiri  |
| `rightIcon` | `React.ReactNode`                                                   | -           | Icon di sebelah kanan |

### Card

Komponen card untuk mengelompokkan konten.

```tsx
import { Card, CardHeader, CardContent, CardFooter } from "w-ui";

<Card variant="elevated">
  <CardHeader>
    <h3>Card Title</h3>
    <p>Card subtitle</p>
  </CardHeader>
  <CardContent>
    <p>Card content goes here...</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>;
```

#### Card Props

| Prop      | Type                                    | Default     | Description  |
| --------- | --------------------------------------- | ----------- | ------------ |
| `variant` | `"default" \| "outlined" \| "elevated"` | `"default"` | Card variant |
| `padding` | `"none" \| "sm" \| "md" \| "lg"`        | `"md"`      | Card padding |

### Input

Komponen input dengan label, helper text, dan error state.

```tsx
import { Input } from "w-ui";

<Input
  label="Email"
  type="email"
  placeholder="Enter your email"
  helperText="We'll never share your email"
  error="Email is required"
  leftIcon={<EmailIcon />}
  rightIcon={<CheckIcon />}
/>;
```

#### Input Props

| Prop         | Type                   | Default | Description                |
| ------------ | ---------------------- | ------- | -------------------------- |
| `label`      | `string`               | -       | Input label                |
| `helperText` | `string`               | -       | Helper text di bawah input |
| `error`      | `string`               | -       | Error message              |
| `size`       | `"sm" \| "md" \| "lg"` | `"md"`  | Input size                 |
| `leftIcon`   | `React.ReactNode`      | -       | Icon di sebelah kiri       |
| `rightIcon`  | `React.ReactNode`      | -       | Icon di sebelah kanan      |

## 🏗️ Development

### Setup Development Environment

```bash
# Clone repository
git clone <repository-url>
cd w-ui

# Install dependencies
npm install

# Build library
npm run build

# Watch mode untuk development
npm run dev
```

### Testing dengan Demo App

```bash
# Masuk ke folder demo
cd demo

# Install dependencies
npm install

# Jalankan demo app
npm run dev
```

Demo app akan berjalan di `http://localhost:3000` dan menampilkan semua komponen yang tersedia.

### Build Process

Library ini menggunakan **tsup** untuk build process yang cepat dan efisien:

- ✅ ESM dan CommonJS support
- ✅ TypeScript declarations (.d.ts)
- ✅ Source maps
- ✅ Tree-shaking friendly
- ✅ External dependencies (React, React-DOM)

## 🔧 Customization

### Custom Colors

Anda bisa mengkustomisasi warna dengan mengextend Tailwind config:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          // Custom primary colors
          500: "#your-color",
          600: "#your-darker-color",
        },
        secondary: {
          // Custom secondary colors
        },
      },
    },
  },
};
```

### Custom Components

Semua komponen bisa dikustomisasi dengan `className` prop:

```tsx
<Button className="my-custom-styles">Custom Button</Button>
```

## 📦 Package Information

### Exports

Library ini menggunakan modern package exports:

```json
{
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "require": "./dist/index.cjs.js",
      "types": "./dist/index.d.ts"
    }
  }
}
```

### Peer Dependencies

```json
{
  "peerDependencies": {
    "react": "^18.0.0 || ^19.0.0",
    "react-dom": "^18.0.0 || ^19.0.0"
  }
}
```

## 🤝 Contributing

1. Fork repository ini
2. Buat feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push ke branch (`git push origin feature/amazing-feature`)
5. Buat Pull Request

## 📄 License

MIT License - lihat file [LICENSE](LICENSE) untuk detail lengkap.

## 🙋‍♂️ Support

Jika Anda menemukan bug atau memiliki pertanyaan, silakan buat issue di GitHub repository ini.

---

**Happy coding! 🚀**
# w-ui
