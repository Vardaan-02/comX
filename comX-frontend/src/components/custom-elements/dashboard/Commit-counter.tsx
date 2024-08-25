// import Image from "next/image";
import { CardBody, CardContainer, CardItem} from "@/components/ui/3d-card";

export function ThreeDCard({Heading}) {
  return (
    <CardContainer className="">
      <CardBody className="relative group/card  dark:hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-auto h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white text-center w-full"
        >
          {Heading}
        </CardItem>
        <CardItem translateZ="100" className="mt-4">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="100"
            width="100"
            className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
