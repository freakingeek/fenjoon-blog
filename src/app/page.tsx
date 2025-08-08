import Link from "next/link";
import Container from "@/components/Container";
import HomeSlider from "./components/HomeSlider";
import SamandehiLogo from "@/components/SamandehiLogo";

export default function HomePage() {
  return (
    <Container>
      <header className="flex justify-between items-center">
        <h1 className="text-xl font-extrabold">فنجون</h1>

        <nav>
          <ul className="flex gap-x-8">
            <li>
              <Link href="/" className="hover:underline hover:text-primary">
                خانه
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="hover:underline hover:text-primary"
              >
                درباره ما
              </Link>
            </li>

            <li>
              <Link href="/blog" className="hover:underline hover:text-primary">
                وبلاگ
              </Link>
            </li>

            <li>
              <Link
                href="https://app.fnjo.ir/"
                className="hover:underline hover:text-primary"
              >
                ورود به اپلیکیشن
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <HomeSlider className="mt-10" />
      <SamandehiLogo className="mt-80" />
    </Container>
  );
}
