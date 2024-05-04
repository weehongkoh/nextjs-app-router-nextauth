export default function Divider() {
  return (
    <div className="relative w-full my-12">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-white px-8 text-sm text-gray-500">
          Other Providers
        </span>
      </div>
    </div>
  );
}
