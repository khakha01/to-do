

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
    <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col items-start min-w-[120px]">
      <span className={`text-2xl font-bold ${color}`}>{count}</span>
      <span className="text-slate-500 text-xs font-medium uppercase tracking-wider mt-1">
        {label}
      </span>
    </div>
  );
}
