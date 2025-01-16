import React, { useState } from 'react';
import { Search, UserPlus, Filter, MessageSquare, RefreshCcw, Users, TrendingUp, TrendingDown, LayoutDashboard, FileText, User, MoreVertical } from 'lucide-react';
import { AddContactModal } from './components/AddContactModal';
import { ActionDropdown } from './components/ActionDropdown';
import { ImportContactsModal } from './components/ImportContactsModal';

interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  company: string;
  phone: string;
  email: string;
  whatsapp: string;
}

const sampleContacts: Contact[] = Array(7).fill(null).map(() => ({
  id: Math.random().toString(36).substr(2, 9),
  firstName: 'Collins',
  lastName: 'Ubah',
  company: 'Silco Limited',
  phone: '+2347044284237',
  email: 'ubahtoka@gmail.com',
  whatsapp: 'https://wa.me/07044284237'
}));

function App() {
  const [contacts, setContacts] = useState<Contact[]>(sampleContacts);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [actionDropdown, setActionDropdown] = useState<{
    isOpen: boolean;
    position: { top: number; left: number };
    contactId: string | null;
  }>({
    isOpen: false,
    position: { top: 0, left: 0 },
    contactId: null,
  });

  const handleAddContact = (data: any) => {
    const newContact: Contact = {
      id: Math.random().toString(36).substr(2, 9),
      firstName: data.firstName,
      lastName: data.lastName,
      company: data.company,
      phone: data.phone,
      email: data.email,
      whatsapp: `https://wa.me/${data.phone.replace(/[^0-9]/g, '')}`
    };
    setContacts([...contacts, newContact]);
  };

  const handleImportContacts = (importedContacts: any[]) => {
    const newContacts = importedContacts.map(contact => ({
      id: Math.random().toString(36).substr(2, 9),
      firstName: contact.name.split(' ')[0],
      lastName: contact.name.split(' ').slice(1).join(' '),
      company: contact.service || 'N/A',
      phone: contact.mobileNumber,
      email: contact.email,
      whatsapp: `https://wa.me/${contact.mobileNumber.replace(/[^0-9]/g, '')}`
    }));
    setContacts([...contacts, ...newContacts]);
  };

  const handleActionClick = (e: React.MouseEvent, contactId: string) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    setActionDropdown({
      isOpen: true,
      position: {
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX - 150,
      },
      contactId,
    });
  };

  const handleSendMessage = () => {
    console.log('Send message to:', actionDropdown.contactId);
    setActionDropdown(prev => ({ ...prev, isOpen: false }));
  };

  const handleViewInfo = () => {
    console.log('View info for:', actionDropdown.contactId);
    setActionDropdown(prev => ({ ...prev, isOpen: false }));
  };

  const handleBlockContact = () => {
    console.log('Block contact:', actionDropdown.contactId);
    setActionDropdown(prev => ({ ...prev, isOpen: false }));
  };

  const handleDeleteContact = () => {
    if (actionDropdown.contactId) {
      setContacts(contacts.filter(contact => contact.id !== actionDropdown.contactId));
    }
    setActionDropdown(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Side Navigation */}
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <FileText className="text-blue-600" size={24} />
            <span className="text-xl font-semibold">docuhelp.ai</span>
          </div>

          <div className="space-y-6">
            <div>
              <div className="text-xs font-semibold text-gray-400 uppercase mb-4">WORKSPACE MANAGEMENT</div>
              <div className="space-y-1">
                <button className="flex items-center gap-2 w-full px-3 py-2 text-blue-600 bg-blue-50 rounded-lg">
                  <LayoutDashboard size={20} />
                  <span>Dashboard</span>
                </button>
                <button className="flex items-center gap-2 w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                  <FileText size={20} />
                  <span>Generated Document</span>
                </button>
                <button className="flex items-center gap-2 w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                  <Users size={20} />
                  <span>Customer</span>
                </button>
                <button className="flex items-center gap-2 w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                  <User size={20} />
                  <span>User</span>
                </button>
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold text-gray-400 uppercase mb-4">AI ASSISTANT</div>
              <div className="space-y-1">
                <button className="flex items-center gap-2 w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                  <LayoutDashboard size={20} />
                  <span>Dashboard</span>
                </button>
                <button className="flex items-center gap-2 w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                  <FileText size={20} />
                  <span>Generated Document</span>
                </button>
                <button className="flex items-center gap-2 w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                  <User size={20} />
                  <span>User</span>
                </button>
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold text-gray-400 uppercase mb-4">ACCOUNT & SETTINGS</div>
              <div className="space-y-1">
                <button className="flex items-center gap-2 w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                  <LayoutDashboard size={20} />
                  <span>Dashboard</span>
                </button>
                <button className="flex items-center gap-2 w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                  <FileText size={20} />
                  <span>Generated Document</span>
                </button>
                <button className="flex items-center gap-2 w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                  <User size={20} />
                  <span>User</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">CRM Dashboard</h1>
              <p className="text-gray-600 mt-1">
                Manage contacts and generate documents with Docuhelp.ai
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsAddModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                <UserPlus size={20} />
                Add Contacts Manually
              </button>
              <button 
                onClick={() => setIsImportModalOpen(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Import Contacts
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-yellow-300 p-6 rounded-xl">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-gray-800">Total Revenue Generate</h3>
                <RefreshCcw size={20} className="text-gray-600" />
              </div>
              <div className="text-3xl font-bold">$12,900</div>
              <div className="text-sm text-gray-700 mt-2 flex items-center gap-1">
                <span>+5%</span>
                <span>Than last month</span>
                <TrendingUp size={16} className="text-green-600" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-gray-800">Total Customers</h3>
                <Users size={20} className="text-gray-600" />
              </div>
              <div className="text-3xl font-bold">1900</div>
              <div className="text-sm text-gray-700 mt-2 flex items-center gap-1">
                <span>+2%</span>
                <span>Than last month</span>
                <TrendingUp size={16} className="text-green-600" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-gray-800">Total Engagements</h3>
                <MessageSquare size={20} className="text-gray-600" />
              </div>
              <div className="text-3xl font-bold">22,134</div>
              <div className="text-sm text-gray-700 mt-2 flex items-center gap-1">
                <span>-10%</span>
                <span>Than last month</span>
                <TrendingDown size={16} className="text-red-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <span className="text-gray-700">{contacts.length} contacts</span>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search for name, email, phone number"
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-[300px]"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                  <MessageSquare size={20} />
                  Send message
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                  <Filter size={20} />
                  Filter
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="px-4 py-3 text-left">
                      <input type="checkbox" className="rounded" />
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">First name</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Last name</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Company</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Phone number</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Email</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">WhatsApp</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="px-4 py-3">
                        <input type="checkbox" className="rounded" />
                      </td>
                      <td className="px-4 py-3">{contact.firstName}</td>
                      <td className="px-4 py-3">{contact.lastName}</td>
                      <td className="px-4 py-3">{contact.company}</td>
                      <td className="px-4 py-3">{contact.phone}</td>
                      <td className="px-4 py-3">{contact.email}</td>
                      <td className="px-4 py-3">
                        <a href={contact.whatsapp} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                          {contact.whatsapp}
                        </a>
                      </td>
                      <td className="px-4 py-3">
                        <button 
                          onClick={(e) => handleActionClick(e, contact.id)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <MoreVertical size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <AddContactModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddContact}
      />

      <ImportContactsModal
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
        onImport={handleImportContacts}
      />

      <ActionDropdown
        isOpen={actionDropdown.isOpen}
        onClose={() => setActionDropdown(prev => ({ ...prev, isOpen: false }))}
        position={actionDropdown.position}
        onSendMessage={handleSendMessage}
        onViewInfo={handleViewInfo}
        onBlock={handleBlockContact}
        onDelete={handleDeleteContact}
      />
    </div>
  );
}

export default App;