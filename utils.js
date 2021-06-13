import dynamic from "next/dynamic";

export const isDesktop = dynamic(
  () => {
    console.log("dinamyc imoport");
    return window.matchMedia("(min-width: 1300px)");
  },
  { ssr: false }
);
