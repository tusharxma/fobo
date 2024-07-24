import React from "react";
import Header from "./header"
import Footer from "./footer";
import { Button } from "@/components/ui/button";
type Props = {
  children: React.ReactNode;
};
const MarketingLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Button variant="primary"> Default </Button>
      <Button variant="primaryOutline"> primaryOutline </Button>
      <Button variant="primaryOutline"> primaryOutline </Button>


      <main className="flex-1 flex flex-col items-center justify-center">{children}</main>
      <Footer></Footer>
    </div> )
};

export default MarketingLayout;
