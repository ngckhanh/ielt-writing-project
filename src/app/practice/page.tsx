export default function PracticePage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center py-12 px-4">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-black mb-4">Luyện theo chủ đề</h1>
  
        <p className="text-gray-600 mb-4">
          Luyện trả lời câu hỏi bất kỳ, nhận phản hồi, điểm số và hướng dẫn cải thiện tức thì.
        </p>
  
        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <a href="/practice/task1">
          <button className="bg-white text-black px-4 py-2 rounded-lg border hover:bg-black hover:text-white transition">
            Luyện TASK 1
          </button>
          </a>

          <a href="/practice/task2">
          <button className="bg-white text-black px-4 py-2 rounded-lg border hover:bg-black hover:text-white transition">
            Luyện TASK 2
          </button>
          </a>
          
          <a href="/practice/user-question">
          <button className="bg-white text-black px-4 py-2 rounded-lg border hover:bg-black hover:text-white transition">
            Tự thêm topic
          </button>
          </a>
          
        </div>
  
        {/* Divider */}
        <div className="relative my-6 w-full max-w-xl">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
        </div>
  
        {/* Features Section */}
        <div className="w-full max-w-3xl">
          {/* Feature 1: Practice History */}
          <div className="bg-white">
            <p className="text-left text-xl font-semibold mb-4">Lịch sử luyện tập</p>
  
            {/* History Divider */}
            <div className="relative my-6 w-full">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Hôm nay</span>
              </div>
            </div>
  
            {/* Dummy History Data */}
            <ul className="space-y-4 text-left">
              <li className="text-gray-600">
                <span className="font-medium text-black">Task 1:</span> Đã hoàn thành với điểm 7.5
              </li>
              <li className="text-gray-600">
                <span className="font-medium text-black">Task 2:</span> Đã hoàn thành với điểm 8.0
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  