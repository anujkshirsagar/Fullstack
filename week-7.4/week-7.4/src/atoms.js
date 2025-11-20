import { atom,selector} from "recoil";


/* export const networkAtom=atom({
    key:"networkAtom",
    default:104,
});
export const jobsAtom=atom({
    key:"jobsAtom",
    default:0,
});
export const notificationAtom=atom({
    key:"notificationAtom",
    default:12,
});
export const messagingAtom=atom({
    key:"messagingAtom",
    default:104,
});
export const totalNotificationSelector=selector({
    key:"totalNotificationSelector",
    get:({get})=>{
        const networkAtomCount=get(networkAtom);
        const jobsAtomCount=get(jobsAtom);
        const notificationAtomCount=get(notificationAtom);
        const messagingAtomCount=get(messagingAtom);
        return networkAtomCount+jobsAtomCount+messagingAtomCount+notificationAtomCount;
        
    }
}) */

    export const notifications=atom({
        key:"networkAtom",
        default:{
            network:0,
            jobs:12,
            messaging:12,
            notifications:0

        }

        
    });

    export const totalNotificationSelector=selector({
        key:"totalNotificationSelector",
        get:({get})=>{
            const allNotifications=get(notifications);
            return allNotifications.network+
            allNotifications.jobs+
            allNotifications.notifications+
            allNotifications.messaging
        }
    })
