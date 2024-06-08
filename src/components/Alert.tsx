export default function Alert() {
  return (
    <div className="rounded-md bg-yellow-50 p-4">
      <div className="flex">
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800">
            Login Credential
          </h3>
          <div className="mt-2 text-sm text-yellow-700">
            <p>Username: nextauth@example.com</p>
            <p>Password: password</p>
          </div>
        </div>
      </div>
    </div>
  );
}
