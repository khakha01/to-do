import { Bell, Menu, Plus, Search } from "lucide-react";
import { TodoItem } from "../../../components/to-do/to-do-item";
import { useTodo } from "../../../feature/to-do/hooks";
import { useState } from "react";
import { StatusCard } from "../../../components/to-do/status-card";
import CreateTodoModal from "../../../components/to-do/create-todo-modal";

export default function ToDoPage() {
  const { todos, loading, addTodo, updateTodo, deleteTodo } = useTodo();
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-800 overflow-hidden">
      {/* === MAIN CONTENT AREA === */}
      <main className="flex-1 flex flex-col h-full relative min-w-0">
        <aside
          className="w-64 
        bg-white border-r border-slate-200 transition-all duration-300 ease-in-out flex flex-col flex-shrink-0"
        >
          
        </aside>
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 flex-shrink-0 z-10">
          <div className="flex items-center gap-4">
            <button className="p-2 bg-white border-slate-400 hover:bg-slate-100 rounded-lg text-slate-500">
              <Menu size={20} />
            </button>
            <h1 className="text-xl font-bold text-slate-800 hidden sm:block">
              {/* {activeTab} */}
            </h1>
          </div>

          <div className="flex items-center gap-3 w-full max-w-md mx-4">
           
          </div>
          <button className="p-2 relative bg-white border-slate-400 hover:bg-slate-100 rounded-lg text-slate-500">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-10">
          <div className="max-w-4xl mx-auto">
            {/* Greeting & Stats */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-1 ">
                Tasks - My Day ☀️
              </h2>
              <p className="text-slate-500 mb-6">
                Here's what's on your plate today.
              </p>

               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <StatusCard label="Total Tasks" count={12} color="text-slate-700" />
                    <StatusCard label="Pending" count={4} color="text-orange-500" />
                    <StatusCard label="Completed" count={8} color="text-emerald-500" />
                    <StatusCard label="Overdue" count={2} color="text-red-500" />            
                </div> 
            </div>

            {/* Search Bar */}
            <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-200 mb-4 flex gap-3 items-center focus-within:ring-2 focus-within:ring-indigo-100 focus-within:border-indigo-400 transition-all">
              <Search size={20} className="text-slate-400 ml-2" />
              <input
                type="text"
                placeholder="Tìm kiếm công việc..."
                className="flex-1 outline-none text-base bg-transparent placeholder:text-slate-400"
              
              />
            </div>

            {/* Add Button */}
            <div className="mb-6 flex justify-end">
              <button 
              onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg"
              >
                <Plus size={20} />
                Add New Task
              </button>
            </div>

            {/* Task List */}
            <div className="space-y-1">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-2">
                {/* Tasks - {activeTab} */}
              </p>
              {!loading &&
                todos.map((todo) => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={() =>
                      updateTodo(todo.id, { 
                        status: todo.status === "Completed" ? "Pending" : "Completed"
                       })
                    }
                    onDelete={() => deleteTodo(todo.id)}
                  />
                ))}
            </div>
          </div>
        </div>
      </main>
      <CreateTodoModal
      isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={addTodo}
      />
    </div>
  );
}
