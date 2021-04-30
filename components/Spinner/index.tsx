import Loader from '../Icon/loader';

export default function Spinner({ size = 23 }: { size?: number }) {
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="animate-spin mx-2">
        <Loader width={size} height={size} />
      </div>
    </div>
  );
}
