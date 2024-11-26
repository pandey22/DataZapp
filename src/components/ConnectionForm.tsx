import React from 'react';
import { Database } from 'lucide-react';

interface ConnectionFormProps {
  type: 'SSMS' | 'SNOWFLAKE';
  layout: 'vertical' | 'grid';
  fields: {
    label: string;
    name: string;
    type?: string;
    icon?: React.ReactNode;
  }[];
}

export function ConnectionForm({ type, fields, layout }: ConnectionFormProps) {
  const [isConnected, setIsConnected] = React.useState(false);

  const handleConnect = (e: React.FormEvent) => {
    e.preventDefault();
    setIsConnected(true);
  };

  return (
    <div className="w-full p-8">
      <div className="flex items-center justify-center mb-8">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          CONNECT TO {type}
          <Database className="w-6 h-6" />
        </h2>
      </div>

      <form onSubmit={handleConnect} className="space-y-6">
        <div className={`
          ${layout === 'grid' ? 'grid grid-cols-2' : 'flex flex-col'} 
          gap-4
        `}>
          {fields.map((field) => (
            <div key={field.name} className={`
              ${layout === 'vertical' ? 'w-full max-w-sm mx-auto' : 'col-span-1'}
            `}>
              <label className="block text-lg font-semibold mb-2 flex items-center gap-2 justify-center">
                {field.icon}
                {field.label}
              </label>
              <input
                type={field.type || 'text'}
                name={field.name}
                className="w-full px-4 py-2 rounded-lg border-2 border-purple-200 focus:border-purple-500 focus:outline-none bg-white/10 backdrop-blur-sm"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-12 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:opacity-90 transition-opacity"
          >
            CONNECT
          </button>
        </div>

        <div className="mt-6 text-center">
          <h3 className="text-xl font-bold mb-2">CONNECTION STATUS</h3>
          <p className={`text-lg ${isConnected ? 'text-emerald-500' : 'text-gray-500'}`}>
            {isConnected ? 'Connected' : 'Disconnected'}
          </p>
        </div>
      </form>
    </div>
  );
}