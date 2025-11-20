export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-cyan-950 to-teal-950 relative overflow-hidden">
      {/* Floating orbs animation - cực chất */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-20 right-20 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl animate-float delay-1000" />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-blue-600/25 rounded-full blur-3xl animate-float delay-2000" />
        <div className="absolute -bottom-40 right-0 w-[500px] h-[500px] bg-cyan-400/15 rounded-full blur-3xl animate-float-slow-reverse" />
      </div>

      <div className="relative z-10 text-center px-6">
        {/* Tiêu đề với hiệu ứng fade-up + gradient shimmer */}
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tight animate-fade-up">
          Welcome
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-teal-400 animate-shimmer">
            To Do App
          </span>
        </h1>

        {/* Mô tả fade-up chậm hơn */}
        <p className="mt-8 text-xl md:text-2xl text-cyan-100 font-light max-w-2xl mx-auto opacity-90 animate-fade-up animation-delay-300">
          Quản lý công việc một cách đơn giản, hiệu quả và đầy phong cách.
        </p>

        {/* Nút với hiệu ứng pulse + scale mạnh hơn */}
        <div className="mt-12 animate-fade-up animation-delay-600">
          <a
            href="/to-do"
            className="group relative inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-lg font-bold rounded-2xl shadow-2xl shadow-cyan-500/40 overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-cyan-400/60 hover:from-cyan-400 hover:to-teal-400"
          >
            {/* Ripple effect khi hover */}
            <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-150 transition-transform duration-700 rounded-full" />
            
            <span className="relative z-10">Bắt Đầu Ngay</span>
            <svg
              className="w-6 h-6 relative z-10 group-hover:translate-x-3 group-hover:-rotate-12 transition-all duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>

      {/* Footer nhẹ nhàng bay lên */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-300/60 text-sm font-medium animate-fade-up animation-delay-1000">
        © 2025 • Simple & Powerful • By Huynh Kha
      </div>
    </div>
  );
}