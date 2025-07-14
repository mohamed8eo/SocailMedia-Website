"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { getNotifications, markNotificationsAsRead } from "@/action/notifications.action";

const NotificationsContext = createContext<any>(null);

export function NotificationsProvider({ children }: { children: React.ReactNode }) {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      const data = await getNotifications(); 
      setNotifications(data);
      setLoading(false);
    };
    fetchNotifications();
  }, []);

  const unreadCount = notifications.filter((n) => !n.read).length;

  // Mark all as read and update state
  const markAllAsRead = async () => {
    const unreadIds = notifications.filter((n) => !n.read).map((n) => n.id);
    if (unreadIds.length > 0) {
      await markNotificationsAsRead(unreadIds);
      setNotifications((prev) =>
        prev.map((n) => ({ ...n, read: true }))
      );
    }
  };

  return (
    <NotificationsContext.Provider value={{ notifications, setNotifications, unreadCount, markAllAsRead, loading }}>
      {children}
    </NotificationsContext.Provider>
  );
}

export function useNotificationsContext() {
  return useContext(NotificationsContext);
} 