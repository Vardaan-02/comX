"use client";
import React, { useRef } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";
import axios from "axios";
import {
  IconBrandGithub,
  IconBrandGoogle,
} from "@tabler/icons-react";

interface PAGEPROPS{
  setSignPage: React.Dispatch<React.SetStateAction<number>>
}

const SignupFormPage1:React.FC<PAGEPROPS> = ({setSignPage}) => {
  const firstName = useRef(null);
  const lastName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const userName = useRef(null);


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (
    //   email.current.value === "" ||
    //   password === null ||
    //   confirmPassword == null ||
    //   userName === null
    // ) {
    //   toast.error("Can't Leave Empty");
    //   return;
    // }


    // console.log(firstName.current.value,lastName.current.value,email.current.value,password.current.value,confirmPassword.current.value,userName.current.value);
    // toast.success("DONE");
    setSignPage(2);

    // axios
    //   .post(
    //     "google.com",
    //     {
    //       email: email.current.value,
    //       password: password.current.value,
    //       confirmPassword: confirmPassword.current.value,
    //       userName: userName.current.value,
    //     },
    //     {
    //       headers: {
    //         Accept: "order/json",
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     // success http code
    //     if (res.data.code === 200) {

    //     } else {
          
    //     }
    //   });
    // email.current.value = "";
    // password.current.value = "";
    // confirmPassword.current.value = "";
    // userName.current.value = "";
  };
  return (
    <div className="max-w-md w-full rounded-none md:rounded-2xl mb-0">
      <h2 className="font-bold text-xl text-neutral-200">
        Welcome to ComX
      </h2>
      <p className="text-sm max-w-sm mt-2 text-neutral-300">
        dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy
      </p>

      <form  onSubmit={handleSubmit} className="mt-8">
        <div className="h-full flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname" className="text-neutral-300">First name</Label>
            <Input id="firstname" placeholder="John" type="text" ref={firstName}/>
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname" className="text-neutral-300">Last name</Label>
            <Input id="lastname" placeholder="Doe" type="text" ref={lastName}/>
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email" className="text-neutral-300">Email Address</Label>
          <Input id="email" placeholder="abc@of.com" type="email" ref={email}/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="userName" className="text-neutral-300">UserName</Label>
          <Input id="userName" placeholder="batman" type="userName" ref={userName}/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password" className="text-neutral-300">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" ref={password}/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="confirmPassword" className="text-neutral-300">Confrim password</Label>
          <Input
            id="confirmPassword"
            placeholder="••••••••"
            type="confirmPassword"
            ref={confirmPassword}
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-zinc-900 shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-300" />
            <span className="text-neutral-300 text-sm">
              GitHub
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-zinc-900 shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGoogle className="h-4 w-text-neutral-300" />
            <span className="text-neutral-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default SignupFormPage1;