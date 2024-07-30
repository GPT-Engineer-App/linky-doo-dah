import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Twitter, Linkedin, Mail, Terminal, Wand2 } from "lucide-react";
import { useState, useEffect } from "react";

const links = [
  { name: "GitHub", url: "https://github.com/yourusername", icon: <Github className="mr-2 h-4 w-4" /> },
  { name: "Twitter", url: "https://twitter.com/yourusername", icon: <Twitter className="mr-2 h-4 w-4" /> },
  { name: "LinkedIn", url: "https://linkedin.com/in/yourusername", icon: <Linkedin className="mr-2 h-4 w-4" /> },
  { name: "Email", url: "mailto:you@example.com", icon: <Mail className="mr-2 h-4 w-4" /> },
];

const Index = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Hacker Wizard";

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-900 p-4">
      <Card className="w-full max-w-md p-6 bg-green-800 shadow-xl rounded-xl border-2 border-green-500">
        <div className="flex flex-col items-center mb-6">
          <Avatar className="w-24 h-24 mb-4 bg-green-600 border-2 border-green-400">
            <AvatarImage src="/placeholder.svg" alt="Wizard Avatar" />
            <AvatarFallback className="text-green-200 text-2xl">
              <Wand2 className="h-12 w-12" />
            </AvatarFallback>
          </Avatar>
          <h1 className="text-2xl font-bold text-green-200">Your Name</h1>
          <p className="text-green-300 flex items-center">
            <Terminal className="mr-2 h-4 w-4" />
            <span className="typing-effect">{typedText}</span>
          </p>
        </div>
        <div className="space-y-4">
          {links.map((link) => (
            <Button
              key={link.name}
              variant="outline"
              className="w-full justify-start bg-green-700 text-green-200 hover:bg-green-600 hover:text-green-100 border-green-500"
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
