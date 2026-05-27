/* global React */
const { useState } = React;

// ────────────────────────────────────────────────────────────────
// Tokens
// ────────────────────────────────────────────────────────────────
const C = {
  orange: '#EE4D2D',
  orangeDark: '#E13818',
  red: '#D0011B',
  fg1: '#222222',
  fg2: '#555555',
  fg3: '#8B8B8B',
  fg4: '#BCBCBC',
  border: '#EAEAEA',
  divider: '#F2F2F2',
  bg: '#F5F5F5',
  panvelBlue: '#2C3F8C'
};

// ────────────────────────────────────────────────────────────────
// Panvel wordmark (approximate) — dark blue
// ────────────────────────────────────────────────────────────────
function PanvelLogo({ size = 56 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%', background: '#fff',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 0 0 2px rgba(255,255,255,0.6)'
    }}>
      <div style={{
        fontFamily: 'Arial Black, ShopeeFont, sans-serif',
        fontWeight: 900, color: C.panvelBlue,
        fontSize: size * 0.30, lineHeight: 1, textAlign: 'center',
        letterSpacing: '-0.02em'
      }}>
        <div>Pan<span style={{ color: '#3F58C4' }}>V</span>el</div>
        <div style={{ fontSize: size * 0.10, letterSpacing: '0.06em', marginTop: 2, color: C.panvelBlue, fontWeight: 700 }}>FARMÁCIAS</div>
      </div>
    </div>);

}

// ────────────────────────────────────────────────────────────────
// Storefront hero — real Panvel photo
// ────────────────────────────────────────────────────────────────
function StorefrontHero() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: '#0a1330' }}>
      <img
        src="assets/panvel-storefront.png"
        alt="Panvel Farmácias"
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }} />
      
      {/* gentle scrim so header/search text stays legible */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.05) 35%, rgba(0,0,0,0.25) 100%)' }} />
    </div>);

}

// ────────────────────────────────────────────────────────────────
// Screen 1 — Loja (Panvel store landing, "Comprar" tab)
// ────────────────────────────────────────────────────────────────
function StoreScreen({ onOpenDetails }) {
  return (
    <div style={{ width: '100%', height: '100%', background: '#fff', display: 'flex', flexDirection: 'column', fontFamily: 'Roboto, -apple-system, sans-serif' }}>
      {/* HERO */}
      <div style={{ position: 'relative', height: 268, flexShrink: 0 }}>
        <StorefrontHero />

        {/* top bar: back, search, menu */}
        <div style={{ position: 'absolute', top: 54, left: 0, right: 0, padding: '0 14px', display: 'flex', gap: 10, alignItems: 'center', zIndex: 5 }}>
          <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(0,0,0,0.28)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 18, fontWeight: 600, cursor: 'pointer' }}>‹</div>
          <div style={{ flex: 1, background: 'rgba(255,255,255,0.95)', borderRadius: 18, padding: '7px 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#888" strokeWidth="2" /><path d="m20 20-3.5-3.5" stroke="#888" strokeWidth="2" strokeLinecap="round" /></svg>
            <span style={{ fontSize: 13, color: '#9A9A9A' }}>Buscar na loja</span>
          </div>
          <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(0,0,0,0.28)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 18, fontWeight: 700, cursor: 'pointer', letterSpacing: 1 }}>···</div>
        </div>

        {/* Seller header overlay */}
        <div style={{ position: 'absolute', top: 100, left: 14, right: 14, display: 'flex', gap: 10, alignItems: 'flex-start', zIndex: 5 }}>
          <div style={{ position: 'relative' }}>
            <PanvelLogo size={62} />
            <div style={{
              position: 'absolute', top: 50, left: '50%', transform: 'translateX(-50%)',
              background: C.red, color: '#fff', fontSize: 8.5, fontWeight: 800,
              padding: '2px 6px', borderRadius: 2, whiteSpace: 'nowrap'
            }}>Lojas Oficiais</div>
          </div>
          <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
            <div onClick={onOpenDetails} style={{ display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}>
              <span style={{ color: '#fff', fontSize: 17, fontWeight: 700, textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>Panvel Farmácias</span>
              <span style={{ color: '#fff', fontSize: 14, opacity: 0.95 }}>›</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6, color: '#fff', fontSize: 12, textShadow: '0 1px 3px rgba(0,0,0,0.4)' }}>
              <span style={{ color: '#FFCC00' }}>★</span>
              <span style={{ fontWeight: 600 }}>5.0</span>
              <span style={{ opacity: 0.6 }}>|</span>
              <span>5,8mil Seguidores</span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <button style={{ background: 'transparent', border: '1px solid #fff', color: '#fff', borderRadius: 14, padding: '4px 12px', fontSize: 11, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 3 }}>
              <span style={{ fontSize: 13, marginTop: -1 }}>+</span> Seguir
            </button>
            <button style={{ background: 'transparent', border: '1px solid #fff', color: '#fff', borderRadius: 14, padding: '4px 12px', fontSize: 11, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ fontSize: 11 }}>💬</span> Chat
            </button>
          </div>
        </div>

        {/* Videos strip */}
        <div style={{ position: 'absolute', bottom: 12, left: 14, right: 14, display: 'flex', alignItems: 'center', gap: 6, color: '#fff', fontSize: 12, textShadow: '0 1px 3px rgba(0,0,0,0.4)', zIndex: 5 }}>
          <div style={{ width: 18, height: 18, borderRadius: 4, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 800 }}>S</div>
          <span style={{ fontWeight: 500 }}>Vídeos de Produtos</span>
          <span style={{ marginLeft: 'auto', opacity: 0.95 }}>100k+ Visualizações</span>
          <span style={{ opacity: 0.95 }}>›</span>
        </div>
      </div>

      {/* TABS */}
      <div style={{ display: 'flex', borderBottom: `1px solid ${C.divider}`, background: '#fff', flexShrink: 0 }}>
        {[
        { k: 'comprar', label: 'Comprar', active: true },
        { k: 'produtos', label: 'Produtos' },
        { k: 'categorias', label: 'Categorias' }].
        map((t) =>
        <div key={t.k} style={{ flex: 1, position: 'relative', padding: '14px 0 12px', textAlign: 'center', cursor: 'pointer' }}>
            <span style={{ color: t.active ? C.orange : C.fg1, fontWeight: t.active ? 700 : 500, fontSize: 14 }}>{t.label}</span>
            {t.badge &&
          <span style={{ position: 'absolute', top: 4, right: '22%', background: C.red, color: '#fff', fontSize: 8.5, fontWeight: 700, padding: '1px 5px', borderRadius: 4 }}>{t.badge}</span>
          }
            {t.active && <div style={{ position: 'absolute', bottom: -1, left: '32%', right: '32%', height: 2.5, background: C.orange, borderRadius: 2 }} />}
          </div>
        )}
      </div>

      {/* SCROLL CONTENT */}
      <div style={{ flex: 1, overflowY: 'auto', background: C.bg }}>

        {/* Recomendado */}
        <Section title="Recomendado para você" cta="Ver Mais">
          <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4, scrollbarWidth: 'none' }}>
            {RECO.map((p) => <RecoCard key={p.id} p={p} />)}
          </div>
        </Section>

        {/* Mães banner — fixed image */}
        <div style={{ margin: '10px 12px 0', borderRadius: 8, overflow: 'hidden', position: 'relative', background: '#6E1320' }}>
          <img src="v3/assets/banner-dia-das-maes.png" alt="Dia das Mães PanVel" style={{ display: 'block', width: '100%', height: 'auto' }} />
        </div>

        {/* Maiores Vendas */}
        <div style={{ background: '#fff', margin: '10px 12px 0', borderRadius: 8, padding: '14px 12px 12px' }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: C.fg1, marginBottom: 10 }}>Maiores Vendas</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {TOP_SALES.map((p) => <RecoCard key={p.id} p={p} fullWidth />)}
          </div>
        </div>
        <div style={{ height: 16 }} />
      </div>
    </div>);

}

function Section({ title, cta, children }) {
  return (
    <div style={{ background: '#fff', margin: '10px 12px 0', borderRadius: 8, padding: '14px 12px 12px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
        <div style={{ flex: 1, fontSize: 15, fontWeight: 700, color: C.fg1 }}>{title}</div>
        {cta &&
        <div style={{ color: C.orange, fontSize: 12, fontWeight: 500, display: 'flex', alignItems: 'center', gap: 2, cursor: 'pointer' }}>
            {cta} <span style={{ fontSize: 13 }}>›</span>
          </div>
        }
      </div>
      {children}
    </div>);

}

const TOP_SALES = [
{
  id: 'ts1', name: 'Lenços Umedecidos Huggies Recém-Nascido Sem Fragrância',
  price: '39,90', rating: '5.0', sold: '1mil+',
  color: '#EAF3FB', image: 'v3/assets/huggies-recem-nascido.png'
},
{
  id: 'ts2', name: 'Lenços Umedecidos Pampers Cuidado de Bebê 576 Unidades',
  price: '131,00', pix: true, disc: '-5%', rating: '4.9', sold: '681',
  color: '#E0F2EE', image: 'v3/assets/pampers-cuidado-bebe.png'
}];


const RECO = [
{
  id: 1, name: 'Creme Eucerin Anti-Pigment Antimanchas',
  price: '199,50', pix: true, disc: '-5%', rating: '5.0', sold: '60',
  color: '#EFE0D0', tag: 'Eucerin', tagSubtitle: 'Anti-Pigment',
  image: 'v3/assets/eucerin-anti-pigment.png'
},
{
  id: 2, name: 'Aparelho Depilatório Gillette Venus Pele Sensível',
  price: '23,00', rating: '4.9', sold: '104',
  color: '#D8F0E8', tag: 'Venus', tagSubtitle: 'Pele Sensível',
  image: 'v3/assets/venus-pele-sensivel.png'
},
{
  id: 3, name: 'Protetor Solar Anthelios XL Protect FPS60 40g La Roche-Posay',
  price: '95,00', rating: '5.0', sold: '24',
  color: '#FFE6CC', tag: 'La Roche', tagSubtitle: 'Anthelios 60',
  image: 'v3/assets/la-roche-anthelios-xl.png'
}];


function RecoCard({ p, fullWidth }) {
  return (
    <div style={{ width: fullWidth ? '100%' : 160, flexShrink: 0, background: '#fff', borderRadius: 6, border: `1px solid ${C.border}`, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      {/* image */}
      <div style={{ height: fullWidth ? 180 : 160, background: p.color, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        {p.image ? (
          <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: fullWidth ? 'cover' : 'contain', padding: fullWidth ? 0 : 8 }} />
        ) : (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'Arial Black, sans-serif', fontWeight: 900, fontSize: 18, color: '#7B3A1A', letterSpacing: '-0.02em' }}>{p.tag}</div>
            <div style={{ fontSize: 9, color: '#7B3A1A', opacity: 0.7, marginTop: 2 }}>{p.tagSubtitle}</div>
          </div>
        )}
      </div>
      <div style={{ padding: '6px 8px 8px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 4 }}>
          <div style={{ fontSize: 12, color: C.fg1, lineHeight: 1.3, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{p.name}</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 6 }}>
          <span style={{ color: C.orange, fontSize: 11, fontWeight: 700 }}>R$</span>
          <span style={{ color: C.orange, fontSize: 16, fontWeight: 800 }}>{p.price.split(',')[0]},<span style={{ fontSize: 12 }}>{p.price.split(',')[1]}</span></span>
          {p.pix && <span style={{ fontSize: 9, color: C.fg3 }}>no Pix</span>}
          {p.disc && <span style={{ marginLeft: 'auto', background: '#FFE2DA', color: C.orange, fontSize: 9, fontWeight: 700, padding: '1px 4px', borderRadius: 2 }}>{p.disc}</span>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 6, fontSize: 10, color: C.fg2 }}>
          <span style={{ background: '#FFF6E8', border: '1px solid #FFD080', color: '#E89B00', padding: '1px 4px', borderRadius: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
            <span style={{ color: '#FFAA00' }}>★</span><span style={{ fontWeight: 600, color: C.fg2 }}>{p.rating}</span>
          </span>
          <span style={{ color: C.fg3 }}>|</span>
          <span>{p.sold} Vendido(s)</span>
        </div>
      </div>
    </div>);

}

function PampersCard({ variant }) {
  const accent = variant === 'green' ? '#5BA886' : '#5AA7D8';
  return (
    <div style={{ background: '#fff', border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden', height: 160, position: 'relative' }}>
      {/* top yellow bar */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 22, background: '#F4D44A', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 6px' }}>
        <div style={{ fontFamily: 'Arial Black, sans-serif', fontSize: 10, fontWeight: 900, color: '#2D2D2D', letterSpacing: '-0.02em' }}>LEVE 4, PAGUE 3</div>
        <div style={{ background: '#fff', color: '#2D2D2D', fontSize: 9, fontWeight: 800, padding: '1px 4px', borderRadius: 2 }}>48</div>
      </div>
      {/* package body */}
      <div style={{ position: 'absolute', top: 22, left: 0, right: 0, bottom: 0, background: `linear-gradient(180deg, ${accent} 0%, ${accent}CC 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', color: '#fff' }}>
          <div style={{ fontFamily: 'cursive, Georgia, serif', fontWeight: 700, fontSize: 22, fontStyle: 'italic', letterSpacing: '-0.02em' }}>Pampers<span style={{ fontSize: 14 }}>.</span></div>
          <div style={{ fontSize: 9, fontWeight: 600, opacity: 0.95, marginTop: 4 }}>Lenços Umedecidos</div>
        </div>
      </div>
    </div>);

}

// ────────────────────────────────────────────────────────────────
// Screen 2 — Detalhes da Loja
// ────────────────────────────────────────────────────────────────
const DESC_FULL_LINES = [
'Razão Social: DIMED S/A - DISTRIBUIDORA DE MEDICAMENTOS',
'CNPJ: 92.665.611/0080-70',
'Endereço: Panvel Filial 91 | Rua Santos Dumont, 856 - Centro | Pelotas/RS | 96020-380',
'Telefone: (53) 99950-5659',
'Horário de Funcionamento: Seg. a Sab. das 7h às 22h; Domingos e Feriados das 8h às 22h',
'',
'Farmacêutico RT: Daniela de Bittencourt Maia',
'Registro no Conselho (CRF/RS): 589427',
'Alvará Sanitário (CMVS/VISA): 355030801-477-002443-1-7 | AFE: 7239474'];


function DetailsScreen({ onBack, onSeeMore }) {
  return (
    <div style={{ width: '100%', height: '100%', background: '#fff', display: 'flex', flexDirection: 'column', fontFamily: 'Roboto, -apple-system, sans-serif' }}>
      {/* nav bar */}
      <div style={{ height: 44, display: 'flex', alignItems: 'center', padding: '0 14px', background: '#fff', borderBottom: `1px solid ${C.divider}`, flexShrink: 0, marginTop: 54 }}>
        <div onClick={onBack} style={{ width: 28, cursor: 'pointer', color: C.orange, fontSize: 22, fontWeight: 400, marginTop: -2 }}>←</div>
        <div style={{ flex: 1, textAlign: 'center', fontSize: 17, fontWeight: 600, color: C.fg1, marginLeft: -28 }}>Detalhes da Loja</div>
      </div>

      {/* content */}
      <div style={{ flex: 1, overflowY: 'auto', background: '#fff' }}>
        {/* seller card */}
        <div style={{ padding: '18px 18px 16px', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
          <div style={{ position: 'relative', flexShrink: 0 }}>
            <PanvelLogo size={64} />
            <div style={{
              position: 'absolute', top: 56, left: '50%', transform: 'translateX(-50%)',
              background: C.red, color: '#fff', fontSize: 9, fontWeight: 800,
              padding: '2px 7px', borderRadius: 2, whiteSpace: 'nowrap'
            }}>Lojas Oficiais</div>
          </div>
          <div style={{ flex: 1, paddingTop: 2 }}>
            <div style={{ fontSize: 17, fontWeight: 600, color: C.fg1 }}>Panvel Farmácias</div>
            <div style={{ fontSize: 13, color: C.fg3, marginTop: 4 }}>Ativo há 3 minutos</div>
            <div style={{ fontSize: 13, color: C.fg1, marginTop: 18, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span>Seguidores <span style={{ color: C.orange, fontWeight: 500 }}>5,8mil</span></span>
              <span style={{ color: C.fg4 }}>|</span>
              <span>Seguindo <span style={{ color: C.orange, fontWeight: 500 }}>1</span></span>
            </div>
          </div>
        </div>

        <div style={{ height: 6, background: C.divider }} />

        <Row icon={<StarIcon />} label="Avaliação">
          <span style={{ color: C.orange, fontWeight: 600 }}>5,0 de 5</span>
          <span style={{ color: C.fg3, marginLeft: 8 }}>(14,8mil Avaliações)</span>
          <span style={{ marginLeft: 'auto', color: C.fg3, fontSize: 16 }}>›</span>
        </Row>
        <Divider />
        <Row icon={<ChatIcon />} label="Taxa de Resposta">
          <span style={{ color: C.orange, fontWeight: 600 }}>78%</span>
          <span style={{ color: C.fg3, marginLeft: 8 }}>(Dentro de horas)</span>
          <span style={{ marginLeft: 6, color: C.fg4, border: `1px solid ${C.fg4}`, borderRadius: '50%', width: 13, height: 13, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 9 }}>?</span>
        </Row>
        <Divider />
        <Row icon={<ShopIcon />} label="Produtos">
          <span style={{ color: C.orange, fontWeight: 600 }}>1,6mil</span>
        </Row>
        <Divider />
        <Row icon={<UserIcon />} label="Aderiu">
          <span style={{ color: C.orange, fontWeight: 600 }}>40 Semanas</span>
        </Row>
        <Divider />

        {/* Descrição — REGULATORY INFO */}
        <div style={{ padding: '14px 16px 16px', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
          <div style={{ width: 22, flexShrink: 0, marginTop: 2 }}><DocIcon /></div>
          <div style={{ width: 92, flexShrink: 0, fontSize: 14, color: C.fg1, marginTop: 2 }}>Descrição</div>
          <div style={{ flex: 1, fontSize: 13, color: C.fg1, lineHeight: 1.45, minWidth: 0 }}>
            {/* Truncated — first 3 lines (regulatory header) */}
            <div>{DESC_FULL_LINES[0]}</div>
            <div>{DESC_FULL_LINES[1]}</div>
            <div style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
              {DESC_FULL_LINES[2]}
            </div>
            <div style={{ textAlign: 'right', marginTop: 2 }}>
              <span onClick={onSeeMore} style={{ color: C.orange, fontWeight: 500, cursor: 'pointer' }}>Ver Mais</span>
            </div>
          </div>
        </div>
        <div style={{ height: 6, background: C.divider }} />

        <Row icon={<PinIcon />} label="Link da loja">
          <span style={{ color: C.orange, fontWeight: 500, fontSize: 13 }}>shopee.com.br/panvelfarmacias</span>
        </Row>
        <Divider />
        <Row icon={<ShieldIcon />} label="Contas verificadas">
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <VerifBadge color="#26AA99" glyph={<svg width="11" height="14" viewBox="0 0 12 16" fill="#fff"><rect x="1.5" y="1" width="9" height="14" rx="2" /></svg>} />
            <VerifBadge color="#FF6B8E" glyph={<svg width="12" height="9" viewBox="0 0 14 10" fill="#fff"><rect x="1" y="1" width="12" height="8" rx="1" /><path d="M1 2l6 4 6-4" stroke="#FF6B8E" strokeWidth="0.8" fill="none" /></svg>} />
            <VerifBadge color="#BFBFBF" glyph={<span style={{ color: '#fff', fontWeight: 900, fontSize: 13, fontFamily: 'Arial' }}>f</span>} />
          </div>
        </Row>
      </div>

      {/* sticky CTA */}
      <div style={{ background: '#fff', padding: '8px 12px 6px', flexShrink: 0, marginBottom: 34 }}>
        <button style={{ width: '100%', background: C.orange, color: '#fff', border: 'none', padding: '13px 0', borderRadius: 3, fontSize: 15, fontWeight: 500, cursor: 'pointer' }}>
          Ver Todos os Produtos
        </button>
      </div>
    </div>);

}

function Row({ icon, label, children }) {
  return (
    <div style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12, background: '#fff' }}>
      <div style={{ width: 22, flexShrink: 0 }}>{icon}</div>
      <div style={{ width: 92, flexShrink: 0, fontSize: 14, color: C.fg1 }}>{label}</div>
      <div style={{ flex: 1, fontSize: 13, color: C.fg2, display: 'flex', alignItems: 'center', minWidth: 0 }}>
        {children}
      </div>
    </div>);

}

function Divider() {
  return <div style={{ height: 1, background: C.divider, marginLeft: 50 }} />;
}

function VerifBadge({ color, glyph }) {
  return (
    <div style={{ width: 22, height: 22, borderRadius: 4, background: color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {glyph}
    </div>);

}

// Icons
function StarIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.6"><path d="M12 3l2.8 5.7 6.3.9-4.5 4.4 1.1 6.3L12 17.4l-5.6 3 1-6.4-4.5-4.4 6.3-.9L12 3z" /></svg>;
}
function ChatIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.6"><path d="M4 5h16v11H8l-4 4V5z" /></svg>;
}
function ShopIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.6"><path d="M4 8h16l-1 12H5L4 8z" /><path d="M8 8V5a4 4 0 018 0v3" /></svg>;
}
function UserIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.6"><circle cx="12" cy="8" r="3.5" /><path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7" /></svg>;
}
function DocIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.6"><rect x="5" y="3" width="14" height="18" rx="1" /><path d="M8 8h8M8 12h8M8 16h5" /></svg>;
}
function PinIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.6"><path d="M12 21s7-7.5 7-12a7 7 0 10-14 0c0 4.5 7 12 7 12z" /><circle cx="12" cy="9" r="2.5" /></svg>;
}
function ShieldIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.6"><path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" /><path d="M9 12l2 2 4-4" /></svg>;
}

// ────────────────────────────────────────────────────────────────
// Modal — Ver Mais (matches IMG_0532)
// ────────────────────────────────────────────────────────────────
function DescriptionModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 100,
      background: 'rgba(0,0,0,0.45)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 20, fontFamily: 'Roboto, -apple-system, sans-serif',
      animation: 'mfadein 0.18s ease-out'
    }}>
      <style>{`@keyframes mfadein { from { opacity: 0 } to { opacity: 1 } }`}</style>
      <div style={{
        width: '100%', maxWidth: 340, background: '#fff', borderRadius: 6,
        padding: '24px 20px 4px', maxHeight: '70%', overflowY: 'auto',
        display: 'flex', flexDirection: 'column'
      }}>
        <div style={{ fontSize: 14, color: C.fg1, lineHeight: 1.55 }}>
          {DESC_FULL_LINES.map((ln, i) =>
          <div key={i} style={{ minHeight: ln === '' ? 12 : undefined }}>{ln}</div>
          )}
        </div>
        <div style={{ marginTop: 24, textAlign: 'center' }}>
          <button onClick={onClose} style={{
            background: 'transparent', border: 'none', color: C.orange,
            fontSize: 16, fontWeight: 500, cursor: 'pointer', padding: '14px 32px',
            width: '100%'
          }}>Fechar

          </button>
        </div>
      </div>
    </div>);

}

window.PanvelApp = { StoreScreen, DetailsScreen, DescriptionModal, PanvelLogo, C };