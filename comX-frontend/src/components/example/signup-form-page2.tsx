"use client";
import React from "react";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";
import { Textarea } from "../custom-elements/textarea";
import { DatePicker } from "../ui/date-picker";
import { InputFile } from "../ui/inputFile";
import { StatePicker } from "../custom-elements/state-picker";
import { DistrictPicker } from "../custom-elements/district-picker";
import { CollagePicker } from "../custom-elements/collage-picker ";
import { CompanyPicker } from "../custom-elements/company-picker";
import { useNavigate } from "react-router-dom";

interface PAGEPROPS{
  setSignPage: React.Dispatch<React.SetStateAction<number>>
}

let SignupFormPage2:React.FC<PAGEPROPS> = ({setSignPage}) =>  {

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
    navigate("/");
  };
  return (
    <div className="max-w-md w-full rounded-none md:rounded-2xl mt-36 sm:mt-0">
      <h2 className="font-bold text-xl text-neutral-200">
        About You
      </h2>

      <form  onSubmit={handleSubmit} className="mt-8">
        <LabelInputContainer className="mb-4">
          <Label htmlFor="bio" className="text-neutral-300">Bio</Label>
          <Textarea id="bio" placeholder="About me"/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="DOB" className="text-neutral-300">Date Of Birth</Label>
          <DatePicker></DatePicker>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="picture" className="text-neutral-300">Profile Picture</Label>
          <InputFile></InputFile>
        </LabelInputContainer>
        
        <div className="h-full flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <LabelInputContainer className="mb-4">
          <Label htmlFor="locationState" className="text-neutral-300">State</Label>
          <StatePicker></StatePicker>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="locationDistrict" className="text-neutral-300">District</Label>
          <DistrictPicker></DistrictPicker>
        </LabelInputContainer>
        </div>

        <div className="h-full flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <LabelInputContainer className="mb-4">
          <Label htmlFor="picture" className="text-neutral-300">Collage Name</Label>
          <CollagePicker></CollagePicker>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="picture" className="text-neutral-300">Past Experience</Label>
          <CompanyPicker></CompanyPicker>
        </LabelInputContainer>
        </div>
        
        <button
          className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Continue &rarr;
          <BottomGradient />
        </button>
        <button
          className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] mt-4"
          onClick={(e)=>{e.preventDefault();setSignPage(1)}}
        >
          back &rarr;
          <BottomGradient />
        </button>
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

export default SignupFormPage2;