"use client";

import { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Input,
  Badge,
  Modal,
  ModalHeader,
  ModalContent,
  ModalFooter,
  Checkbox,
} from "w-ui";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");

  // States untuk komponen baru
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [newsletter, setNewsletter] = useState(true);
  const [notifications, setNotifications] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulasi validasi
    if (!email.includes("@")) {
      setEmailError("Email tidak valid");
      setLoading(false);
      return;
    }

    setEmailError("");

    // Simulasi API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    alert("Form berhasil disubmit!");
  };

  const UserIcon = () => (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  );

  const LockIcon = () => (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  );

  const ArrowRightIcon = () => (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 7l5 5m0 0l-5 5m5-5H6"
      />
    </svg>
  );

  const CheckIcon = () => (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );

  const StarIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );

  const BellIcon = () => (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
      />
    </svg>
  );

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Selamat Datang di W-UI Demo
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Ini adalah demo aplikasi untuk menguji komponen-komponen dari W-UI
          library. Semua komponen di bawah ini menggunakan komponen dari library
          yang telah dibuat.
        </p>
      </div>

      {/* Button Examples */}
      <Card variant="elevated">
        <CardHeader>
          <h3 className="text-xl font-semibold text-gray-900">
            Button Components
          </h3>
          <p className="text-gray-600">
            Berbagai variasi button dengan styling yang berbeda
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Variants:</h4>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-2">Sizes:</h4>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
                <Button size="xl">Extra Large</Button>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-2">With Icons:</h4>
              <div className="flex flex-wrap gap-3">
                <Button leftIcon={<UserIcon />}>With Left Icon</Button>
                <Button rightIcon={<ArrowRightIcon />}>With Right Icon</Button>
                <Button loading>Loading State</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Form Example */}
      <Card variant="outlined">
        <CardHeader>
          <h3 className="text-xl font-semibold text-gray-900">
            Form Components
          </h3>
          <p className="text-gray-600">
            Contoh penggunaan Input component dengan validasi
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Email"
              type="email"
              placeholder="masukkan@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              leftIcon={<UserIcon />}
              error={emailError}
              helperText="Gunakan email yang valid"
            />

            <Input
              label="Password"
              type="password"
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              leftIcon={<LockIcon />}
              helperText="Minimal 6 karakter"
            />
          </form>
        </CardContent>
        <CardFooter>
          <div className="flex gap-3">
            <Button
              type="submit"
              onClick={handleSubmit}
              loading={loading}
              disabled={!email || !password}
            >
              Submit Form
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setEmail("");
                setPassword("");
                setEmailError("");
              }}
            >
              Reset
            </Button>
          </div>
        </CardFooter>
      </Card>

      {/* Card Examples */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Card Variants
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card variant="default">
            <CardHeader>
              <h4 className="font-semibold">Default Card</h4>
            </CardHeader>
            <CardContent>
              <p>Ini adalah card dengan variant default.</p>
            </CardContent>
          </Card>

          <Card variant="outlined">
            <CardHeader>
              <h4 className="font-semibold">Outlined Card</h4>
            </CardHeader>
            <CardContent>
              <p>Ini adalah card dengan variant outlined.</p>
            </CardContent>
          </Card>

          <Card variant="elevated">
            <CardHeader>
              <h4 className="font-semibold">Elevated Card</h4>
            </CardHeader>
            <CardContent>
              <p>Ini adalah card dengan variant elevated.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Badge Components */}
      <Card variant="default">
        <CardHeader>
          <h3 className="text-xl font-semibold text-gray-900">
            Badge Components
          </h3>
          <p className="text-gray-600">
            Badge untuk menampilkan status, label, atau informasi singkat
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Variants:</h4>
              <div className="flex flex-wrap gap-3">
                <Badge variant="default">Default</Badge>
                <Badge variant="primary">Primary</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="error">Error</Badge>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-2">Sizes:</h4>
              <div className="flex flex-wrap items-center gap-3">
                <Badge size="sm">Small</Badge>
                <Badge size="md">Medium</Badge>
                <Badge size="lg">Large</Badge>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-2">
                Shapes & Icons:
              </h4>
              <div className="flex flex-wrap gap-3">
                <Badge pill>Pill Shape</Badge>
                <Badge variant="success" leftIcon={<CheckIcon />}>
                  Completed
                </Badge>
                <Badge variant="warning" rightIcon={<StarIcon />}>
                  Featured
                </Badge>
                <Badge variant="primary" leftIcon={<BellIcon />} pill>
                  3 Notifications
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Checkbox Components */}
      <Card variant="outlined">
        <CardHeader>
          <h3 className="text-xl font-semibold text-gray-900">
            Checkbox Components
          </h3>
          <p className="text-gray-600">
            Checkbox untuk pilihan boolean dan multiple selection
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Basic Usage:</h4>
              <div className="space-y-3">
                <Checkbox
                  label="Accept Terms and Conditions"
                  helperText="You must accept the terms to continue"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                />

                <Checkbox
                  label="Subscribe to Newsletter"
                  helperText="Get updates about new features"
                  checked={newsletter}
                  onChange={(e) => setNewsletter(e.target.checked)}
                />

                <Checkbox
                  label="Enable Notifications"
                  checked={notifications}
                  onChange={(e) => setNotifications(e.target.checked)}
                />
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-3">Sizes:</h4>
              <div className="space-y-3">
                <Checkbox size="sm" label="Small checkbox" defaultChecked />
                <Checkbox size="md" label="Medium checkbox" defaultChecked />
                <Checkbox size="lg" label="Large checkbox" defaultChecked />
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-3">States:</h4>
              <div className="space-y-3">
                <Checkbox label="Checked" defaultChecked readOnly />
                <Checkbox label="Unchecked" readOnly />
                <Checkbox label="Disabled" disabled />
                <Checkbox label="Disabled Checked" disabled defaultChecked />
                <Checkbox label="Indeterminate" indeterminate readOnly />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Modal Component */}
      <Card variant="elevated">
        <CardHeader>
          <h3 className="text-xl font-semibold text-gray-900">
            Modal Component
          </h3>
          <p className="text-gray-600">
            Modal dialog untuk menampilkan konten overlay
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Try Modal:</h4>
              <div className="flex gap-3 items-center">
                <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
                <Badge variant={isModalOpen ? "success" : "secondary"}>
                  Modal: {isModalOpen ? "Open" : "Closed"}
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Modal Implementation */}
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} size="md">
        <ModalHeader onClose={() => setIsModalOpen(false)}>
          <h3 className="text-lg font-semibold text-gray-900">Demo Modal</h3>
          <p className="text-sm text-gray-600">
            Contoh penggunaan modal component
          </p>
        </ModalHeader>

        <ModalContent>
          <div className="space-y-4">
            <p className="text-gray-700">
              Ini adalah contoh modal yang dibuat dengan W-UI library. Modal ini
              memiliki fitur:
            </p>

            <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
              <li>Overlay dengan backdrop blur</li>
              <li>Keyboard navigation (ESC untuk close)</li>
              <li>Click outside untuk close</li>
              <li>Responsive design</li>
              <li>Smooth animations</li>
            </ul>

            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="primary" size="sm">
                  Info
                </Badge>
                <span className="text-sm font-medium text-blue-800">
                  Modal Features
                </span>
              </div>
              <p className="text-sm text-blue-700">
                Modal ini menggunakan portal untuk render di luar component tree
                dan mencegah body scroll saat terbuka.
              </p>
            </div>

            <div className="space-y-2">
              <Checkbox label="I understand how this modal works" size="sm" />
              <Checkbox
                label="This is a great component library"
                size="sm"
                defaultChecked
                readOnly
              />
            </div>
          </div>
        </ModalContent>

        <ModalFooter>
          <Button variant="outline" onClick={() => setIsModalOpen(false)}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              setIsModalOpen(false);
              alert("Modal closed with action!");
            }}
          >
            Confirm
          </Button>
        </ModalFooter>
      </Modal>

      {/* Usage Info */}
      <Card>
        <CardHeader>
          <h3 className="text-xl font-semibold text-gray-900">
            Informasi Penggunaan
          </h3>
        </CardHeader>
        <CardContent>
          <div className="prose text-sm">
            <p className="mb-3">
              W-UI library sekarang memiliki{" "}
              <Badge variant="primary" size="sm">
                6 komponen
              </Badge>{" "}
              utama yang siap digunakan. Library ini mendukung:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-gray-900 mb-2">
                  Komponen Tersedia:
                </h5>
                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                  <li>Button - Berbagai variant dan states</li>
                  <li>Input - Form input dengan validasi</li>
                  <li>Card - Container untuk konten</li>
                  <li>Badge - Label dan status indicator</li>
                  <li>Checkbox - Boolean selections</li>
                  <li>Modal - Dialog dan overlay</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-900 mb-2">Features:</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                  <li>Next.js App Router dan Pages Router</li>
                  <li>TypeScript dengan type definitions lengkap</li>
                  <li>Tailwind CSS untuk styling</li>
                  <li>ESM dan CommonJS module formats</li>
                  <li>Tree-shaking untuk bundle size optimal</li>
                  <li>Accessible dan responsive design</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
