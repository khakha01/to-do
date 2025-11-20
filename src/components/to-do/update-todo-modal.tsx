import { AlertCircle, X } from "lucide-react";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { Input } from "../ui/input";
import type { Todo } from "@/feature/to-do/api/todo.api.interface";
import { useEffect, useState } from "react";
import { useTodo } from "@/feature/to-do/hooks";

interface UpdateTodoFormData {
  title: string;
  description?: string;
  important: boolean;
}

interface UpdateTodoModalProps {
  isOpen: boolean;
  onClose: () => void;
  todoId: number;
}

export default function UpdateTodoModal({
  isOpen,
  onClose,
  todoId,
}: UpdateTodoModalProps) {
  const { getTodoById, updateTodo } = useTodo();
  const [todo, setTodo] = useState<Todo | null>(null);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<UpdateTodoFormData>({
    defaultValues: { title: "", description: "", important: false },
  });

  useEffect(() => {
    if (!todoId || !isOpen) return;

    const loadTodo = async () => {
      const data = await getTodoById(todoId);
      
      if (data) {
        setTodo(data);
        reset({
          title: data.title,
          description: data.description || "",
          important: data.important || false,
        });
      }
    };

    loadTodo();
  }, [todoId, isOpen, reset]);

  if (!isOpen) return null;

  const onFormSubmit: SubmitHandler<UpdateTodoFormData> = (data) => {
    if (!todo) return;
    updateTodo(todo.id, data);
    reset();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <h3 className="font-bold text-lg text-slate-800 uppercase">
            Chỉnh sửa công việc
          </h3>
          <button
            onClick={onClose}
            className="p-1 bg-white border-slate-400 text-slate-400 hover:bg-slate-200 rounded-full"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className="p-6 space-y-4">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700">
                Tiêu đề <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                {...register("title", {
                  required: "Tiêu đề không được để trống",
                })}
                className={`w-full px-3 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 ${
                  errors.title ? "border-red-500" : "border-slate-300"
                }`}
                placeholder="Ví dụ: Đi chợ..."
                autoFocus
              />
              {errors.title && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.title.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700">
                Mô tả
              </label>
              <textarea
                {...register("description")}
                rows={3}
                className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 resize-none"
                placeholder="Chi tiết công việc..."
              />
            </div>

            <Controller
              name="important"
              control={control}
              render={({ field }) => (
                <label className="flex items-center gap-3 cursor-pointer pt-2">
                  <div
                    className={`w-5 h-5 rounded border flex items-center justify-center ${
                      field.value
                        ? "bg-orange-500 border-orange-500"
                        : "border-slate-300 bg-white"
                    }`}
                  >
                    {field.value && (
                      <AlertCircle size={12} className="text-white" />
                    )}
                    <input
                      type="checkbox"
                      className="hidden"
                      checked={field.value ?? false}
                      onChange={(e) => field.onChange(e.target.checked)}
                      onBlur={field.onBlur}
                      name={field.name}
                      ref={field.ref}
                    />
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      field.value ? "text-orange-600" : "text-slate-600"
                    }`}
                  >
                    Đánh dấu quan trọng
                  </span>
                </label>
              )}
            />
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-slate-100 flex justify-end gap-3 bg-slate-50">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-slate-600 bg-white border-slate-400 rounded-lg"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg disabled:opacity-50"
            >
              Cập nhật
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
