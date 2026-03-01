import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Phone, Mail } from 'lucide-react';
import { supabase } from '../utils/supabase';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([formData]);

      if (error) throw error;

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setErrorMsg(error instanceof Error ? error.message : 'Failed to send message');
      setTimeout(() => setStatus('idle'), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-900">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-400">I'm always interested in new opportunities and connections</p>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : <>
                Send Message
                <Send size={18} />
              </>}
            </button>
          </form>

          {status === 'success' && (
            <div className="mt-6 flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
              <CheckCircle size={20} className="text-emerald-400" />
              <p className="text-emerald-300">Message sent successfully! I'll get back to you soon.</p>
            </div>
          )}

          {status === 'error' && (
            <div className="mt-6 flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
              <AlertCircle size={20} className="text-red-400" />
              <p className="text-red-300">{errorMsg}</p>
            </div>
          )}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <a href="mailto:narendraraysinge26@gmail.com" className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-blue-400/50 transition group">
            <div className="flex items-center gap-3 mb-2">
              <Mail size={18} className="text-blue-400" />
              <p className="text-sm text-gray-400">Email</p>
            </div>
            <p className="text-lg font-semibold text-white group-hover:text-blue-400 transition">narendraraysinge26@gmail.com</p>
          </a>
          <a href="tel:9637634418" className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-blue-400/50 transition group">
            <div className="flex items-center gap-3 mb-2">
              <Phone size={18} className="text-emerald-400" />
              <p className="text-sm text-gray-400">Phone</p>
            </div>
            <p className="text-lg font-semibold text-white group-hover:text-blue-400 transition">+91 9637634418</p>
          </a>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <a href="https://github.com/nraysinge" target="_blank" rel="noopener noreferrer" className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-blue-400/50 transition group">
            <p className="text-sm text-gray-400 mb-2">GitHub</p>
            <p className="text-lg font-semibold text-white group-hover:text-blue-400 transition">github.com/nraysinge</p>
          </a>
          <a href="https://www.linkedin.com/in/narendra-raysinge" target="_blank" rel="noopener noreferrer" className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-blue-400/50 transition group">
            <p className="text-sm text-gray-400 mb-2">LinkedIn</p>
            <p className="text-lg font-semibold text-white group-hover:text-blue-400 transition">linkedin.com/in/narendra-raysinge</p>
          </a>
        </div>
      </div>
    </section>
  );
}
