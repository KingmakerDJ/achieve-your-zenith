
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const presetButtons = [
  "Get fitness tips",
  "Create a workout plan",
  "How can I improve my form?",
  "Nutrition advice"
];

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Welcome! I'm your fitness coach powered by Google Gemini AI. How can I help with your fitness journey today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  
  const [inputValue, setInputValue] = useState("");
  // Using the provided API key directly
  const apiKey = "AIzaSyAZKojWKhOW8iX7-W74eWmuAr2YKpb4DCc";
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
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
    
    // Add loading message
    const loadingId = messages.length + 2;
    const loadingMessage: Message = {
      id: loadingId,
      text: "Thinking...",
      isUser: false,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, loadingMessage]);
    setIsLoading(true);
    
    try {
      // Make API call to Google Gemini API
      const response = await fetchGeminiResponse(text, apiKey);
      
      // Replace loading message with actual response
      setMessages(prev => 
        prev.map(msg => 
          msg.id === loadingId 
            ? { ...msg, text: response } 
            : msg
        )
      );
    } catch (error) {
      console.error("Error getting response:", error);
      setMessages(prev => 
        prev.map(msg => 
          msg.id === loadingId 
            ? { ...msg, text: "Sorry, I encountered an error communicating with Google Gemini AI. Please try again." } 
            : msg
        )
      );
      toast({
        title: "Error",
        description: "Failed to get a response from Google Gemini API. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const fetchGeminiResponse = async (userMessage: string, key: string): Promise<string> => {
    try {
      const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": key
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: `You are an AI fitness coach. Provide helpful, accurate, and engaging fitness advice. 
                  Focus only on fitness, exercise, nutrition, and wellness topics. Do not provide medical diagnoses.
                  Keep responses under 300 words and be motivational. Current user query: ${userMessage}`
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 800,
            topK: 40,
            topP: 0.95
          }
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("API Error:", errorData);
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      
      // Extract the response text from the Gemini API response
      if (data.candidates && data.candidates[0]?.content?.parts && data.candidates[0].content.parts[0]?.text) {
        return data.candidates[0].content.parts[0].text;
      } else {
        console.error("Unexpected API response format:", data);
        return "Sorry, I couldn't process that response. Please try again with a different question.";
      }
    } catch (error) {
      console.error("Error in fetchGeminiResponse:", error);
      throw error;
    }
  };

  return (
    <div className="container py-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Virtual Fitness Coach</h1>
      <p className="text-gray-600 mb-6">Chat with your AI fitness assistant powered by Google Gemini</p>
      
      <Card className="border-0 shadow-md">
        <CardContent className="p-0">
          <div className="bg-[#3D9DA1] p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center text-white">
                <MessageSquare className="h-6 w-6 mr-2" />
                <h2 className="text-xl font-semibold">Fitness Coach</h2>
              </div>
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
                  disabled={!inputValue.trim() || isLoading}
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
