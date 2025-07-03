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
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-100 to-blue-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-extrabold text-purple-700 drop-shadow-lg mb-8">
        🎨 杜思远的第一个前端页面oi！
      </h1>
      
      <button
        onClick={showModal}
        className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
      >
        点击我打开弹窗oioioi！
      </button>

      <Modal
        title="OI！你好！"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <p>
          玩反应测试小游戏：
          <a
            href="https://dsyyy830.github.io/reaction-game-oioioi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            点击这里跳转！
          </a>
        </p>
      </Modal>
    </div>
  )
}

export default App
