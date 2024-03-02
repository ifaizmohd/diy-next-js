interface user {
  id: number;
  name: string;
  username: string;
  email: string;
  address: string;
}

interface users {
  users: Array<user>;
}

export interface UsersPageProps {
  props: users;
}
