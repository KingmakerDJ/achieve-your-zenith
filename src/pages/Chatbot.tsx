
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Send, Key } from "lucide-react";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/toast";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const presetButtons = [
  "Get activity tips",
  "Create a wellness plan",
  "How's my health?",
  "Set a reminder"
];

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Welcome! I'm here to help with your wellness goals using your health data. How can I assist you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  
  const [inputValue, setInputValue] = useState("");
  const [apiKey, setApiKey] = useState<string>(() => {
    return localStorage.getItem("googleApiKey") || "";
  });
  const [tempApiKey, setTempApiKey] = useState("");
  const [apiKeyDialogOpen, setApiKeyDialogOpen] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    // Check if API key exists on component mount
    const savedApiKey = localStorage.getItem("googleApiKey");
    if (savedApiKey) {
      setApiKey(savedApiKey);
    }
  }, []);

  const handleSaveApiKey = () => {
    if (tempApiKey.trim()) {
      localStorage.setItem("googleApiKey", tempApiKey.trim());
      setApiKey(tempApiKey.trim());
      setApiKeyDialogOpen(false);
      toast({
        title: "API Key Saved",
        description: "Your API key has been securely saved in your browser.",
      });
    }
  };
  
  const handleSendMessage = async (text: string = inputValue) => {
    if (!text.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    
    // Check if API key is available
    if (!apiKey) {
      setTimeout(() => {
        const noApiKeyMessage: Message = {
          id: messages.length + 2,
          text: "Please configure your Google API key to enable enhanced health coaching features.",
          isUser: false,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, noApiKeyMessage]);
        setApiKeyDialogOpen(true);
      }, 800);
      return;
    }
    
    // Add loading message
    const loadingId = messages.length + 2;
    const loadingMessage: Message = {
      id: loadingId,
      text: "Thinking...",
      isUser: false,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, loadingMessage]);
    
    try {
      // Here we would make the actual API call using the apiKey
      // For now, we'll simulate a response after a delay
      setTimeout(() => {
        const aiResponse = getAiResponse(text);
        
        // Replace loading message with actual response
        setMessages(prev => 
          prev.map(msg => 
            msg.id === loadingId 
              ? { ...msg, text: aiResponse } 
              : msg
          )
        );
      }, 1500);
      
      // When implementing the actual Google API call, you would do something like:
      // const response = await fetch('https://api.google.com/v1/endpoint', {
      //   method: 'POST',
      //   headers: {
      //     'Authorization': `Bearer ${apiKey}`,
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ query: text }),
      // });
      // const data = await response.json();
      // setMessages(prev => 
      //   prev.map(msg => 
      //     msg.id === loadingId 
      //       ? { ...msg, text: data.response } 
      //       : msg
      //   )
      // );
      
    } catch (error) {
      console.error("Error getting response:", error);
      setMessages(prev => 
        prev.map(msg => 
          msg.id === loadingId 
            ? { ...msg, text: "Sorry, I encountered an error. Please try again." } 
            : msg
        )
      );
    }
  };
  
  const getAiResponse = (userMessage: string): string => {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    if (lowerCaseMessage.includes("activity") || lowerCaseMessage.includes("tip")) {
      return "Here's a tip: Try incorporating HIIT workouts into your routine! They're great for maximizing calorie burn in a short time. Start with 20 seconds of intense exercise followed by 10 seconds of rest, repeated for 4 minutes.";
    } else if (lowerCaseMessage.includes("wellness") || lowerCaseMessage.includes("plan")) {
      return "I can help you create a personalized wellness plan. Based on your current activity level, I'd recommend starting with 3 workout days per week, focusing on a mix of cardio and strength training.";
    } else if (lowerCaseMessage.includes("health") || lowerCaseMessage.includes("how am i")) {
      return "Based on your recent activity data, you're making good progress! Your daily steps are trending upward, and your resting heart rate is stable. Keep up the great work!";
    } else if (lowerCaseMessage.includes("reminder") || lowerCaseMessage.includes("set")) {
      return "I've set a reminder for you to workout tomorrow at 7:00 AM. I'll send you a notification when it's time.";
    } else {
      return "I'm here to help with your fitness and wellness journey. You can ask me about activity tips, creating a wellness plan, your health status, or setting reminders for your workouts!";
    }
  };

  return (
    <div className="container py-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Virtual Health Coach</h1>
      <p className="text-gray-600 mb-6">Chat with your AI health assistant</p>
      
      <Card className="border-0 shadow-md">
        <CardContent className="p-0">
          <div className="bg-[#3D9DA1] p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center text-white">
                <MessageSquare className="h-6 w-6 mr-2" />
                <h2 className="text-xl font-semibold">Health Coach</h2>
              </div>
              
              <Dialog open={apiKeyDialogOpen} onOpenChange={setApiKeyDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-white hover:bg-[#3D9DA1]/90">
                    <Key className="h-4 w-4 mr-2" />
                    {apiKey ? "API Key ✓" : "Set API Key"}
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Set Google API Key</DialogTitle>
                    <DialogDescription>
                      Enter your Google API key to enable enhanced health coaching features.
                      This key will be stored locally in your browser.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <Input
                      placeholder="Enter your Google API key"
                      value={tempApiKey}
                      onChange={(e) => setTempApiKey(e.target.value)}
                      type="password"
                      className="mb-2"
                    />
                    <p className="text-xs text-gray-500">
                      Your API key is stored locally and never sent to our servers.
                    </p>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setApiKeyDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleSaveApiKey}>Save</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          
          <div className="h-[60vh] flex flex-col">
            {/* Chat messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map(message => (
                <div 
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.isUser 
                        ? 'bg-[#3D9DA1] text-white' 
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p>{message.text}</p>
                    <p className="text-xs mt-1 opacity-70">
                      {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Preset buttons */}
            {messages.length < 3 && (
              <div className="p-4 border-t grid grid-cols-1 sm:grid-cols-2 gap-2">
                {presetButtons.map(text => (
                  <Button 
                    key={text} 
                    variant="outline" 
                    onClick={() => handleSendMessage(text)}
                    className="text-left justify-start h-auto py-3 border-gray-200 hover:bg-gray-50 hover:text-[#3D9DA1]"
                  >
                    {text}
                  </Button>
                ))}
              </div>
            )}
            
            {/* Input area */}
            <div className="p-4 border-t mt-auto">
              <form 
                className="flex gap-2" 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
              >
                <Input 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button 
                  type="submit"
                  className="bg-[#3D9DA1] hover:bg-[#3D9DA1]/90"
                  disabled={!inputValue.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Chatbot;
