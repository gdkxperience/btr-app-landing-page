export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-12 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-lg font-light text-gray-900 mb-4">BTR</h3>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              Платформа за откриване на талантливи майстори в света на красотата.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-4">Разгледай</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Категории</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Майстори</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Портфолио</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-4">За нас</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gray-900 transition-colors">История</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Екип</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Контакти</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-4">Помощ</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Често задавани</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Условия</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Поверителност</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2026 BTR. Всички права запазени.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-600 transition-colors">Instagram</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Facebook</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
