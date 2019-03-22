import React from 'react';

const Notification = (props) => {
  return (
    <div className="notification_container">
      <div className="notification">
        {props.notification}
      </div>
    </div>
  );
}

export default Notification;
