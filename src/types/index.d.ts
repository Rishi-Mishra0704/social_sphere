type MenuItem = {
  id: number;
  label: string;
  icon: React.ReactElement;
  route: string;
};

interface SignInUser {
  name: string;
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

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};
