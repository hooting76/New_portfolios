import type { Metadata } from "next";
import "./globals.css";

import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // 자체 CSS 중복 로드 방지
import '@fortawesome/fontawesome-svg-core/styles.css';

import "./_css/index.css";

export const metadata: Metadata = {
  title: "jch_portfolio",
  description: "jch_portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`h-full antialiased`}
    >
      <body className={`min-h-full`}>
        {children}
      </body>
    </html>
  );
}
