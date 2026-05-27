/* global React */
const { useState } = React;
const { PanvelLogo: PLogo, C: SC } = window.PanvelApp;

// ─────────────────────────────────────────────────────────────
// Shared icons
// ─────────────────────────────────────────────────────────────
const Ic = {
  back: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 6 9 12 15 18" /></svg>,
  search: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" strokeLinecap="round" /></svg>,
  camera: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 8h3l2-3h6l2 3h3v11H4z" /><circle cx="12" cy="13" r="3.5" /></svg>,
  cart: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5h2l2.5 11h10L20 8H7" /><circle cx="9" cy="20" r="1.4" /><circle cx="17" cy="20" r="1.4" /></svg>,
  chatBubble: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h16v11H8l-4 4z" /><circle cx="9" cy="10.5" r="0.7" fill="currentColor" /><circle cx="12" cy="10.5" r="0.7" fill="currentColor" /><circle cx="15" cy="10.5" r="0.7" fill="currentColor" /></svg>,
  heart: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" /></svg>,
  share: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="5" cy="12" r="2" /><circle cx="19" cy="5" r="2" /><circle cx="19" cy="19" r="2" /><path d="m7 11 10-5M7 13l10 5" /></svg>,
  more: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.7" /><circle cx="12" cy="12" r="1.7" /><circle cx="19" cy="12" r="1.7" /></svg>,
  whats: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.5A10 10 0 1 0 12 2z" /><path d="M9 8c0-.5.4-1 1-1 .8 0 1 1 1.4 2 .4 1-.5 1.4-.5 1.8 0 .6 1.2 2.5 2.5 3 .3.1.6-.2 1-.6.4-.4 1-.6 1.6-.3.6.3 1.2.6 1.5 1 .3.4 0 1.5-.8 2-.7.5-3.3.7-5.7-1.6C7.6 11.7 8 9 9 8z" fill="#fff" /></svg>,
  caretDown: <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M6 9l6 6 6-6z" /></svg>,
  caretRight: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18" /></svg>,
  filter: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 6h18M6 12h12M10 18h4" /></svg>,
  xCircle: <svg width="18" height="18" viewBox="0 0 24 24" fill="#BFBFBF"><circle cx="12" cy="12" r="10" /><path d="M9 9l6 6M15 9l-6 6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" /></svg>,
  starF: <svg width="13" height="13" viewBox="0 0 24 24" fill="#FFAA00"><path d="M12 3l2.8 5.7 6.3.9-4.5 4.4 1.1 6.3L12 17.4l-5.6 3 1-6.4-4.5-4.4 6.3-.9z" /></svg>,
  home: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3l9 8h-2v9h-5v-6H10v6H5v-9H3z" /></svg>,
  bag: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8h14l-1 12H6z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></svg>,
  live: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"><rect x="3" y="6" width="13" height="12" rx="1" /><path d="m16 11 5-2v6l-5-2z" /></svg>,
  bell: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4z" /><path d="M10 20a2 2 0 0 0 4 0" /></svg>,
  user: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="3.5" /><path d="M4 20c0-3.9 3.6-7 8-7s8 3.1 8 7" /></svg>
};

const ORANGE = '#EE4D2D';
const RED = '#E53935';
const FG1 = '#222';
const FG2 = '#555';
const FG3 = '#9A9A9A';
const FG4 = '#BFBFBF';
const BORDER = '#EAEAEA';
const DIV = '#F2F2F2';

// ─────────────────────────────────────────────────────────────
// HOME — Static reference screenshot with only the search bar clickable
// ─────────────────────────────────────────────────────────────
function HomeScreen({ onSearch }) {
  return (
    <div style={{ width: '100%', height: '100%', background: '#000', position: 'relative', overflow: 'hidden' }}>
      <img
        src="assets/home-shopee.png"
        alt="Shopee home"
        style={{ width: '100%', display: 'block', userSelect: 'none', pointerEvents: 'none' }} />
      
      {/* Clickable hotspot over the "Buscar na Shopee" field */}
      <div
        onClick={onSearch}
        title="Buscar na Shopee"
        style={{
          position: 'absolute',
          top: '5.4%',
          left: '3%',
          width: '70%',
          height: '4.3%',
          cursor: 'pointer',
          borderRadius: 8,
          // soft visual hint that this is the clickable target
          boxShadow: '0 0 0 2px rgba(238,77,45,0.0)',
          transition: 'box-shadow 0.18s ease-out, background 0.18s ease-out',
          background: 'transparent'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 0 0 2px rgba(238,77,45,0.55)';
          e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 0 0 2px rgba(238,77,45,0)';
          e.currentTarget.style.background = 'transparent';
        }} />
      
    </div>);

}

function BadgeIcon({ count, children }) {
  return (
    <div style={{ position: 'relative', color: '#fff', padding: '0 2px' }}>
      {children}
      {count !== undefined &&
      <span style={{ position: 'absolute', top: -4, right: -6, background: '#fff', color: ORANGE, fontSize: 9, fontWeight: 800, padding: '0 4px', borderRadius: 8, minWidth: 14, textAlign: 'center', border: `1px solid ${ORANGE}` }}>{count}</span>
      }
    </div>);

}

function FeedCard({ badge, disc, bg, badges, title, price, pix, image }) {
  return (
    <div style={{ background: '#fff', borderRadius: 6, overflow: 'hidden', border: `1px solid ${BORDER}` }}>
      <div style={{ position: 'relative', aspectRatio: '1 / 1.05', background: bg, overflow: 'hidden' }}>
        {image && <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />}
        {badge && <span style={{ position: 'absolute', top: 6, left: 6, background: 'rgba(0,0,0,0.55)', color: '#fff', fontSize: 9.5, fontWeight: 700, padding: '2px 5px', borderRadius: 3 }}>{badge}</span>}
        {disc && <span style={{ position: 'absolute', top: 6, right: 6, background: '#FFE2DA', color: ORANGE, fontSize: 10, fontWeight: 700, padding: '2px 5px', borderRadius: 3 }}>{disc}</span>}
      </div>
      <div style={{ padding: '6px 8px 8px' }}>
        {badges &&
        <div style={{ display: 'flex', gap: 4, marginBottom: 4, flexWrap: 'wrap' }}>
            {badges.map((b, i) =>
          <span key={i} style={{ background: i === 0 ? RED : i === 1 ? '#fff' : '#FFC107', color: i === 0 ? '#fff' : i === 1 ? ORANGE : '#5B2A1E', border: i === 1 ? `1px solid ${ORANGE}` : 'none', fontSize: 8.5, fontWeight: 700, padding: '1px 4px', borderRadius: 2 }}>{b}</span>
          )}
          </div>
        }
        <div style={{ fontSize: 12, color: FG1, lineHeight: 1.3, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{title}</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 4 }}>
          <span style={{ color: ORANGE, fontSize: 11, fontWeight: 700 }}>R$</span>
          <span style={{ color: ORANGE, fontSize: 15, fontWeight: 800 }}>{price.replace('R$', '')}</span>
          {pix && <span style={{ fontSize: 9, color: FG3 }}>no Pix</span>}
        </div>
      </div>
    </div>);

}

function BottomNav({ active = 'home' }) {
  const items = [
  { k: 'home', icon: Ic.home, label: 'Início' },
  { k: 'ofic', icon: Ic.bag, label: 'Oficiais' },
  { k: 'live', icon: Ic.live, label: 'Live e Vídeo' },
  { k: 'noti', icon: Ic.bell, label: 'Notificações' },
  { k: 'eu', icon: Ic.user, label: 'Eu' }];

  return (
    <div style={{ background: '#fff', borderTop: `1px solid ${DIV}`, padding: '6px 0 30px', display: 'flex', flexShrink: 0 }}>
      {items.map((it) =>
      <div key={it.k} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, color: active === it.k ? ORANGE : FG2 }}>
          {it.icon}
          <span style={{ fontSize: 10, fontWeight: active === it.k ? 600 : 400 }}>{it.label}</span>
        </div>
      )}
    </div>);

}

// ─────────────────────────────────────────────────────────────
// SEARCH — Input with suggestions + keyboard
// ─────────────────────────────────────────────────────────────
function SearchScreen({ onBack, onSubmit }) {
  const [q, setQ] = useState('Dipirona');
  const suggestions = ['dipirona 1g', 'dipirona 500mg', 'dipirona gotas', 'dipirona medley', 'dipirona ems', 'dipirona novalgina', 'dipirona cartela', 'dipirona genérico', 'dipirona monoidratada', 'dipirona caixa'];

  const matches = (sug) => {
    const idx = sug.toLowerCase().indexOf(q.toLowerCase());
    if (idx < 0) return <span>{sug}</span>;
    return (
      <>
        <span style={{ fontWeight: 700 }}>{sug.slice(0, idx + q.length)}</span>
        <span>{sug.slice(idx + q.length)}</span>
      </>);

  };

  return (
    <div style={{ width: '100%', height: '100%', background: '#fff', display: 'flex', flexDirection: 'column', fontFamily: 'Roboto, -apple-system, sans-serif' }}>
      <div style={{ height: 54, flexShrink: 0 }} />
      <div style={{ padding: '6px 12px 10px', display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
        <div onClick={onBack} style={{ color: ORANGE, cursor: 'pointer' }}>{Ic.back}</div>
        <div style={{ flex: 1, border: `1.5px solid ${ORANGE}`, borderRadius: 4, height: 34, display: 'flex', alignItems: 'center', paddingLeft: 10, paddingRight: 0, gap: 8, overflow: 'hidden' }}>
          <span style={{ flex: 1, color: FG1, fontSize: 14 }}>{q}<span style={{ borderLeft: `1.5px solid ${ORANGE}`, marginLeft: 1, height: 18, display: 'inline-block', verticalAlign: 'middle', animation: 'blink 1s steps(2) infinite' }} /></span>
          <style>{`@keyframes blink { 50% { border-color: transparent } }`}</style>
          {q && <div onClick={() => setQ('')} style={{ cursor: 'pointer', padding: '0 4px' }}>{Ic.xCircle}</div>}
          <div onClick={() => onSubmit(q.toLowerCase())} style={{ background: ORANGE, color: '#fff', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 44, cursor: 'pointer' }}>{Ic.search}</div>
        </div>
      </div>
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {suggestions.map((s) =>
        <div key={s} onClick={() => onSubmit(s)} style={{ padding: '13px 16px', borderBottom: `1px solid ${DIV}`, fontSize: 14, color: FG1, cursor: 'pointer' }}>
            {matches(s)}
          </div>
        )}
      </div>
    </div>);

}

// ─────────────────────────────────────────────────────────────
// RESULTS — Fast Delivery (Instant Mart) layout — 4 dipirona cards
// ─────────────────────────────────────────────────────────────
const TURBO_RESULTS = [
{
  id: 'novalgina',
  title: 'Novalgina Dipirona 1g 10 Comprimidos',
  price: '24,90',
  rating: '4.9',
  sold: '1,2mil',
  eta: '1h',
  img: 'assets/novalgina.jpg',
  isPanvel: true // the clickable one
},
{
  id: 'novalgina-flash',
  title: 'Novalgina Flash Dipirona 1g + Cafeína 130mg 8 Comprimidos',
  price: '18,90',
  rating: '4.8',
  sold: '845',
  eta: '1h',
  img: 'assets/med-1.webp'
},
{
  id: 'medley',
  title: 'Dipirona Monoidratada 500mg Medley Genérico 30 Comprimidos',
  price: '12,50',
  rating: '4.7',
  sold: '2,1mil',
  eta: '4h',
  img: 'assets/med-2.webp'
},
{
  id: 'cimed',
  title: 'Dipirona Monoidratada 1g Cimed Genérico 10 Comprimidos',
  price: '9,90',
  rating: '4.6',
  sold: '530',
  eta: '4h',
  img: 'assets/med-3.webp'
}];


function ResultsScreen({ q, onBack, onPdp }) {
  const [tab, setTab] = useState('rel');
  const tabs = [
  { k: 'rel', label: 'Relevância' },
  { k: 'rec', label: 'Mais recentes' },
  { k: 'top', label: 'Mais vendidos' },
  { k: 'price', label: 'Preço', arrows: true }];

  return (
    <div style={{ width: '100%', height: '100%', background: '#F5F5F5', display: 'flex', flexDirection: 'column', fontFamily: 'Roboto, -apple-system, sans-serif' }}>
      <div style={{ height: 44, flexShrink: 0 }} />

      {/* Top bar — back + search input + filter */}
      <div style={{ background: '#fff', padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0, height: 56, boxSizing: 'border-box' }}>
        <div onClick={onBack} style={{ width: 24, height: 24, color: ORANGE, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4L6 12l10 8" /></svg>
        </div>
        <div style={{ flex: 1, height: 36, border: `1px solid ${ORANGE}`, borderRadius: 10, background: '#fff', display: 'flex', alignItems: 'center', padding: '0 8px', gap: 8 }}>
          <span style={{ flex: 1, color: 'rgba(0,0,0,0.87)', fontSize: 14, lineHeight: '16px' }}>{q}</span>
          <div style={{ width: 24, height: 24, color: 'rgba(0,0,0,0.54)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{Ic.camera}</div>
        </div>
        <div style={{ width: 47, height: 28, display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', color: ORANGE }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M3 5h18l-7 9v6l-4-2v-4z" /></svg>
          <span style={{ fontSize: 10, lineHeight: '12px', marginTop: -1 }}>Filtro</span>
        </div>
      </div>

      {/* Sort tabs */}
      <div style={{ display: 'flex', alignItems: 'center', background: '#fff', height: 44, boxShadow: 'inset 0 -0.5px 0 rgba(0,0,0,0.09)', flexShrink: 0 }}>
        {tabs.map((t, i) =>
        <React.Fragment key={t.k}>
            <div onClick={() => setTab(t.k)} style={{ flex: 1, position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', gap: 4 }}>
              <span style={{ fontSize: 13, fontWeight: tab === t.k ? 500 : 400, color: tab === t.k ? ORANGE : 'rgba(0,0,0,0.87)', textAlign: 'center', lineHeight: '16px' }}>{t.label}</span>
              {t.arrows &&
            <svg width="10" height="12" viewBox="0 0 10 12"><path d="M5 0l3 4H2z" fill={tab === t.k ? ORANGE : 'rgba(0,0,0,0.54)'} /><path d="M5 12l3-4H2z" fill="rgba(0,0,0,0.54)" /></svg>
            }
              {tab === t.k && <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 2, background: ORANGE }} />}
            </div>
            {i < tabs.length - 1 && <div style={{ width: 1, height: 12, background: 'rgba(0,0,0,0.09)' }} />}
          </React.Fragment>
        )}
      </div>

      {/* Chip group */}
      <div style={{ background: '#fff', padding: 8, display: 'flex', gap: 8, overflowX: 'auto', scrollbarWidth: 'none', boxShadow: 'inset 0 -0.5px 0 rgba(0,0,0,0.09)', flexShrink: 0 }}>
        <FastDeliveryChip active>Entrega Turbo</FastDeliveryChip>
        <SrpChip>
          <img src="assets/chip-icon-nacional.png" alt="" style={{ height: 20, width: 'auto', display: 'block' }} />
          Nacional
        </SrpChip>
        <SrpChip>
          <img src="assets/chip-icon-mall.png" alt="" style={{ height: 20, width: 'auto', display: 'block' }} />
          Lojas Oficiais
        </SrpChip>
        <SrpChip caret>Enviado de</SrpChip>
        <SrpChip caret>Preço</SrpChip>
      </div>

      {/* Deliver-to box */}
      <div style={{ background: '#fff', padding: 8, display: 'flex', alignItems: 'center', gap: 4, height: 34, boxSizing: 'border-box', flexShrink: 0, boxShadow: 'inset 0 -0.5px 0 rgba(0,0,0,0.09)' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M12 22s7-7.6 7-12.5a7 7 0 10-14 0C5 14.4 12 22 12 22z" fill={ORANGE} />
          <circle cx="12" cy="9.5" r="2.5" fill="#fff" />
        </svg>
        <span style={{ fontSize: 12, fontWeight: 500, color: 'rgba(0,0,0,0.87)', lineHeight: '14px' }}>Entregar em:</span>
        <span style={{ flex: 1, fontSize: 12, color: 'rgba(0,0,0,0.65)', lineHeight: '18px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Rua Luís Coelho, 797</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.65)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18" /></svg>
      </div>

      {/* Grid */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '8px 8px 12px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {TURBO_RESULTS.map((p) =>
          <TurboCard key={p.id} p={p} onClick={p.isPanvel ? () => onPdp(p) : undefined} />
          )}
        </div>
        <div style={{ textAlign: 'center', padding: '16px 0 6px', color: 'rgba(0,0,0,0.4)', fontSize: 11 }}>Esses são todos os resultados na sua região</div>
      </div>
    </div>);

}

// "Fast Delivery" chip — active state: white bg, orange border, orange tick corner badge
function FastDeliveryChip({ children, active, onClick }) {
  return (
    <div onClick={onClick} style={{
      position: 'relative',
      height: 36, padding: '0 8px',
      background: '#fff',
      border: `1px solid ${active ? ORANGE : 'transparent'}`,
      borderRadius: 6,
      display: 'flex', alignItems: 'center', gap: 4,
      flexShrink: 0, cursor: 'pointer', boxSizing: 'border-box'
    }}>
      <img src="assets/chip-icon-turbo.png" alt="" style={{ height: 20, width: 'auto', display: 'block' }} />
      <span style={{ fontSize: 12, fontWeight: 500, color: ORANGE, lineHeight: '14px' }}>{children}</span>
      {/* Orange corner tick (selected indicator) */}
      {active &&
      <div style={{
        position: 'absolute', top: -1, left: -1,
        width: 17, height: 16,
        background: ORANGE,
        borderRadius: '6px 0 8px 0',
        clipPath: 'polygon(0 0, 100% 0, 0 100%)'
      }}>
          <svg width="9" height="7" viewBox="0 0 9 7" style={{ position: 'absolute', top: 1, left: 1 }}>
            <path d="M1 3.5l2 2 5-5" stroke="#fff" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      }
    </div>);

}

// Plain gray chip (Nacional, Shopee Mall, Enviado de, Preço)
function SrpChip({ children, caret }) {
  return (
    <div style={{
      height: 36, padding: '0 8px',
      background: '#F5F5F5', borderRadius: 6,
      display: 'flex', alignItems: 'center', gap: 4,
      flexShrink: 0, cursor: 'pointer', boxSizing: 'border-box',
      fontSize: 12, color: 'rgba(0,0,0,0.87)', lineHeight: '14px'
    }}>
      {children}
      {caret &&
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.26)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 2 }}><polyline points="6 9 12 15 18 9" /></svg>
      }
    </div>);

}

function TurboEtaPill({ eta }) {
  // Approx text width — "1h" / "4h" / "1 hour" / "4 hour" all fit in <= 22px
  const w = 44;
  return (
    <svg width={w} height="14" viewBox={`0 0 ${w} 14`} style={{ display: 'block', flexShrink: 0 }}>
      {/* Flame on the left */}
      <path d="M3.5 2.5C4.05906 2.19675 7 -5.13771e-09 11 0V14C10.3688 14 8.38503 13.8357 7.82597 13.5451C6.13977 12.6733 7.42471 13.4224 6 12.5C5.55816 12.2094 4.44184 11.1805 4 9.5C4 9.5 6.81921 11.2735 7.5 10C8 8.5 6.5 7.5 5 7.5C4.5 7.5 2 8.66065 0 5.5C0 5.5 3.5 6 4.5 5C5.5 4 7.01217 3.29783 8.5 3.5C8.5 3.5 6.73309 1.8 3.5 2.5Z" fill="#26AA99" />
      {/* Pill body (extends to width w) */}
      <path d={`M11 0H${w - 2}C${(w - 0.9).toFixed(1)} 0 ${w} 0.9 ${w} 2V12C${w} 13.1 ${(w - 0.9).toFixed(1)} 14 ${w - 2} 14H11V0Z`} fill="#26AA99" />
      {/* Truck wheels */}
      <path d="M16.9259 11.2238C17.4105 10.7949 17.5404 10.1429 17.2159 9.76765C16.8914 9.39239 16.2355 9.43592 15.7509 9.86489C15.2663 10.2939 15.1364 10.9458 15.4609 11.3211C15.7854 11.6963 16.4413 11.6528 16.9259 11.2238Z" fill="white" />
      <path d="M22.8374 11.2229C23.322 10.7939 23.4519 10.1419 23.1274 9.76668C22.8029 9.39141 22.147 9.43495 21.6624 9.86391C21.1778 10.2929 21.0479 10.9448 21.3724 11.3201C21.6969 11.6954 22.3527 11.6518 22.8374 11.2229Z" fill="white" />
      {/* Truck body */}
      <path d="M22.818 2.56362L21.3902 7.88835H13.9492L14.1271 7.24068H16.0386C16.2189 7.24036 16.3956 7.18922 16.5488 7.093C16.702 6.99678 16.8256 6.85927 16.9059 6.69592C16.9862 6.53256 17.0199 6.34981 17.0032 6.16815C16.9866 5.9865 16.9202 5.81313 16.8117 5.66749C16.7217 5.54625 16.6049 5.44797 16.4707 5.3805C16.3364 5.31303 16.1885 5.27823 16.0386 5.27889H14.648L14.8209 4.63319H18.7046C18.9155 4.632 19.1203 4.56183 19.2886 4.43316C19.4568 4.30449 19.5793 4.12422 19.6379 3.91928C19.678 3.77361 19.6843 3.62054 19.6562 3.47203C19.6281 3.32352 19.5665 3.18358 19.4762 3.06315C19.3858 2.94272 19.2691 2.84506 19.1353 2.77779C19.0015 2.71051 18.8541 2.67546 18.7046 2.67536H15.3467L15.377 2.56362C15.4161 2.41305 15.5 2.27826 15.6173 2.17746C15.7346 2.07667 15.8796 2.01472 16.0328 2H22.4593C22.7486 2.01483 22.9079 2.26599 22.818 2.56362Z" fill="white" />
      <path d="M25.9518 6.81544L24.8504 4.75872C24.8027 4.67496 24.7332 4.60611 24.6494 4.55971C24.5656 4.51332 24.4708 4.49117 24.3754 4.4957H22.9222L21.8472 8.54387H12.6608C12.6101 8.54704 12.5616 8.56605 12.5221 8.59829C12.4825 8.63053 12.4538 8.67439 12.4399 8.72384L12.2611 9.39623C12.2525 9.4161 12.2489 9.43783 12.2507 9.45946C12.2525 9.48108 12.2595 9.50192 12.2713 9.52008C12.283 9.53824 12.2991 9.55315 12.3179 9.56346C12.3368 9.57378 12.3579 9.57917 12.3793 9.57916H13.5521L13.4358 10.0093C13.4208 10.0501 13.4162 10.0941 13.4221 10.1372C13.4281 10.1803 13.4446 10.2212 13.4701 10.2563C13.4956 10.2914 13.5292 10.3195 13.5681 10.3382C13.607 10.3569 13.6498 10.3655 13.6928 10.3633H14.8001C15.1304 9.47929 16.0862 8.84052 16.9354 8.93742C17.6547 9.02048 18.0837 9.61376 17.9664 10.3672H20.7126C21.0429 9.48324 21.9987 8.84447 22.847 8.94137C23.5672 9.02048 23.9972 9.61376 23.878 10.3672H24.779C24.8808 10.3619 24.9783 10.3246 25.0581 10.2604C25.1378 10.1962 25.1957 10.1084 25.2237 10.0093L25.9821 7.14669C26.0139 7.03638 26.003 6.91797 25.9518 6.81544Z" fill="white" />
      <path d="M19.026 3.74855C19.0063 3.81941 18.9641 3.8818 18.9061 3.92624C18.8481 3.97068 18.7773 3.99474 18.7045 3.99476H13.5191C13.4934 3.99481 13.4681 3.98876 13.4451 3.9771C13.4222 3.96544 13.4022 3.9485 13.3869 3.92763C13.3716 3.90676 13.3614 3.88255 13.357 3.85694C13.3526 3.83134 13.3543 3.80505 13.3618 3.78019L13.4595 3.4351C13.4689 3.40018 13.4894 3.36936 13.5178 3.34739C13.5463 3.32541 13.581 3.3135 13.6168 3.31348H18.7045C18.7566 3.31348 18.808 3.32577 18.8547 3.34939C18.9013 3.37301 18.9418 3.4073 18.973 3.44954C19.0042 3.49177 19.0252 3.54079 19.0345 3.5927C19.0437 3.6446 19.0408 3.69797 19.026 3.74855Z" fill="white" />
      <path d="M11.0063 6.39151L11.104 6.04642C11.1135 6.01176 11.1339 5.98119 11.1621 5.9594C11.1903 5.9376 11.2249 5.92579 11.2604 5.92578H16.0393C16.1279 5.92578 16.2129 5.96141 16.2756 6.02483C16.3383 6.08825 16.3735 6.17426 16.3735 6.26395C16.3735 6.35364 16.3383 6.43966 16.2756 6.50308C16.2129 6.5665 16.1279 6.60213 16.0393 6.60213H11.1637C11.1383 6.6022 11.1134 6.59631 11.0907 6.58493C11.068 6.57355 11.0483 6.557 11.033 6.53657C11.0177 6.51614 11.0074 6.4924 11.0028 6.46722C10.9981 6.44205 10.9993 6.41613 11.0063 6.39151Z" fill="white" />
      {/* Time text */}
      <text x="29" y="10.6" fill="white" fontFamily="'Arial Black', Arial, sans-serif" fontSize="8.5" fontWeight="900">{eta}</text>
    </svg>);

}

function TurboCard({ p, onClick }) {
  const clickable = !!onClick;
  return (
    <div onClick={onClick} style={{ background: '#fff', borderRadius: 6, overflow: 'hidden', cursor: clickable ? 'pointer' : 'default' }}>
      {/* image — square */}
      <div style={{ aspectRatio: '1', background: '#fff', position: 'relative' }}>
        <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
      </div>

      {/* text block */}
      <div style={{ padding: 8, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {/* Product info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {/* Name — 2 lines */}
          <div style={{
            fontSize: 12, lineHeight: '14px', color: 'rgba(0,0,0,0.87)',
            height: 28,
            display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'
          }}>{p.title}</div>
          {/* Price */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 2, color: ORANGE }}>
            <span style={{ fontSize: 12, fontWeight: 700, lineHeight: '19px' }}>R$</span>
            <span style={{ fontSize: 16, fontWeight: 600, lineHeight: '20px' }}>{p.price}</span>
          </div>
          {/* Rating + sold */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, height: 12 }}>
            <svg width="12" height="12" viewBox="0 0 14 14" fill="#FFBB00"><path d="M7 1l1.85 3.74L13 5.35l-3 2.93.71 4.13L7 10.36 3.29 12.4 4 8.28 1 5.35l4.15-.61z" /></svg>
            <span style={{ fontSize: 10, lineHeight: '12px', color: 'rgba(0,0,0,0.87)' }}>{p.rating}</span>
            <span style={{ width: 0.5, height: 8, background: 'rgba(0,0,0,0.2)' }} />
            <span style={{ fontSize: 10, lineHeight: '12px', color: 'rgba(0,0,0,0.87)' }}>{p.sold} vendidos</span>
          </div>
        </div>

        {/* EDD row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, height: 16 }}>
          <TurboEtaPill eta={p.eta} />
          <span style={{ width: 0.5, height: 8, background: 'rgba(0,0,0,0.2)' }} />
          {/* Location */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1, minWidth: 0 }}>
            <svg width="8" height="10" viewBox="0 0 8 10" fill="none">
              <path d="M4 9.2C4 9.2 1 6.3 1 4a3 3 0 016 0c0 2.3-3 5.2-3 5.2z" stroke="rgba(0,0,0,0.54)" strokeWidth="0.8" />
              <circle cx="4" cy="4" r="0.8" fill="rgba(0,0,0,0.26)" />
            </svg>
            <span style={{ fontSize: 10, lineHeight: '12px', color: 'rgba(0,0,0,0.54)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>São Paulo</span>
          </div>
          {/* More dots */}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="rgba(0,0,0,0.54)">
            <circle cx="3" cy="8" r="1.3" /><circle cx="8" cy="8" r="1.3" /><circle cx="13" cy="8" r="1.3" />
          </svg>
        </div>
      </div>
    </div>);

}

// ─────────────────────────────────────────────────────────────
// PDP — Product Details Page
// ─────────────────────────────────────────────────────────────
const PDP_DESC_SHORT = `O que é o Analgésico e Antitérmico Novalgina Dipirona 1g 10 Comprimidos?
O Analgésico e Antitérmico Novalgina Dipirona 1g 10 Comprimidos é um medicamento à base de dipirona monoidratada, indicado para o alívio da dor e redução da febre. Sua apresentação em comprimidos é recomendada para adultos e adolescentes acima de 15 anos.`;

const PDP_DESC_FULL = `${PDP_DESC_SHORT}

Para que serve o Analgésico e Antitérmico Novalgina Dipirona 1g 10 Comprimidos?
O Novalgina Dipirona 1g serve para combater a dor e aliviar a febre, inclusive em situações associadas a gripes, resfriados e outras condições. O início de ação ocorre entre 30 e 60 minutos após a ingestão.

Composição do Analgésico e Antitérmico Novalgina Dipirona 1g 10 Comprimidos
Dipirona monoidratada: 1g por comprimido.
Excipientes: consulte a bula do medicamento para verificar a composição completa.

Benefícios do Analgésico e Antitérmico Novalgina Dipirona 1g 10 Comprimidos
Ação analgésica: auxilia no alívio de dores.
Ação antitérmica: ajuda a reduzir a febre.
Indicado para adultos e adolescentes acima de 15 anos.

Modo de uso do Analgésico e Antitérmico Novalgina Dipirona 1g 10 Comprimidos
O comprimido deve ser tomado por via oral, com líquido, aproximadamente de meio a um copo de água.
A posologia indicada é de ½ a 1 comprimido, de 6 em 6 horas, para adultos e adolescentes acima de 15 anos. Siga sempre as orientações da bula e do profissional de saúde.

Advertências ao uso do Analgésico e Antitérmico Novalgina Dipirona 1g 10 Comprimidos
Leia atentamente a bula antes de usar o medicamento.
Não utilize em caso de contraindicação à dipirona ou a qualquer componente da fórmula.
Se os sintomas persistirem, procure orientação médica.
O uso do medicamento pode trazer riscos. Não use sem orientação adequada.

Tamanho do produto
Embalagem com 10 comprimidos.`;

function PdpScreen({ onBack, onOpenStore, onOpenSpec, onBuy }) {
  const [descOpen, setDescOpen] = useState(false);
  return (
    <div style={{ width: '100%', height: '100%', background: '#fff', display: 'flex', flexDirection: 'column', fontFamily: 'Roboto, -apple-system, sans-serif' }}>
      {/* Floating top icons */}
      <div style={{ position: 'absolute', top: 54, left: 0, right: 0, padding: '6px 10px', display: 'flex', alignItems: 'center', gap: 8, zIndex: 5 }}>
        <RoundBtn onClick={onBack}>{Ic.back}</RoundBtn>
        <div style={{ flex: 1 }} />
        <RoundBtn>{Ic.whats}</RoundBtn>
        <RoundBtn>{Ic.share}</RoundBtn>
        <RoundBtn count={2}>{Ic.cart}</RoundBtn>
        <RoundBtn>{Ic.more}</RoundBtn>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', background: '#F5F5F5' }}>
        {/* Product image */}
        <div style={{ background: '#fff', height: 360, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
          <img src="assets/novalgina.jpg" alt="Novalgina Dipirona 1g" style={{ maxWidth: '85%', maxHeight: '90%', objectFit: 'contain' }} />
          <div style={{ position: 'absolute', bottom: 10, right: 14, background: 'rgba(0,0,0,0.06)', borderRadius: 999, padding: '4px 12px', fontSize: 12, color: FG2 }}>1/4</div>
        </div>

        {/* Price block */}
        <div style={{ background: '#fff', padding: '12px 14px 10px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <div style={{ flex: 1 }}>
              <div style={{ color: ORANGE, fontFamily: 'Arial Black, sans-serif' }}>
                <span style={{ fontSize: 14 }}>R$</span>
                <span style={{ fontSize: 26, fontWeight: 900 }}>24,90</span>
              </div>
              <div style={{ fontSize: 12, color: FG2, marginTop: 2 }}>Em até 4x R$6,85 <span style={{ color: FG3 }}>›</span></div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 6 }}>
              <span style={{ fontSize: 12, color: FG2 }}>1,2mil Vendido(s)</span>
              <span style={{ color: FG3 }}>{Ic.heart}</span>
            </div>
          </div>
          {/* Turbo delivery pill */}
          <div style={{ marginTop: 10, display: 'inline-flex', alignItems: 'center', gap: 4, background: 'linear-gradient(90deg, #FF8A4D 0%, #EE4D2D 100%)', color: '#fff', borderRadius: 999, padding: '3px 10px 3px 8px', fontSize: 11, fontWeight: 700 }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" /></svg>
            Entrega Turbo em 1h
          </div>
          <div style={{ marginTop: 10 }}>
            <div style={{ fontSize: 14, color: FG1, lineHeight: 1.3 }}>Novalgina Dipirona 1g 10 Comprimidos</div>
          </div>
        </div>

        {/* Receba em 1h row (replaces frete grátis) */}
        <div style={{ background: '#fff', marginTop: 1, padding: '12px 14px', borderTop: `1px solid ${DIV}`, display: 'flex', alignItems: 'flex-start', gap: 10 }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, flexWrap: 'wrap' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', height: 20, gap: 4,
                background: '#E6F7F3', color: '#1A8978',
                borderRadius: 3, padding: '0 8px 0 6px',
                fontSize: 12, fontWeight: 600, whiteSpace: 'nowrap'
              }}>
                <svg width="14" height="11" viewBox="0 0 24 17" fill="#1A8978">
                  <path d="M2 3h12v9H2z M14 6h5l3 3v3h-8z" />
                  <circle cx="7" cy="14" r="2" fill="#1A8978" stroke="#fff" strokeWidth="1.4" />
                  <circle cx="17" cy="14" r="2" fill="#1A8978" stroke="#fff" strokeWidth="1.4" />
                </svg>
                Receba em 1h
              </div>
              <span style={{ color: FG1 }}>fazendo seu pedido até 17h</span>
            </div>
            <div style={{ fontSize: 12, color: FG2, marginTop: 4 }}>
              Frete grátis <span style={{ color: FG4, textDecoration: 'line-through' }}>R$8,00</span> <span style={{ color: FG1, marginLeft: 2 }}>R$0,00 com cupom</span>
            </div>
          </div>
          <span style={{ color: FG3, marginTop: 4 }}>{Ic.caretRight}</span>
        </div>
        <div style={{ background: '#fff', padding: '10px 14px', borderTop: `1px solid ${DIV}`, display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ color: RED, fontSize: 16 }}>💳</span>
          <div style={{ flex: 1, fontSize: 13, color: FG1 }}>SParcelado: Parcele em até 12x</div>
          <span style={{ color: FG3 }}>{Ic.caretRight}</span>
        </div>

        {/* Reviews */}
        <div style={{ background: '#fff', marginTop: 8, padding: '12px 14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 18, fontWeight: 700, color: FG1 }}>5</span>
            <span>{Ic.starF}</span>
            <span style={{ fontSize: 13, color: FG1 }}>Avaliações do produto <span style={{ color: FG3 }}>(141)</span></span>
            <span style={{ marginLeft: 'auto', color: FG3, fontSize: 12, display: 'flex', alignItems: 'center', gap: 2 }}>Ver mais {Ic.caretRight}</span>
          </div>
          <div style={{ marginTop: 12, paddingTop: 8, borderTop: `1px solid ${DIV}` }}>
            <ReviewItem name="taciana_maria" stars={5} util="1" body="entrega foi ótima, medicamento chegou na minha casa em menos de uma hora" />
            <div style={{ borderTop: `1px solid ${DIV}`, marginTop: 10, paddingTop: 10 }} />
            <ReviewItem name="edilainecampos842" stars={5} util="3" body={<>Custo-benefício: <span style={{ color: FG2 }}>Ótimo</span><br />Parecido com anúncio: <span style={{ color: FG2 }}>Igual</span></>} />
          </div>
        </div>

        {/* Seller card */}
        <div style={{ background: '#fff', marginTop: 8, padding: '14px 14px' }}>
          <div onClick={onOpenStore} style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}>
            <div style={{ position: 'relative' }}>
              <PLogo size={56} />
              <div style={{ position: 'absolute', top: 48, left: '50%', transform: 'translateX(-50%)', background: RED, color: '#fff', fontSize: 8.5, fontWeight: 800, padding: '2px 6px', borderRadius: 2, whiteSpace: 'nowrap' }}>Lojas Oficiais</div>
            </div>
            <div style={{ flex: 1, paddingTop: 2 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: FG1 }}>Panvel Farmácias</div>
              <div style={{ fontSize: 11, color: FG2, marginTop: 4, display: 'flex', alignItems: 'center', gap: 4 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#26AA99', display: 'inline-block' }} />Online
              </div>
            </div>
            <button onClick={(e) => {e.stopPropagation();onOpenStore();}} style={{ background: '#fff', color: ORANGE, border: `1px solid ${ORANGE}`, borderRadius: 3, padding: '5px 14px', fontSize: 12, fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit' }}>Ver loja</button>
          </div>
          <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {[
            { v: '5,0', l: 'Avaliação' },
            { v: '1,6mil', l: 'Produtos' },
            { v: '78%', l: 'Tempo de resposta' }].
            map((s, i, arr) =>
            <React.Fragment key={i}>
                <div style={{ flex: 1, textAlign: 'center' }}>
                  <div style={{ fontSize: 15, fontWeight: 500, color: FG1 }}>{s.v}</div>
                  <div style={{ fontSize: 11, color: FG3, marginTop: 2 }}>{s.l}</div>
                </div>
                {i < arr.length - 1 && <div style={{ width: 1, height: 30, background: DIV }} />}
              </React.Fragment>
            )}
          </div>
        </div>

        {/* Especificação row */}
        <div onClick={onOpenSpec} style={{ background: '#fff', marginTop: 8, padding: '14px 14px', display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
          <div style={{ flex: 1, fontSize: 14, color: FG1 }}>Especificação</div>
          <div style={{ fontSize: 13, color: FG2, maxWidth: '50%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Categoria, Estoque, Fase da V...</div>
          <span style={{ color: FG3 }}>{Ic.caretRight}</span>
        </div>

        {/* Descrição */}
        <div style={{ background: '#fff', marginTop: 1, padding: '14px 14px 8px', borderTop: `1px solid ${DIV}` }}>
          <div style={{ fontSize: 14, color: FG1, marginBottom: 8 }}>Descrição</div>
          <div style={{ fontSize: 13, color: FG1, lineHeight: 1.5, whiteSpace: 'pre-wrap' }}>
            {descOpen ? PDP_DESC_FULL : PDP_DESC_SHORT}
          </div>
          <div onClick={() => setDescOpen((o) => !o)} style={{ textAlign: 'center', padding: '14px 0', color: FG2, fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
            {descOpen ? 'Ver Menos' : 'Ver Mais'}
            <span style={{ display: 'inline-block', transform: descOpen ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}>{Ic.caretDown}</span>
          </div>
        </div>

        {/* Você Também Pode Gostar */}
        <div style={{ marginTop: 8, padding: '12px 12px 4px', background: '#F5F5F5' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <div style={{ flex: 1, height: 1, background: BORDER }} />
            <span style={{ fontSize: 13, color: FG1, fontWeight: 500 }}>Você Também Pode Gostar</span>
            <div style={{ flex: 1, height: 1, background: BORDER }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
            <FeedCard disc="-65%" bg="#EAF3FB" image="v3/assets/huggies-recem-nascido.png" title="Lenços Umedecidos Huggies Recém-Nascido Sem Fragrância" price="89,90" pix />
            <FeedCard disc="-5%" bg="#fff" image="v3/assets/la-roche-hyalu-b5.png" title="Sérum Facial Antirrugas La Roche-Posay Hyalu B5 15ml" price="125,00" pix />
          </div>
        </div>
        <div style={{ height: 80 }} />
      </div>

      {/* Bottom CTA bar */}
      <div style={{ background: '#fff', borderTop: `1px solid ${DIV}`, display: 'flex', alignItems: 'center', padding: '6px 8px 30px', flexShrink: 0, gap: 6 }}>
        <CtaTile color="#fff" stroke={ORANGE}>
          <span style={{ color: ORANGE }}>{Ic.chatBubble}</span>
        </CtaTile>
        <CtaTile color="#fff" stroke={ORANGE}>
          <div style={{ position: 'relative', color: ORANGE }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5h2l2.5 11h10L20 8H7" /><circle cx="9" cy="20" r="1.4" /><circle cx="17" cy="20" r="1.4" /></svg>
            <span style={{ position: 'absolute', top: -2, right: -2, width: 10, height: 10, background: ORANGE, borderRadius: '50%', color: '#fff', fontSize: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>+</span>
          </div>
        </CtaTile>
        <button onClick={onBuy} style={{ flex: 1, background: RED, color: '#fff', border: 'none', height: 44, borderRadius: 3, fontSize: 14, fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit' }}>Compre agora</button>
      </div>
    </div>);

}

function RoundBtn({ children, onClick, count }) {
  return (
    <div onClick={onClick} style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(255,255,255,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: FG1, cursor: onClick ? 'pointer' : 'default', position: 'relative', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
      {children}
      {count !== undefined &&
      <span style={{ position: 'absolute', top: -3, right: -3, background: RED, color: '#fff', fontSize: 9, fontWeight: 700, padding: '0 4px', borderRadius: 8, minWidth: 14, textAlign: 'center' }}>{count}</span>
      }
    </div>);

}

function CtaTile({ color, stroke, children }) {
  return (
    <div style={{ width: 44, height: 44, background: color, border: `1px solid ${stroke}`, borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{children}</div>);

}

function ReviewItem({ name, stars, util, body }) {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#DDD' }} />
        <span style={{ fontSize: 12, color: FG2, fontWeight: 500 }}>{name}</span>
        <span style={{ marginLeft: 'auto', fontSize: 11, color: FG3, display: 'flex', alignItems: 'center', gap: 3 }}>Útil ({util}) 👍</span>
      </div>
      <div style={{ display: 'flex', gap: 1, marginTop: 4 }}>
        {Array.from({ length: stars }).map((_, i) => <span key={i}>{Ic.starF}</span>)}
      </div>
      <div style={{ fontSize: 12, color: FG1, marginTop: 6, lineHeight: 1.4 }}>{body}</div>
    </div>);

}

function MiniCard({ color, title, price, rating, sold, tube, partial }) {
  return (
    <div style={{ width: 110, flexShrink: 0, background: '#fff', borderRadius: 4, border: `1px solid ${BORDER}`, overflow: 'hidden', opacity: partial ? 0.55 : 1 }}>
      <div style={{ height: 110, background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Arial Black, sans-serif', fontWeight: 900, fontSize: 13, color: '#7B3A1A', textAlign: 'center', lineHeight: 1.1 }}>
        {tube && <div>{tube}</div>}
      </div>
      <div style={{ padding: '6px 6px 8px' }}>
        <div style={{ fontSize: 11, color: FG1, lineHeight: 1.3, display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{title}</div>
        <div style={{ color: ORANGE, fontSize: 13, fontWeight: 700, marginTop: 4 }}>R${price}</div>
        {rating &&
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 2, marginTop: 4, fontSize: 9.5, background: '#FFF6E8', border: '1px solid #FFD080', padding: '1px 3px', borderRadius: 2 }}>
            {Ic.starF}<span style={{ color: FG2 }}>{rating}</span>
          </div>
        }
        {sold && <div style={{ fontSize: 10, color: FG3, marginTop: 4 }}>{sold} Vendido(s)</div>}
      </div>
    </div>);

}

// Approximate Panvel Faces pink lip-mask tube
function FacesTube() {
  return (
    <div style={{ width: 110, height: 300, position: 'relative' }}>
      {/* crimped top */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 18, background: 'repeating-linear-gradient(90deg, #F8A2B0 0 4px, #E0768C 4px 8px)', borderRadius: '6px 6px 2px 2px' }} />
      {/* body */}
      <div style={{ position: 'absolute', top: 14, left: 4, right: 4, bottom: 26, background: 'linear-gradient(180deg, #F8A8B6 0%, #F4B5C0 50%, #F8A8B6 100%)', borderRadius: '4px 4px 8px 8px', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 28 }}>
        <div style={{ fontFamily: 'Arial Black, sans-serif', fontWeight: 800, fontSize: 14, color: '#D7263D' }}>Pan<span style={{ color: '#E94560' }}>Vel</span></div>
        <div style={{ fontFamily: 'Arial Black, sans-serif', fontWeight: 900, fontSize: 22, color: '#D7263D', letterSpacing: '-0.02em', fontStyle: 'italic', marginTop: 4 }}>faces</div>
        <div style={{ fontSize: 7, color: '#D7263D', marginTop: 40, writingMode: 'vertical-rl', transform: 'rotate(180deg)', fontWeight: 600 }}>Máscara hidratante labial Marshmallow</div>
        <div style={{ position: 'absolute', bottom: 6, right: 12, fontSize: 8, color: '#D7263D', fontWeight: 700 }}>10 g</div>
      </div>
      {/* cap */}
      <div style={{ position: 'absolute', bottom: 0, left: 8, right: 8, height: 26, background: 'linear-gradient(180deg, #F5F5F0 0%, #DCDCD2 100%)', borderRadius: 4 }} />
    </div>);

}

// ─────────────────────────────────────────────────────────────
// SPEC MODAL — bottom sheet
// ─────────────────────────────────────────────────────────────
const SPEC_ROWS = [
{ k: 'Categoria', v: 'Shopee › Saúde › Suprimentos Médicos › Medicamento de Venda Livre', categoria: true },
{ k: 'Estoque', v: 'Estoque disponível' },
{ k: 'Produto personalizado', v: 'Não' },
{ k: 'Fase da Vida', v: 'Adulto' },
{ k: 'Funções Médicas', v: 'Analgésico' },
{ k: 'Formas de consumo', v: 'Comprimidos' },
{ k: 'País de Origem', v: 'Brasil' },
{ k: 'Peso do Produto', v: '0.030kg' },
{ k: 'Ingrediente', v: 'Dipirona' },
{ k: 'Quantidade', v: '10 Comprimido(s)' },
{ k: 'Nr. do Lote do Produto', v: '7891058001155' },
{ k: 'Código de registro ou notificação da ANVISA', v: '1832603510498' },
{ k: 'Envio de', v: 'São Paulo' }];


function SpecModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: 'absolute', inset: 0, zIndex: 100, background: 'rgba(0,0,0,0.45)', display: 'flex', alignItems: 'flex-end', animation: 'sheetFade .2s ease-out' }}>
      <style>{`@keyframes sheetFade { from { opacity: 0 } to { opacity: 1 } } @keyframes sheetUp { from { transform: translateY(100%) } to { transform: none } }`}</style>
      <div onClick={(e) => e.stopPropagation()} style={{ width: '100%', background: '#fff', borderRadius: '14px 14px 0 0', padding: '18px 0 0', maxHeight: '78%', display: 'flex', flexDirection: 'column', animation: 'sheetUp .25s ease-out' }}>
        <div style={{ textAlign: 'center', fontSize: 15, fontWeight: 600, color: FG1, paddingBottom: 14, borderBottom: `1px solid ${DIV}` }}>Especificação</div>
        <div style={{ flex: 1, overflowY: 'auto', padding: '4px 0' }}>
          {SPEC_ROWS.map((r, i) =>
          <div key={r.k} style={{ display: 'flex', alignItems: 'flex-start', padding: '12px 18px', gap: 14, borderBottom: i < SPEC_ROWS.length - 1 ? `1px solid ${DIV}` : 'none' }}>
              <div style={{ width: 140, flexShrink: 0, fontSize: 13, color: FG2, lineHeight: 1.35 }}>{r.k}</div>
              <div style={{ flex: 1, fontSize: 13, color: r.categoria ? '#0053DE' : FG1, lineHeight: 1.4, wordBreak: 'break-word' }}>{r.v}</div>
              {r.chev && <span style={{ color: FG3, marginTop: 2 }}>{Ic.caretRight}</span>}
            </div>
          )}
        </div>
        <div style={{ padding: '8px 12px 30px', borderTop: `1px solid ${DIV}` }}>
          <button onClick={onClose} style={{ width: '100%', background: RED, color: '#fff', border: 'none', height: 44, borderRadius: 3, fontSize: 15, fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit' }}>Fechar</button>
        </div>
      </div>
    </div>);

}

window.BuyerFlow = { HomeScreen, SearchScreen, ResultsScreen, PdpScreen, SpecModal };