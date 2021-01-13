import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Message from '../components/Message';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen px-8 py-3 bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-300">
      <Navbar />
      <div className="flex flex-1 justify-center items-center py-3">
        <div className="w-full mx-auto max-w-4xl py-2">
          <Message />
        </div>
      </div>
      <Footer />
    </div>
  );
}
