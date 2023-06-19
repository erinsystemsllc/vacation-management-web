interface Profile{
    email: string,
    firstName: string,
    firstWorkDay: string,
    lastName: string,
    password: string,
    position: string,
    team: string,
    role: string,
  }

export const info: Profile | null = sessionStorage.getItem('token') ? JSON.parse(sessionStorage.getItem('token') as string) : null;
