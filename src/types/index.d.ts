type MenuItem = {
  id: number;
  label: string;
  icon: React.ReactElement;
  route: string;
};

type Post = {
  userId: number;
  id: string;
  title: string;
  body: string;
};

type User = {
  id: number | null;
  name: string;
  username: string;
  email: string;
  phone: number;
  password: string;
};
