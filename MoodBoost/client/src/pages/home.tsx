import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { photoLibrary, serviceLibrary, getRandomItem, type PhotoData, type ServiceMessage } from "@/data/content";
import { Heart, Sparkles, Gamepad2, Zap } from "lucide-react";

type ContentType = 'entry' | 'welcome' | 'photo' | 'service';

export default function Home() {
  const [contentType, setContentType] = useState<ContentType>('entry');
  const [currentPhoto, setCurrentPhoto] = useState<PhotoData | null>(null);
  const [currentService, setCurrentService] = useState<ServiceMessage | null>(null);

  const handleJoyClick = () => {
    const randomPhoto = getRandomItem(photoLibrary);
    setCurrentPhoto(randomPhoto);
    setContentType('photo');
  };

  const handleServiceClick = () => {
    const randomService = getRandomItem(serviceLibrary);
    setCurrentService(randomService);
    setContentType('service');
  };

  const handleAnotherPhoto = () => {
    const randomPhoto = getRandomItem(photoLibrary);
    setCurrentPhoto(randomPhoto);
  };

  const handleAnotherService = () => {
    const randomService = getRandomItem(serviceLibrary);
    setCurrentService(randomService);
  };

  const handleBackToWelcome = () => {
    setContentType('welcome');
  };

  const handleEnterApp = () => {
    setContentType('welcome');
  };

  return (
    <div className="container mx-auto px-6 py-8 max-w-md relative z-10">
      {/* Header for main screens */}
      {contentType !== 'entry' && (
        <header className="text-center mb-8">
          <motion.div 
            className="animate-bounce-gentle"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-3xl font-gaming gaming-pink animate-neon-pulse mb-2">好心情 APP</h1>
            <div className="w-16 h-1 bg-gradient-to-r from-gaming-pink to-gaming-cyan mx-auto rounded-full"></div>
          </motion.div>
        </header>
      )}

      <AnimatePresence mode="wait">
        {/* Entry Screen */}
        {contentType === 'entry' && (
          <motion.div
            key="entry"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
            className="text-center min-h-screen flex flex-col justify-center items-center"
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-8"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 rounded-full bg-gradient-to-r from-gaming-pink via-gaming-purple to-gaming-cyan opacity-20"
                />
                <Gamepad2 className="w-20 h-20 gaming-pink neon-glow animate-float mx-auto" />
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="gaming-card rounded-3xl p-8 mb-8 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gaming-pink via-gaming-purple to-gaming-cyan" />
              <div className="flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 gaming-pink mr-2" />
                <Sparkles className="w-4 h-4 gaming-yellow animate-pulse" />
                <Sparkles className="w-6 h-6 gaming-cyan animate-pulse ml-1" />
              </div>
              <p className="text-xl font-gaming gaming-pink animate-neon-pulse mb-2">
                嗨，親愛的老婆！
              </p>
              <p className="text-lg text-white/80 font-noto">
                歡迎你使用本產品
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <Button
                onClick={handleEnterApp}
                className="gaming-button text-white font-gaming text-lg px-8 py-4 rounded-2xl relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gaming-cyan to-gaming-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span className="relative flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  進入遊戲世界
                  <Sparkles className="w-4 h-4 ml-2 animate-pulse" />
                </span>
              </Button>
            </motion.div>
          </motion.div>
        )}
        {/* Welcome Message */}
        {contentType === 'welcome' && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="gaming-card rounded-3xl p-6 mb-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gaming-pink via-gaming-purple to-gaming-cyan" />
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5 gaming-yellow animate-pulse mr-2" />
                  <Heart className="w-6 h-6 gaming-pink" />
                  <Sparkles className="w-5 h-5 gaming-cyan animate-pulse ml-2" />
                </div>
                <p className="text-xl text-white font-light leading-relaxed">
                  嗨～歡迎光臨<br />
                  <span className="gaming-pink font-gaming animate-neon-pulse">想要好心情ㄇ？</span>
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <Button
                onClick={handleJoyClick}
                className="gaming-button text-white font-gaming py-8 px-6 rounded-2xl h-auto relative overflow-hidden group"
                size="lg"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gaming-pink to-gaming-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="relative flex flex-col items-center">
                  <Sparkles className="w-6 h-6 mb-2 animate-pulse" />
                  <span className="text-lg">歡樂</span>
                </div>
              </Button>
              
              <Button
                onClick={handleServiceClick}
                className="gaming-button text-white font-gaming py-8 px-6 rounded-2xl h-auto relative overflow-hidden group"
                style={{
                  background: "linear-gradient(145deg, var(--gaming-cyan), var(--gaming-green))"
                }}
                size="lg"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gaming-cyan to-gaming-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="relative flex flex-col items-center">
                  <Heart className="w-6 h-6 mb-2 animate-pulse" />
                  <span className="text-lg">服務</span>
                </div>
              </Button>
            </div>
          </motion.div>
        )}

        {/* Photo Display */}
        {contentType === 'photo' && currentPhoto && (
          <motion.div
            key="photo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <div className="gaming-card rounded-3xl p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gaming-pink via-gaming-purple to-gaming-cyan" />
              <div className="text-center">
                <div className="relative overflow-hidden rounded-xl mb-4 border-2 border-gaming-pink/30">
                  {currentPhoto.url.includes('.MOV') || currentPhoto.url.includes('.MP4') || currentPhoto.url.includes('.mp4') ? (
                    <motion.video
                      key={currentPhoto.url}
                      src={currentPhoto.url}
                      controls
                      className="w-full h-64 object-cover rounded-xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      playsInline
                      muted
                      loop
                    />
                  ) : (
                    <motion.img
                      key={currentPhoto.url}
                      src={currentPhoto.url}
                      alt={currentPhoto.alt}
                      className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-gaming-purple/20 to-transparent pointer-events-none"></div>
                  <div className="absolute top-2 right-2">
                    <Sparkles className="w-6 h-6 gaming-yellow animate-pulse" />
                  </div>
                </div>
                <div className="flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5 gaming-cyan mr-2 animate-pulse" />
                  <p className="gaming-pink font-gaming text-lg">
                    {currentPhoto.url.includes('.MOV') || currentPhoto.url.includes('.MP4') || currentPhoto.url.includes('.mp4') 
                      ? '專屬回憶影片！' 
                      : '專屬美好回憶！'}
                  </p>
                  <Sparkles className="w-5 h-5 gaming-yellow ml-2 animate-pulse" />
                </div>
                <Button 
                  onClick={handleAnotherPhoto}
                  className="gaming-button font-gaming px-6 py-3 rounded-2xl text-white relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gaming-cyan to-gaming-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative flex items-center">
                    <Zap className="w-4 h-4 mr-2" />
                    再來一個！
                  </span>
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Service Text Display */}
        {contentType === 'service' && currentService && (
          <motion.div
            key="service"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <div className="gaming-card rounded-3xl p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gaming-cyan via-gaming-green to-gaming-yellow" />
              <div className="text-center">
                <div className="bg-gradient-to-r from-gaming-green/20 to-gaming-cyan/20 rounded-xl p-6 mb-4 border border-gaming-cyan/30">
                  <motion.span 
                    className="text-4xl mb-4 block"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: "spring", bounce: 0.6 }}
                  >
                    {currentService.emoji}
                  </motion.span>
                  <motion.p 
                    className="text-xl text-white font-gaming leading-relaxed gaming-cyan neon-glow"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {currentService.text}
                  </motion.p>
                </div>
                <Button 
                  onClick={handleAnotherService}
                  className="gaming-button font-gaming px-6 py-3 rounded-2xl text-white relative overflow-hidden group"
                  style={{
                    background: "linear-gradient(145deg, var(--gaming-cyan), var(--gaming-green))"
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gaming-green to-gaming-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative flex items-center">
                    <Heart className="w-4 h-4 mr-2 animate-pulse" />
                    還要更多服務！
                  </span>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Back Button (shows when not on welcome screen or entry screen) */}
      {contentType !== 'welcome' && contentType !== 'entry' && (
        <motion.div 
          className="text-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button 
            onClick={handleBackToWelcome}
            variant="ghost"
            className="text-white/60 hover:text-gaming-pink transition-colors font-gaming border border-gaming-pink/30 hover:border-gaming-pink/60 rounded-2xl px-6 py-2"
          >
            ← 回到首頁
          </Button>
        </motion.div>
      )}

      {/* Footer */}
      {contentType !== 'entry' && (
        <footer className="text-center mt-12">
          <p className="text-white/40 text-sm font-noto">
            讓每一天都充滿好心情 
            <span className="gaming-pink">💝</span>
          </p>
        </footer>
      )}
    </div>
  );
}
