import React, { useState, useCallback } from 'react';
import { X, Upload, Loader2, FileText, Check } from 'lucide-react';

interface ImportContactsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImport: (contacts: any[]) => void;
}

type ImportStep = 'upload' | 'processing' | 'preview';

interface PreviewContact {
  _id: string;
  name: string;
  email: string;
  mobileNumber: string;
  service: string;
}

export function ImportContactsModal({ isOpen, onClose, onImport }: ImportContactsModalProps) {
  const [step, setStep] = useState<ImportStep>('upload');
  const [file, setFile] = useState<File | null>(null);
  const [previewData, setPreviewData] = useState<PreviewContact[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      handleFileSelect(droppedFile);
    }
  }, []);

  const handleFileSelect = async (selectedFile: File) => {
    setFile(selectedFile);
    setStep('processing');
    
    // Simulate file processing
    setTimeout(() => {
      // Mock preview data
      const mockPreviewData: PreviewContact[] = [
        {
          _id: '666318585b85c78ececdec7378',
          name: 'Dekolo Weyinmi',
          email: 'dekoloweyinmi@gmail.com',
          mobileNumber: '07060796132',
          service: 'Web Dev'
        },
        {
          _id: '66641263d1436f0108be72f2',
          name: 'Praise-Ezeani Ifeoma',
          email: 'sylkiartsandvocalvariety@gmail.com',
          mobileNumber: '08137989916',
          service: 'Voice Over'
        },
        {
          _id: '666412e6d1436f0108be72f3',
          name: 'Buhari Aishah oluwatomi',
          email: 'tomibuhari@gmail.com',
          mobileNumber: '08108166708',
          service: 'None'
        },
        {
          _id: '666415cae1676e6c93815703',
          name: 'Ikechukwu Victor',
          email: 'victor4rex@gmail.com',
          mobileNumber: '08102238228',
          service: 'Decoration'
        }
      ];
      
      setPreviewData(mockPreviewData);
      setStep('preview');
    }, 2000);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      handleFileSelect(selectedFile);
    }
  };

  const handleImport = () => {
    onImport(previewData);
    onClose();
    // Reset the state for next time
    setStep('upload');
    setFile(null);
    setPreviewData([]);
    setIsDragging(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold">Upload your file</h2>
            <p className="text-gray-600">Select a file containing your contacts to import.</p>
          </div>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-gray-600"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {step === 'upload' && (
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center ${
              isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="flex flex-col items-center gap-4">
              <Upload className="text-gray-400" size={48} />
              <div>
                <p className="text-gray-600 mb-2">Select your file or drag and drop it</p>
                <p className="text-gray-400 text-sm">.csv, .txt, or .xlsx</p>
              </div>
              <input
                type="file"
                id="file-upload"
                className="hidden"
                accept=".csv,.txt,.xlsx"
                onChange={handleFileInputChange}
              />
              <label
                htmlFor="file-upload"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
              >
                Select File
              </label>
            </div>
          </div>
        )}

        {step === 'processing' && (
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-3 text-gray-600">
              <Loader2 className="animate-spin" size={20} />
              <div>
                <p className="font-medium">Uploading your file</p>
                <p className="text-sm text-gray-500">{file?.name}</p>
              </div>
            </div>
          </div>
        )}

        {step === 'preview' && (
          <>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-3 text-green-700">
                <Check size={20} />
                <div>
                  <p className="font-medium">File successfully uploaded</p>
                  <p className="text-sm">{file?.name}</p>
                </div>
                <button 
                  onClick={() => setStep('upload')}
                  className="ml-auto text-sm text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4">Preview your file:</h3>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Name</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Email</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Mobile Number</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Service</th>
                    </tr>
                  </thead>
                  <tbody>
                    {previewData.map((contact) => (
                      <tr key={contact._id} className="border-b border-gray-100">
                        <td className="px-4 py-3">{contact.name}</td>
                        <td className="px-4 py-3">{contact.email}</td>
                        <td className="px-4 py-3">{contact.mobileNumber}</td>
                        <td className="px-4 py-3">{contact.service}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={handleImport}
                className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Import Contacts
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}