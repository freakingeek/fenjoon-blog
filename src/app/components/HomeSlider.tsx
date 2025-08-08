"use client";

import Image from "next/image";
import { type KeenSliderOptions } from "keen-slider";
import Slider, { SliderItem } from "@/components/Slider";
import StoryImage1 from "../../../public/assets/images/ChatGPT Image Apr 26, 2025, 09_23_05 AM.png";
import StoryImage2 from "../../../public/assets/images/ChatGPT Image Apr 26, 2025, 09_57_46 AM.png";
import StoryImage3 from "../../../public/assets/images/ChatGPT Image Apr 26, 2025, 10_28_51 AM.png";
import Link from "next/link";

const options: KeenSliderOptions = {
  loop: true,
  slides: {
    perView: 1.5,
    spacing: 16,
    origin: "center",
  },
};

interface HomeSliderProps {
  className?: string;
}

export default function HomeSlider({ className }: HomeSliderProps) {
  return (
    <Slider options={options} className={className}>
      <SliderItem className="h-80 flex items-center justify-center relative rounded-lg">
        <Link href="https://app.fnjo.ir">
          <div className="flex gap-y-4 flex-col items-center relative z-10">
            <span className="text-4xl font-black">
              باران بود، تهران بود، من نبودم ...
            </span>
            <span>داستان‌های کوتاه با حال و هوای بارانی</span>
          </div>

          <Image src={StoryImage1} alt="" fill className="object-cover" />
        </Link>
      </SliderItem>

      <SliderItem className="h-80 flex items-center justify-center relative rounded-lg">
        <Link href="https://app.fnjo.ir">
          <div className="flex gap-y-4 flex-col items-center relative z-10">
            <span className="text-4xl font-black">
              فکرام مث یه عابر بی‌چتر، سرگردون
            </span>
            <span>داستان‌های کوتاه با حال و هوای بارانی</span>
          </div>

          <Image src={StoryImage2} alt="" fill className="object-cover" />
        </Link>
      </SliderItem>

      <SliderItem className="h-80 flex items-center justify-center relative rounded-lg">
        <Link href="https://app.fnjo.ir">
          <div className="flex gap-y-4 flex-col items-center relative z-10">
            <span className="text-4xl font-black">
              فکراتو همه رو یه فنجون کن!
            </span>
            <span>الان داری به چی فکر میکنی؟ شروع کن به نوشتنش!</span>
          </div>

          <Image src={StoryImage3} alt="" fill className="object-cover" />
        </Link>
      </SliderItem>
    </Slider>
  );
}
