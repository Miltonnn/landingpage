export const WHATSAPP_LINK = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(
  process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ?? ""
)}`;
