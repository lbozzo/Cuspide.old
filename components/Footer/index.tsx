export default function Footer() {
  return (
    <footer className="flex justify-center items-center py-2">
      <p className="text-xs text-gray-400 dark:text-gray-500">
        Created by{' '}
        <a
          href="https://lucasbozzo.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold"
        >
          Lucas Bozzo
        </a>
        . Icons by{' '}
        <a
          href="https://tablericons.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold"
        >
          Tabler Icons
        </a>
        .
      </p>
    </footer>
  );
}
