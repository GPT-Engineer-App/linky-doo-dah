import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const links = [
  { name: "GitHub", url: "https://github.com/yourusername", icon: <Github className="mr-2 h-4 w-4" /> },
  { name: "Twitter", url: "https://twitter.com/yourusername", icon: <Twitter className="mr-2 h-4 w-4" /> },
  { name: "LinkedIn", url: "https://linkedin.com/in/yourusername", icon: <Linkedin className="mr-2 h-4 w-4" /> },
  { name: "Email", url: "mailto:you@example.com", icon: <Mail className="mr-2 h-4 w-4" /> },
];

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md p-6 bg-white shadow-xl rounded-xl">
        <div className="flex flex-col items-center mb-6">
          <Avatar className="w-24 h-24 mb-4">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1 className="text-2xl font-bold">Your Name</h1>
          <p className="text-gray-600">Short bio or tagline</p>
        </div>
        <div className="space-y-4">
          {links.map((link) => (
            <Button
              key={link.name}
              variant="outline"
              className="w-full justify-start"
              asChild
            >
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.icon}
                {link.name}
              </a>
            </Button>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Index;
