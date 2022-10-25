import { signInWithGoogle, signOut, useAuthState } from '../utilities/firebase';

const Banner = ({ title }) => {
  return (
    <nav>
      <h1>{title}</h1>
      <AuthButton />
    </nav>
  );
};

const SignInButton = () => (
  <button onClick={signInWithGoogle}>Sign in</button>
);

const SignOutButton = () => (
  <button onClick={signOut}>Sign out</button>
);

const AuthButton = () => {
  const [user] = useAuthState();
  return user ? <SignOutButton /> : <SignInButton />;
};

const activation = ({ isActive }) => isActive ? 'active' : 'inactive';

export default Banner;