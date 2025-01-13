import React from 'react';
import { MessageSquare, User, XCircle } from 'lucide-react';

interface ActionMenuProps {
  isOpen: boolean;
  position: { x: number; y: number };
  onClose: () => void;
  onAction: (action: string) => void;
}

export function ActionMenu({ isOpen, position, onClose, onAction }: ActionMenuProps) {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0" onClick={onClose} />
      <div
        className="absolute bg-white rounded-lg shadow-lg py-1 w-48 z-50"
        style={{ top: position.y, left: position.x }}
      >
        <button
          onClick={() => onAction('message')}
          className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
        >
          <MessageSquare size={16} />
          Send message
        </button>
        <button
          onClick={() => onAction('info')}
          className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
        >
          <User size={16} />
          Customer information
        </button>
        <button
          onClick={() => onAction('block')}
          className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
        >
          <XCircle size={16} />
          Block contact
        </button>
        <button
          onClick={() => onAction('delete')}
          className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100 flex items-center gap-2"
        >
          <XCircle size={16} />
          Delete contact
        </button>
      </div>
    </>
  );
}