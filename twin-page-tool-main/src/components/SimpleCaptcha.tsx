import { useState } from 'react';
import { CheckCircle, Loader2, RefreshCw, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SimpleCaptchaProps {
  onVerify: (isValid: boolean) => void;
}

const SimpleCaptcha = ({ onVerify }: SimpleCaptchaProps) => {
  const { isRTL } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [answer, setAnswer] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showError, setShowError] = useState(false);

  const generateNewCaptcha = () => {
    const n1 = Math.floor(Math.random() * 10) + 1; // 1-10
    const n2 = Math.floor(Math.random() * 10) + 1; // 1-10
    setNum1(n1);
    setNum2(n2);
    setAnswer('');
    setIsSubmitted(false);
  };

  const handleCaptchaClick = () => {
    if (isValid) return; // Don't open if already verified
    
    setIsLoading(true);
    generateNewCaptcha();
    
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      setShowModal(true);
    }, 500);
  };

  const handleSubmit = () => {
    const userAnswer = parseInt(answer);
    const correctAnswer = num1 + num2;
    
    if (userAnswer === correctAnswer) {
      setIsValid(true);
      setIsSubmitted(true);
      onVerify(true);
      setShowError(false);
      
      // Close modal after short delay
      setTimeout(() => {
        setShowModal(false);
      }, 800);
    } else {
      // Show error message
      setShowError(true);
      setAnswer('');
      
      // Generate new CAPTCHA after showing error
      setTimeout(() => {
        generateNewCaptcha();
        setShowError(false);
      }, 1500);
    }
  };

  const handleRefresh = () => {
    generateNewCaptcha();
    setAnswer('');
    setShowError(false);
  };

  const handleModalClose = () => {
    if (!isValid) {
      setShowModal(false);
      setAnswer('');
      setIsSubmitted(false);
    }
  };

  return (
    <>
      <div 
        className={`flex items-center gap-3 p-4 bg-white rounded border-2 cursor-pointer transition-all hover:border-primary/50 ${isRTL ? 'flex-row-reverse' : ''} ${isValid ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}
        onClick={handleCaptchaClick}
      >
        {isLoading ? (
          <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Loader2 className="h-5 w-5 text-primary animate-spin" />
            <span className="text-sm text-gray-600">
              {isRTL ? 'جاري التحميل...' : 'Loading...'}
            </span>
          </div>
        ) : isValid ? (
          <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium text-green-700">
              {isRTL ? 'تم التحقق' : 'Verified'}
            </span>
          </div>
        ) : (
          <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className="w-5 h-5 border-2 border-gray-400 rounded bg-white flex items-center justify-center">
              {isValid && <CheckCircle className="h-4 w-4 text-green-600" />}
            </div>
            <span className="text-sm text-gray-700 font-medium">
              {isRTL ? 'لست روبوت' : "I'm not a robot"}
            </span>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>reCAPTCHA</span>
            </div>
          </div>
        )}
      </div>

      {/* Math Problem Modal */}
      <Dialog open={showModal} onOpenChange={handleModalClose}>
        <DialogContent className="sm:max-w-md p-0 overflow-hidden">
          <DialogHeader className="px-6 pt-6 pb-4 border-b">
            <DialogTitle className="text-xl font-bold text-gray-900 text-center">
              {isRTL ? 'التحقق من الهوية' : 'Verify You Are Human'}
            </DialogTitle>
          </DialogHeader>
          
          <div className="px-6 py-6">
            {!isSubmitted ? (
              <>
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
                    <span className="text-3xl font-bold text-primary">
                      {num1} + {num2}
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-gray-800 mb-2">
                    {isRTL ? 'ما هو مجموع هذين الرقمين؟' : 'What is the sum of these numbers?'}
                  </p>
                  <p className="text-sm text-gray-500">
                    {isRTL ? 'أدخل الإجابة الصحيحة أدناه' : 'Enter the correct answer below'}
                  </p>
                </div>
                
                <div className="space-y-4">
                  {showError && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-center">
                      <p className="text-sm font-medium text-red-700">
                        {isRTL ? 'إجابة غير صحيحة. جاري تحميل سؤال جديد...' : 'Incorrect answer. Loading new question...'}
                      </p>
                    </div>
                  )}
                  
                  <Input
                    type="number"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && answer) {
                        handleSubmit();
                      }
                    }}
                    placeholder={isRTL ? 'أدخل الإجابة' : 'Enter answer'}
                    className={`h-14 text-center text-2xl font-bold border-2 focus:border-primary ${showError ? 'border-red-300' : ''}`}
                    autoFocus
                    disabled={showError}
                  />
                  
                  <div className="flex gap-3">
                    <Button
                      onClick={handleRefresh}
                      variant="outline"
                      className="flex-1 h-12 border-2"
                      disabled={showError}
                    >
                      <RefreshCw className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                      {isRTL ? 'جديد' : 'New'}
                    </Button>
                    <Button
                      onClick={handleSubmit}
                      disabled={!answer || showError}
                      className="flex-1 h-12 bg-primary hover:bg-primary/90 text-white font-semibold"
                    >
                      {isRTL ? 'إرسال' : 'Submit'}
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
                <p className="text-xl font-bold text-green-700 mb-2">
                  {isRTL ? 'تم التحقق بنجاح!' : 'Verification Successful!'}
                </p>
                <p className="text-sm text-gray-500">
                  {isRTL ? 'يمكنك الآن إرسال النموذج' : 'You can now submit the form'}
                </p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SimpleCaptcha;

