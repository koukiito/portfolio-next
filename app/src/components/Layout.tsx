import React, { ReactNode } from "react";
import Head from "next/head";
import Navigation from "./Navigation";
import { contents } from "../data/contents";

type LayoutProps = {
  children: ReactNode;
  title?: string;
};

const Layout: React.FC<LayoutProps> = ({
  children,
  title = contents.siteName,
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-pearl-white text-gray-800">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigation />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
        {children}
      </main>
      <footer className="border-t border-gray-200 mt-8 py-4">
        <div className="container mx-auto px-4 text-center text-gray-600">
          {contents.footer.copyright}
        </div>
      </footer>
    </div>
  );
};

export default Layout;
