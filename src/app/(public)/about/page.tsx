import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skills = [
  'API Development', 'System Architecture', 'DevOps Pipelines', 'AI Integration', 
  'Workflow Automation', 'Databases', 'Networking', 'Distributed Systems', 
  'Operating Systems', 'Data Structures & Algorithms', 'ERP Implementation',
  'Business Analysis', 'Full-Stack Development', 'Cloud Computing'
];

const experience = [
  {
    role: 'IT Entrepreneur & Software Developer',
    company: 'Independent',
    duration: '2020 - Present',
    description: 'Building software solutions and shaping businesses with over half a decade of hands-on experience in computer engineering and software development.'
  },
  {
    role: 'ERP Implementation Specialist',
    company: 'Various Organizations',
    duration: '2019 - 2020',
    description: 'Professional ERP implementation experience with robust understanding of business domains and tech-innovation with real business value.'
  }
];

export default function AboutPage() {
  return (
    <main className="container max-w-4xl py-12 md:py-20 mx-auto">
      <section className="flex flex-col items-center text-center">
        <Image
          src="https://res.cloudinary.com/jeevankc17/image/upload/v1770027122/innovatorshome/jeevan_ohyigv.jpg" // সঠিক URL
          alt="Jeevan KC"
          width={128}
          height={128}
          className="h-32 w-32 rounded-full object-cover"
          priority
        />
        <h1 className="mt-6 text-4xl font-bold">Jeevan KC</h1>
        <p className="mt-2 text-lg text-muted-foreground">Computer Engineer, IT Entrepreneur & Software Developer</p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold tracking-tight text-center">About Me</h2>
        <div className="mt-4 text-muted-foreground max-w-3xl mx-auto text-left">
          <p>
            Hey, I am Jeevan, a computer engineer, IT entrepreneur, and software developer from Nepal, with over half a decade of hands-on experience in building software and shaping businesses.
          </p>
          <p className="mt-4">
            I'm always passionate about core computer science domains — including databases, networking, distributed systems, operating systems, and data structures & algorithms. Across different projects, I contribute to my team by building APIs, designing system architecture, creating DevOps pipelines, AI integration, and workflow automation, whatever possible.
          </p>
          <p className="mt-4">
            I always love to explore how complex systems work under the hood — how they scale, communicate, and perform in real-world environments.
          </p>
          <p className="mt-4">
            I also carry a professional ERP implementation experience and have a robust understanding of business domains, that inspire me to go beyond tech, tech-innovation with real business value.
          </p>
          <p className="mt-4">
            I combine curiosity, technical expertise, and creativity to deliver solutions that make a real impact. Curiosity keeps me exploring engineering blogs, tech trends, podcasts, panel discussions, and community forum where I learn, exchange ideas, and stay ahead of best practices, while creativity and technical depth guide me how to design solutions that are not just functional, but adaptable, resilient, and meaningful.
          </p>
          <p className="mt-4">
            Thank you for considering my profile. For tech enthusiasts, potential partners, collaborators, or investors worldwide, I could be the perfect match for your next venture. If you feel the same, feel free to connect — let's explore the possibilities together.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold tracking-tight text-center">My Skills</h2>
        <div className="mt-4 flex flex-wrap gap-2 justify-center max-w-3xl mx-auto">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary">{skill}</Badge>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold tracking-tight text-center">Work Experience</h2>
        <div className="mt-4 space-y-8 max-w-3xl mx-auto">
          {experience.map((job) => (
            <Card key={job.company}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{job.role}</CardTitle>
                  <p className="text-sm text-muted-foreground">{job.duration}</p>
                </div>
                <p className="text-md font-medium text-muted-foreground">{job.company}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{job.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}