// src/components/About.jsx
import { useState } from 'react';
import abbeyImage from '../assets/images/abbey.jpg';

export default function About() {
  const [showConfirm, setShowConfirm] = useState(false);

  const tags = [
    { text: 'UX/UI Design', bg: 'bg-[#F2A51A]', rotation: '-rotate-6' },
    { text: 'Mobile App Design', bg: 'bg-[#1D3B2B]', rotation: 'rotate-3' },
    { text: 'Website Design', bg: 'bg-[#F2A51A]', rotation: 'rotate-6' },
    { text: 'Design System', bg: 'bg-[#F2A51A]', rotation: '-rotate-3' },
    { text: 'Prototype', bg: 'bg-[#1D3B2B]', rotation: 'rotate-2' },
    { text: 'Dashboard', bg: 'bg-[#1D3B2B]', rotation: '-rotate-2' },
    { text: 'Wireframe Design', bg: 'bg-[#F2A51A]', rotation: 'rotate-4' }
  ];

  const handleDownloadClick = () => {
    setShowConfirm(true);
  };

  const handleConfirm = async () => {
    setShowConfirm(false);
    
    try {
      // Fetch the CV HTML file
      const response = await fetch('/Ssenkubuge-Abbey-CV.html');
      let html = await response.text();
      
      // Fetch the image and convert to Base64
      const imgResponse = await fetch('/images/abbey.jpg');
      const blob = await imgResponse.blob();
      const base64 = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(blob);
      });
      
      // Replace the image src with Base64
      html = html.replace('src="images/abbey.jpg"', `src="${base64}"`);
      
      // Create and download the updated HTML
      const blob2 = new Blob([html], { type: 'text/html' });
      const url = URL.createObjectURL(blob2);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Ssenkubuge-Abbey-CV.html';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
    } catch (error) {
      console.error('Error downloading CV:', error);
      alert('There was an error downloading the CV. Please try again.');
    }
  };

  const handleCancel = () => {
    setShowConfirm(false);
  };

  return (
    <section className="w-full bg-[#1D3B2B] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 relative" id="about">

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-sm w-full mx-4 shadow-2xl animate-fade-in">
            <div className="text-center mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#EFA83C]/20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EFA83C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1F3B2C] mb-2">Download CV?</h3>
              <p className="text-gray-500 text-xs sm:text-sm">Are you sure you want to download my CV?</p>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={handleCancel}
                className="flex-1 px-4 py-2.5 sm:py-3 rounded-xl border-2 border-[#E5E3DA] text-gray-600 font-semibold text-xs sm:text-sm hover:border-[#1F3B2C] hover:text-[#1F3B2C] transition"
              >
                No, Cancel
              </button>
              <button 
                onClick={handleConfirm}
                className="flex-1 px-4 py-2.5 sm:py-3 rounded-xl bg-[#1F3B2C] text-white font-semibold text-xs sm:text-sm hover:bg-[#16291D] transition"
              >
                Yes, Download
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">

        {/* Left Side - Image with Yellow Circle and Floating Tags */}
        <div className="flex justify-center">
          <div className="relative w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px] flex items-center justify-center">

            {/* Yellow Background Circle */}
            <div className="absolute w-[240px] sm:w-[280px] md:w-[330px] lg:w-[360px] h-[240px] sm:h-[280px] md:h-[330px] lg:h-[360px] rounded-full bg-[#F2A51A]" />

            {/* Person Image */}
            <div className="absolute w-[240px] sm:w-[280px] md:w-[330px] lg:w-[360px] h-[240px] sm:h-[280px] md:h-[330px] lg:h-[360px] rounded-full overflow-hidden z-10">
              <img
                src={abbeyImage}
                alt="Ssenkubuge Abbey"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Floating Tags - CLUSTERED AT BOTTOM */}
            <div className="absolute bottom-[2%] sm:bottom-[3%] md:bottom-[5%] z-20 flex flex-wrap justify-center gap-x-1 gap-y-0.5 sm:gap-x-1.5 sm:gap-y-1 max-w-[200px] sm:max-w-[260px] md:max-w-[320px] px-2 sm:px-4">
              {tags.map((tag, index) => (
                <span 
                  key={index}
                  className={`px-1.5 sm:px-2.5 md:px-3.5 py-0.5 sm:py-1 md:py-1.5 rounded-full text-[7px] sm:text-[9px] md:text-[11px] font-semibold tracking-wide border border-white/20 shadow-md whitespace-nowrap ${tag.bg} text-white ${tag.rotation}`}
                >
                  {tag.text}
                </span>
              ))}
            </div>

          </div>
        </div>

        {/* Right Side - Content */}
        <div className="text-white text-center md:text-left">
          <span className="text-[#F2A51A] font-medium text-xs sm:text-sm tracking-wider">− About Me</span>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-4 sm:mb-6">
            Who is <span className="text-[#F2A51A] italic font-serif">Abbey Ssenkubuge</span>?
          </h3>

          <p className="text-[#A8B5AD] leading-relaxed text-sm sm:text-base mb-6 sm:mb-10">
            A software developer and IT specialist based in Mbarara, Uganda, focused on building
            useful web platforms, Android apps, and digital systems that solve real problems for
            real people.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 md:gap-8 lg:gap-14 mb-6 sm:mb-10">
            <div>
              <strong className="text-2xl sm:text-3xl md:text-4xl text-[#F2A51A] block font-bold">1+</strong>
              <span className="text-xs sm:text-sm text-[#A8B5AD]">Years Experience</span>
            </div>
            <div>
              <strong className="text-2xl sm:text-3xl md:text-4xl text-[#F2A51A] block font-bold">10+</strong>
              <span className="text-xs sm:text-sm text-[#A8B5AD]">Projects Completed</span>
            </div>
            <div>
              <strong className="text-2xl sm:text-3xl md:text-4xl text-[#F2A51A] block font-bold">5+</strong>
              <span className="text-xs sm:text-sm text-[#A8B5AD]">Industries Covered</span>
            </div>
          </div>

          {/* Button + Signature Row */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-5">
            <button 
              onClick={handleDownloadClick}
              className="inline-flex items-center rounded-full overflow-hidden bg-[#2A4A3A] border border-[#F2A51A]/40 hover:border-[#F2A51A]/70 transition cursor-pointer"
            >
              <span className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 text-white/90 text-xs sm:text-sm font-medium">
                Download CV
              </span>
              <span className="bg-[#F2A51A] px-2 py-2 flex items-center justify-center">
                <span className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-white flex items-center justify-center">
                  <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#1D3B2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </span>
            </button>

            {/* Signature */}
            <span className="text-[#F2A51A] text-base sm:text-lg md:text-xl tracking-wide" style={{ fontFamily: "'Dancing Script', 'Great Vibes', 'Brush Script MT', cursive" }}>
              Abbey Ssenkubuge
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}