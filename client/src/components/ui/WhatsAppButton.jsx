// import React from 'react';
// import { MessageCircle } from 'lucide-react';
// import { motion } from 'framer-motion';

// const WhatsAppButton = () => {
//     const phoneNumber = "917290909571";
//     const whatsappUrl = `https://wa.me/${phoneNumber}`;

//     return (
//         <motion.a
//             href={whatsappUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             initial={{ scale: 0, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             className="fixed bottom-8 right-8 z-[9999] flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] transition-all group"
//             title="Chat with us"
//         >
//             <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20 group-hover:opacity-40" />
//             <MessageCircle size={32} className="relative z-10" />

//             {/* Tooltip */}
//             <span className="absolute right-full mr-4 px-3 py-1.5 bg-[#07090d]/90 backdrop-blur-md border border-white/10 text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
//                 Chat with us
//             </span>
//         </motion.a>
//     );
// };

// export default WhatsAppButton;
