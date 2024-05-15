// Notification code base on https://github.com/kingyue737/vitify-next

export interface INotification {
  id: number;
  show: boolean;
  time: Date;
  text: string;
  timeout: number;
  type: 'info' | 'error' | 'success' | 'warning';
  variant: 'tonal' | 'flat';
}

export const useNotificationStore = defineStore('notification', {
  state: () => {
    const notifications: INotification[] = [];
    return {
      notifications
    };
  },
  actions: {
    addNotification(
      text: string,
      type: INotification['type'] = 'info',
      timeout = 5000,
      variant: INotification['variant'] = 'tonal'
    ) {
      this.notifications.push({
        id: Date.now(),
        show: true,
        time: new Date(),
        text,
        timeout,
        type,
        variant
      });
    },
    delNotification(id: number) {
      const index = this.notifications.findIndex((m) => m.id === id);
      if (index !== -1) {
        this.notifications.splice(index, 1);
      }
    }
  }
});

export const Notify = {
  info: (text: string) => useNotificationStore().addNotification(text, 'info', 5000),
  success: (text: string) => useNotificationStore().addNotification(text, 'success', 3000),
  warning: (text: string) => useNotificationStore().addNotification(text, 'warning', 10000),
  error: (val: string | Error) => {
    let text = '';
    if (typeof val === 'string') {
      text = val;
    } else if (val instanceof Error) {
      text = val.message;
    } else {
      text = JSON.stringify(val);
    }
    useNotificationStore().addNotification(text, 'error', -1);
  },
  infoStrong: (text: string) => useNotificationStore().addNotification(text, 'info', 5000, 'flat'),
  successStrong: (text: string) => useNotificationStore().addNotification(text, 'success', 3000, 'flat'),
  warningStrong: (text: string) => useNotificationStore().addNotification(text, 'warning', 10000, 'flat'),
  errorStrong: (val: string | Error) => {
    let text = '';
    if (typeof val === 'string') {
      text = val;
    } else if (val instanceof Error) {
      text = val.message;
    } else {
      text = JSON.stringify(val);
    }
    useNotificationStore().addNotification(text, 'error', -1, 'flat');
  }
};
