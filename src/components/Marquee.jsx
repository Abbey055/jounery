// src/components/Marquee.jsx
export default function Marquee() {
  const items = ['App Design', 'Website Design', 'Dashboard', 'Wireframe', 'UI/UX Design', 'Mobile App', 'Prototype'];

  return (
    <div className="relative w-full overflow-hidden" style={{ backgroundColor: '#1F3B2C' }}>
      {/* Curved top edge */}
      <div className="absolute -top-3 left-0 right-0 h-6" style={{ backgroundColor: '#1F3B2C', borderRadius: '50% 50% 0 0 / 100% 100% 0 0' }}></div>

      <div className="flex animate-marquee whitespace-nowrap py-3 pt-4">
        {[...items, ...items, ...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center mx-5">
            <span className="text-white font-medium text-sm">{item}</span>
            <span className="ml-5 text-[#EFA83C] text-sm">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}