export const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Passionate Software Developer
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                With over 5 years of experience in software development, I'm passionate about creating 
                innovative solutions that make a real impact. My journey in tech has taken me through 
                various domains, from building scalable web applications to implementing robust DevOps 
                practices.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I love working with modern technologies like React, Node.js, TypeScript, and cloud 
                platforms. My expertise in DevOps allows me to bridge the gap between development 
                and operations, ensuring smooth deployment and maintenance of applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing my knowledge through technical blog posts.
              </p>
            </div>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Technologies I Work With</h4>
                <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div className="space-y-2">
                    <div>• React & Next.js</div>
                    <div>• TypeScript</div>
                    <div>• Node.js & Express</div>
                    <div>• Python & Django</div>
                  </div>
                  <div className="space-y-2">
                    <div>• AWS & Azure</div>
                    <div>• Docker & Kubernetes</div>
                    <div>• PostgreSQL & MongoDB</div>
                    <div>• CI/CD & DevOps</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">What Drives Me</h4>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Building user-centric applications that solve real problems</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Optimizing performance and scalability</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Continuous learning and staying updated with tech trends</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};