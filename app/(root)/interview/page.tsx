import Agent from "@/components/Agent";
import React from "react";

const Page = () => {
  return (
    <>
      Interview Generation
      <Agent userName="You" userId="user1" type="generate" />
    </>
  );
};

export default Page;
