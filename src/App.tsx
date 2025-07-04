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
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-100 to-blue-100 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] xl:max-w-[75%] mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-purple-700 drop-shadow-lg mb-6 sm:mb-8 md:mb-10 leading-relaxed">
          🎨 杜思远的第一个前端页面oi！
        </h1>
        
        <button
          onClick={showModal}
          className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl shadow-lg hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl"
        >
          点击我打开弹窗oioioi！
        </button>
      </div>

      <Modal
        title="OI！你好！"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={window.innerWidth < 640 ? '95%' : window.innerWidth < 1024 ? '80%' : '60%'}
        style={{ 
          top: window.innerWidth < 640 ? '35%' : '30%',
          maxWidth: '800px'
        }}
      >
        <p className="text-base sm:text-lg md:text-xl">
          玩反应测试小游戏：
          <a
            href="https://dsyyy830.github.io/reaction-game-oioioi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline ml-2"
          >
            点击这里跳转！
          </a>
        </p>
      </Modal>
    </div>
  )
}

export default App
