import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email Card */}
            <Card className="text-center hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-foreground">Email</CardTitle>
                <CardDescription>Drop me a line anytime</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild>
                  <a href="mailto:john.developer@email.com">
                    john.developer@email.com
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            {/* Phone Card */}
            <Card className="text-center hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-foreground">Phone</CardTitle>
                <CardDescription>Call me for immediate response</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild>
                  <a href="tel:+1234567890">
                    +1 (234) 567-8900
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            {/* Location Card */}
            <Card className="text-center hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-foreground">Location</CardTitle>
                <CardDescription>Available for remote work</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  San Francisco, CA
                  <br />
                  Remote Worldwide
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to start your project?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you need a full-stack web application, DevOps consulting, or just want to 
                discuss your next big idea, I'm here to help turn your vision into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="mailto:john.developer@email.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Send Email
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+1234567890">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};