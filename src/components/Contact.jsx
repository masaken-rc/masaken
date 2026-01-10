'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showPhoneModal, setShowPhoneModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formState);
  };

  const handleCardClick = (item) => {
    if (item.type === 'phone') {
      setShowPhoneModal(true);
    } else if (item.type === 'email') {
      window.location.href = `mailto:${item.details[0]}`;
    } else if (item.type === 'address') {
      window.open('https://maps.app.goo.gl/pVDXxh6RvbsfU6QY7', '_blank');
    }
  };

  const contactInfo = [
    {
      type: 'phone',
      icon: Phone,
      title: "اتصل بنا",
      details: ["0509996115", "92000-7936"],
      isLtr: true
    },
    {
      type: 'email',
      icon: Mail,
      title: "راسلنا عبر البريد",
      details: ["MSC22@OUTLOOK.SA"],
      isLtr: true
    },
    {
      type: 'address',
      icon: MapPin,
      title: "زورونا في مقرنا",
      details: ["المملكة العربية السعودية", "جدة - النزهه - شارع حراء"],
      isLtr: false
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-accent/5 -skew-x-12 -translate-x-1/2 pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              تواصل <span className="text-accent">معنا</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              نحن هنا للإجابة على استفساراتكم ومساعدتكم في العثور على منزل أحلامكم. لا تترددوا في التواصل معنا.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Contact Info Side */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                onClick={() => handleCardClick(item)}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      <ExternalLink className="w-4 h-4 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="space-y-1">
                      {item.details.map((detail, idx) => (
                        <p 
                          key={idx} 
                          className={`text-gray-600 font-medium ${item.isLtr ? 'dir-ltr text-right' : ''}`}
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Form Side */}
          <motion.div 
            className="lg:col-span-3 bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">الاسم الكامل</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                    placeholder="الاسم"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">البريد الإلكتروني</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                    placeholder="example@domain.com"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">الرسالة</label>
                <textarea 
                  rows="5" 
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 resize-none"
                  placeholder="كيف يمكننا مساعدتك؟"
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center gap-2 group"
              >
                <span>إرسال الرسالة</span>
                <Send className="w-5 h-5 group-hover:-translate-x-1 transition-transform rtl:rotate-180" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Phone Options Modal */}
      <AnimatePresence>
        {showPhoneModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowPhoneModal(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setShowPhoneModal(false)}
                className="absolute top-4 left-4 p-2 text-gray-400 hover:text-red-500 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                  <Phone size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">اختر طريقة التواصل</h3>
                <p className="text-gray-500 mt-2">نحن سعداء بخدمتكم على مدار الساعة</p>
              </div>

              <div className="space-y-4">
                {/* Mobile Number Actions */}
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <p className="text-xs text-gray-500 mb-2 text-center">الجوال الموحد</p>
                  <p className="text-lg font-bold text-primary text-center mb-4 dir-ltr">0509996115</p>
                  <div className="grid grid-cols-2 gap-3">
                    <a 
                      href="tel:0509996115"
                      className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors font-medium text-sm"
                    >
                      <Phone size={16} />
                      اتصال
                    </a>
                    <a 
                      href="https://wa.me/966509996115"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#25D366] text-white hover:bg-[#20bd5a] transition-colors font-medium text-sm"
                    >
                      <MessageCircle size={16} />
                      واتساب
                    </a>
                  </div>
                </div>

                {/* Unified Number Actions */}
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <p className="text-xs text-gray-500 mb-2 text-center">الرقم الموحد</p>
                  <p className="text-lg font-bold text-primary text-center mb-4 dir-ltr">92000-7936</p>
                  <a 
                    href="tel:920007936"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors font-medium text-sm w-full"
                  >
                    <Phone size={16} />
                    اتصال
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
