import React from "react";

function NotFound() {
  return (
    <div className="h-screen w-full flex justify-center items-center flex-col">
      <lottie-player
        src="https://assets9.lottiefiles.com/packages/lf20_9f3l4sds.json"
        background="rgba(0, 0, 0, 0)"
        speed="1"
        style={{ width: "300px", height: "300px" }}
        loop
        autoplay
      ></lottie-player>
      <h1 className="text-3xl font-base tracking-wide text-slate-800">
        Page not found
      </h1>
    </div>
  );
}

export default NotFound;