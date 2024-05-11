"use client";

import { Suspense } from "react";

import { WelcomePage } from "@refinedev/core";
import './global.css';

import Popup from "@stories/Popup";

export default function IndexPage() {
  return (
    // <Suspense>
    //   <div className="text-[red] bg-[blue] text-center">red</div>
    //   {/* <WelcomePage /> */}
    // </Suspense>
    <div>
      <Popup title={"asdf"} buttonTitle={"press me"} id={1} />
    </div>

  );
}
