import {
  Calendar,
  CheckCircle2Icon,
  Circle,
  SquarePen,
  Trash2,
} from "lucide-react";
import type { Todo } from "../../feature/to-do/api/todo.api.interface";
import { useState } from "react";
import UpdateTodoModal from "./update-todo-modal";
import ConfirmDeleteModal from "./confirm-delete-modal";

export function TodoItem({
  todo,
  onToggle,
  onDelete,
}: {
  todo: Todo;
  onToggle: () => void;
  onDelete: () => void;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const isComplete = todo.status === "Completed";

  return (
    <div className="group bg-white hover:bg-indigo-50/30 p-4 rounded-xl border border-slate-100 hover:border-indigo-200 transition-all flex items-center gap-4 shadow-sm cursor-pointer">
      <button
        onClick={onToggle}
        className={`flex-shrink-0 ${
          isComplete
            ? "text-emerald-500"
            : "text-slate-300 hover:text-indigo-500"
        }`}
      >
        {isComplete ? <CheckCircle2Icon size={24} /> : <Circle size={24} />}
      </button>

      <div className="flex-1 min-w-0">
        <p
          className={`text-base truncate ${
            isComplete
              ? "text-slate-400 line-through"
              : "text-slate-700 font-medium"
          }`}
        >
          {todo.title}
        </p>
        <div className="flex items-center gap-2 mt-1">
          {todo.important && (
            <span className="text-[10px] px-1.5 py-0.5 bg-red-50 text-red-600 rounded border border-red-100 font-bold uppercase">
              Important
            </span>
          )}
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <Calendar size={12} /> {todo.created_at}
          </span>
        </div>
      </div>

      <div className="opacity-0 group-hover:opacity-100 flex items-center gap-2 transition-opacity">
        <button
          onClick={() => {
            setIsModalOpen(true);
          }}
          className="p-2 bg-white rounded-2xl"
        >
          <SquarePen size={18} />
        </button>
        <button
          onClick={() => setIsConfirmOpen(true)}
          className="p-2 bg-white text-red-600 hover:text-red-700 rounded-2xl"
        >
          <Trash2 size={18} />
        </button>
      </div>
      <UpdateTodoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        todoId={todo.id}
      />
      <ConfirmDeleteModal
        isOpen={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        onConfirm={() => {
          onDelete();
          setIsConfirmOpen(false);
        }}
      />
    </div>
  );
}
