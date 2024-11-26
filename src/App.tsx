import React from 'react';
import { ConnectionForm } from './components/ConnectionForm';
import { 
  Zap, 
  Server, 
  User, 
  KeyRound,
  Building2,
  Database,
  Warehouse,
  FileJson
} from 'lucide-react';

const ssmsFields = [
  { label: 'Username', name: 'username', icon: <User className="w-4 h-4" /> },
  { label: 'Password', name: 'password', type: 'password', icon: <KeyRound className="w-4 h-4" /> },
  { label: 'Server Name', name: 'serverName', icon: <Server className="w-4 h-4" /> },
];

const snowflakeFields = [
  { label: 'Username', name: 'username', icon: <User className="w-4 h-4" /> },
  { label: 'Password', name: 'password', type: 'password', icon: <KeyRound className="w-4 h-4" /> },
  { label: 'Account', name: 'account', icon: <Building2 className="w-4 h-4" /> },
  { label: 'Database', name: 'database', icon: <Database className="w-4 h-4" /> },
  { label: 'Warehouse', name: 'warehouse', icon: <Warehouse className="w-4 h-4" /> },
  { label: 'Schema', name: 'schema', icon: <FileJson className="w-4 h-4" /> },
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col">
      <div className="container mx-auto px-8 py-12 flex-1 flex flex-col">
        <header className="mb-12 text-center">
          <div className="inline-flex items-center gap-2">
            <Zap className="w-8 h-8 text-purple-600" />
            <h1 className="text-3xl font-bold">DataZapp</h1>
          </div>
        </header>

        <div className="flex-1 flex items-center">
          <div className="w-full grid md:grid-cols-2 gap-12 items-center justify-center max-w-6xl mx-auto">
            <div className="bg-white/30 backdrop-blur-lg rounded-2xl shadow-xl border border-white/50 h-full flex items-stretch">
              <ConnectionForm type="SSMS" fields={ssmsFields} layout="vertical" />
            </div>

            <div className="bg-white/30 backdrop-blur-lg rounded-2xl shadow-xl border border-white/50 h-full flex items-stretch">
              <ConnectionForm type="SNOWFLAKE" fields={snowflakeFields} layout="grid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;