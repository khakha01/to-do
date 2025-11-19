import React, { useState } from 'react';
import { 
  Layout, Calendar, Star, CheckCircle2, Plus, 
  Search, Bell, Menu, MoreVertical, Trash2, Circle 
} from 'lucide-react';

// Giả lập dữ liệu từ Feature Hook (trong thực tế bạn sẽ lấy từ useTodos)
const MOCK_TODOS = [
  { id: '1', text: 'Họp team Review Sprint', completed: false, important: true, date: 'Today' },
  { id: '2', text: 'Gửi email báo cáo khách hàng', completed: true, important: false, date: 'Yesterday' },
  { id: '3', text: 'Design lại trang Login', completed: false, important: false, date: 'Tomorrow' },
  { id: '4', text: 'Fix bug hiển thị trên Mobile', completed: false, important: true, date: 'Today' },
];

export default function ToDoPage() {
  const [activeTab, setActiveTab] = useState('My Day');
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  // UI Components nhỏ (Atomic Design)
  const StatCard = ({ label, count, color }: { label: string, count: number, color: string }) => (
    <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col items-start min-w-[120px]">
      <span className={`text-2xl font-bold ${color}`}>{count}</span>
      <span className="text-slate-500 text-xs font-medium uppercase tracking-wider mt-1">{label}</span>
    </div>
  );

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-800 overflow-hidden">
      
      {/* === LEFT SIDEBAR === */}
      <aside 
        className={`${isSidebarOpen ? 'w-64' : 'w-0'} 
        bg-white border-r border-slate-200 transition-all duration-300 ease-in-out flex flex-col flex-shrink-0`}
      >
        <div className="p-6 flex items-center gap-2 text-indigo-600 font-bold text-xl border-b border-slate-100">
          <CheckCircle2 className="w-7 h-7" />
          <span className="tracking-tight">TaskMaster</span>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          <SidebarItem 
            icon={<Calendar size={20} />} 
            label="My Day" 
            active={activeTab === 'My Day'} 
            onClick={() => setActiveTab('My Day')} 
          />
          <SidebarItem 
            icon={<Star size={20} />} 
            label="Important" 
            active={activeTab === 'Important'} 
            onClick={() => setActiveTab('Important')} 
          />
          <SidebarItem 
            icon={<Layout size={20} />} 
            label="All Tasks" 
            active={activeTab === 'All Tasks'} 
            onClick={() => setActiveTab('All Tasks')} 
          />
          
          <div className="pt-6 pb-2">
            <p className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Projects</p>
          </div>
          <SidebarItem label="Freelance" color="bg-pink-500" onClick={() => {}} />
          <SidebarItem label="Learning React" color="bg-cyan-500" onClick={() => {}} />
          <SidebarItem label="Home Stuff" color="bg-amber-500" onClick={() => {}} />
        </nav>

        <div className="p-4 border-t border-slate-100">
          <div className="flex items-center gap-3 px-3 py-2 hover:bg-slate-50 rounded-lg cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs">
              US
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">User Name</p>
              <p className="text-xs text-slate-400 truncate">user@example.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* === MAIN CONTENT AREA === */}
      <main className="flex-1 flex flex-col h-full relative min-w-0">
        
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 flex-shrink-0 z-10">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-slate-100 rounded-lg text-slate-500"
            >
              <Menu size={20} />
            </button>
            <h1 className="text-xl font-bold text-slate-800 hidden sm:block">{activeTab}</h1>
          </div>

          <div className="flex items-center gap-3 w-full max-w-md mx-4">
            <div className="relative w-full group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search tasks..." 
                className="w-full bg-slate-100 border-transparent focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 rounded-lg py-2 pl-10 pr-4 text-sm transition-all outline-none border"
              />
            </div>
          </div>

          <button className="p-2 relative hover:bg-slate-100 rounded-lg text-slate-500">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-10">
          <div className="max-w-4xl mx-auto">
            
            {/* Greeting & Stats */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-1">Good Morning, User! ☀️</h2>
              <p className="text-slate-500 mb-6">Here's what's on your plate today.</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard count={12} label="Total Tasks" color="text-slate-700" />
                <StatCard count={4} label="Pending" color="text-orange-500" />
                <StatCard count={8} label="Completed" color="text-emerald-500" />
                <StatCard count={2} label="Overdue" color="text-red-500" />
              </div>
            </div>

            {/* Add Task Bar */}
            <div className="bg-white p-2 rounded-xl shadow-sm border border-slate-200 mb-8 flex gap-2 focus-within:ring-2 focus-within:ring-indigo-100 focus-within:border-indigo-400 transition-all">
              <div className="p-3 text-slate-400">
                <Plus size={24} />
              </div>
              <input 
                type="text" 
                placeholder="Add a new task..." 
                className="flex-1 outline-none text-lg bg-transparent placeholder:text-slate-400"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Add
              </button>
            </div>

            {/* Task List */}
            <div className="space-y-1">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-2">Tasks - {activeTab}</p>
              {MOCK_TODOS.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
              ))}
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

// --- Sub Components for Layout Cleanliness ---

const SidebarItem = ({ icon, label, active, color, onClick }: any) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors mb-1
      ${active 
        ? 'bg-indigo-50 text-indigo-700' 
        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
      }`}
  >
    {icon ? icon : <span className={`w-2.5 h-2.5 rounded-full ${color || 'bg-slate-300'}`} />}
    {label}
  </button>
);

const TodoItem = ({ todo }: any) => (
  <div className="group bg-white hover:bg-indigo-50/30 p-4 rounded-xl border border-slate-100 hover:border-indigo-200 transition-all flex items-center gap-4 shadow-sm mb-3 cursor-pointer">
    <button className={`flex-shrink-0 ${todo.completed ? 'text-emerald-500' : 'text-slate-300 hover:text-indigo-500'}`}>
      {todo.completed ? <CheckCircle2 size={24} /> : <Circle size={24} />}
    </button>
    
    <div className="flex-1 min-w-0">
      <p className={`text-base truncate ${todo.completed ? 'text-slate-400 line-through' : 'text-slate-700 font-medium'}`}>
        {todo.text}
      </p>
      <div className="flex items-center gap-2 mt-1">
        {todo.important && (
          <span className="text-[10px] px-1.5 py-0.5 bg-red-50 text-red-600 rounded border border-red-100 font-bold uppercase">
            Important
          </span>
        )}
        <span className="text-xs text-slate-400 flex items-center gap-1">
          <Calendar size={12} /> {todo.date}
        </span>
      </div>
    </div>

    <div className="opacity-0 group-hover:opacity-100 flex items-center gap-2 transition-opacity">
      <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg">
        <Star size={18} className={todo.important ? 'fill-orange-400 text-orange-400' : ''} />
      </button>
      <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg">
        <Trash2 size={18} />
      </button>
    </div>
  </div>
);