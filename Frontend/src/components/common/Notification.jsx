// NotificationPortal.jsx
import ReactDOM from 'react-dom';

const NotificationPortal = ({ notification, isVisible }) => {
  const { message, type } = notification;

  const positionClass = type === 'success'
    ? 'bottom-4 '
    : 'top-4 ';

  const colorClass = type === 'success'
    ? 'bg-green-400'
    : 'bg-red-400';

  const visibleClasses = isVisible
    ? 'opacity-100 transform-none'
    : 'opacity-0';

  const notificationContent = (
    <div
      className={`fixed ${positionClass} left-1/2 transform -translate-x-1/2
                  w-11/12 max-w-sm p-4 rounded-lg shadow-xl z-[9999] 
                  text-white text-center border-2 ${colorClass}
                  transition-all duration-500 ease-in-out
                  ${visibleClasses}`}
      role="alert"
      aria-live="assertive"
    >
      <p className="font-semibold">{message}</p>
    </div>
  );

  return ReactDOM.createPortal(
    notificationContent,
    document.getElementById('notification-root')
  );
};

export default NotificationPortal;