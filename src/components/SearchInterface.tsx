import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Camera, Mic, Upload, X } from 'lucide-react';

type SearchMode = 'text' | 'image' | 'voice';

interface SearchInterfaceProps {
  onSearch: (query: string) => void;
}

export default function SearchInterface({ onSearch }: SearchInterfaceProps) {
  const [mode, setMode] = useState<SearchMode>('text');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    console.log('SearchInterface: handleSearch called with query:', searchQuery);
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    } else {
      console.warn('SearchInterface: Query is empty');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  // ... Existing handlers ...
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleImageUpload(files[0]);
    }
  };

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedImage(e.target?.result as string);
      setIsScanning(true);
      setTimeout(() => setIsScanning(false), 3000);
    };
    reader.readAsDataURL(file);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleImageUpload(files[0]);
    }
  };

  const toggleVoice = () => {
    setIsListening(!isListening);
    if (!isListening) {
      setTimeout(() => setIsListening(false), 5000);
    }
  };

  const clearImage = () => {
    setUploadedImage(null);
    setIsScanning(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="glass-card p-2 animate-float-slow">
        {/* Mode Tabs */}
        <div className="flex gap-2 mb-4 p-1 bg-white/5 rounded-xl">
          {(['text', 'image', 'voice'] as SearchMode[]).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${mode === m
                ? 'bg-nebula-purple/20 text-white border border-nebula-purple/30'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
            >
              {m === 'text' && <Search className="w-4 h-4" />}
              {m === 'image' && <Camera className="w-4 h-4" />}
              {m === 'voice' && <Mic className="w-4 h-4" />}
              <span className="capitalize">{m}</span>
            </button>
          ))}
        </div>

        {/* Search Content */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {mode === 'text' && (
              <motion.div
                key="text"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search for any product..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="input-field w-full pl-12 pr-4 py-4 text-lg"
                />
                <button
                  onClick={handleSearch}
                  className="absolute right-2 top-1/2 -translate-y-1/2 btn-neon py-2 px-6 text-sm"
                >
                  Find My Deal
                </button>
              </motion.div>
            )}

            {mode === 'image' && (
              <motion.div
                key="image"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
              >
                {!uploadedImage ? (
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-300 ${isDragging
                      ? 'border-cyber-cyan bg-cyber-cyan/10'
                      : 'border-white/20 hover:border-white/40 hover:bg-white/5'
                      }`}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileSelect}
                      className="hidden"
                    />
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center">
                      <Upload className="w-8 h-8 text-cyber-cyan" />
                    </div>
                    <p className="text-white font-medium mb-1">
                      Drop an image or click to upload
                    </p>
                    <p className="text-slate-400 text-sm">
                      Supports JPG, PNG, WebP
                    </p>
                  </div>
                ) : (
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src={uploadedImage}
                      alt="Uploaded"
                      className="w-full h-48 object-cover"
                    />
                    {isScanning && (
                      <div className="absolute inset-0 bg-nebula-purple/20">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyber-cyan to-transparent animate-scan" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="glass-card px-6 py-3 flex items-center gap-3">
                            <div className="w-5 h-5 border-2 border-cyber-cyan border-t-transparent rounded-full animate-spin" />
                            <span className="text-sm font-medium">Scanning with AI...</span>
                          </div>
                        </div>
                      </div>
                    )}
                    <button
                      onClick={clearImage}
                      className="absolute top-2 right-2 p-2 bg-void-black/80 rounded-full hover:bg-void-black transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </motion.div>
            )}

            {mode === 'voice' && (
              <motion.div
                key="voice"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
                className="text-center py-8"
              >
                <button
                  onClick={toggleVoice}
                  className={`relative w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-300 ${isListening
                    ? 'bg-plasma-pink/20 shadow-glow-pink'
                    : 'bg-white/5 hover:bg-white/10'
                    }`}
                >
                  <Mic className={`w-8 h-8 ${isListening ? 'text-plasma-pink' : 'text-slate-400'}`} />
                  {isListening && (
                    <>
                      <span className="absolute inset-0 rounded-full bg-plasma-pink/20 animate-ping" />
                      <span className="absolute -inset-4 rounded-full border border-plasma-pink/30 animate-pulse" />
                    </>
                  )}
                </button>
                <p className="text-white font-medium mb-2">
                  {isListening ? 'Listening...' : 'Tap to speak'}
                </p>
                <p className="text-slate-400 text-sm">
                  {isListening ? 'Say something like "Find Sony headphones"' : 'Try voice search'}
                </p>

                {/* Waveform */}
                {isListening && (
                  <div className="flex items-center justify-center gap-1 mt-6 h-12">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-plasma-pink rounded-full animate-wave"
                        style={{
                          height: '20%',
                          animationDelay: `${i * 50}ms`,
                          animationDuration: `${400 + Math.random() * 400}ms`,
                        }}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
