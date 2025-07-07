import React from 'react';
import { AlertTriangle, Info, CheckCircle, X } from 'lucide-react';

interface Alert {
  id: string;
  type: 'warning' | 'info' | 'success' | 'error';
  title: string;
  message: string;
  timestamp: string;
  actionLabel?: string;
  onAction?: () => void;
  onDismiss?: () => void;
}

interface AlertCardProps {
  alerts: Alert[];
  onAlertAction?: (alert: Alert) => void;
  onAlertDismiss?: (alertId: string) => void;
}

export const AlertCard: React.FC<AlertCardProps> = ({
  alerts,
  onAlertAction,
  onAlertDismiss
}) => {
  const getAlertConfig = (type: string) => {
    switch (type) {
      case 'warning':
        return {
          icon: AlertTriangle,
          bgColor: 'bg-yellow-50',
          borderColor: 'border-yellow-200',
          iconColor: 'text-yellow-600',
          titleColor: 'text-yellow-800'
        };
      case 'info':
        return {
          icon: Info,
          bgColor: 'bg-blue-50',
          borderColor: 'border-blue-200',
          iconColor: 'text-blue-600',
          titleColor: 'text-blue-800'
        };
      case 'success':
        return {
          icon: CheckCircle,
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200',
          iconColor: 'text-green-600',
          titleColor: 'text-green-800'
        };
      case 'error':
        return {
          icon: AlertTriangle,
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200',
          iconColor: 'text-red-600',
          titleColor: 'text-red-800'
        };
      default:
        return {
          icon: Info,
          bgColor: 'bg-gray-50',
          borderColor: 'border-gray-200',
          iconColor: 'text-gray-600',
          titleColor: 'text-gray-800'
        };
    }
  };

  if (alerts.length === 0) return null;

  return (
    <div className="space-y-3">
      {alerts.map((alert) => {
        const config = getAlertConfig(alert.type);
        const Icon = config.icon;
        
        return (
          <div
            key={alert.id}
            className={`
              ${config.bgColor} ${config.borderColor} border rounded-2xl p-4 relative
            `}
          >
            <button
              onClick={() => onAlertDismiss?.(alert.id)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <X size={16} />
            </button>
            
            <div className="flex items-start space-x-3 pr-6">
              <Icon size={20} className={config.iconColor} />
              <div className="flex-1">
                <h4 className={`font-semibold text-sm ${config.titleColor}`}>
                  {alert.title}
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  {alert.message}
                </p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs text-gray-500">
                    {alert.timestamp}
                  </span>
                  {alert.actionLabel && (
                    <button
                      onClick={() => onAlertAction?.(alert)}
                      className={`
                        text-xs font-semibold px-3 py-1 rounded-full
                        ${alert.type === 'warning' ? 'bg-yellow-600 text-white' : ''}
                        ${alert.type === 'info' ? 'bg-blue-600 text-white' : ''}
                        ${alert.type === 'success' ? 'bg-green-600 text-white' : ''}
                        ${alert.type === 'error' ? 'bg-red-600 text-white' : ''}
                        hover:opacity-90 transition-opacity
                      `}
                    >
                      {alert.actionLabel}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};