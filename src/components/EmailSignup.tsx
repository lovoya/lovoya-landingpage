import { useState, FormEvent } from 'react';
import { Mail, Check } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function EmailSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const { error } = await supabase
        .from('email_signups')
        .insert([{ email }]);

      if (error) {
        if (error.code === '23505') {
          setStatus('error');
          setMessage('This email is already registered');
        } else {
          throw error;
        }
      } else {
        setStatus('success');
        setMessage('Thank you! We\'ll notify you at launch.');
        setEmail('');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
      console.error('Signup error:', error);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              disabled={status === 'loading' || status === 'success'}
              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-[#f87367] focus:outline-none transition-colors text-gray-900 placeholder-gray-400 disabled:bg-gray-50 disabled:cursor-not-allowed"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="px-8 py-4 bg-[#f87367] hover:bg-[#e66359] text-white font-semibold rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
          >
            {status === 'success' ? (
              <>
                <Check className="w-5 h-5" />
                Subscribed
              </>
            ) : status === 'loading' ? (
              'Sending...'
            ) : (
              'Notify me on release'
            )}
          </button>
        </div>
        {message && (
          <p className={`mt-3 text-sm text-center ${status === 'error' ? 'text-red-500' : 'text-green-600'}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
