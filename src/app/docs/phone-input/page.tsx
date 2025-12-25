import PhoneInput from "@/components/pages/docs/phone-input/PhoneInput";
import { generateMetadata } from "@/lib/seo";


export const metadata = generateMetadata({
  title: "Phone-Go",
  description: "Мощный и простой React-компонент для ввода телефонных номеров с современным UI, поддержкой всех стран, масками, валидацией и кастомизацией. Работает с TypeScript, Next.js, Vite и любыми сборщиками.",
  url: "https://next-structure-seven.vercel.app/",
  image: "/alim.jpg",
});

const page = () => <PhoneInput />;

export default page;
