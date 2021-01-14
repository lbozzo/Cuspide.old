import Logo from '../Logo';
import { useTheme } from 'next-themes';
import { useSession } from 'next-auth/client';
import Image from 'next/image';

function NavbarProfile() {
  const session = useSession()[0];

  return (
    <div className="flex flex-row items-center">
      <div className="relative w-7 h-7 rounded-full overflow-hidden">
        <Image src={session?.user.image} layout="fill" objectFit="contain" />
      </div>
    </div>
  );
}

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const session = useSession()[0];

  return (
    <div className="flex flex-row justify-between items-center py-2">
      <div className="px-1">
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          <Logo width={23} height={23} />
        </button>
      </div>
      {session && (
        <>
          <NavbarProfile />
        </>
      )}
    </div>
  );
}
