/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/lib/lib/utils/classnames";

interface Props {
  className?: string;
}

const SamandehiLogo = ({ className }: Props) => {
  const openPopup = () => {
    window.open(
      "https://logo.samandehi.ir/Verify.aspx?id=378751&p=xlaojyoemcsijyoedshwrfth",
      "Popup",
      "toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30"
    );
  };

  return (
    <img
      referrerPolicy="origin"
      id="rgvjjzpeoeukjzpeapfujxlz"
      alt="logo-samandehi"
      src="https://logo.samandehi.ir/logo.aspx?id=378751&p=qftiyndtaqgwyndtujynnbpd"
      className={cn("cursor-pointer", className)}
      onClick={openPopup}
    />
  );
};

export default SamandehiLogo;
