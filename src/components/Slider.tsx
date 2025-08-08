"use client";

import "keen-slider/keen-slider.min.css";
import { PropsWithChildren } from "react";
import { cn } from "@/lib/lib/utils/classnames";
import { useKeenSlider } from "keen-slider/react";
import { type KeenSliderOptions } from "keen-slider";

interface SliderProps {
  className?: string;
  options?: KeenSliderOptions;
  onCreate?: KeenSliderOptions["created"];
}

export default function Slider({
  options = {},
  children,
  className,
  onCreate,
}: PropsWithChildren<SliderProps>) {
  const [sliderRef] = useKeenSlider({
    rtl: true,
    created: onCreate,
    ...options,
  });

  return (
    <div ref={sliderRef} className={cn("keen-slider", className)}>
      {children}
    </div>
  );
}

interface SliderItemProps {
  className?: string;
}

export function SliderItem({
  children,
  className,
}: PropsWithChildren<SliderItemProps>) {
  return <div className={cn("keen-slider__slide", className)}>{children}</div>;
}
