import AlertGo from '@/components/pages/docs/alert-go/AlertGo';
import { generateMetadata } from '@/lib/seo';
 

export const metadata = generateMetadata({
  title: "Alert-Go",
  description: "Лёгкая и простая библиотека уведомлений для веба, аналог Sonner. Поддерживает все позиции (top-left, top-center, bottom-right и т.д.), анимации, действия и TypeScript. Работает с React, Next.js, Vite и любыми сборщиками.",
  url: "https://next-structure-seven.vercel.app/",
  image: "/alim.jpg",
});

const AlertGoPage = () => <AlertGo/>

export default AlertGoPage;