const AceternityButton = (
  {
    text,
    icon,
    className,
    classNameText,
    reverse
  }: {
    text: string;
    icon: React.ReactNode;
    className?: string;
    classNameText?: string;
    reverse?: boolean;
  }) => {
  return (
    <button className={`bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-lg p-px text-xs font-semibold leading-6  text-white inline-block ${className || ''}`}>
      <span className="absolute inset-0 overflow-hidden rounded-lg">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <div className={`relative flex ${reverse ? "flex-row-reverse gap-3" : ""} justify-between space-x-2 items-center z-10 rounded-lg bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ${classNameText || ''}`}>
        <span>
          {text}
        </span>
        <div>
          {icon}
        </div>
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-blue-700 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
    </button >
  );
};

export default AceternityButton;