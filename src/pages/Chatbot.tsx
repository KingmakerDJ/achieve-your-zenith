
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
  structured?: boolean;
}

const presetButtons = [
  "Get fitness tips",
  "Create a workout plan",
  "How can I improve my form?",
  "Nutrition advice"
];

const fallbackResponses: Record<string, string> = {
  "Get fitness tips": "## Fitness Tips\n\n- **Start slow** and gradually increase intensity\n- **Stay consistent** with your workouts\n- **Hydrate properly** before, during, and after exercise\n- **Get enough sleep** for proper recovery\n- **Mix cardio and strength training** for balanced fitness",
  "Create a workout plan": "## Personalized Workout Plan\n\n### Beginner Level Plan\n\n**Monday:** Upper Body Focus\n- Push-ups: 3 sets of 10 reps\n- Dumbbell rows: 3 sets of 12 reps\n- Shoulder press: 3 sets of 10 reps\n\n**Wednesday:** Lower Body Focus\n- Squats: 3 sets of 15 reps\n- Lunges: 3 sets of 10 per leg\n- Calf raises: 3 sets of 20 reps\n\n**Friday:** Full Body & Core\n- Plank: 3 sets of 30 seconds\n- Mountain climbers: 3 sets of 20 reps\n- Burpees: 3 sets of 10 reps",
  "How can I improve my form?": "## Improving Exercise Form\n\n1. **Start with lighter weights** to master the movement pattern\n2. **Record yourself** performing exercises to identify issues\n3. **Focus on mind-muscle connection** rather than just moving weight\n4. **Work with a trainer** for personalized guidance\n5. **Practice proper breathing** techniques during exercises\n\nRemember that **proper form prevents injuries** and ensures you're targeting the right muscles!",
  "Nutrition advice": "## Nutrition for Fitness\n\n### Key Principles\n- **Protein intake** - Aim for 0.8-1g per pound of bodyweight daily\n- **Hydration** - Drink at least 8 glasses of water daily\n- **Pre-workout** - Consume carbs and protein 1-2 hours before training\n- **Post-workout** - Refuel within 45 minutes with protein and carbs\n\n**Remember:** Nutrition is highly individual. These are general guidelines to start with!"
};

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
  // Updated API key
  const apiKey = "AIzaSyCfbKwlMAeS6lFFieCfP_XoWS0EITnMc7s";
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(false);
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
      // Check for fallback responses first for preset buttons
      if (presetButtons.includes(text) && apiError) {
        const fallbackResponse = fallbackResponses[text];
        setTimeout(() => {
          setMessages(prev => 
            prev.map(msg => 
              msg.id === loadingId 
                ? { ...msg, text: fallbackResponse, structured: true } 
                : msg
            )
          );
          setIsLoading(false);
        }, 1000);
        return;
      }
      
      // Make API call to Google Gemini API
      const response = await fetchGeminiResponse(text, apiKey);
      setApiError(false);
      
      // Replace loading message with actual response
      setMessages(prev => 
        prev.map(msg => 
          msg.id === loadingId 
            ? { ...msg, text: response, structured: true } 
            : msg
        )
      );
    } catch (error) {
      console.error("Error getting response:", error);
      
      // Use fallback response if available
      if (presetButtons.includes(text) && fallbackResponses[text]) {
        setMessages(prev => 
          prev.map(msg => 
            msg.id === loadingId 
              ? { ...msg, text: fallbackResponses[text], structured: true } 
              : msg
          )
        );
      } else {
        setMessages(prev => 
          prev.map(msg => 
            msg.id === loadingId 
              ? { ...msg, text: "Sorry, I encountered an error communicating with Google Gemini AI. Please try again or use one of the preset questions." } 
              : msg
          )
        );
      }
      
      setApiError(true);
      toast({
        title: "API Error",
        description: "Using fallback responses until API is available again.",
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
                  Format your responses with appropriate markdown:
                  - Use ## for main headings
                  - Use ### for subheadings
                  - Use bullets (- ) and numbered lists (1. ) for steps
                  - Bold important text with **text**
                  - Use line breaks to separate sections
                  
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

  // Function to render structured message content with markdown-like formatting
  const renderStructuredContent = (content: string) => {
    // Split into paragraphs
    const paragraphs = content.split('\n\n');
    
    return (
      <div className="space-y-3">
        {paragraphs.map((paragraph, index) => {
          // Handle headings
          if (paragraph.startsWith('## ')) {
            return <h2 key={index} className="text-xl font-bold mt-4">{paragraph.substring(3)}</h2>;
          } else if (paragraph.startsWith('### ')) {
            return <h3 key={index} className="text-lg font-semibold mt-3">{paragraph.substring(4)}</h3>;
          } 
          // Handle bullet points
          else if (paragraph.includes('\n- ')) {
            const [title, ...items] = paragraph.split('\n- ');
            return (
              <div key={index}>
                {title && <p className="mb-1">{title}</p>}
                <ul className="list-disc pl-5 space-y-1">
                  {items.map((item, i) => <li key={i}>{formatTextWithBold(item)}</li>)}
                </ul>
              </div>
            );
          }
          // Handle numbered lists
          else if (paragraph.includes('\n1. ')) {
            const [title, ...items] = paragraph.split('\n');
            return (
              <div key={index}>
                {title && title !== '1.' && <p className="mb-1">{title}</p>}
                <ol className="list-decimal pl-5 space-y-1">
                  {items.map((item, i) => {
                    const content = item.substring(item.indexOf('.') + 2);
                    return content ? <li key={i}>{formatTextWithBold(content)}</li> : null;
                  })}
                </ol>
              </div>
            );
          }
          // Regular paragraph
          else {
            return <p key={index} className="text-gray-800">{formatTextWithBold(paragraph)}</p>;
          }
        })}
      </div>
    );
  };
  
  // Helper function to format bold text within a string
  const formatTextWithBold = (text: string) => {
    // Split by bold markers
    const parts = text.split(/(\*\*.*?\*\*)/g);
    
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        // Bold text
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      // Regular text
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="container py-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Virtual Fitness Coach</h1>
      <p className="text-gray-600 mb-6">Chat with your AI fitness assistant powered by Google Gemini</p>
      
      {apiError && (
        <Alert className="mb-4 bg-yellow-50 border-yellow-200">
          <AlertDescription>
            Gemini API is currently unavailable. Using fallback responses. Try again later or use the preset questions.
          </AlertDescription>
        </Alert>
      )}
      
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
                    {message.structured && !message.isUser ? 
                      renderStructuredContent(message.text) : 
                      <p>{message.text}</p>
                    }
                    <p className="text-xs mt-1 opacity-70">
                      {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Preset buttons */}
            {messages.length < 3 || apiError ? (
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
            ) : null}
            
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
