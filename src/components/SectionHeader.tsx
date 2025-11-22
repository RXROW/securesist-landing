import { Sparkles } from 'lucide-react';

interface SectionHeaderProps {
  badgeText: string;
  title: string;
  titleHighlight?: string;
  description: string;
}

export const SectionHeader = ({ 
  badgeText, 
  title, 
  titleHighlight, 
  description 
}: SectionHeaderProps) => {
  return (
    <div className="text-center mb-16 space-y-4">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full text-sm border border-slate-200 font-semibold text-blue-800 mb-4">
        <Sparkles className="h-4 w-4" />
        {badgeText}
      </div>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
        {title} {titleHighlight && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            {titleHighlight}
          </span>
        )}
      </h2>
      <p className="mt-4 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
};

