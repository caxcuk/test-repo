export default function App() {
  return (
    <div className="max-w-md mx-auto p-6 bg-slate-50 border border-slate-200 rounded-2xl shadow-lg text-center mt-8">
      <h1 className="text-2xl font-bold text-slate-800 mb-2">
        Мой первый сайт в CMS
      </h1>
      <p className="text-slate-600 text-sm mb-6">
        Кликните на эту кнопку или заголовок, чтобы поменять их свойства в правой панели!
      </p>
      <button className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-5 py-2.5 rounded-xl transition shadow-md shadow-blue-500/20">
        Кнопка действия
      </button>
    </div>
  );
}
