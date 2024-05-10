"use client";

import { Suspense } from "react";

import { WelcomePage } from "@refinedev/core";
import './global.css';
import RoleCardList from "@stories/RoleCardList";
import { ROLES } from "@constants";

export default function IndexPage() {
  return (
    // <Suspense>
    //   <div className="text-[red] bg-[blue] text-center">red</div>
    //   {/* <WelcomePage /> */}
    // </Suspense>
    <RoleCardList
  platform="desktop"
  roles={ROLES}
/>
  );
}
