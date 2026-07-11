// src/components/Services.jsx
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: '/images/web.jpg',
      title: 'Web Development',
      description: 'I build fast, responsive websites and web applications using modern technologies like React, JavaScript, and Tailwind CSS. From simple landing pages to complex web platforms, I deliver solutions that are both functional and mobile-friendly.',
      color: '#4D9DE0',
      bgColor: '#E3F0FA'
    },
    {
      icon: '/images/app.jpg',
      title: 'Mobile App Development',
      description: 'I create native Android applications using Java and Firebase. My apps are built with clean user interfaces, smooth performance, and practical features that solve real problems for users.',
      color: '#FF6B6B',
      bgColor: '#FFE8E8'
    },
    {
      icon: '/images/IT.jpg',
      title: 'IT Systems & Support',
      description: 'I design and implement practical IT systems, dashboards, and infrastructure that keep organizations running smoothly. From database planning to system architecture, I deliver reliable and scalable solutions.',
      color: '#FFB84D',
      bgColor: '#FFF3E0'
    }
  ];

  return (
    <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 sm:mb-10 md:mb-16">
          <div>
            <span className="text-[#EFA83C] font-semibold text-[0.7rem] sm:text-sm">− Services</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E1E1E] mt-0.5 sm:mt-1">
              <span className="text-[#EFA83C] italic font-serif">Services</span> I Provide
            </h2>
          </div>

          <Link 
            to="/services" 
            className="inline-flex items-center bg-[#1F3B2C] text-white pl-2.5 sm:pl-4 md:pl-5 pr-0.5 sm:pr-1 py-1 rounded-full font-semibold text-[10px] sm:text-xs md:text-sm hover:bg-[#16291D] transition shrink-0"
          >
            <span className="mr-1 sm:mr-1.5 md:mr-2 whitespace-nowrap">View All Services</span>
            <span className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-[#EFA83C] flex items-center justify-center">
              <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div 
              className="bg-[#F8F9F4] p-6 sm:p-8 rounded-2xl hover:shadow-lg transition group" 
              key={index}
            >
              {/* Circular Icon Container - No Border */}
              <div 
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition mx-auto shadow-lg"
                style={{ backgroundColor: service.bgColor }}
              >
                <img 
                  src={service.icon} 
                  alt={service.title}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-cover rounded-full"
                />
              </div>

              <h4 className="text-base sm:text-lg font-semibold text-[#1E1E1E] mb-2 sm:mb-3 text-center">{service.title}</h4>

              <p className="text-[#9B9B92] text-[0.7rem] sm:text-sm leading-relaxed mb-4 sm:mb-6 text-center">{service.description}</p>

              <div className="text-center">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-[#1F3B2C] font-semibold text-[0.7rem] sm:text-sm hover:gap-3 transition"
                >
                  Learn more 
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#EFA83C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}