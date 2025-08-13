import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ExternalLink } from 'lucide-react';
import blog1 from '@/assets/blog-1.jpg';
import blog2 from '@/assets/blog-2.jpg';
import blog3 from '@/assets/blog-3.jpg';

const posts = [
  {
    title: "Building Scalable React Applications",
    description: "Learn best practices for architecting large-scale React applications with proper state management, component composition, and performance optimizations.",
    image: blog1,
    date: "March 15, 2024",
    readTime: "8 min read",
    url: "https://example.com/blog/scalable-react"
  },
  {
    title: "DevOps Automation with CI/CD Pipelines",
    description: "A comprehensive guide to setting up automated deployment pipelines using GitHub Actions, Docker, and cloud platforms for seamless development workflows.",
    image: blog2,
    date: "February 28, 2024",
    readTime: "12 min read",
    url: "https://example.com/blog/devops-automation"
  },
  {
    title: "Modern Cloud Architecture Patterns",
    description: "Exploring serverless architecture, microservices, and cloud-native patterns for building resilient and scalable applications in the cloud.",
    image: blog3,
    date: "February 10, 2024",
    readTime: "10 min read",
    url: "https://example.com/blog/cloud-architecture"
  }
];

export const Posts = () => {
  return (
    <section id="posts" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Latest Blog Posts
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I regularly share my thoughts and insights on software development, DevOps practices, 
            and the latest trends in technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              
              <CardHeader>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription>
                  {post.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <Button variant="outline" size="sm" asChild>
                  <a href={post.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Read More
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};