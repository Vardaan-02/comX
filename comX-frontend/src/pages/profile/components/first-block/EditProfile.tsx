import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function EditProfile() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="sm:text-xs lg:text-s h-5 w-full bg-green-600 pt-5 pb-5 pl-7 pr-7 text-gray-300 font-bold rounded-l rounded-r flex items-center justify-center hover:bg-green-500 hover:text-white transition">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#111]">
        <DialogHeader>
          <DialogTitle className="text-white text-2xl">Edit profile</DialogTitle>
          <DialogDescription className="text-gray-300">
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right text-white">
              Name
            </Label>
            <Input id="name" placeholder="Vardaan Pahwa" className="col-span-10 min-w-[220px]" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right text-white">
              Location
            </Label>
            <Input id="username" placeholder="Ambala" className="col-span-3 min-w-[220px]" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right text-white">
              GitHub
            </Label>
            <Input id="username" placeholder="Link" className="col-span-3 min-w-[220px]" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right text-white">
              Instagram
            </Label>
            <Input id="username" placeholder="Profile" className="col-span-3 min-w-[220px]" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="sm:text-xs lg:text-s h-5 w-full bg-green-600 pt-5 pb-5 pl-7 pr-7 text-gray-300 font-bold rounded-l rounded-r flex items-center justify-center hover:bg-green-500 hover:text-white transition">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
