import { useRouter } from "next/dist/client/router";

export default function Home() {
  const { locale } = useRouter();
  return <p>locale: {locale}</p>;
}
