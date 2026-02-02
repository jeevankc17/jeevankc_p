import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Code2,
  Briefcase,
  BookOpen,
} from "lucide-react";

// Featured projects preview
async function getFeaturedProjects() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/projects`,
      {
        next: { revalidate: 3600 },
      },
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data.data.slice(0, 3);
  } catch (error) {
    return [];
  }
}

async function getLatestBlogs() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/blogs`,
      {
        next: { revalidate: 60 },
      },
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data.data.slice(0, 3);
  } catch (error) {
    return [];
  }
}

export default async function HomePage() {
  const projects = await getFeaturedProjects();
  const blogs = await getLatestBlogs();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container flex flex-col items-center gap-8 py-20 md:py-32 mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge variant="secondary" className="px-4 py-1">
            Computer Engineer & IT Entrepreneur
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Hey, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Jeevan
            </span>
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            A framework agnostic, principle first software engineer & IT entrepreneur from
            Nepal with over half a decade of hands on experience in building software and
            shaping businesses.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <Button asChild size="lg">
              <Link href="/projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">About Me</Link>
            </Button>
          </div>
          <div className="flex gap-4 mt-6">
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://www.linkedin.com/in/jeevankc17/"
                target="_blank"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <a href="mailto:jkc5186@gmail.com" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Mail className="h-5 w-5" />
              </a>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="border-y bg-muted/50 px-4 py-8 md:px-16 md:py-16">
        <div className="container">
          <h2 className="text-center text-3xl font-bold tracking-tight mb-12">
            What I Do
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <Code2 className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Principles-First Software Engineer</CardTitle>
                <CardDescription>
                  Building software grounded in core computer science,
                  correctness, performance, and long-term maintainability.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Briefcase className="h-10 w-10 text-primary mb-2" />
                <CardTitle>System Design & Architecture</CardTitle>
                <CardDescription>
                  Designing scalable systems with clear boundaries, efficient
                  data flow, and real-world operational awareness.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <BookOpen className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Databases, AI & Automation</CardTitle>
                <CardDescription>
                  Leveraging strong data foundations, intelligent systems, and
                  automation to reduce complexity and drive business impact.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {projects.length > 0 && (
        <section className="container px-4 py-8 md:px-16 md:py-16 mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Featured Projects
            </h2>
            <Button asChild variant="ghost">
              <Link href="/projects">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project: any) => {
              const techList =
                typeof project.technologies === "string"
                  ? project.technologies.split(",").map((t: string) => t.trim())
                  : [];

              return (
                <Card key={project.id} className="group p-6 overflow-hidden">
                  <Link href={`/projects/${project.id}`}>
                    {project.thumbnail && (
                      <div className="aspect-video  relative overflow-hidden">
                        <Image
                          src={project.thumbnail}
                          alt={project.title}
                          fill
                          className="object-cover rounded-[10px] transition-transform group-hover:scale-105"
                        />
                      </div>
                    )}
                    <CardHeader className="p-0">
                      <CardTitle className="group-hover:text-primary mt-2 transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2 mb-2">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {techList
                          .slice(0, 3)
                          .map((tech: string, index: number) => (
                            <Badge key={index} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              );
            })}
          </div>
        </section>
      )}

      {/* Latest Blog Posts */}
      {blogs.length > 0 && (
        <section className="border-t bg-muted/50 px-4 py-8 md:px-16 md:py-16 mx-auto">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold tracking-tight">
                Latest Blog Posts
              </h2>
              <Button asChild variant="ghost">
                <Link href="/blogs">
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogs.map((blog: any) => (
                <Card key={blog.id} className="group p-6">
                  <Link href={`/blogs/${blog.id}`}>
                    {blog.thumbnail && (
                      <div className="aspect-video rounded-[10px] relative overflow-hidden">
                        <Image
                          src={blog.thumbnail}
                          alt={blog.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                    )}
                    <CardHeader className="p-0">
                      <CardTitle className="group-hover:text-primary mt-4 transition-colors line-clamp-2">
                        {blog.title}
                      </CardTitle>
                      <CardDescription className="p-0">
                        {new Date(blog.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          timeZone: 'UTC',
                        })}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div
                        className="text-sm text-muted-foreground line-clamp-3"
                        dangerouslySetInnerHTML={{
                          __html: blog.content.substring(0, 150) + "...",
                        }}
                      />
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="container px-4 py-8 md:px-20 md:py-20 mx-auto">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="flex flex-col items-center gap-4 py-12 text-center">
            <h2 className="text-3xl font-bold">Let's Work Together</h2>
            <p className="max-w-[600px] text-primary-foreground/90">
              I'm always interested in hearing about new projects and
              opportunities.
            </p>
            <Button asChild size="lg">
              <a href="mailto:jkc5186@gmail.com" className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                Get In Touch <Mail className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
