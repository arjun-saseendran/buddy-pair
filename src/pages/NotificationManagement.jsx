import {Notifications} from '../components/Notifications/Notifications'
import {EditNotifications} from '../components/EditNotifications/EditNotifications'


export const NotificationManagement = () => {
  return (
    <div>
      <p className='date xl:ms-[350px] md:ms-[110px] ms-20 my-10'>Notification Management</p>
    <div className='flex flex-col items-center justify-center gap-6'>
      <div>
       <Notifications />
      </div>
      <div>
        <EditNotifications/>
      </div>
    </div>
    </div>
    
    
  )
}