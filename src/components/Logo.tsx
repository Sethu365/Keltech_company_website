import { Zap } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-gradient-to-br from-primary-light to-primary rounded-lg flex items-center justify-center">
        <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
      </div>
      <span className="text-xl font-bold text-gray-900">Keltech</span>
    </div>
  );
}
