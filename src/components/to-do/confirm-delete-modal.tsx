import { X, Trash2 } from "lucide-react";

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function ConfirmDeleteModal({
  isOpen,
  onClose,
  onConfirm,
}: ConfirmDeleteModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm animate-in fade-in zoom-in-95">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold text-slate-800">Xác nhận xóa</h3>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-slate-200 text-slate-500"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 text-center space-y-3">
          <Trash2 size={32} className="mx-auto text-red-500" />
          <p className="text-slate-700">
            Bạn có chắc muốn xóa công việc này không?
          </p>
          <p className="text-sm text-slate-400">
            Thao tác này không thể hoàn tác.
          </p>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 p-4 border-t">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm bg-white border rounded-lg text-slate-600"
          >
            Hủy
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
}
