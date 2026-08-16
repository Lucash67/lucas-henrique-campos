import { toolkit } from '../data/content'

export function Ticker() {
  const items = toolkit.flatMap((group) => group.items.split(' · '))
  const row = [...items, ...items]

  return (
    <div className="ticker" aria-label="Ferramentas em uso">
      <div className="ticker__track">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={`ticker__item ${item === 'React' || item === 'TypeScript' ? 'ticker__item--hot' : ''}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
