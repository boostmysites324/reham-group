import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, X, Send, Bot, User, Phone, Globe } from 'lucide-react';
import chatbotData from '@/data/chatbotData';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm here to help you with any questions about our freight and logistics services. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [detectedLanguage, setDetectedLanguage] = useState('en');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Calculate similarity between two strings using Levenshtein distance
  const calculateSimilarity = (str1: string, str2: string): number => {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    const editDistance = getEditDistance(longer, shorter);
    return (longer.length - editDistance) / longer.length;
  };

  const getEditDistance = (str1: string, str2: string): number => {
    const matrix = Array(str2.length + 1).fill(null).map(() => Array(str1.length + 1).fill(null));
    
    for (let i = 0; i <= str1.length; i++) matrix[0][i] = i;
    for (let j = 0; j <= str2.length; j++) matrix[j][0] = j;
    
    for (let j = 1; j <= str2.length; j++) {
      for (let i = 1; i <= str1.length; i++) {
        const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
        matrix[j][i] = Math.min(
          matrix[j][i - 1] + 1,
          matrix[j - 1][i] + 1,
          matrix[j - 1][i - 1] + cost
        );
      }
    }
    
    return matrix[str2.length][str1.length];
  };

  // Multilingual responses
  const multilingualResponses = {
    greeting: {
      en: "Hello! I'm here to help you with any questions about our freight and logistics services. What would you like to know?",
      ar: "مرحباً! أنا هنا لمساعدتك في أي أسئلة حول خدمات الشحن واللوجستيات. ماذا تريد أن تعرف؟",
      zh: "您好！我在这里帮助您解答有关我们货运和物流服务的任何问题。您想了解什么？",
      hi: "नमस्ते! मैं यहाँ आपकी फ्रेट और लॉजिस्टिक्स सेवाओं के बारे में किसी भी प्रश्न में मदद करने के लिए हूँ। आप क्या जानना चाहते हैं?",
      es: "¡Hola! Estoy aquí para ayudarte con cualquier pregunta sobre nuestros servicios de carga y logística. ¿Qué te gustaría saber?",
      fr: "Bonjour! Je suis là pour vous aider avec toutes vos questions sur nos services de fret et de logistique. Que souhaitez-vous savoir?"
    },
    contact: {
      en: "For immediate assistance, please contact us:\n📱 WhatsApp: +971 50 404 2388\n📧 Email: behzad@rehamgroup.com\nOur team is available 24/7!",
      ar: "للمساعدة الفورية، يرجى الاتصال بنا:\n📱 واتساب: +971 50 404 2388\n📧 البريد الإلكتروني: behzad@rehamgroup.com\nفريقنا متاح 24/7!",
      zh: "如需即时协助，请联系我们：\n📱 WhatsApp: +971 50 404 2388\n📧 邮箱: behzad@rehamgroup.com\n我们的团队24/7为您服务！",
      hi: "तत्काल सहायता के लिए, कृपया हमसे संपर्क करें:\n📱 WhatsApp: +971 50 404 2388\n📧 ईमेल: behzad@rehamgroup.com\nहमारी टीम 24/7 उपलब्ध है!",
      es: "Para asistencia inmediata, contáctenos:\n📱 WhatsApp: +971 50 404 2388\n📧 Email: behzad@rehamgroup.com\n¡Nuestro equipo está disponible 24/7!",
      fr: "Pour une assistance immédiate, contactez-nous:\n📱 WhatsApp: +971 50 404 2388\n📧 Email: behzad@rehamgroup.com\nNotre équipe est disponible 24h/24 et 7j/7!"
    },
    outOfScope: {
      en: "I specialize in freight and logistics services. For other inquiries, please contact our team directly at +971 50 404 2388.",
      ar: "أتخصص في خدمات الشحن واللوجستيات. للاستفسارات الأخرى، يرجى الاتصال بفريقنا مباشرة على +971 50 404 2388.",
      zh: "我专门处理货运和物流服务。如有其他咨询，请直接联系我们的团队 +971 50 404 2388。",
      hi: "मैं फ्रेट और लॉजिस्टिक्स सेवाओं में विशेषज्ञ हूं। अन्य पूछताछ के लिए, कृपया +971 50 404 2388 पर हमारी टीम से सीधे संपर्क करें।",
      es: "Me especializo en servicios de carga y logística. Para otras consultas, contacte directamente a nuestro equipo al +971 50 404 2388.",
      fr: "Je me spécialise dans les services de fret et de logistique. Pour d'autres demandes, contactez directement notre équipe au +971 50 404 2388."
    }
  };

  // Detect language of input text
  const detectLanguage = (text: string): string => {
    const arabicPattern = /[\u0600-\u06FF]/;
    const chinesePattern = /[\u4e00-\u9fff]/;
    const hindiPattern = /[\u0900-\u097F]/;
    const spanishWords = /\b(hola|qué|cómo|cuánto|cuándo|dónde|precio|servicio|envío)\b/i;
    const frenchWords = /\b(bonjour|comment|combien|quand|où|prix|service|expédition)\b/i;
    
    if (arabicPattern.test(text)) return 'ar';
    if (chinesePattern.test(text)) return 'zh';
    if (hindiPattern.test(text)) return 'hi';
    if (spanishWords.test(text)) return 'es';
    if (frenchWords.test(text)) return 'fr';
    return 'en';
  };

  // Enhanced intelligent response system
  const getIntelligentResponse = (userInput: string): string => {
    const input = userInput.toLowerCase().trim();
    const language = detectLanguage(userInput);
    setDetectedLanguage(language);

    // Handle greetings in multiple languages
    const greetingPatterns = [
      /^(hi|hello|hey|good morning|good afternoon|good evening)/i,
      /^(مرحبا|السلام عليكم|أهلا)/i,
      /^(你好|您好|早上好|下午好|晚上好)/i,
      /^(नमस्ते|हैलो|सुप्रभात|शुभ दोपहर|शुभ संध्या)/i,
      /^(hola|buenos días|buenas tardes|buenas noches)/i,
      /^(bonjour|bonsoir|salut)/i
    ];

    if (greetingPatterns.some(pattern => pattern.test(input))) {
      return multilingualResponses.greeting[language as keyof typeof multilingualResponses.greeting] || multilingualResponses.greeting.en;
    }

    // Handle contact requests in multiple languages
    const contactPatterns = [
      /(contact|call|phone|email|whatsapp|support|help)/i,
      /(اتصال|هاتف|إيميل|واتساب|دعم|مساعدة)/i,
      /(联系|电话|邮箱|微信|支持|帮助)/i,
      /(संपर्क|फोन|ईमेल|व्हाट्सएप|सहायता|मदद)/i,
      /(contacto|teléfono|correo|whatsapp|soporte|ayuda)/i,
      /(contact|téléphone|email|whatsapp|support|aide)/i
    ];

    if (contactPatterns.some(pattern => pattern.test(input))) {
      return multilingualResponses.contact[language as keyof typeof multilingualResponses.contact] || multilingualResponses.contact.en;
    }

    // Enhanced keyword matching with fuzzy search
    let bestMatch = null;
    let highestScore = 0;

    // Extended keyword matching for multiple languages
    const logisticsKeywords = {
      en: ['freight', 'shipping', 'logistics', 'cargo', 'transport', 'delivery', 'quote', 'price', 'cost', 'tracking'],
      ar: ['شحن', 'لوجستيات', 'نقل', 'تسليم', 'عرض', 'سعر', 'تكلفة', 'تتبع'],
      zh: ['货运', '物流', '运输', '交付', '报价', '价格', '成本', '跟踪'],
      hi: ['फ्रेट', 'लॉजिस्टिक्स', 'परिवहन', 'डिलीवरी', 'कोटेशन', 'कीमत', 'लागत', 'ट्रैकिंग'],
      es: ['flete', 'logística', 'transporte', 'entrega', 'cotización', 'precio', 'costo', 'seguimiento'],
      fr: ['fret', 'logistique', 'transport', 'livraison', 'devis', 'prix', 'coût', 'suivi']
    };

    const hasLogisticsKeyword = Object.values(logisticsKeywords).some(keywords =>
      keywords.some(keyword => input.includes(keyword.toLowerCase()))
    );

    chatbotData.forEach(item => {
      let score = 0;
      
      // Direct keyword matches
      item.keywords.forEach(keyword => {
        if (input.includes(keyword.toLowerCase())) {
          score += 3;
        }
        // Fuzzy matching
        if (calculateSimilarity(input, keyword.toLowerCase()) > 0.6) {
          score += 2;
        }
      });

      // Question similarity
      const questionSimilarity = calculateSimilarity(input, item.question.toLowerCase());
      if (questionSimilarity > 0.3) {
        score += questionSimilarity * 3;
      }

      // Word overlap analysis
      const questionWords = item.question.toLowerCase().split(' ');
      const inputWords = input.split(' ');
      
      questionWords.forEach(word => {
        if (word.length > 3 && inputWords.some(inputWord => 
          inputWord.includes(word) || word.includes(inputWord) || 
          calculateSimilarity(word, inputWord) > 0.7
        )) {
          score += 1.5;
        }
      });

      if (score > highestScore) {
        highestScore = score;
        bestMatch = item;
      }
    });

    // Return best match if found
    if (bestMatch && highestScore > 1.5) {
      // Translate response if needed (simplified approach)
      let response = bestMatch.answer;
      if (language !== 'en') {
        response += `\n\nFor detailed information in your language, please contact us at +971 50 404 2388`;
      }
      return response;
    }

    // If logistics-related but no specific match
    if (hasLogisticsKeyword && highestScore < 1.5) {
      const responses = {
        en: "I understand you're asking about our logistics services. Could you please be more specific? You can also contact our team at +971 50 404 2388 for detailed assistance.",
        ar: "أفهم أنك تسأل عن خدماتنا اللوجستية. هل يمكنك أن تكون أكثر تحديداً؟ يمكنك أيضاً الاتصال بفريقنا على +971 50 404 2388 للحصول على مساعدة مفصلة.",
        zh: "我了解您在询问我们的物流服务。您能更具体一些吗？您也可以联系我们的团队 +971 50 404 2388 获得详细帮助。",
        hi: "मैं समझता हूं कि आप हमारी लॉजिस्टिक्स सेवाओं के बारे में पूछ रहे हैं। क्या आप कृपया अधिक विशिष्ट हो सकते हैं? आप विस्तृत सहायता के लिए +971 50 404 2388 पर हमारी टीम से भी संपर्क कर सकते हैं।",
        es: "Entiendo que está preguntando sobre nuestros servicios logísticos. ¿Podría ser más específico? También puede contactar a nuestro equipo al +971 50 404 2388 para asistencia detallada.",
        fr: "Je comprends que vous posez des questions sur nos services logistiques. Pourriez-vous être plus précis? Vous pouvez également contacter notre équipe au +971 50 404 2388 pour une assistance détaillée."
      };
      return responses[language as keyof typeof responses] || responses.en;
    }

    // Out of scope response
    return multilingualResponses.outOfScope[language as keyof typeof multilingualResponses.outOfScope] || multilingualResponses.outOfScope.en;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsTyping(true);

    // Simulate thinking time for better UX
    setTimeout(() => {
      try {
        const botResponse = getIntelligentResponse(currentInput);
        
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: botResponse,
          sender: 'bot',
          timestamp: new Date()
        };

        setMessages(prev => [...prev, botMessage]);
      } catch (error) {
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: "I'm experiencing technical difficulties. Please contact our support team at +971 50 404 2388 for immediate assistance.",
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, errorMessage]);
      } finally {
        setIsTyping(false);
      }
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "What freight services do you offer?",
    "How can I get a quote?",
    "What are your transit times?",
    "How do I track my shipment?",
    "ما هي خدمات الشحن التي تقدمونها؟", // Arabic
    "您提供什么货运服务？", // Chinese
    "आप कौन सी फ्रेट सेवाएं प्रदान करते हैं?" // Hindi
  ];

  const handleWhatsAppRedirect = () => {
    window.open('https://wa.me/971504042388', '_blank');
  };

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-24 right-6 z-50">
        <Button
          onClick={handleWhatsAppRedirect}
          className="w-14 h-14 rounded-full shadow-lg bg-green-500 hover:bg-green-600 transition-all duration-300 hover-scale"
          title="Chat on WhatsApp"
        >
          <Phone className="h-6 w-6 text-white" />
        </Button>
      </div>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className={`w-14 h-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 transition-all duration-300 ${
            isOpen ? 'scale-0' : 'scale-100 hover-scale'
          }`}
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary/90 text-white p-4 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Reham AI Assistant</h3>
                  <p className="text-xs text-white/80 flex items-center gap-1">
                    <Globe className="h-3 w-3" />
                    Multilingual Support
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-primary text-white rounded-br-md'
                      : 'bg-gray-100 text-gray-800 rounded-bl-md'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.sender === 'bot' && (
                      <Bot className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                    )}
                    {message.sender === 'user' && (
                      <User className="h-4 w-4 mt-0.5 flex-shrink-0 text-white/80" />
                    )}
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-md">
                  <div className="flex items-center space-x-2">
                    <Bot className="h-4 w-4 text-primary" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="px-4 pb-2">
              <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
              <div className="space-y-1">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => setInputValue(question)}
                    className="text-xs text-left w-full p-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about our services..."
                className="flex-1"
                disabled={isTyping}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="px-3"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;