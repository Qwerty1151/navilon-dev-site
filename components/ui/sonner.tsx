import * as React from "react";

interface Toast {
  id: string;
  type: 'success' | 'error' | 'info';
  message: string;
}

interface ToasterContextType {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;
}

const ToasterContext = React.createContext<ToasterContextType | undefined>(undefined);

export const ToasterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = React.useState<Toast[]>([]);

  const addToast = (toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast = { ...toast, id };
    setToasts(prev => [...prev, newToast]);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
      removeToast(id);
    }, 3000);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return (
    <ToasterContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToasterContext.Provider>
  );
};

export const Toaster: React.FC = () => {
  const [toasts, setToasts] = React.useState<Toast[]>([]);

  // Create a simple toast system without external dependencies
  React.useEffect(() => {
    const handleToast = (event: CustomEvent) => {
      const toast: Toast = {
        id: Math.random().toString(36).substr(2, 9),
        type: event.detail.type || 'info',
        message: event.detail.message
      };
      
      setToasts(prev => [...prev, toast]);
      
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== toast.id));
      }, 3000);
    };

    window.addEventListener('toast', handleToast as EventListener);
    return () => window.removeEventListener('toast', handleToast as EventListener);
  }, []);

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`rounded-lg px-4 py-3 text-white shadow-lg transition-all duration-300 ${
            toast.type === 'success' ? 'bg-green-600' :
            toast.type === 'error' ? 'bg-red-600' : 'bg-blue-600'
          }`}
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
};

// Create a simple toast function
export const toast = {
  success: (message: string) => {
    window.dispatchEvent(new CustomEvent('toast', { 
      detail: { type: 'success', message } 
    }));
  },
  error: (message: string) => {
    window.dispatchEvent(new CustomEvent('toast', { 
      detail: { type: 'error', message } 
    }));
  },
  info: (message: string) => {
    window.dispatchEvent(new CustomEvent('toast', { 
      detail: { type: 'info', message } 
    }));
  }
};