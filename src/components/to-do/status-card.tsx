

export function StatusCard({
  label,
  count,
  color,
}: {
  label: string;
  count: number;
  color: string;
}) {
  return (
   <div className="group relative overflow-hidden bg-white rounded-2xl border border-slate-200/80 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 transform hover:-translate-y-1.5">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-transparent to-transparent" />
      </div>

      <div className="relative p-6 flex flex-col items-start">
        <span className={`text-5xl font-black ${color} tracking-tight drop-shadow-sm`}>
          {count}
        </span>
        <span className="text-slate-600 text-sm font-semibold uppercase tracking-widest mt-3">
          {label}
        </span>
      </div>

      <div className={`absolute bottom-0 left-0 h-1.5 bg-gradient-to-r ${label === 'Total Tasks' ? 'from-slate-400 to-slate-600' : label === 'Pending' ? 'from-orange-400 to-orange-600' : 'from-emerald-400 to-emerald-600'} w-0 group-hover:w-full transition-all duration-500 ease-out`} />
    </div>
  );
}
