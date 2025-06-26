'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsChatDotsFill } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import clsx from 'clsx';
import Image from 'next/image';

type Message = {
  sender: 'bot' | 'user';
  text: string;
};

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [pendingRedirect, setPendingRedirect] = useState<string | null>(null);
  const [conversationState, setConversationState] = useState<string | null>(null);
  const [clientInfo, setClientInfo] = useState<{ [key: string]: string }>({});
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('chatMessages');
    if (saved) {
      setMessages(JSON.parse(saved));
    } else {
      welcomeMessage();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  const welcomeMessage = () => {
    setMessages([
      {
        sender: 'bot',
        text: '¡Hola! Soy el asistente virtual de Evorix. ¿En qué puedo ayudarte hoy?',
      },
    ]);
  };

  const playNotification = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  };

  const handleUserMessage = (text: string) => {
    const newMessages = [...messages, { sender: 'user' as const, text }];
    setMessages(newMessages);
    handleBotResponse(text.toLowerCase(), newMessages);
  };

  const handleBotResponse = (text: string, updatedMessages: Message[]) => {
    const sendResponse = (res: string) => {
      setTimeout(() => {
        setMessages([...updatedMessages, { sender: 'bot' as const, text: res }]);
        playNotification();
      }, 600);
    };

    if (conversationState === 'choose-service') {
      setClientInfo({ ...clientInfo, servicio: text });
      setConversationState('ask-name');
      sendResponse('Perfecto, ¿podés decirme tu nombre completo?');
      return;
    }

    if (conversationState === 'ask-name') {
      setClientInfo({ ...clientInfo, nombre: text });
      setConversationState('ask-email');
      sendResponse('Gracias. ¿Cuál es tu correo electrónico?');
      return;
    }

    if (conversationState === 'ask-email') {
      setClientInfo({ ...clientInfo, email: text });
      setConversationState('ask-description');
      sendResponse('Último paso: Contame brevemente que necesitás o qué tipo de proyecto tenés en mente.');
      return;
    }

    if (conversationState === 'ask-description') {
      const fullInfo = { ...clientInfo, descripcion: text };
      setClientInfo(fullInfo);
      setConversationState(null);
      sendResponse('¡Gracias! Vamos a enviarte una propuesta personalizada en breve.');
      sendClientEmail(fullInfo);
      return;
    }

    const greetings = ['hola', 'buenas', 'buenas tardes', 'buenos días', 'saludos'];
    if (greetings.some(greet => text.includes(greet))) {
      sendResponse('¡Hola! ¿Cómo puedo ayudarte? Estoy para responder tus dudas o, si lo preferís, puedo ponerte en contacto con un asesor.');
      return;
    }

    if (text.includes('servicio')) {
      setConversationState('choose-service');
      sendResponse('Ofrecemos desarrollo web, SEO, marketing digital, community manager y branding. ¿Cuál te interesa?');
      return;
    }

    if (text.includes('asesor')) {
      confirmRedirect('Hola, quiero hablar con un asesor desde el chatbot.');
      return;
    }

    if (text.includes('cliente') || text.includes('consulta')) {
      sendResponse('Podés dejar tu consulta y la responderé a la brevedad. O si preferís, puedo derivarte con un asesor.');
      return;
    }

    if (text.includes('precio')) {
      confirmRedirect('Hola, quiero consultar precios desde el chatbot.');
      return;
    }

    if (text.includes('horario')) {
      sendResponse('Nuestro horario de atención es de lunes a sábados, de 8:00 a 21:00.');
      return;
    }

    confirmRedirect(`El cliente preguntó: "${text}" desde el chatbot.`);
  };

  const confirmRedirect = (whatsappText: string) => {
    setMessages(prev => [
      ...prev,
      {
        sender: 'bot' as const,
        text: 'Puedo derivarte con un asesor por WhatsApp o seguir ayudándote desde aquí. ¿Qué preferís?',
      },
    ]);
    setPendingRedirect(whatsappText);
  };

  const redirectToWhatsApp = (text: string) => {
    const phone = '5491123456789'; // ⚠️ Reemplazá por tu número real
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setPendingRedirect(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      if (pendingRedirect) {
        const lower = input.toLowerCase();
        const affirmative = ['asesor', 'whatsapp', 'sí', 'dale', 'claro'];
        const stayHere = ['aquí', 'aca', 'aqui', 'no', 'seguir acá', 'seguir aqui'];

        if (affirmative.some(w => lower.includes(w))) {
          redirectToWhatsApp(pendingRedirect);
        } else if (stayHere.some(w => lower.includes(w))) {
          setMessages(prev => [
            ...prev,
            { sender: 'user' as const, text: input.trim() },
            { sender: 'bot' as const, text: 'Perfecto, seguimos desde aquí. ¿En qué más puedo ayudarte?' },
          ]);
          setPendingRedirect(null);
        } else {
          setMessages(prev => [
            ...prev,
            { sender: 'user' as const, text: input.trim() },
            { sender: 'bot' as const, text: 'Disculpá, no entendí tu respuesta. ¿Querés que te derive con un asesor o seguimos aquí?' },
          ]);
        }
        setInput('');
        return;
      }

      handleUserMessage(input.trim());
      setInput('');
    }
  };

  const sendClientEmail = async (data: any) => {
    try {
      await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error('Error al enviar el email:', error);
    }
  };

  const defaultReplies = [
    'Quiero un servicio',
    'Hablar con un asesor',
    'Tengo una consulta como cliente',
    'Horario de atención',
  ];

  const serviceReplies = [
    'Desarrollo Web',
    'SEO',
    'Marketing Digital',
    'Community Manager',
    'Branding',
  ];

  const currentReplies = conversationState === 'choose-service' ? serviceReplies : defaultReplies;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            className="w-80 h-[500px] bg-black text-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-cyan-500"
          >
            <div className="bg-gradient-to-r from-cyan-400 to-pink-500 p-3 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-white">
                  <Image
                    src="/bot.webp"
                    alt="Asistente Evorix"
                    width={48}
                    height={48}
                    className="rounded-full"
                    loading="lazy"
                  />
                </div>
                <h2 className="font-bold text-sm">Asistente Evorix</h2>
              </div>
              <button onClick={() => setOpen(false)}>
                <IoMdClose size={22} />
              </button>
            </div>

            <div className="flex-1 p-3 overflow-y-auto space-y-2 bg-black/90">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={clsx(
                    'px-3 py-2 rounded-xl max-w-[75%] text-sm',
                    msg.sender === 'bot'
                      ? 'bg-white text-black self-start'
                      : 'bg-cyan-500 text-white self-end ml-auto'
                  )}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <div className="p-2">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Escribí tu mensaje..."
                  className="flex-1 px-3 py-2 rounded-xl text-black text-sm"
                />
                <button
                  type="submit"
                  className="bg-pink-500 hover:bg-pink-600 px-3 py-2 rounded-xl text-white text-sm"
                >
                  Enviar
                </button>
              </form>
              <div className="flex flex-wrap gap-2 mt-2">
                {currentReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleUserMessage(reply)}
                    className="bg-white text-black text-xs px-3 py-1 rounded-full hover:bg-cyan-200 transition"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
            <audio ref={audioRef} src="/notification.mp3" preload="auto" />
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((prev) => !prev)}
        className="bg-gradient-to-r from-cyan-400 to-pink-500 text-white p-4 rounded-full shadow-lg animate-pulse"
      >
        <BsChatDotsFill size={24} />
      </button>
    </div>
  );
};

export default ChatBot;
