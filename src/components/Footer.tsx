import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter } from 'lucide-react';
import {urls} from '../lib/utils';

export const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Kennedy Kibui
          </h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Full Stack Developer passionate about creating exceptional digital experiences.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-8">
            <Button variant="outline" size="icon" asChild>
              <a href={urls.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href={urls.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href={urls.twitter} target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">X (Formely Twitter)</span>
              </a>
            </Button>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Kennedy Kibui. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};