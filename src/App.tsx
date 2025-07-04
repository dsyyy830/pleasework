import { useState } from 'react'
import { Modal } from 'antd'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-100 to-blue-100 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-4xl mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-purple-700 drop-shadow-lg mb-4 sm:mb-6 md:mb-8 leading-tight">
          🎨 杜思远的第一个前端页面oi！
        </h1>
        
        <button
          onClick={showModal}
          className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-base sm:text-lg md:text-xl rounded-lg shadow-lg hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl"
        >
          点击我打开弹窗oioioi！
        </button>
      </div>

      <Modal
        title="OI！你好！"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        className="sm:min-w-[300px] md:min-w-[400px]"
      >
        <p className="text-base sm:text-lg">
          玩反应测试小游戏：
          <a
            href="https://dsyyy830.github.io/reaction-game-oioioi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline ml-1"
          >
            点击这里跳转！
          </a>
        </p>
      </Modal>
    </div>
  )
}

export default App
