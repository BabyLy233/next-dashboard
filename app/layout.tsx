import '@/app/ui/global.css';
import { mono } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className={`${mono.className} antialiased`}>{children}</body>
    </html>
  );
}
