"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"


const chartData = [
  { month: "Web Development", desktop: 186},
  { month: "App Development", desktop: 305},
  { month: "Machine Learning", desktop: 237},
  { month: "Artifical Intelligence", desktop: 73},
  { month: "Blockchain", desktop: 123},
]

const chartConfig = {
  desktop: {
    label: "No. of tasks Done",
    color: "#494949",
  },
} satisfies ChartConfig

export function Component() {
  return (
   <>
   <ChartContainer config={chartConfig} className="h-[400px] w-full">
  <BarChart accessibilityLayer data={chartData}>
    <CartesianGrid vertical={false} />
    <XAxis
      dataKey="month"
      tickLine={false}  
      tickMargin={10}
      axisLine={false}
      tickFormatter={(value) => value.slice(0, 9) + "..."}
    />
    <YAxis />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
  </BarChart>
</ChartContainer>
    <p className="text-center ml-12">Contributions</p>
</>
  )
}
