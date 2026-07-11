// src/components/Skills.jsx
export default function Skills() {
  const favoriteTools = [
    { name: 'React', icon: 'fa-brands fa-react', color: '#61DAFB' },
    { name: 'Java', icon: 'fa-brands fa-java', color: '#f89820' },
    { name: 'Python', icon: 'fa-brands fa-python', color: '#3776AB' },
    { name: 'JavaScript', icon: 'fa-brands fa-js', color: '#F7DF1E' },
    { name: 'Figma', icon: 'fa-brands fa-figma', color: '#A259FF' },
    { name: 'Git', icon: 'fa-brands fa-git-alt', color: '#F05032' },
  ];

  return (
    <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#FAF9F4]" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="text-[#EFA83C] font-semibold text-[0.7rem] sm:text-sm">− My Favorite Tools</span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E1E1E] font-serif italic mt-1 sm:mt-2">
            <span className="text-[#EFA83C]">Exploring the Tools</span><br />Behind My Builds
          </h3>
        </div>

        <div className="flex justify-center gap-6 sm:gap-8 flex-wrap">
          {favoriteTools.map((tool, index) => (
            <div key={index} className="flex flex-col items-center gap-2 sm:gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#F4F3EE] rounded-full flex items-center justify-center shadow-sm hover:bg-[#FBE8C6] hover:scale-110 transition" style={{ color: tool.color }}>
                <i className={`${tool.icon} text-2xl sm:text-4xl`}></i>
              </div>
              <span className="font-semibold text-[#1E1E1E] text-sm sm:text-base">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}