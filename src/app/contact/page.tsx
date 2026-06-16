"use client";

import React, { useState, useEffect, useRef, memo } from 'react';
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

// ==========================================
// TYPE DEFINITIONS FOR ENHANCED BUILD SAFETY
// ==========================================
interface Location {
  city: string;
  title: string;
  subtitle: string;
  address: string;
  src: string;
  link: string;
}

// ==========================================
// MEMOIZED HIGH-PERFORMANCE LOCATION CARD
// ==========================================
const LocationCard = memo(({ loc, index }: { loc: Location; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 35 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.65, delay: index * 0.15, ease: [0.215, 0.610, 0.355, 1.000] }}
    className="group relative flex flex-col items-center h-full w-full transform-gpu"
    style={{ willChange: 'transform' }}
  >
    {/* OUTER HARDWARE FRAME WRAPPER */}
    <div className="relative w-full max-w-[310px] sm:max-w-[340px] md:max-w-[360px] aspect-[9/13.5] rounded-[2.8rem] p-3.5 bg-[#0e1126] border-[4px] border-[#222954] shadow-[0_30px_70px_rgba(0,0,0,0.7),inset_0_2px_4px_rgba(255,255,255,0.1)] transition-all duration-500 hover:scale-[1.03] hover:border-cyan-400/50 transform-gpu">
      
      {/* LEFT HARDWARE VOLUME KEYS (+/-) */}
      <div className="absolute top-[24%] -left-[8px] w-[4px] h-9 bg-[#2b3369] rounded-l border-l border-white/10 shadow-md z-50 transition-colors duration-500 group-hover:bg-cyan-400/40" />
      <div className="absolute top-[32%] -left-[8px] w-[4px] h-9 bg-[#2b3369] rounded-l border-l border-white/10 shadow-md z-50 transition-colors duration-500 group-hover:bg-cyan-400/40" />
      
      {/* RIGHT HARDWARE POWER SWITCH BUTTON */}
      <div className="absolute top-[28%] -right-[8px] w-[4px] h-12 bg-[#2b3369] rounded-r border-r border-white/10 shadow-md z-50 transition-colors duration-500 group-hover:bg-cyan-400/40" />

      {/* TOP EAR-SPEAKER STRIP & DOT SENSOR MATRIX */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-black rounded-full z-30 flex items-center justify-center space-x-1.5 px-3 border border-white/5">
        <div className="w-8 h-1 bg-white/20 rounded-full" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#161a36]" />
      </div>

      {/* INNER DISPLAY SURFACE & BEZEL */}
      <div className="relative w-full h-full overflow-hidden rounded-[2.2rem] bg-black border border-black shadow-inner">
        
        {/* FLOATING GLASSMORPHIC HUD OVERLAY */}
        <a 
          href={loc.link}
          target="_blank"
          rel="noreferrer"
          className="absolute top-12 left-3 right-3 z-20 bg-[#070b1e]/85 backdrop-blur-xl border border-white/10 p-3.5 rounded-xl transition-all duration-300 hover:bg-[#070b1e]/95 group/info pointer-events-auto shadow-2xl"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-0.5">
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_#22d3ee]" />
                <span className="text-cyan-400 font-mono text-[8px] uppercase tracking-[0.25em] font-bold">Node Active</span>
              </div>
              <h4 className="text-white font-black text-sm uppercase tracking-tight group-hover/info:text-cyan-400 transition-colors">
                {loc.city}
              </h4>
              <p className="text-cyan-400/80 text-[9px] font-mono font-bold uppercase tracking-wider">
                {loc.title}
              </p>
            </div>
            <div className="p-1.5 bg-white/5 border border-white/10 rounded-lg group-hover/info:bg-cyan-400 group-hover/info:border-cyan-300 transition-all duration-500 shadow-md shrink-0">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover/info:stroke-black">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </div>
          </div>
        </a>

        {/* NATIVE GOOGLE MAP EMBED IFRAME */}
        <iframe 
          src={loc.src} 
          width="100%" 
          height="100%" 
          style={{ 
            border: 0,
            background: '#070b1e' 
          }} 
          allowFullScreen={true}
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title={`${loc.city} - ${loc.title}`}
          className="w-full h-full opacity-100 transition-opacity duration-500 transform-gpu rounded-[2.2rem]"
        />

        {/* TOP STATUS BAR POLISH / GRADIENT SHIELD */}
        <div className="absolute inset-x-0 top-0 h-20 pointer-events-none bg-gradient-to-b from-black/50 via-black/10 to-transparent z-10" />

        {/* HARDWARE EMBOSSED SCREEN REFLECTION LAYER */}
        <div className="shine-layer absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-700 z-30" />
      </div>
    </div>
  </motion.div>
));

LocationCard.displayName = 'LocationCard';

// ==========================================
// UNIFIED MASTER COMBINED CONTACT PAGE
// ==========================================
export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [countryCode, setCountryCode] = useState(''); 
  
  const [validationAlerts, setValidationAlerts] = useState({
    name: false,
    email: false,
    phone: false
  });

  const [phone, setPhone] = useState('');
  const [formShake, setFormShake] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const whatsappMessage = encodeURIComponent("I am contacting via your website and interested in your services");

  // Geolocation Lookup Sequence
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

  const locations: Location[] = [
    {
      city: "Dubai, UAE",
      title: "Global Headquarters",
      subtitle: "International Enterprise Solutions Hub",
      address: "Crystal Building, Al Karama, Dubai",
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.846921067268!2d55.2973838!3d25.2420804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d3f84a0cd39%3A0x6834edd5ea42e51d!2s4BIZ%20International%20LLC!5e0!3m2!1sen!2sae!4v1780903880922!5m2!1sen!2sae",
      link: "https://maps.app.goo.gl/32WmFGVmDaoCesDK9"
    },
    {
      city: "Kozhikode, IN",
      title: "Regional Tech Node",
      subtitle: "Offshore Software Development Center",
      address: "HiLite Business Park, Calicut, Kerala",
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.1893273073897!2d75.8334759!3d11.247478800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65b26cb564cd7%3A0x6e4ea8183d688e13!2s4biz%20International!5e0!3m2!1sen!2sae!4v1780903901319!5m2!1sen!2sae",
      link: "https://maps.app.goo.gl/ehYp13MsiQJxXmebA"
    },
    {
      city: "Nadakkavu, IN",
      title: "Operational Hub",
      subtitle: "Next-Gen IT Infrastructure & Operations",
      address: "4Biz International Tower, Calicut",
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.778183213242!2d75.7727812!3d11.277709500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65f2df7358683%3A0xdd71f8c39ea9198!2s4biz%20International%20-%20Nadakkavu!5e0!3m2!1sen!2sae!4v1780903922115!5m2!1sen!2sae",
      link: "https://maps.app.goo.gl/M1xzYiJ6AARUdH9i8"
    }
  ];

  return (
    <div className="bg-[#070e25] overflow-x-hidden select-none scroll-smooth antialiased">
      
      {/* SECTION 0: HERO SECTION - DYNAMIC CONTACT BRAND POSITIONING */}
      <section 
        id="hero"
        className="relative min-h-[50vh] sm:min-h-[55vh] flex items-center justify-center pt-36 sm:pt-44 md:pt-48 pb-10 px-4 sm:px-6 lg:px-8 xl:px-16 overflow-hidden transform-gpu"
        style={{
          contentVisibility: 'auto',
          containmentIntrinsicSize: '1px 500px',
        } as React.CSSProperties}
      >
        {/* Dynamic Abstract Tech Background elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[450px] md:w-[600px] aspect-square bg-gradient-to-tr from-cyan-500/10 to-purple-600/10 rounded-full filter blur-[70px] sm:blur-[100px] pointer-events-none animate-[pulse_8s_infinite_ease-in-out]" />
        
        <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
          
          {/* Main H1 Semantic Core - Break-Resistant Structural Fonts */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.215, 0.610, 0.355, 1.000] }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-[1.05] max-w-4xl break-words"
          >
            Connect With Our{" "}
            {/* Added systematic padding-right (pr-2) to explicitly prevent linear text-clip cutoff bugs */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 drop-shadow-[0_0_25px_rgba(34,211,238,0.2)] block sm:inline pr-2 pb-1">
              Global Nodes
            </span>
          </motion.h1>

          {/* Core SEO Description text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-white/70 max-w-2xl text-xs sm:text-sm md:text-base lg:text-lg font-medium tracking-wide leading-relaxed mt-5 sm:mt-6 px-2 break-words"
          >
            Reach out to establish direct operational pipelines with our offshore development teams, system architects, and cross-border tech consultants.
          </motion.p>

        </div>

        {/* Lower Screen Architectural Fade transition */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#070e25] pointer-events-none" />
      </section>

      {/* SECTION 1: MASTER CONTACT INTELLIGENT LEAD FORM */}
      <section
        id="contact"
        className="pt-8 md:pt-12 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 xl:px-16 relative overflow-hidden transform-gpu backface-hidden"
        style={{
          contentVisibility: 'auto',
          contain: 'paint layout',
          containmentIntrinsicSize: '1px 1100px',
        } as React.CSSProperties}
      >
        {/* Network Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Main Titles */}
          <div className="text-center mb-10 md:mb-14 max-w-3xl mx-auto">
            <motion.h3 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-4xl sm:text-5xl font-black text-white tracking-tight uppercase"
            >
              Contact Us
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-xs sm:text-sm font-bold mt-2.5 text-white/80 uppercase tracking-widest"
            >
              To Scale your Business
            </motion.p>
          </div>

          {/* 2-Column Grid Container - Fully Responsive Grid Framework */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-3xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.5)] border border-white/5 items-stretch">
            
            {/* LEFT HALF: DEEP SLATE NAVY INFRASTRUCTURE CARD PANEL */}
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

                {/* Dubai HQ Address */}
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

            {/* RIGHT HALF: HIGH-CONVERSION ULTRA-CLEAN DATA FORM */}
            <div className="lg:col-span-6 bg-white p-5 sm:p-10 lg:p-12 order-1 lg:order-2 flex flex-col justify-center h-full transform-gpu">
              
              <div className="mb-8 select-none text-left">
                <h4 className="text-2xl sm:text-3xl font-black text-black tracking-tight uppercase leading-tight break-words">
                  Fill the form <br className="hidden sm:inline" />to connect with us
                </h4>
                <p className="text-xs font-bold mt-2 text-neutral-600 uppercase tracking-wider leading-relaxed break-words">
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
                        <div className="w-full h-[52px] bg-slate-50 animate-pulse rounded-xl border-2 border-black" />
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
      </section>

      {/* SECTION 2: HARDWARE-RENDERED MAP LOCATION INTERFACE */}
      <section 
        id="map" 
        className="py-16 md:py-28 px-4 sm:px-6 md:px-12 relative overflow-hidden bg-[#070e24]"
      >
        {/* Matrix Tech Grid Mesh */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.003)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.003)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* SEO Targeted Semantic Header */}
          <header className="mb-16 flex flex-col items-center text-center w-full px-4">
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-cyan-400 font-mono text-xs md:text-sm uppercase tracking-[0.3em] font-bold mb-3"
            >
              Enterprise Infrastructure
            </motion.p>
            
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl md:text-6xl uppercase tracking-tighter text-white font-black leading-[0.95] pb-5 break-words max-w-full"
            >
              Global Office <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 drop-shadow-[0_0_20px_rgba(34,211,238,0.2)] inline-block pr-2 pb-1">Branches</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/70 max-w-2xl text-xs sm:text-sm md:text-base font-medium tracking-wide leading-relaxed mb-6 break-words"
            >
              Connecting cross-border innovation hubs to engineer highly scalable, secure enterprise architectures and full-cycle digital software transformations.
            </motion.p>
            
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "160px" }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.3)]"
            />
          </header>

          {/* Fluid Hardware Device Responsive Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12 justify-items-center">
            {locations.map((loc, index) => (
              <LocationCard key={index} loc={loc} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL ARCHITECTURAL STYLESHEET SCOPE */}
      <style jsx global>{`
        /* High-Performance Hardware Acceleration Layers */
        .transform-gpu {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1200px;
        }

        .group:hover {
          z-index: 20;
        }

        /* Cinematic Map Screen Light Ray Reflections */
        @keyframes shine-move {
          0% { background-position: -150% -150%; }
          100% { background-position: 250% 250%; }
        }

        .shine-layer {
          background: linear-gradient(
            135deg,
            transparent 40%,
            rgba(255, 255, 255, 0.04) 50%,
            rgba(34, 211, 238, 0.02) 55%,
            transparent 65%
          );
          background-size: 250% 250%;
          animation: shine-move 6s infinite linear;
        }

        /* Card Micro-Interactions */
        .corporate-info-card {
          background: rgba(255, 255, 255, 0.02);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, background-color;
        }
        .corporate-info-card:hover {
          background: rgba(255, 255, 255, 0.05);
          transform: translateY(-1px);
        }

        /* High-Visibility Pure Black Bold Inputs & Layout Integrity fixes */
        .corporate-input {
          width: 100%;
          background: #ffffff !important;
          border: 1px solid #000000 !important; /* Thickened and locked to solid black */
          padding: 0 1.25rem;
          color: #000000 !important;
          border-radius: 12px;
          outline: none;
          transition: all 0.15s ease-in-out;
          font-size: 14px;
          height: 52px;
          font-weight: 600;
        }
        .corporate-input:focus {
          box-shadow: 0 0 0 1.5px #000000;
        }
        .corporate-input::placeholder {
          color: #1a1a1a !important; 
          opacity: 0.8 !important;
          font-weight: 500;
        }
        textarea.corporate-input {
          height: 110px !important;
          padding-top: 14px !important;
        }
        
        /* Premium International Phone Wrapper Layouts */
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
          border: 2px solid #000000 !important; /* Bold solid black border framework */
          border-radius: 12px !important;
          transition: all 0.15s ease-in-out;
          display: flex !important;
          align-items: center !important;
        }
        .react-international-phone-input-container:focus-within {
          box-shadow: 0 0 0 1.5px #000000;
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
          font-weight: 600 !important;
        }
        .react-international-phone-input::placeholder {
          color: #1a1a1a !important;
          opacity: 0.8 !important;
        }
        
        .react-international-phone-selector-button {
          background: transparent !important;
          border: none !important;
          border-right: 2px solid #000000 !important; /* High contrast right divider */
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
          border: 2px solid #000000 !important; 
          border-radius: 12px !important;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) !important;
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
    </div>
  );
}