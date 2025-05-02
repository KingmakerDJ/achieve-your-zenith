
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Send } from "lucide-react";

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
  
  const handleSendMessage = (text: string = inputValue) => {
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
    
    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: messages.length + 2,
        text: getAiResponse(text),
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 800);
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
            <div className="flex items-center text-white">
              <MessageSquare className="h-6 w-6 mr-2" />
              <h2 className="text-xl font-semibold">Health Coach</h2>
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
