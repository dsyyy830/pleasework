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
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-100 to-blue-100 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-full sm:max-w-full md:max-w-full lg:max-w-[96%] xl:max-w-[94%] 2xl:max-w-[92%] mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold text-purple-700 drop-shadow-lg mb-8 sm:mb-10 md:mb-12 leading-tight">
          🎨 杜思远的第一个前端页面oi！
        </h1>
        
        <button
          onClick={showModal}
          className="px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl shadow-lg hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl"
        >
          点击我打开弹窗oioioi！
        </button>
      </div>

      <Modal
        title="OI！你好！"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={window.innerWidth < 640 ? '98%' : window.innerWidth < 1024 ? '95%' : '90%'}
        style={{ 
          top: window.innerWidth < 640 ? '35%' : '30%',
          maxWidth: '1500px'
        }}
      >
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
          玩反应测试小游戏：
          <a
            href="https://dsyyy830.github.io/reaction-game-oioioi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline ml-3"
          >
            点击这里跳转！
          </a>
        </p>
      </Modal>
    </div>
  );
}

export default App;
