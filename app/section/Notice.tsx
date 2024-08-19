"use client"

import React, { useState } from 'react';
import MaxWidthWrapper from '../components/mmw';

const NoticeBoard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Public Notices');

  type Notice = {
    text: string;
    isNew: boolean;
  };

  type NoticeBoardProps = {
    notices: {
      [key: string]: Notice[];
    };
  };


  const tabs = ['Public Notices', 'News & Events', 'Candidate Activity'];

  const notices: NoticeBoardProps['notices'] = {
    'Public Notices': [
      { text: 'Notice/Announcement 1', isNew: true },
      { text: 'Notice/Announcement 2', isNew: true },
      { text: 'Notice/Announcement 3', isNew: true },
      { text: 'Notice/Announcement 4', isNew: true },
      { text: 'Notice/Announcement 5.', isNew: true },
      { text: 'Notice/Announcement 6', isNew: true },
    ],
    'News & Events': [
      { text: 'Upcoming Workshop on New AI Technologies - 2024', isNew: true },
      { text: 'Tech Fest 2024: Schedule and Speakers Announced', isNew: false },
    ],
    'Candidate Activity': [
      { text: 'Recruitment Result of 2023', isNew: true },
      { text: 'New', isNew: false },
    ],
  };


  return (
    <MaxWidthWrapper className='relative'>
      <section className="w-full mt-10 max-w-4xl mx-auto bg-white shadow-md rounded-lg">

        <div className="flex border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 text-center py-3 px-4 text-sm font-medium ${activeTab === tab ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-600'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="p-4">
          {notices[activeTab]?.map((notice, index) => (
            <div key={index} className="flex items-center mb-2">
              <span className="text-blue-500 mr-2">&#x25BA;</span>
              <a href="#" className="text-blue-600 hover:underline">
                {notice.text}
              </a>
              {notice.isNew && (
                <span className="ml-2 text-xs text-green-500 font-semibold bg-green-100 px-2 py-0.5 rounded">
                  NEW!
                </span>
              )}
            </div>
          ))}
        </div>

      </section>
    </MaxWidthWrapper>
  );
};

export default NoticeBoard;
