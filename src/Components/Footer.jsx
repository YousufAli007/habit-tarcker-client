 "use client";

 import React from "react";
 import {
   FaFacebook as Facebook,
   FaTwitter as Twitter,
   FaInstagram as Instagram,
   FaYoutube as Youtube,
   FaEnvelope as Mail,
   FaPhone as Phone,
   FaMapMarkerAlt as MapPin,
   FaClock as Clock,
   FaShieldAlt as Shield,
   FaFileAlt as FileText,
   FaChevronRight as ChevronRight,
   FaArrowUp as ArrowUp,
   FaGlobe as Globe,
   FaHeart as Heart,
   FaStar as Star,
   FaCheckCircle as CheckCircle,
   FaTrophy as Trophy,
   FaCalendarCheck as CalendarCheck,
 } from "react-icons/fa";
import Container from "./Container";

 export default function Footer() {
   const scrollToTop = () => {
     window.scrollTo({ top: 0, behavior: "smooth" });
   };

   return (
     <div className="bg-[#040710] p-2">
       <Container>
         <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
           {/* ── Main Footer ── */}
           <div className="container py-8 sm:py-12">
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
               {/* Brand & Description */}
               <div className="sm:col-span-2">
                 <div className="flex items-center space-x-3 mb-5">
                   <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-400 via-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                     <CalendarCheck className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                   </div>
                   <div>
                     <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                       HabitFlow
                     </h2>
                     <p className="text-xs sm:text-sm text-green-400 font-medium">
                       Your Daily Habit Tracker
                     </p>
                   </div>
                 </div>

                 <p className="text-gray-400 mb-5 text-xs sm:text-sm leading-relaxed">
                   Build better habits, break bad ones, and track your progress
                   daily. Stay consistent, stay motivated, and transform your
                   life — one habit at a time.
                 </p>

                 {/* Trust Badges */}
                 <div className="flex flex-wrap gap-2 mb-5">
                   <div className="flex items-center gap-1.5 bg-gray-800 px-2.5 py-1 rounded-full text-xs">
                     <Trophy className="w-3.5 h-3.5 text-yellow-500" />
                     <span>50K+ Habits</span>
                   </div>
                   <div className="flex items-center gap-1.5 bg-gray-800 px-2.5 py-1 rounded-full text-xs">
                     <Star className="w-3.5 h-3.5 text-yellow-400" />
                     <span>4.8/5</span>
                   </div>
                 </div>

                 {/* Newsletter */}
                 <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
                   <h3 className="text-white font-semibold mb-2 flex items-center gap-1.5 text-xs sm:text-sm">
                     <Mail className="w-4 h-4 text-green-400" />
                     Weekly Habit Tips
                   </h3>
                   <div className="flex flex-col gap-2">
                     <input
                       type="email"
                       placeholder="you@example.com"
                       className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 text-xs focus:outline-none focus:border-green-500 transition-all"
                     />
                     <button className="w-full px-3 py-2 bg-gradient-to-r from-green-500 to-teal-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-teal-700 transition-all flex items-center justify-center gap-1 text-xs">
                       Subscribe
                       <ChevronRight className="w-3 h-3" />
                     </button>
                   </div>
                   <p className="text-xs text-gray-500 mt-1.5">
                     Free tips every Sunday.
                   </p>
                 </div>
               </div>

               {/* Track */}
               <div>
                 <h3 className="text-white font-semibold mb-3 text-base flex items-center gap-1.5">
                   <div className="w-1 h-5 bg-gradient-to-b from-green-400 to-teal-600 rounded-full"></div>
                   Track
                 </h3>
                 <ul className="space-y-1.5 text-xs">
                   {[
                     "Daily Habits",
                     "Streak Counter",
                     "Progress Charts",
                     "Reminders",
                   ].map((item) => (
                     <li key={item} className="group">
                       <button className="text-gray-400 hover:text-white transition-all flex items-center gap-1.5 w-full text-left">
                         <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0.5 transition-all text-green-400" />
                         {item}
                       </button>
                     </li>
                   ))}
                 </ul>
               </div>

               {/* Learn */}
               <div>
                 <h3 className="text-white font-semibold mb-3 text-base flex items-center gap-1.5">
                   <div className="w-1 h-5 bg-gradient-to-b from-blue-400 to-indigo-600 rounded-full"></div>
                   Learn
                 </h3>
                 <ul className="space-y-1.5 text-xs">
                   {["Habit Science", "Success Stories", "Blog", "Guides"].map(
                     (item) => (
                       <li key={item} className="group">
                         <button className="text-gray-400 hover:text-white transition-all flex items-center gap-1.5 w-full text-left">
                           <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0.5 transition-all text-blue-400" />
                           {item}
                         </button>
                       </li>
                     )
                   )}
                 </ul>
               </div>

               {/* Support & Legal */}
               <div>
                 <h3 className="text-white font-semibold mb-3 text-base flex items-center gap-1.5">
                   <div className="w-1 h-5 bg-gradient-to-b from-purple-400 to-pink-600 rounded-full"></div>
                   Support
                 </h3>
                 <ul className="space-y-1.5 text-xs mb-4">
                   {["Help Center", "Contact Us", "Community", "Status"].map(
                     (item) => (
                       <li key={item} className="group">
                         <button className="text-gray-400 hover:text-white transition-all flex items-center gap-1.5 w-full text-left">
                           <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0.5 transition-all text-purple-400" />
                           {item}
                         </button>
                       </li>
                     )
                   )}
                 </ul>

                 <h3 className="text-white font-semibold mb-3 text-base flex items-center gap-1.5">
                   <Shield className="w-4 h-4 text-yellow-500" />
                   Legal
                 </h3>
                 <ul className="space-y-1.5 text-xs">
                   {["Privacy", "Terms", "Cookies", "License"].map((item) => (
                     <li key={item} className="group">
                       <button className="text-gray-400 hover:text-white transition-all flex items-center gap-1.5 w-full text-left">
                         <FileText className="w-3 h-3 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0.5 transition-all text-yellow-500" />
                         {item}
                       </button>
                     </li>
                   ))}
                 </ul>
               </div>
             </div>

             {/* ── Contact & Social (Mobile First) ── */}
             <div className="mt-8 pt-6 border-t border-gray-800">
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                 {/* Contact */}
                 <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
                   <h3 className="text-white font-semibold mb-3 flex items-center gap-1.5 text-xs sm:text-sm">
                     <MapPin className="w-4 h-4 text-green-400" />
                     Reach Out
                   </h3>
                   <div className="space-y-2.5 text-xs">
                     <div className="flex items-start gap-2">
                       <div className="w-7 h-7 bg-green-500 bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                         <MapPin className="w-3.5 h-3.5 text-green-400" />
                       </div>
                       <div>
                         <p className="text-white font-medium text-xs">
                           Bangladesh HQ
                         </p>
                         <p className="text-gray-400 text-xs">
                           House 12, Road 5, Sector 7<br />
                           Uttara, Dhaka 1230
                         </p>
                       </div>
                     </div>

                     <div className="flex items-center gap-2">
                       <div className="w-7 h-7 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                         <Phone className="w-3.5 h-3.5 text-blue-400" />
                       </div>
                       <p className="text-gray-300 text-xs">
                         +880 96 1234 5678
                       </p>
                     </div>

                     <div className="flex items-center gap-2">
                       <div className="w-7 h-7 bg-purple-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                         <Mail className="w-3.5 h-3.5 text-purple-400" />
                       </div>
                       <p className="text-gray-300 text-xs break-all">
                         support@habitflow.app
                       </p>
                     </div>

                     <div className="flex items-center gap-2">
                       <div className="w-7 h-7 bg-teal-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                         <Clock className="w-3.5 h-3.5 text-teal-400" />
                       </div>
                       <p className="text-gray-300 text-xs">Sun-Thu: 9AM-6PM</p>
                     </div>
                   </div>
                 </div>

                 {/* Social Media */}
                 <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
                   <h3 className="text-white font-semibold mb-3 text-xs sm:text-sm">
                     Join the Community
                   </h3>
                   <div className="grid grid-cols-3 gap-1.5 mb-3">
                     {[
                       { icon: Facebook, color: "from-blue-600 to-blue-700" },
                       { icon: Twitter, color: "from-sky-500 to-sky-600" },
                       { icon: Instagram, color: "from-pink-500 to-rose-600" },
                       { icon: Youtube, color: "from-red-600 to-red-700" },
                       { icon: Globe, color: "from-green-600 to-teal-700" },
                       {
                         icon: CheckCircle,
                         color: "from-emerald-500 to-teal-600",
                       },
                     ].map((social, i) => {
                       const Icon = social.icon;
                       return (
                         <button
                           key={i}
                           className={`aspect-square bg-gradient-to-br ${social.color} rounded-lg flex items-center justify-center group hover:scale-110 transition-all duration-300 shadow-sm`}
                         >
                           <Icon className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
                         </button>
                       );
                     })}
                   </div>

                   <div className="flex flex-wrap gap-1.5 text-xs">
                     <span className="flex items-center gap-1 bg-green-500 bg-opacity-20 px-2 py-0.5 rounded-full text-xs">
                       <Shield className="w-2.5 h-2.5 text-green-400" />
                       Private
                     </span>
                     <span className="flex items-center gap-1 bg-teal-500 bg-opacity-20 px-2 py-0.5 rounded-full text-xs">
                       <CheckCircle className="w-2.5 h-2.5 text-teal-400" />
                       GDPR
                     </span>
                   </div>
                 </div>

                 {/* Quick Actions - Stacked */}
                 <div className="flex flex-col gap-3 sm:col-span-2 lg:col-span-1">
                   <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-xl p-4 text-white">
                     <h3 className="font-bold text-sm mb-1.5">
                       Stuck on a Habit?
                     </h3>
                     <p className="text-green-100 text-xs mb-2">
                       Get 1:1 coaching from habit experts
                     </p>
                     <button className="w-full bg-white text-green-600 font-semibold py-1.5 rounded-lg hover:bg-green-50 transition-colors text-xs">
                       Book a Session
                     </button>
                   </div>

                   <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl p-4 text-white">
                     <h3 className="font-bold text-sm mb-1.5">
                       Start Free Trial
                     </h3>
                     <p className="text-purple-100 text-xs mb-2">
                       7 Days Premium — No Card Needed
                     </p>
                     <button className="w-full bg-white text-purple-600 font-semibold py-1.5 rounded-lg hover:bg-purple-50 transition-colors text-xs">
                       Try Premium
                     </button>
                   </div>
                 </div>
               </div>
             </div>
           </div>

           {/* ── Bottom Bar ── */}
           <div className="bg-black border-t border-gray-800">
             <div className="container py-3">
               <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs">
                 <div className="flex flex-col sm:flex-row items-center gap-2 text-gray-400">
                   <p>© 2025 HabitFlow Bangladesh</p>
                   <div className="flex gap-3">
                     <button className="hover:text-white flex items-center gap-1">
                       <FileText className="w-3 h-3" />
                       Terms
                     </button>
                     <button className="hover:text-white flex items-center gap-1">
                       <Shield className="w-3 h-3" />
                       Privacy
                     </button>
                   </div>
                 </div>

                 <div className="flex items-center gap-1.5 text-xs">
                   <span className="text-gray-500">Built with</span>
                   <Heart className="w-3.5 h-3.5 text-red-500 animate-pulse" />
                   <span className="text-gray-500">in BD</span>
                 </div>

                 <button
                   onClick={scrollToTop}
                   className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-all group"
                 >
                   <ArrowUp className="w-3.5 h-3.5 text-gray-400 group-hover:text-white group-hover:-translate-y-0.5 transition-all" />
                 </button>
               </div>
             </div>
           </div>
         </footer>
       </Container>
     </div>
   );
 }