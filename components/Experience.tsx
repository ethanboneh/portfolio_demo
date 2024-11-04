import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Timeline from "./Timeline";
import { WorkExperienceItem } from "./Timeline";


const workExperienceData: WorkExperienceItem[] = [
    {
        startDate: "August 2024",
        endDate: "Present",
        companyName: "Stanford Uni",
        jobTitle: "Hardware Engineer",
        description: [
            "yapping"
        ],
    },
    {
        startDate: "December 2024",
        endDate: "Present",
        companyName: "Stanford Uni",
        jobTitle: "Software Engineer",
        description: [
            "yapping pt 2"
        ],
    }
]

const Experience = () => {
    return <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold mb-1">My Experience</h1>
        <Tabs defaultValue="Education" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="Education">Education</TabsTrigger>
          <TabsTrigger value="Skills">Skills</TabsTrigger>
          <TabsTrigger value="Work Experience">Work Experience</TabsTrigger>
        </TabsList>
        <TabsContent value="Education">
          <ul className="pl-8">
            <li className="list-disc">Stanford University, BS EE + CS</li>
            <li className="list-disc">Palo Alto High School</li>
          </ul></TabsContent>
        <TabsContent value="Skills">
          <ul className="pl-8">
            <li className="list-disc">C, C++, Embedded Systems</li>
            <li className="list-disc">Next.js, PostgreSQL, Django</li>
            <li className="list-disc">Python, PyTorch, TensorFlow</li>
          </ul>
        </TabsContent>
        <TabsContent value="Work Experience">
            <Timeline data={workExperienceData} />


        </TabsContent>
      </Tabs>
        
    </div>
}

export default Experience;