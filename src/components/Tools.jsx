// src/components/Tools.jsx
export default function Tools() {
  const tools = [
    { name: 'React', percentage: '98%', color: '#61DAFB', icon: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z' },
    { name: 'Android', percentage: '92%', color: '#3DDC84', icon: 'M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z' },
    { name: 'Figma', percentage: '90%', color: '#F24E1E', icon: 'M15.332 8.668a3.333 3.333 0 0 0 0-6.668H8.668a3.333 3.333 0 0 0 0 6.668 3.333 3.333 0 0 0 0 6.665 3.333 3.333 0 0 0 0 6.667 3.333 3.333 0 0 0 0-6.667h6.664a3.333 3.333 0 0 0 0-6.665zM12 2h3.332a3.333 3.333 0 0 1 0 6.668H12V2zm0 6.668H8.668a3.333 3.333 0 0 1 0-6.668H12v6.668zm0 3.332a3.333 3.333 0 1 1 0 6.665 3.333 3.333 0 0 1 0-6.665zm0 10a3.333 3.333 0 1 1 0 6.667 3.333 3.333 0 0 1 0-6.667z' },
    { name: 'VS Code', percentage: '85%', color: '#007ACC', icon: 'M17.583 2.063l-9.88 9.88L4.42 8.66 2.59 10.49l5.293 5.293L2 21.667h2.828l5.293-5.293 3.283 3.283 1.83-1.83-3.283-3.283 9.88-9.88V2.063zm0 4.243l-2.828 2.828-2.829-2.828 2.829-2.828 2.828 2.828z' },
    { name: 'Git', percentage: '90%', color: '#F05032', icon: 'M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.652 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.678-1.342-.396-2.009L7.611 3.527 4.747 6.391c-.603.605-.603 1.585 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l6.232-6.227c.605-.603.605-1.582 0-2.187z' },
    { name: 'Node.js', percentage: '95%', color: '#339933', icon: 'M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.45 1.7.45 1.38 0 2.17-.84 2.17-2.3V7.14c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .65-.67 1.3-1.77.75L4.45 15.1a.28.28 0 0 1-.14-.24V6.28c0-.1.05-.19.14-.24l7.44-4.3c.08-.05.18-.05.26 0l7.44 4.3c.09.05.14.14.14.24v8.58c0 .1-.05.19-.14.24l-7.44 4.3c-.08.04-.18.04-.26 0l-1.88-1.12c-.08-.05-.18-.05-.25.02-.35.23-.74.42-1.15.56-.13.04-.33.1.08.3l2.46 1.48c.24.14.51.22.78.22.27 0 .54-.08.78-.22l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.51-.2-.78-.2z' },
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12" id="tools">
      <div className="max-w-6xl mx-auto text-center">

        {/* Section Header - matching reference exactly */}
        <div className="mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 text-[#1F3B2C] font-medium text-sm mb-3">
            <span className="w-4 h-[2px] bg-[#1F3B2C]"></span>
            My Favorite Tools
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1]">
            <span 
              className="text-[#EFA83C] italic"
              style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
            >
              Exploring
            </span>{' '}
            <span className="text-[#1F3B2C]">the Tools</span>
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F3B2C] leading-[1.1] mt-1">
            Behind My Designs
          </h3>
        </div>

        {/* Tools Grid - matching reference: pill containers with icon, percentage, name */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10">
          {tools.map((tool, index) => (
            <div 
              key={index}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Pill-shaped container - matching reference exactly */}
              <div className="w-24 h-32 sm:w-28 sm:h-36 md:w-32 md:h-40 rounded-[2rem] bg-[#F5F5F0] flex flex-col items-center justify-center gap-2 group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                {/* Icon */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                  <svg 
                    className="w-5 h-5 sm:w-6 sm:h-6" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    style={{ color: tool.color }}
                  >
                    <path d={tool.icon} />
                  </svg>
                </div>
              </div>

              {/* Percentage - below the pill */}
              <span className="text-[#1F3B2C] font-bold text-base sm:text-lg mt-3">{tool.percentage}</span>

              {/* Tool Name - below percentage */}
              <span className="text-gray-400 text-xs sm:text-sm mt-1">{tool.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}