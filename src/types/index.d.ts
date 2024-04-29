type MenuItem = {
  id: number;
  label: string;
  icon: React.ReactElement;
  route: string;
};

interface User {
  username: string;
  email: string;
  password: string;
}

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};