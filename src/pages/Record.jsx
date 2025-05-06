import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ParkImg from '../assets/12131334.png';
import { FaMicrophone, FaStop, FaDownload, FaChartBar } from 'react-icons/fa';

function Record() {
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState('');
  const [audioBlob, setAudioBlob] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const [audioLevel, setAudioLevel] = useState(0);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const resultsRef = useRef(null);

  // Auto-scroll to results when they appear
  useEffect(() => {
    if (result && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [result]);

  useEffect(() => {
    if (recording) {
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      analyserRef.current = audioContextRef.current.createAnalyser();
      analyserRef.current.fftSize = 32;

      const startAnalyzing = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const source = audioContextRef.current.createMediaStreamSource(stream);
        source.connect(analyserRef.current);
        const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);

        const updateAudioLevel = () => {
          analyserRef.current.getByteFrequencyData(dataArray);
          const level = Math.max(...dataArray) / 255;
          setAudioLevel(level);
          if (recording) requestAnimationFrame(updateAudioLevel);
        };

        updateAudioLevel();
      };

      startAnalyzing();
    }

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, [recording]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (e) => {
        audioChunksRef.current.push(e.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        setAudioBlob(blob);
        const url = URL.createObjectURL(blob);
        setAudioURL(url);
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorderRef.current.start(1000);
      setRecording(true);
      setResult(null);
    } catch (err) {
      alert('Could not access microphone. Please check permissions.');
      console.error('Recording error:', err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setRecording(false);
      setAudioLevel(0);
    }
  };

  const sendToModel = async () => {
    if (!audioBlob) return;

    setAnalyzing(true);
    try {
      const formData = new FormData();
      formData.append('file', audioBlob, 'recording.wav'); 
      console.log('Sending blob of size:', audioBlob.size);
      const response = await fetch('http://127.0.0.1:8000/predict', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error(`API request failed with status ${response.status}`);
      const data = await response.json();

      setResult({
        disease: data.disease || 'Unknown Condition',
        confidence: data.confidence || 0,
        message: data.message || 'Analysis complete',
        details: data.warning || null,
        featureDetails: data.details || null
      });
    } catch (error) {
      console.error('Analysis error:', error);
      setResult({
        disease: 'Analysis Failed',
        confidence: 0,
        message: error.message || 'Please try again',
        details: null
      });
    } finally {
      setAnalyzing(false);
    }
  };

  const downloadAudio = () => {
    if (!audioURL) return;
    const a = document.createElement('a');
    a.href = audioURL;
    a.download = 'recording.wav';
    a.click();
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-start gap-6 p-4 bg-gradient-to-b mt-24"
    >
      <motion.img
        src={ParkImg}
        alt="park img"
        className="w-36 mt-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      />

      <motion.h1
        className="text-3xl font-bold text-white mb-4"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Voice Analysis
      </motion.h1>

      <AnimatePresence>
        {recording && (
          <motion.div
            className="flex items-center gap-2 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-16 h-8 bg-red-100 rounded-full flex items-center justify-center">
              <div className="absolute left-2 w-3 h-3 rounded-full bg-red-500 animate-pulse" />
              <span className="text-red-600 font-medium ml-4">REC</span>
              <div
                className="absolute right-2 w-2 h-6 bg-red-500 rounded-sm"
                style={{ transform: `scaleY(${0.5 + audioLevel})`, transformOrigin: 'bottom' }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-3 px-6 rounded-lg text-white font-bold flex items-center justify-center gap-2 ${
            recording ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'
          }`}
          onClick={recording ? stopRecording : startRecording}
          disabled={analyzing}
        >
          {recording ? (
            <>
              <FaStop className="text-white" />
              Stop Recording
            </>
          ) : (
            <>
              <FaMicrophone className="text-white" />
              Start Recording
            </>
          )}
        </motion.button>

        <AnimatePresence>
          {audioURL && (
            <motion.div
              className="mt-6 space-y-4"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <audio src={audioURL} controls className="w-full" />
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg disabled:bg-green-300 flex items-center justify-center gap-2"
                  onClick={sendToModel}
                  disabled={analyzing || recording}
                >
                  <FaChartBar />
                  {analyzing ? 'Analyzing...' : 'Analyze'}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg flex items-center justify-center gap-2"
                  onClick={downloadAudio}
                  disabled={recording}
                >
                  <FaDownload />
                  Download
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <div ref={resultsRef} className="w-full max-w-md">
        <AnimatePresence>
          {result && (
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md max-h-[70vh] overflow-y-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-xl font-bold text-gray-800 mb-3 sticky top-0 bg-white pb-2">Analysis Results</h2>
              <div className="space-y-4">
                <div className={`p-4 ${result.disease === 'Parkinson' ? 'bg-amber-50' : 'bg-green-50'} rounded-lg`}>
                  <h3 className={`font-bold ${result.disease === 'Parkinson' ? 'text-amber-700' : 'text-green-700'}`}>
                    {result.disease === 'Parkinson' ? '🧠 Parkinson Detected' : '✅ Voice is Healthy'}
                  </h3>
                  <p className="text-gray-700 mt-1">{result.message}</p>
                </div>

                {result.details && (
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-700">Note:</h3>
                    <p className="text-gray-600 text-sm mt-1">{result.details}</p>
                  </div>
                )}

                {result.featureDetails && (
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <h3 className="font-medium text-blue-700">Analysis Details:</h3>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <div className="text-sm text-gray-700">
                        <p className="font-medium">Parkinson Probability:</p>
                        <p>{(result.featureDetails.parkinson_prob * 100).toFixed(1)}%</p>
                      </div>
                      <div className="text-sm text-gray-700">
                        <p className="font-medium">Healthy Probability:</p>
                        <p>{(result.featureDetails.healthy_prob * 100).toFixed(1)}%</p>
                      </div>
                    </div>
                    {result.featureDetails.features_used?.length > 0 && (
                      <div className="mt-2 text-sm">
                        <p className="font-medium text-gray-700">Features Analyzed:</p>
                        <p className="text-gray-600">{result.featureDetails.features_used.join(', ')}</p>
                      </div>
                    )}
                  </div>
                )}

                {result.confidence > 0 && (
                  <div className="pt-2">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Confidence Level</span>
                      <span>{(result.confidence * 100).toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <motion.div
                        className={`h-2.5 rounded-full ${
                          result.confidence < 0.7
                            ? 'bg-yellow-500'
                            : result.disease === 'Parkinson'
                            ? 'bg-gradient-to-r from-amber-400 to-red-500'
                            : 'bg-gradient-to-r from-green-400 to-blue-500'
                        }`}
                        initial={{ width: 0 }}
                        animate={{ width: `${result.confidence * 100}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    </div>
                    {result.confidence < 0.7 && (
                      <p className="text-xs text-yellow-600 mt-1">
                        Low confidence result - try recording a longer sample
                      </p>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default Record;