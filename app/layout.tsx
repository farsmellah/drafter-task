import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/src/shared/ui/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notes App",
  description: "Web app for notes",
};

export default function RootLayout(props: {
  noteModal: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>{props.children}</div>
        {props.noteModal}
        <div id="modal-root" />
      </body>
    </html>
  );
}
