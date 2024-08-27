import { Textarea } from "@/components/custom-elements/textarea"
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

export function EditBio() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="sm:text-xs lg:text-s h-5 bg-green-600 pt-5 pb-5 pl-7 pr-7 text-gray-300 font-bold rounded-l rounded-r flex items-center justify-center hover:bg-green-500 hover:text-white transition mr-4 mt-3">Edit Bio</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#111]">
        <DialogHeader>
          <DialogTitle className="text-white text-2xl">Edit Bio</DialogTitle>
          <DialogDescription className="text-gray-300">
            Make changes to your Bio here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-8 justify-center items-center gap-4">
            <Label htmlFor="name" className="text-right text-white">
              Bio
            </Label>
            <Textarea id="name" placeholder="I am a Software Engineer" className="col-span-10 min-w-[240px] lg:min-w-[300px]" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="sm:text-xs lg:text-s h-5 w-full bg-green-600 pt-5 pb-5 pl-7 pr-7 text-gray-300 font-bold rounded-l rounded-r flex items-center justify-center hover:bg-green-500 hover:text-white transition">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
