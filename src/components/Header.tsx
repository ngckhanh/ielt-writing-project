export default function Header() {
  return (
    <header className="p-4">
      <div className="flex items-center justify-between pb-2 border-b-1 border-gray-100">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <a href="/" className="flex items-center space-x-4" aria-label="Navigate to home">
            <img
              className="logo h-10 w-10"
              //src="/path/to/logo.png"
              alt="App Logo"
            />
            <div className="flex flex-col">
              <div className="flex flex-row space-x-2">
                <span className="text-lg font-semibold text-black">Bạch Dương</span>
                <span className="text-lg font-semibold text-blue-500">App</span>
              </div>
              <h1 className="text-sm font-medium text-gray-600 mt-1">Giám khảo AI</h1>
            </div>
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-6">
          <a href="/features" className="text-gray-600 hover:text-blue-500">
            Tính năng
          </a>
          <a href="/payment" className="text-gray-600 hover:text-blue-500">
            Bảng giá
          </a>
          <a href="/about-us" className="text-gray-600 hover:text-blue-500">
            Về chúng mình
          </a>
          <a href="/collaboration" className="text-gray-600 hover:text-blue-500">
            Hợp tác
          </a>

          {/* Call-to-Action Button */}
          <a
            href="/auth/signin"
            className="inline-block px-4 py-2 ml-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            aria-label="Get Started"
          >
            Bắt đầu
          </a>
        </nav>
      </div>
    </header>
  );
}
