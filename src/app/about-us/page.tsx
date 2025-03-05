export default function AboutUsPage() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="max-w-2xl w-full p-8 bg-white rounded-2xl shadow-xl text-center">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-6">About Us</h1>
                <p className="text-lg text-gray-600 mb-6">
                    Sẽ được cập nhật sau. Please check back later!
                </p>
                <a href="/">
                    <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        Back to Home
                    </button>
                </a>

            </div>
        </div>
    );
}
