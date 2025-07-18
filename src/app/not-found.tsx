import type {Metadata} from "next";
import Link from "next/link";
import '@/styles/pages/NotFound.scss'

export const metadata: Metadata = {
  title: 'Страница не найдена | 404',
  description: "К сожалению, запрашиваемая страница не найдена. Вернитесь на главную страницу.",
};

export default function NotFound() {
  return (<div className="not-found-page">
    <div className="not-found-container">
      <div className="error-code">404</div>
      <h1>Страница не найдена</h1>
      <p>К сожалению, страница, которую вы ищете, не существует или была перемещена.</p>
      <Link href="/" className="back-button">
        На главную
      </Link>
    </div>
  </div>);
}
