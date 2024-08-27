import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function AddSkills() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="sm:text-xs lg:text-s h-5 bg-green-600 text-gray-300 font-bold rounded-l rounded-r flex items-center justify-center hover:bg-green-500 hover:text-white transition px-7 py-5">
          Add Skills
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#111]">
        <DialogHeader>
          <DialogTitle className="text-white text-2xl">
            Add Skills
          </DialogTitle>
          <DialogDescription className="text-gray-300">
            Add Skills to your profile here. <br />
            To Remove Skill Type Exact Match for Skill Name
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right text-white">
              Skill Name
            </Label>
            <Input
              id="name"
              placeholder="ReactJS"
              className="col-span-10 min-w-[220px]"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right text-white">
              Skill Class
            </Label>
            <div className="flex gap-4 items-start justify-center flex-col">
              <div className="flex gap-2 items-center">
                <input
                  id="name"
                  name="SkillLvl"
                  type="radio"
                  className="col-span-10 h-4 w-4 text-green-500 focus:ring-green-500"
                />
                <label className="text-white text-sm">Beginner</label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  id="name"
                  name="SkillLvl"
                  type="radio"
                  className="col-span-10 h-4 w-4 text-yellow-500 focus:ring-yellow-500"
                />
                <label className="text-white">Intermediate</label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  id="name"
                  name="SkillLvl"
                  type="radio"
                  className="col-span-10 h-4 w-4 text-red-500 focus:ring-red-500"
                />
                <label className="text-white">Master</label>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
            <div className="flex gap-2">
            <Button
            type="submit"
            className="sm:text-xs lg:text-s h-5 w-full bg-red-800 pt-5 pb-5 pl-7 pr-7 text-gray-300 font-bold rounded-l rounded-r flex items-center justify-center hover:bg-red-500 hover:text-white transition"
          >
            Remove Skill
          </Button>
          <Button
            type="submit"
            className="sm:text-xs lg:text-s h-5 w-full bg-green-600 pt-5 pb-5 pl-7 pr-7 text-gray-300 font-bold rounded-l rounded-r flex items-center justify-center hover:bg-green-500 hover:text-white transition"
          >
            Save changes
          </Button>
            </div>
          
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
