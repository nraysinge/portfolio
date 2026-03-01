export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400">
            Crafted with passion. © 2024 Mayur Koli. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition text-sm">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white transition text-sm">Terms</a>
            <a href="mailto:narendraraysinge26@gmail.com" className="text-gray-400 hover:text-white transition text-sm">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
