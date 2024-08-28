import Background from "@/components/canvas/auth/Background";
import SignupFormPage1 from "@/components/example/signup-form-page1";
import SignupFormPage2 from "@/components/example/signup-form-page2";
import { useEffect, useRef, useState } from "react";
import css from "./Signup.module.css";

function Signup() {
  const [signPage, setSignPage] = useState(0);
  const page1:any = useRef(null);
  const page2:any = useRef(null);

  useEffect(() => {
    if (signPage === 2) {
      page1.current.style.animation = `1s ease-in 0s 1 ${css.zoomOut}`;
      page2.current.style.animation = `2s ease-in 0s 1 ${css.zoomIn}`;
      page1.current.style.scale = `calc(2500%)`;
      page2.current.style.scale = `calc(100%)`;
      setTimeout(() => {
        page1.current.style.display = "none";
      }, 1000);
      
    } else if (signPage == 1) {
      page2.current.style.animation = `1s ease-in 0s 1 ${css.zoomOut2}`;
      page1.current.style.animation = `1.5s ease 0s 1 ${css.zoomIn2}`;
      page2.current.style.scale = `calc(0%)`;
      page1.current.style.scale = `calc(100%)`;
      page1.current.style.display = "flex";
    } else {
      page2.current.style.scale = `calc(0%)`;
      page1.current.style.scale = `calc(100%)`;
    }
  }, [signPage]);

  return (
    <>
      <Background />
      <div
        className="no-scrollbar relative h-auto flex justify-center items-center p-6 overflow-y-scroll xl:h-screen"
        ref={page1}
      >
        <SignupFormPage1 setSignPage={setSignPage} />
      </div>
      <div
        className="no-scrollbar absolute h-auto flex justify-center items-center p-6 overflow-y-scroll xl:h-screen top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"
        ref={page2}
      >
        <SignupFormPage2 setSignPage={setSignPage} />
      </div>
    </>
  );
}

export default Signup;
