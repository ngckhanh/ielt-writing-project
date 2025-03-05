import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { TbWriting } from "react-icons/tb";
import { VscPreview } from "react-icons/vsc";

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  //console.log(session); 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center py-12">
      {session ? (
        // Authenticated Layout
        <AuthenticatedContent />
      ) : (
        // Unauthenticated Layout
        <UnauthenticatedContent />
      )}
    </div>
  );
}

const AuthenticatedContent = () => (
  <>
    <div className="flex flex-col items-center justify-center min-h-screen text-center py-12 ">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-black mb-4">
        Tự Ôn Luyện IELTS Writing
      </h1>

      <p className="text-gray-600 mb-4">
        Bạch Dương App giúp bạn biết được trình độ của mình và giúp bạn cải thiện.
      </p>

      {/* Divider */}
      <div className="relative my-6 w-full max-w-xl">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-gray-50 text-gray-500">Các tính năng</span>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
        {/* Feature 1 */}
        <div className="border border-gray-400 rounded-lg p-6 bg-white">
          <div className="flex items-center space-x-3 mb-4">
            <VscPreview className="text-2xl text-blue-600" />
            <span className="text-lg font-semibold">Ôn Luyện</span>
          </div>
          <p className="text-gray-600 mb-4">
            Tự trả lời các topic tự chọn. Nhận sửa lỗi và đánh giá lập tức.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/practice/task1">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Task 1
              </button>
            </a>

            <a href="/practice/task2">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Task 2
              </button>
            </a>

            {/* <button className="bg-white border-1 border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white">
              Tự thêm topic
            </button> */}
          </div>
        </div>

        {/* Feature 2 */}
        <div className="border border-gray-400 rounded-lg p-6 bg-white">
          <div className="flex items-center space-x-3 mb-4">
            <TbWriting className="text-2xl text-blue-600" />
            <span className="text-lg font-semibold">Thi thử</span>
          </div>
          <p className="text-gray-600 mb-4">
            Trả lời một bộ câu hỏi ngẫu nhiên. Cấu trúc giống bài thi thật.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/mock-test/task1">
              <button className="border-1 border-pink-600 text-pink-600 px-4 py-2 rounded-lg hover:bg-pink-600 hover:text-white">
                Task 1
              </button>
            </a>

            <a href="/mock-test/task2">
              <button className="border-1 border-pink-600 text-pink-600 px-4 py-2 rounded-lg hover:bg-pink-600 hover:text-white">
                Task 2
              </button>
            </a>

            <a href="/mock-test/full-test">
              <button className="border-1 border-pink-600 text-pink-600 px-4 py-2 rounded-lg hover:bg-pink-600 hover:text-white">
                Full test
              </button>
            </a>

          </div>
        </div>
      </div>
    </div>
  </>
);

const UnauthenticatedContent = () => (
  <>
    <div className="flex flex-col items-center justify-center min-h-screen text-center py-10 px-4">
      <h1 className="text-4xl font-bold text-black">
        Bạch Dương không chỉ là một nền tảng AI
      </h1>
      <p className="mt-4 text-gray-600">
        Luyện IELTS Speaking hiệu quả trên Bạch Dương App với phân tích chi tiết
        cùng đội ngũ hỗ trợ luôn sẵn sàng cùng bạn cải thiện.
      </p>
      <p className="mt-2 text-gray-600">
        Các tài khoản mới sẽ được 5 lần kiểm tra miễn phí.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap space-y-4 sm:space-y-0 sm:space-x-4 justify-center mt-8">
        <a
          href="/auth/signin"
          className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          aria-label="Start using Bạch Dương App"
        >
          Thử ngay
        </a>

        <a
          href="/collaborate"
          className="px-6 py-2 text-black bg-white border border-gray-300 rounded-md hover:bg-gray-300"
          aria-label="Collaborate with Bạch Dương"
        >
          Hợp tác với chúng mình
        </a>
      </div>
    </div>
  </>
);


