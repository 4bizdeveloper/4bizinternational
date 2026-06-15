"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  RiCheckboxCircleLine, 
  RiErrorWarningLine, 
  RiLoader4Line, 
  RiMailLine, 
  RiWhatsappLine, 
  RiMapPinLine,
  RiArrowRightLine
} from 'react-icons/ri';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [countryCode, setCountryCode] = useState(''); 
  
  // Custom Validation Alert Triggers
  const [validationAlerts, setValidationAlerts] = useState({
    name: false,
    email: false,
    phone: false
  });

  const [phone, setPhone] = useState('');
  const [formShake, setFormShake] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Pre-compiled global encoded WhatsApp text message
  const whatsappMessage = encodeURIComponent("I am contacting via your website and interested in your services");

  useEffect(() => {
    const resolveLocation = async () => {
      try {
        const zone = Intl.DateTimeFormat().resolvedOptions().timeZone.toLowerCase();
        if (zone.includes('kolkata') || zone.includes('calcutta') || zone.includes('india')) {
          setCountryCode('in');
          return;
        }
        if (zone.includes('dubai') || zone.includes('asia/dubai') || zone.includes('abudhabi')) {
          setCountryCode('ae');
          return;
        }
      } catch (_) {}

      try {
        const locale = navigator.language || (navigator.languages && navigator.languages[0]);
        if (locale && locale.includes('-')) {
          const region = locale.split('-')[1].toLowerCase();
          if (region === 'in' || region === 'ae') {
            setCountryCode(region);
            return;
          }
        }
      } catch (_) {}

      try {
        const res = await fetch('https://ipapi.co/json/');
        if (res.ok) {
          const data = await res.json();
          if (data.country_code) {
            setCountryCode(data.country_code.toLowerCase()); 
            return;
          }
        }
      } catch (_) {}

      setCountryCode('ae');
    };

    resolveLocation();
  }, []);

  const handleInputChange = () => {
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;

    setValidationAlerts(prev => ({
      ...prev,
      name: name ? false : prev.name,
      email: email ? false : prev.email
    }));
  };

  useEffect(() => {
    if (phone.trim().length > 4) {
      setValidationAlerts(prev => ({ ...prev, phone: false }));
    }
  }, [phone]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;

    const errors = {
      name: !name || !name.trim(),
      email: !email || !email.trim(),
      phone: !phone || phone.trim().length <= 4
    };

    setValidationAlerts(errors);

    if (errors.name || errors.email || errors.phone) {
      setFormShake(true);
      setTimeout(() => setFormShake(false), 500);
      return;
    }

    setStatus('sending');
    setErrorMsg('');

    const payload = Object.fromEntries(formData.entries());
    payload.phone = phone;
    payload.countryCode = (countryCode || 'ae').toUpperCase(); 

    try {
      const response = await fetch('./send-mail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error(`Server status: ${response.status}`);

      const result = await response.json();

      if (result.status === 'success') {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
        setPhone('');

        setTimeout(() => {
          setStatus('idle');
        }, 3000);
      } else {
        throw new Error(result.message || 'Interrupted');
      }
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err.message);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 xl:px-16 relative overflow-hidden transform-gpu backface-hidden"
      style={{
        backgroundColor: '#070e25',
        contentVisibility: 'auto',
        contain: 'paint layout',
        containmentIntrinsicSize: '1px 1200px',
      } as React.CSSProperties}
    >
      {/* Network Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Titles */}
        <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
          <motion.h3 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase"
          >
            Contact Us
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-xs sm:text-sm font-bold mt-3 text-white/80 uppercase tracking-widest"
          >
            To Scale your Business
          </motion.p>
        </div>

        {/* 2-Column Grid Container - Fully Responsive Grid Framework */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-3xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.5)] border border-white/5 items-stretch">
          
          {/* LEFT HALF: DEEP SLATE NAVY (#0B1536) - lg:col-span-5 or 6 for optimized alignment */}
          <div 
            className="lg:col-span-6 p-5 sm:p-10 lg:p-12 flex flex-col justify-between relative order-2 lg:order-1 h-full min-h-[500px] lg:min-h-auto transition-transform duration-300 transform-gpu"
            style={{ backgroundColor: '#0b1536' }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none opacity-40" />
            
            <div className="space-y-4 relative z-10 w-full my-auto">
              
              {/* Mail Card */}
              <a href="mailto:info@4bizinternational.com" className="corporate-info-card group flex items-center gap-4 p-4.5 rounded-xl border border-white/5 backdrop-blur-md w-full block transition-all duration-300 hover:border-white/20">
                <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white text-lg group-hover:bg-white group-hover:text-[#0b1536] transition-all duration-300 shrink-0">
                  <RiMailLine />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-mono tracking-wider text-white/60 uppercase font-bold">Mail Infrastructure</p>
                  <p className="text-sm md:text-base font-semibold text-white tracking-wide truncate mt-0.5">info@4bizinternational.com</p>
                </div>
              </a>

              {/* WhatsApp Card - Dubai Wing */}
              <a 
                href={`https://wa.me/971527925100?text=${whatsappMessage}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="corporate-info-card group flex items-center gap-4 p-4.5 rounded-xl border border-white/5 backdrop-blur-md w-full block transition-all duration-300 hover:border-white/20"
              >
                <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white text-lg group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shrink-0">
                  <RiWhatsappLine />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-mono tracking-wider text-white/60 uppercase font-bold">Dubai HQ Telecoms</p>
                  <p className="text-sm md:text-base font-semibold text-white tracking-wide mt-0.5 flex items-center gap-2">
                    +971 52 79 25 100 <span className="text-[9px] bg-white/[0.08] text-white/80 px-2 py-0.5 rounded font-mono font-medium border border-white/5 group-hover:bg-emerald-500/20 group-hover:text-emerald-300">CONNECT</span>
                  </p>
                </div>
              </a>

              {/* WhatsApp Card - India Wing */}
              <a 
                href={`https://wa.me/919895717879?text=${whatsappMessage}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="corporate-info-card group flex items-center gap-4 p-4.5 rounded-xl border border-white/5 backdrop-blur-md w-full block transition-all duration-300 hover:border-white/20"
              >
                <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white text-lg group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shrink-0">
                  <RiWhatsappLine />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-mono tracking-wider text-white/60 uppercase font-bold">India Tech Telecoms</p>
                  <p className="text-sm md:text-base font-semibold text-white tracking-wide mt-0.5 flex items-center gap-2">
                    +91 98957 17879 <span className="text-[9px] bg-white/[0.08] text-white/80 px-2 py-0.5 rounded font-mono font-medium border border-white/5 group-hover:bg-emerald-500/20 group-hover:text-emerald-300">CONNECT</span>
                  </p>
                </div>
              </a>

              {/* Dubai HQ */}
              <a 
                href="https://maps.app.goo.gl/jGQ6zpmvoT4CxvfdA"
                target="_blank"
                rel="noopener noreferrer"
                className="corporate-info-card group block p-4.5 rounded-xl border border-white/5 backdrop-blur-md transition-all duration-300 hover:border-white/20"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white text-base shrink-0 group-hover:bg-white group-hover:text-[#0b1536] transition-all duration-300">
                    <RiMapPinLine />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs font-bold text-white tracking-wider uppercase flex items-center gap-2 flex-wrap">
                      Dubai Corporate Hub <span className="px-2 py-0.5 text-[9px] bg-white text-[#0b1536] rounded font-mono font-extrabold uppercase tracking-wider">Global HQ</span>
                    </h4>
                    <p className="text-xs text-white/80 mt-1.5 leading-relaxed font-normal group-hover:text-white transition-colors duration-200">
                      Crystal Building - Office # 104 - 2C St - near ADCB Metro Station - Al Karama - Dubai, UAE
                    </p>
                  </div>
                </div>
              </a>

              {/* India HiLite Business Park */}
              <a 
                href="https://maps.app.goo.gl/7gFHn9sHMqnKsDMc9"
                target="_blank"
                rel="noopener noreferrer"
                className="corporate-info-card group block p-4.5 rounded-xl border border-white/5 backdrop-blur-md transition-all duration-300 hover:border-white/20"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white text-base shrink-0 group-hover:bg-white group-hover:text-[#0b1536] transition-all duration-300">
                    <RiMapPinLine />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs font-bold text-white tracking-wider uppercase flex items-center gap-2 flex-wrap">
                      India HiLite Business Park <span className="px-2 py-0.5 text-[9px] bg-white/[0.08] text-white/90 rounded font-mono font-bold uppercase tracking-wider border border-white/10 group-hover:bg-white/20">Tech Wing</span>
                    </h4>
                    <p className="text-xs text-white/80 mt-1.5 leading-relaxed font-normal group-hover:text-white transition-colors duration-200">
                      Tower 2, HiLITE Business Park, Office 2723, 7th Floor, near HiLITE Mall, Poovangal, Pantheeramkavu, Kozhikode, Kerala 673014, India
                    </p>
                  </div>
                </div>
              </a>

              {/* India Operations */}
              <a 
                href="https://maps.app.goo.gl/2LzJGMQ2swaAoBdP9"
                target="_blank"
                rel="noopener noreferrer"
                className="corporate-info-card group block p-4.5 rounded-xl border border-white/5 backdrop-blur-md transition-all duration-300 hover:border-white/20"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white text-base shrink-0 group-hover:bg-white group-hover:text-[#0b1536] transition-all duration-300">
                    <RiMapPinLine />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs font-bold text-white tracking-wider uppercase flex items-center gap-2 flex-wrap">
                      India Nadakkave Office <span className="px-2 py-0.5 text-[9px] bg-white/[0.08] text-white/90 rounded font-mono font-bold uppercase tracking-wider border border-white/10 group-hover:bg-white/20">Operations</span>
                    </h4>
                    <p className="text-xs text-white/80 mt-1.5 leading-relaxed font-normal group-hover:text-white transition-colors duration-200">
                      5th Floor, C. M. Mathew Brothers Arcade, Kannur Rd, near Hotel Westway, Vikas Nagar Housing Colony, West Nadakkave, Chakkorathukulam, Kozhikode, Kerala 673006, India
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT HALF: HIGH-CONVERSION FORM */}
          <div className="lg:col-span-6 bg-white p-5 sm:p-10 lg:p-12 order-1 lg:order-2 flex flex-col justify-center h-full transform-gpu">
            
            {/* Form Section Header */}
            <div className="mb-8 select-none text-left">
              <h4 className="text-2xl sm:text-3xl font-black text-black tracking-tight uppercase leading-tight">
                Fill the form <br className="hidden sm:inline" />to connect with us
              </h4>
              {/* FIXED: Readability adjusted from text-black/40 to text-neutral-600 to mirror input placeholder richness */}
              <p className="text-xs font-bold mt-2 text-neutral-600 uppercase tracking-wider leading-relaxed">
                Provide your details below to activate direct strategic consulting
              </p>
            </div>

            <motion.div 
              animate={formShake ? { x: [-6, 6, -4, 4, -2, 2, 0] } : {}}
              transition={{ duration: 0.4 }}
              className="w-full will-change-transform"
            >
              <form ref={formRef} onSubmit={handleSubmit} onChange={handleInputChange} className="space-y-4" noValidate>
                
                {/* Full Name */}
                <div className="relative w-full flex flex-col">
                  <AnimatePresence initial={false}>
                    {validationAlerts.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="p-2 mb-1.5 bg-rose-50 border border-rose-100 rounded-lg flex items-center gap-2 text-[11px] font-bold text-rose-600 overflow-hidden"
                      >
                        <RiErrorWarningLine className="text-sm shrink-0" />
                        <span>Full name is required</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <input required name="name" type="text" placeholder="Full Name *" autoComplete="name" className="corporate-input" />
                </div>

                {/* Email Address */}
                <div className="relative w-full flex flex-col">
                  <AnimatePresence initial={false}>
                    {validationAlerts.email && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="p-2 mb-1.5 bg-rose-50 border border-rose-100 rounded-lg flex items-center gap-2 text-[11px] font-bold text-rose-600 overflow-hidden"
                      >
                        <RiErrorWarningLine className="text-sm shrink-0" />
                        <span>Valid email address is required</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <input required name="email" type="email" placeholder="Email Address *" autoComplete="email" autoCapitalize="none" className="corporate-input" />
                </div>

                {/* Phone Input */}
                <div className="flex flex-col">
                  <AnimatePresence initial={false}>
                    {validationAlerts.phone && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="p-2 mb-1.5 bg-rose-50 border border-rose-100 rounded-lg flex items-center gap-2 text-[11px] font-bold text-rose-600 overflow-hidden"
                      >
                        <RiErrorWarningLine className="text-sm shrink-0" />
                        <span>Phone number is required</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div className="phone-input-container">
                    {countryCode ? (
                      <PhoneInput
                        key={countryCode} 
                        defaultCountry={countryCode}
                        value={phone}
                        className="w-full"
                        onChange={(phoneStr, metaData) => {
                          setPhone(phoneStr);
                          if (metaData && metaData.country && metaData.country.iso2) {
                            setCountryCode(metaData.country.iso2.toLowerCase());
                          }
                        }}
                      />
                    ) : (
                      <div className="w-full h-[52px] bg-slate-50 animate-pulse rounded-xl border border-black" />
                    )}
                  </div>
                </div>

                {/* Message Details */}
                <div className="flex flex-col">
                  <textarea name="message" placeholder="Mission Brief / Message Details (Optional)" className="corporate-input h-28 resize-none" />
                </div>

                {/* Premium Action Button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full h-[52px] bg-black hover:bg-[#CC4202] text-white font-black rounded-xl tracking-widest uppercase text-xs flex items-center justify-center gap-3 transition-all duration-300 shadow-md active:scale-[0.99] disabled:opacity-70 disabled:pointer-events-none group transform-gpu"
                >
                  {status === 'sending' ? (
                    <>
                      <RiLoader4Line className="animate-spin text-lg" /> SENDING...
                    </>
                  ) : (
                    <>
                      SEND BRIEF <RiArrowRightLine className="text-base transition-transform duration-200 group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                {/* Status Toast Notification */}
                <AnimatePresence mode="wait">
                  {status !== 'idle' && status !== 'sending' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 5 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      exit={{ opacity: 0, scale: 0.99 }}
                      className={`p-3.5 border rounded-xl flex items-center gap-3 text-xs font-semibold ${
                        status === 'success' 
                          ? 'bg-emerald-50 border-emerald-100 text-emerald-900' 
                          : 'bg-rose-50 border-rose-100 text-rose-900'
                      }`}
                    >
                      {status === 'success' ? (
                        <RiCheckboxCircleLine className="text-lg shrink-0 text-emerald-600" />
                      ) : (
                        <RiErrorWarningLine className="text-lg shrink-0 text-rose-600" />
                      )}
                      <span>
                        {status === 'success' ? 'Thank you! Your inquiry has been transmitted successfully.' : `Error: ${errorMsg}`}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        /* Ultra-Clean Minimal Card Styling */
        .corporate-info-card {
          background: rgba(255, 255, 255, 0.02);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, background-color;
        }
        .corporate-info-card:hover {
          background: rgba(255, 255, 255, 0.05);
          transform: translateY(-1px);
        }

        /* High-Visibility Pure Black Input Fields */
        .corporate-input {
          width: 100%;
          background: #ffffff !important;
          border: 1px solid #000000 !important;
          padding: 0 1.25rem;
          color: #000000 !important;
          border-radius: 12px;
          outline: none;
          transition: all 0.15s ease-in-out;
          font-size: 14px;
          height: 52px;
          font-weight: 500;
        }
        .corporate-input:focus {
          box-shadow: 0 0 0 1px #000000;
        }
        .corporate-input::placeholder {
          color: #525252 !important;
          opacity: 1 !important;
          font-weight: 500;
        }
        textarea.corporate-input {
          height: 110px !important;
          padding-top: 14px !important;
        }
        
        /* High-Visibility International Phone Wrapper Layouts */
        .phone-input-container {
          width: 100%;
          height: 52px !important;
          position: relative;
          z-index: 20 !important; 
        }
        .react-international-phone-input-container {
          width: 100% !important;
          height: 52px !important;
          background: #ffffff !important;
          border: 1px solid #000000 !important;
          border-radius: 12px !important;
          transition: all 0.15s ease-in-out;
          display: flex !important;
          align-items: center !important;
        }
        .react-international-phone-input-container:focus-within {
          box-shadow: 0 0 0 1px #000000;
        }
        .react-international-phone-input {
          flex: 1 !important;
          width: 100% !important;
          background: transparent !important;
          border: none !important;
          padding: 0 1.25rem !important;
          color: #000000 !important; 
          height: 100% !important;
          font-size: 14px !important;
          outline: none !important;
          font-weight: 500 !important;
        }
        .react-international-phone-input::placeholder {
          color: #525252 !important;
          opacity: 1 !important;
        }
        
        .react-international-phone-selector-button {
          background: transparent !important;
          border: none !important;
          border-right: 1px solid #000000 !important;
          height: 100% !important;
          width: 54px !important;
          min-width: 54px !important;
          padding: 0 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          border-top-left-radius: 12px !important;
          border-bottom-left-radius: 12px !important;
          cursor: pointer !important;
        }
        
        .react-international-phone-country-selector-dropdown,
        ul.react-international-phone-country-selector-dropdown {
          background-color: #ffffff !important; 
          background: #ffffff !important;
          border: 1px solid #000000 !important; 
          border-radius: 12px !important;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08) !important;
          padding: 6px !important;
          max-height: 220px !important;
          width: 280px !important;
          position: absolute !important;
          top: 100% !important;
          left: 0 !important;
          z-index: 99999 !important; 
        }
        
        ul.react-international-phone-country-selector-dropdown li {
          background: transparent !important;
          padding: 6px 10px !important;
          border-radius: 8px !important;
          display: flex !important;
          align-items: center !important;
          gap: 10px !important;
        }
        
        .react-international-phone-country-selector-list-item-name,
        .react-international-phone-country-selector-list-item-dial-code,
        li.react-international-phone-country-selector-list-item span {
          color: #1a1a1a !important; 
          font-family: system-ui, -apple-system, sans-serif !important;
          font-size: 13px !important;
          font-weight: 600 !important;
        }
        
        li.react-international-phone-country-selector-list-item:hover {
          background-color: #f4f4f5 !important; 
        }
        
        li.react-international-phone-country-selector-list-item[aria-selected="true"] {
          background-color: #e4e4e7 !important; 
        }
      `}</style>
    </section>
  );
}