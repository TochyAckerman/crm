import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight, Share2, MoreVertical, Phone, Mail, Edit2 } from 'lucide-react';

function CustomerInfo() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center text-sm">
            <Link to="/" className="text-gray-400 hover:text-gray-600">CRM Dashboard</Link>
            <ChevronRight className="mx-2 text-gray-400" size={16} />
            <span className="text-gray-900">Customer information</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-start mb-6">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Share2 size={20} className="text-gray-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <MoreVertical size={20} className="text-gray-500" />
                </button>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <h2 className="text-2xl font-semibold text-gray-900">Abel Anderson</h2>
                <p className="text-gray-500 text-sm mt-1">Entrepreneur & Business owner</p>

                <div className="flex gap-4 mt-6">
                  <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200">
                    <Phone size={20} className="text-gray-600" />
                  </button>
                  <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200">
                    <Mail size={20} className="text-gray-600" />
                  </button>
                  <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200">
                    <Edit2 size={20} className="text-gray-600" />
                  </button>
                </div>
              </div>
            </div>

            {/* Engagement Stats */}
            <div className="bg-[#FFFBEB] rounded-xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-gray-900">Total Customer Engagements</h3>
                <div className="w-8 h-8 bg-[#FEF3C7] rounded-full flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.8333 9.16667H12.5L10.8333 13.3333L7.5 5L5.83333 9.16667H2.5" stroke="#B45309" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="text-5xl font-bold text-gray-900 mb-4">134</div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="text-red-600">-10%</span>
                <span className="ml-1">Than last month</span>
                <svg className="ml-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 10L8 6L4 10" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-2 space-y-6">
            {/* Detailed Information */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-lg font-semibold text-gray-900">Detailed information</h3>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Edit2 size={20} className="text-gray-500" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                <div>
                  <label className="block text-sm text-gray-500 mb-1">First name</label>
                  <p className="text-gray-900">Abel</p>
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Last name</label>
                  <p className="text-gray-900">Anderson</p>
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Email address</label>
                  <p className="text-gray-900">abelander23@gmail.com</p>
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Phone number</label>
                  <p className="text-gray-900">0909 445 5678</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Socials</h3>
              <div className="grid grid-cols-2 gap-4">
                <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-[#1877F2] transition-colors">
                  <div className="w-10 h-10 bg-[#1877F2] bg-opacity-10 rounded-lg flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                    </svg>
                  </div>
                  <span>Facebook</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-[#E4405F] transition-colors">
                  <div className="w-10 h-10 bg-[#E4405F] bg-opacity-10 rounded-lg flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
                    </svg>
                  </div>
                  <span>Instagram</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-[#0A66C2] transition-colors">
                  <div className="w-10 h-10 bg-[#0A66C2] bg-opacity-10 rounded-lg flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                  </div>
                  <span>LinkedIn</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-[#1DA1F2] transition-colors">
                  <div className="w-10 h-10 bg-[#1DA1F2] bg-opacity-10 rounded-lg flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                  </div>
                  <span>Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerInfo;