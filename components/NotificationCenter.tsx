import React, { useState, useEffect } from 'react';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  timestamp: Date;
  read: boolean;
  actionLink?: string;
}

interface NotificationCenterProps {
  language: string;
}

const NotificationCenter: React.FC<NotificationCenterProps> = ({ language }) => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      title: language === 'Hindi' ? 'आवेदन स्वीकृत' : 'Application Approved',
      message: language === 'Hindi' 
        ? 'आपका PM-KISAN आवेदन स्वीकृत हो गया है। धनराशि 3 दिनों में वितरित की जाएगी।'
        : 'Your PM-KISAN application has been approved. Funds will be disbursed in 3 days.',
      type: 'success',
      timestamp: new Date('2026-01-30T10:30:00'),
      read: false,
      actionLink: '/applications'
    },
    {
      id: '2',
      title: language === 'Hindi' ? 'दस्तावेज़ नवीनीकरण' : 'Document Renewal',
      message: language === 'Hindi'
        ? 'आपका आय प्रमाणपत्र 15 दिनों में समाप्त हो रहा है। कृपया नवीनीकरण करें।'
        : 'Your income certificate is expiring in 15 days. Please renew.',
      type: 'warning',
      timestamp: new Date('2026-01-29T14:20:00'),
      read: false,
      actionLink: '/documents'
    },
    {
      id: '3',
      title: language === 'Hindi' ? 'नई योजना उपलब्ध' : 'New Scheme Available',
      message: language === 'Hindi'
        ? 'आप "कौशल विकास योजना" के लिए पात्र हो सकते हैं। अभी जांचें!'
        : 'You may be eligible for "Skill Development Scheme". Check now!',
      type: 'info',
      timestamp: new Date('2026-01-28T09:15:00'),
      read: true
    },
    {
      id: '4',
      title: language === 'Hindi' ? 'आवेदन की समय सीमा' : 'Application Deadline',
      message: language === 'Hindi'
        ? 'प्रधानमंत्री आवास योजना के लिए आवेदन की समय सीमा 5 फरवरी 2026 है।'
        : 'Application deadline for PM Awas Yojana is Feb 5, 2026.',
      type: 'warning',
      timestamp: new Date('2026-01-27T16:00:00'),
      read: true
    }
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState<'all' | 'unread'>('all');

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const getTypeIcon = (type: Notification['type']) => {
    switch (type) {
      case 'success':
        return '✅';
      case 'warning':
        return '⚠️';
      case 'error':
        return '❌';
      default:
        return 'ℹ️';
    }
  };

  const getTypeColor = (type: Notification['type']) => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200 dark:bg-green-900 dark:border-green-700';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 dark:bg-yellow-900 dark:border-yellow-700';
      case 'error':
        return 'bg-red-50 border-red-200 dark:bg-red-900 dark:border-red-700';
      default:
        return 'bg-blue-50 border-blue-200 dark:bg-blue-900 dark:border-blue-700';
    }
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };

  const filteredNotifications = filter === 'unread' 
    ? notifications.filter(n => !n.read)
    : notifications;

  return (
    <>
      {/* Notification Bell Button */}
      <div className="fixed top-20 left-4 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative bg-white dark:bg-gray-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
          aria-label="Notifications"
        >
          <svg className="w-6 h-6 text-gray-700 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </button>
      </div>

      {/* Notification Panel */}
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-32 left-4 w-96 max-h-[600px] bg-white dark:bg-gray-800 rounded-lg shadow-2xl z-50 flex flex-col">
            {/* Header */}
            <div className="p-4 border-b dark:border-gray-700">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  🔔 {language === 'Hindi' ? 'सूचनाएं' : 'Notifications'}
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  ✕
                </button>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-3 py-1 rounded text-sm ${
                    filter === 'all'
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {language === 'Hindi' ? 'सभी' : 'All'}
                </button>
                <button
                  onClick={() => setFilter('unread')}
                  className={`px-3 py-1 rounded text-sm ${
                    filter === 'unread'
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {language === 'Hindi' ? 'अपठित' : 'Unread'} ({unreadCount})
                </button>
                <button
                  onClick={markAllAsRead}
                  className="ml-auto px-3 py-1 rounded text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                  {language === 'Hindi' ? 'सभी पढ़ें' : 'Mark all read'}
                </button>
              </div>
            </div>

            {/* Notification List */}
            <div className="flex-1 overflow-y-auto">
              {filteredNotifications.length === 0 ? (
                <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                  <p>{language === 'Hindi' ? 'कोई सूचना नहीं' : 'No notifications'}</p>
                </div>
              ) : (
                filteredNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    onClick={() => markAsRead(notification.id)}
                    className={`p-4 border-b dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                      !notification.read ? 'bg-blue-50 dark:bg-gray-750' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{getTypeIcon(notification.type)}</span>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                            {notification.title}
                            {!notification.read && (
                              <span className="ml-2 w-2 h-2 bg-blue-500 rounded-full inline-block"></span>
                            )}
                          </h4>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              deleteNotification(notification.id);
                            }}
                            className="text-gray-400 hover:text-red-500"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                          {notification.message}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {formatTime(notification.timestamp)}
                          </span>
                          {notification.actionLink && (
                            <a
                              href={notification.actionLink}
                              className="text-xs text-primary hover:underline"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {language === 'Hindi' ? 'देखें' : 'View'} →
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default NotificationCenter;
