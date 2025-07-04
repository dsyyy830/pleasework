import { useState } from 'react';
import { Modal } from 'antd';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-pink-100 to-blue-100 flex flex-col items-center justify-center">
      <div className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%] mx-auto text-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-purple-700 drop-shadow-lg mb-4 sm:mb-6 md:mb-8 leading-relaxed">
          🎨 杜思远的第一个前端页面oi！
        </h1>
        
        <button
          onClick={showModal}
          className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base md:text-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg shadow-lg hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl"
        >
          点击我打开弹窗oioioi！
        </button>
      </div>

      <Modal
        title="OI！你好！"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={window.innerWidth < 640 ? '90%' : '400px'}
        style={{ top: window.innerWidth < 640 ? '35%' : '30%' }}
      >
        <p className="text-sm sm:text-base">
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
  );
}

export default App;
