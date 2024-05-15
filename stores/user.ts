// Roles definition
export type TRole = 'admin' | 'user';

// Edited type definition
type TeditedUsers = 'admin';
export type TeditedType = TeditedUsers;

interface ISessionData {
  username: string;
  userFullName: string;
  mail: string;
  role: TRole;
  date?: string;
  maxAge: number | null;
}
interface dataState {
  sessionData: ISessionData | null;
}

export const useUserStore = defineStore('user', {
  state: (): dataState => ({
    sessionData: {
      username: '',
      userFullName: '',
      mail: '',
      role: 'user',
      maxAge: null
    }
  }),
  getters: {
    getUserName(): string {
      return this.sessionData ? this.sessionData.username : '';
    },
    getFullName(): string {
      return this.sessionData ? this.sessionData.userFullName : '';
    },
    getMail(): string {
      return this.sessionData ? this.sessionData.mail : '';
    },
    getRole(): TRole {
      return this.sessionData ? this.sessionData.role : 'user';
    },
    isRoleAdmin(): boolean {
      return this.sessionData?.role === 'admin';
    },
    getTrigram(): string {
      const fullname = this.sessionData ? this.sessionData.username.split('.') : [];
      const fisrtName = fullname[0];
      const lastName = fullname[1];
      return (
        `${fisrtName?.slice(0, 1).toUpperCase()}` +
        `${lastName?.slice(0, 1).toUpperCase()}` +
        `${lastName?.slice(-1).toUpperCase()}`
      );
    },
    getMaxAge(): number | null {
      return this.sessionData ? this.sessionData.maxAge : null;
    }
  },
  actions: {
    async loadSessionData() {
      const data = await useFetchApi<ISessionData>('sessionData');
      this.sessionData = data;
    }
  }
});
