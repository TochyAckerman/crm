import React, { useRef, useEffect } from 'react';
import { MessageSquare, User, XCircle } from 'lucide-react';

interface ActionDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  position: { top: number; left: number };
  onSendMessage: () => void;
  onViewInfo: () => void;
  onBlock: () => void;
  onDelete: () => void;
}

export function ActionDropdown({
  isOpen,
  onClose,
  position,
  onSendMessage,
  onViewInfo,
  onBlock,
  onDelete
}: ActionDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute bg-white rounded-lg shadow-lg py-2 w-48 z-50"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
    >
      <button
        onClick={onSendMessage}
        className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
      >
        <MessageSquare size={16} />
        Send message
      </button>
      <button
        onClick={onViewInfo}
        className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
      >
        <User size={16} />
        Customer information
      </button>
      <button
        onClick={onBlock}
        className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
      >
        <XCircle size={16} />
        Block contact
      </button>
      <button
        onClick={onDelete}
        className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100 flex items-center gap-2"
      >
        <XCircle size={16} />
        Delete contact
      </button>
    </div>
  );
}