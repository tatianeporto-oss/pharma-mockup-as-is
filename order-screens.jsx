/* global React */
const { PanvelLogo: OrderPLogo } = window.PanvelApp;

// Reused tokens
const O_ORANGE = '#EE4D2D';
const O_GREEN = '#1A8978';
const O_GREEN_BG = '#E8F6F2';
const O_FG1 = '#222';
const O_FG2 = '#555';
const O_FG3 = '#9A9A9A';
const O_FG4 = '#BFBFBF';
const O_DIV = '#F2F2F2';
const O_BORDER = '#EAEAEA';

const OIc = {
  back: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4L6 12l10 8"/></svg>,
  caretRight: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18"/></svg>,
  caretDown: <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M6 9l6 6 6-6z"/></svg>,
  truck: <svg width="14" height="11" viewBox="0 0 24 17" fill="currentColor"><path d="M2 3h12v9H2z M14 6h5l3 3v3h-8z"/><circle cx="7" cy="14" r="2" fill="currentColor" stroke="#fff" strokeWidth="1.4"/><circle cx="17" cy="14" r="2" fill="currentColor" stroke="#fff" strokeWidth="1.4"/></svg>,
  pin: <svg width="18" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22s7-7.6 7-12.5a7 7 0 10-14 0c0 4.9 7 12.5 7 12.5z"/><circle cx="12" cy="9.5" r="2.5" fill="#fff"/></svg>,
  chat: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h16v11H8l-4 4z"/></svg>,
  shop: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"><path d="M4 8h16l-1 12H5z"/><path d="M8 8V5a4 4 0 018 0v3"/></svg>,
  copy: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 00-1-1H5a1 1 0 00-1 1v10a1 1 0 001 1h3"/></svg>,
};

// ─────────────────────────────────────────────────────────────
// CHECKOUT
// ─────────────────────────────────────────────────────────────
function CheckoutScreen({ onBack, onPlaceOrder }) {
  return (
    <div style={{ width: '100%', height: '100%', background: '#F5F5F5', display: 'flex', flexDirection: 'column', fontFamily: 'Roboto, -apple-system, sans-serif' }}>
      <div style={{ height: 54, flexShrink: 0 }}/>

      {/* Top bar */}
      <div style={{ background: '#fff', padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 14, flexShrink: 0, boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}>
        <div onClick={onBack} style={{ color: O_ORANGE, cursor: 'pointer' }}>{OIc.back}</div>
        <div style={{ fontSize: 17, fontWeight: 500, color: O_FG1 }}>Finalizar pedido</div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto' }}>
        {/* Address */}
        <div style={{ background: '#fff', padding: 14, marginTop: 8 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, cursor: 'pointer' }}>
            <span style={{ color: O_ORANGE, marginTop: 2, flexShrink: 0 }}>{OIc.pin}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14, color: O_FG1 }}>
                <span style={{ fontWeight: 600 }}>Renata Ribeiro</span>
                <span style={{ fontSize: 12, color: O_FG3, marginLeft: 6 }}>+55 11 8371-3870</span>
              </div>
              <div style={{ fontSize: 12, color: O_FG1, lineHeight: 1.5, marginTop: 4 }}>
                Rua Teodoro Sampaio, 2700, Pinheiros<br/>São Paulo, São Paulo, 01309001
              </div>
            </div>
            <span style={{ color: O_FG3, marginTop: 4 }}>{OIc.caretRight}</span>
          </div>
          <div style={{ borderTop: `1px solid ${O_DIV}`, marginTop: 12, paddingTop: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 22, height: 16, background: O_ORANGE, borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 8, fontWeight: 800, letterSpacing: '0.04em' }}>CPF</div>
            <div style={{ flex: 1, fontSize: 13, color: O_FG1 }}>CPF</div>
            <div style={{ fontSize: 13, color: O_FG1 }}>111.222.333-44</div>
          </div>
        </div>

        {/* Product */}
        <div style={{ background: '#fff', marginTop: 8, padding: 14 }}>
          <div style={{ fontSize: 14, color: O_FG1, marginBottom: 12, fontWeight: 700 }}>Panvel Farmácias</div>
          <div style={{ display: 'flex', gap: 12 }}>
            <img src="assets/novalgina.jpg" alt="Novalgina" style={{ width: 70, height: 70, objectFit: 'contain', background: '#FAFAFA', borderRadius: 4, flexShrink: 0 }}/>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
              <div style={{ fontSize: 13, color: O_FG1, lineHeight: 1.3, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>Novalgina Dipirona 1g 10 Comprimidos</div>
              <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'baseline', gap: 6 }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: O_FG1 }}>R$24,90</span>
                <span style={{ fontSize: 11, color: O_FG4, textDecoration: 'line-through' }}>R$28,90</span>
                <span style={{ marginLeft: 'auto', fontSize: 12, color: O_FG2 }}>x1</span>
              </div>
            </div>
          </div>
          <div style={{ borderTop: `1px solid ${O_DIV}`, marginTop: 14, paddingTop: 12, display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
            <div style={{ flex: 1, fontSize: 13, color: O_FG1 }}>Mensagem para o Vendedor</div>
            <div style={{ fontSize: 13, color: O_FG3 }}>Deixe uma mensagem</div>
            <span style={{ color: O_FG3 }}>{OIc.caretRight}</span>
          </div>
        </div>

        {/* Shipping option */}
        <div style={{ background: '#fff', marginTop: 8, padding: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
            <div style={{ flex: 1, fontSize: 14, fontWeight: 500, color: O_FG1 }}>Opções de envio</div>
            <span style={{ fontSize: 13, color: O_FG2 }}>Ver tudo</span>
            <span style={{ color: O_FG3, marginLeft: 2 }}>{OIc.caretRight}</span>
          </div>
          <div style={{ border: `1px solid ${O_GREEN}`, background: O_GREEN_BG, borderRadius: 6, padding: '10px 12px 12px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: -1, left: -1, width: 16, height: 16, background: O_GREEN, borderRadius: '6px 0 8px 0', clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}>
              <svg width="8" height="6" viewBox="0 0 8 6" style={{ position: 'absolute', top: 1, left: 1 }}><path d="M1 3l1.5 1.5L7 1" stroke="#fff" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', height: 20, gap: 4, background: O_GREEN, color: '#fff', borderRadius: 3, padding: '0 8px', fontSize: 11, fontWeight: 600, whiteSpace: 'nowrap' }}>
                <span style={{ color: '#fff' }}>{OIc.truck}</span>
                Receba em 1h
              </div>
              <span style={{ marginLeft: 'auto', fontSize: 12, color: O_FG4, textDecoration: 'line-through' }}>R$8,00</span>
              <span style={{ fontSize: 14, fontWeight: 600, color: O_GREEN }}>Grátis</span>
            </div>
            <div style={{ fontSize: 12, color: O_FG1, marginTop: 6 }}>Entrega Turbo</div>
          </div>
        </div>

        {/* Total */}
        <div style={{ background: '#fff', marginTop: 1, padding: '14px', display: 'flex', alignItems: 'center', borderTop: `1px solid ${O_DIV}` }}>
          <div style={{ flex: 1, fontSize: 14, color: O_FG1 }}>Total de 1 Item(s)</div>
          <div style={{ fontSize: 16, fontWeight: 600, color: O_FG1 }}>R$24,90</div>
        </div>

        {/* Vouchers */}
        <div style={{ background: '#fff', marginTop: 8, padding: 14, display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={O_ORANGE} strokeWidth="1.5"><rect x="3" y="6" width="18" height="12" rx="1"/><path d="M3 11h2v2H3M21 11h-2v2h2"/><circle cx="16" cy="12" r="3" fill={O_ORANGE}/></svg>
          <div style={{ flex: 1, fontSize: 14, color: O_FG1 }}>Cupons Shopee</div>
          <div style={{ color: O_GREEN, border: `1px solid ${O_GREEN}`, padding: '2px 6px', borderRadius: 2, fontSize: 11, fontWeight: 500, display: 'flex', alignItems: 'center', gap: 3 }}>
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 8 9 4"/></svg>
            Frete Grátis
          </div>
          <span style={{ color: O_FG3 }}>{OIc.caretRight}</span>
        </div>

        {/* Coins */}
        <div style={{ background: '#fff', marginTop: 1, padding: 14, display: 'flex', alignItems: 'center', gap: 10, borderTop: `1px solid ${O_DIV}` }}>
          <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#FFC700', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Arial Black, sans-serif', color: '#fff', fontSize: 13 }}>S</div>
          <div style={{ flex: 1, fontSize: 14, color: O_FG1 }}>Resgatar 1000 Shopee Moedas</div>
          <span style={{ fontSize: 12, color: O_FG3 }}>−R$1,00</span>
          <div style={{ width: 34, height: 18, background: '#E0E0E0', borderRadius: 99, position: 'relative', cursor: 'pointer' }}>
            <div style={{ position: 'absolute', top: 1, left: 1, width: 16, height: 16, background: '#fff', borderRadius: '50%', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }}/>
          </div>
        </div>

        {/* Payment */}
        <div style={{ background: '#fff', marginTop: 8, padding: 14, display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
          <div style={{ flex: 1, fontSize: 14, fontWeight: 500, color: O_FG1 }}>Métodos de pagamento</div>
          <span style={{ fontSize: 13, color: O_FG2 }}>Ver tudo</span>
          <span style={{ color: O_FG3, marginLeft: 2 }}>{OIc.caretRight}</span>
        </div>
        <div style={{ background: '#fff', padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10, borderTop: `1px solid ${O_DIV}` }}>
          <div style={{ width: 32, height: 22, background: '#3FB7AF', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: 11 }}>Pix</div>
          <div style={{ flex: 1, fontSize: 14, color: O_FG1 }}>Pix</div>
          <div style={{ width: 18, height: 18, borderRadius: '50%', border: `2px solid ${O_ORANGE}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 9, height: 9, borderRadius: '50%', background: O_ORANGE }}/>
          </div>
        </div>

        <div style={{ height: 24 }}/>
      </div>

      {/* Bottom bar */}
      <div style={{ background: '#fff', borderTop: `1px solid ${O_DIV}`, padding: '8px 12px 30px', display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
        <div style={{ flex: 1, textAlign: 'right' }}>
          <div style={{ fontSize: 13, color: O_FG1 }}>Pagar <span style={{ color: O_ORANGE, fontWeight: 700, fontSize: 18, marginLeft: 2 }}>R$24,90</span></div>
          <div style={{ fontSize: 11, color: O_FG2, marginTop: 2 }}>Economizou <span style={{ color: O_ORANGE }}>R$8,00</span></div>
        </div>
        <button onClick={onPlaceOrder} style={{ background: O_ORANGE, color: '#fff', border: 'none', height: 44, borderRadius: 3, padding: '0 22px', fontSize: 14, fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit' }}>Fazer pedido</button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// ORDER DETAILS — post-purchase tracking
// ─────────────────────────────────────────────────────────────
function OrderDetailsScreen({ onBack, onOpenStore }) {
  return (
    <div style={{ width: '100%', height: '100%', background: '#F5F5F5', display: 'flex', flexDirection: 'column', fontFamily: 'Roboto, -apple-system, sans-serif' }}>
      <div style={{ height: 54, flexShrink: 0 }}/>

      {/* Nav bar */}
      <div style={{ background: '#fff', padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 14, flexShrink: 0 }}>
        <div onClick={onBack} style={{ color: O_ORANGE, cursor: 'pointer' }}>{OIc.back}</div>
        <div style={{ fontSize: 17, fontWeight: 500, color: O_FG1 }}>Detalhes do pedido</div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto' }}>
        {/* Status banner */}
        <div style={{ background: O_GREEN, color: '#fff', padding: '14px 16px' }}>
          <div style={{ fontSize: 15, fontWeight: 600 }}>Data estimada de entrega: 19 mai às 19:00</div>
          <div style={{ fontSize: 12, marginTop: 4, opacity: 0.95 }}>Seu pedido foi recebido e está em preparação</div>
        </div>

        {/* Shipping info */}
        <div style={{ background: '#fff', marginTop: 8, padding: 14, cursor: 'pointer' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ flex: 1, fontSize: 14, fontWeight: 700, color: O_FG1 }}>Informações do envio</div>
            <span style={{ color: O_FG3 }}>{OIc.caretRight}</span>
          </div>
          <div style={{ fontSize: 12, color: O_FG2, marginTop: 4 }}>Entrega Turbo: BR2652035786436</div>
          <div style={{ marginTop: 12, display: 'flex', gap: 10 }}>
            <span style={{ color: O_GREEN, flexShrink: 0, marginTop: 1 }}>{OIc.truck}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, color: O_GREEN, lineHeight: 1.4 }}>O vendedor está se preparando para enviar seu pac…</div>
              <div style={{ fontSize: 11, color: O_FG3, marginTop: 2 }}>19-05-2026 14:11</div>
            </div>
          </div>
        </div>

        {/* Delivery info */}
        <div style={{ background: '#fff', marginTop: 8, padding: 14 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: O_FG1, marginBottom: 10 }}>Informações da entrega</div>
          <div style={{ display: 'flex', gap: 8 }}>
            <span style={{ color: O_FG2, flexShrink: 0, marginTop: 2 }}>
              <svg width="14" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s7-7.6 7-12.5a7 7 0 10-14 0c0 4.9 7 12.5 7 12.5z"/><circle cx="12" cy="9.5" r="2.5"/></svg>
            </span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, color: O_FG1, fontWeight: 500 }}>
                Renata Ribeiro <span style={{ fontSize: 12, color: O_FG3, fontWeight: 400, marginLeft: 4 }}>(+55) 11 8371-3870</span>
              </div>
              <div style={{ fontSize: 12, color: O_FG2, lineHeight: 1.5, marginTop: 2 }}>
                Rua Teodoro Sampaio, 2700, Pinheiros, São Paulo… <span style={{ color: O_FG1, fontWeight: 500 }}>Mais</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product card */}
        <div style={{ background: '#fff', marginTop: 8, padding: 14 }}>
          <div onClick={onOpenStore} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12, cursor: onOpenStore ? 'pointer' : 'default' }}>
            <span style={{ color: O_FG2 }}>{OIc.shop}</span>
            <span style={{ fontSize: 13, color: O_FG1, fontWeight: 700 }}>Panvel Farmácias</span>
            <span style={{ color: O_FG3, fontSize: 13 }}>›</span>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <img src="assets/novalgina.jpg" alt="" style={{ width: 64, height: 64, objectFit: 'contain', background: '#FAFAFA', borderRadius: 4, flexShrink: 0 }}/>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
              <div style={{ fontSize: 13, color: O_FG1, lineHeight: 1.4 }}>Novalgina Dipirona 1g 10 Comprimidos</div>
              <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 12, color: O_FG2 }}>x1</span>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                  <span style={{ fontSize: 11, color: O_FG4, textDecoration: 'line-through' }}>R$28,90</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: O_FG1 }}>R$24,90</span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ borderTop: `1px solid ${O_DIV}`, marginTop: 14, paddingTop: 12, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 4 }}>
            <span style={{ fontSize: 13, color: O_FG1 }}>Pedido total: <strong>R$24,90</strong></span>
            <span style={{ color: O_FG3 }}>{OIc.caretDown}</span>
          </div>
        </div>

        {/* Help */}
        <div style={{ background: '#fff', marginTop: 8 }}>
          <div style={{ padding: '14px 14px 10px', fontSize: 14, fontWeight: 700, color: O_FG1 }}>Ajuda com a compra</div>
          <div style={{ padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 12, borderTop: `1px solid ${O_DIV}`, cursor: 'pointer' }}>
            <span style={{ color: O_FG2 }}>{OIc.chat}</span>
            <div style={{ flex: 1, fontSize: 13, color: O_FG1 }}>Falar com Vendedor</div>
            <span style={{ color: O_FG3 }}>{OIc.caretRight}</span>
          </div>
          <div style={{ padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 12, borderTop: `1px solid ${O_DIV}`, cursor: 'pointer' }}>
            <div style={{ width: 20, height: 20, borderRadius: '50%', border: `1.5px solid ${O_FG3}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: O_FG2, fontWeight: 600 }}>?</div>
            <div style={{ flex: 1, fontSize: 13, color: O_FG1 }}>Central de Ajuda</div>
            <span style={{ color: O_FG3 }}>{OIc.caretRight}</span>
          </div>
        </div>

        {/* Order ID */}
        <div style={{ background: '#fff', marginTop: 8, padding: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ flex: 1, fontSize: 13, color: O_FG1 }}>ID do pedido</div>
            <span style={{ fontSize: 13, color: O_FG2 }}>260519HW1FS315</span>
            <button style={{ background: '#fff', border: `1px solid ${O_BORDER}`, borderRadius: 3, padding: '3px 10px', fontSize: 11, color: O_FG2, cursor: 'pointer', fontFamily: 'inherit' }}>Copiar</button>
          </div>
          <div style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
            <div style={{ flex: 1, fontSize: 13, color: O_FG1 }}>Pago por</div>
            <span style={{ fontSize: 13, color: O_FG2 }}>Pix</span>
          </div>
        </div>

        <div style={{ height: 12 }}/>
      </div>

      {/* Bottom bar */}
      <div style={{ background: '#fff', borderTop: `1px solid ${O_DIV}`, padding: '8px 12px 30px', display: 'flex', gap: 8, flexShrink: 0 }}>
        <button disabled style={{ flex: 1, background: '#fff', color: O_FG4, border: `1px solid ${O_BORDER}`, height: 40, borderRadius: 3, fontSize: 13, fontFamily: 'inherit', cursor: 'not-allowed' }}>Cancelar pedido</button>
        <button style={{ flex: 1, background: '#fff', color: O_FG1, border: `1px solid ${O_BORDER}`, height: 40, borderRadius: 3, fontSize: 13, fontFamily: 'inherit', cursor: 'pointer' }}>Falar com Vendedor</button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// ORDER COMPLETE — delivered state
// ─────────────────────────────────────────────────────────────
function OrderCompleteScreen({ onBack, onOpenStore }) {
  return (
    <div style={{ width: '100%', height: '100%', background: '#F5F5F5', display: 'flex', flexDirection: 'column', fontFamily: 'Roboto, -apple-system, sans-serif' }}>
      <div style={{ height: 54, flexShrink: 0 }}/>

      {/* Nav bar */}
      <div style={{ background: '#fff', padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 14, flexShrink: 0 }}>
        <div onClick={onBack} style={{ color: O_ORANGE, cursor: 'pointer' }}>{OIc.back}</div>
        <div style={{ flex: 1, fontSize: 17, fontWeight: 500, color: O_FG1 }}>Detalhes do pedido</div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto' }}>
        {/* Status banner — green "completed" */}
        <div style={{ background: O_GREEN, color: '#fff', padding: '14px 16px' }}>
          <div style={{ fontSize: 15, fontWeight: 600 }}>Pedido concluído</div>
        </div>

        {/* Shipping info */}
        <div style={{ background: '#fff', marginTop: 8, padding: 14, cursor: 'pointer' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ flex: 1, fontSize: 14, fontWeight: 700, color: O_FG1 }}>Informações do envio</div>
            <span style={{ color: O_FG3 }}>{OIc.caretRight}</span>
          </div>
          <div style={{ fontSize: 12, color: O_FG2, marginTop: 4 }}>Entrega Turbo: BR2652035786436</div>
          <div style={{ marginTop: 12, display: 'flex', gap: 10 }}>
            <span style={{ color: O_GREEN, flexShrink: 0, marginTop: 1 }}>{OIc.truck}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, color: O_GREEN, lineHeight: 1.4 }}>Pedido entregue. Recebido por: Renata</div>
              <div style={{ fontSize: 11, color: O_FG3, marginTop: 2 }}>19-05-2026 15:52</div>
            </div>
          </div>
        </div>

        {/* Delivery info */}
        <div style={{ background: '#fff', marginTop: 8, padding: 14 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: O_FG1, marginBottom: 10 }}>Informações da entrega</div>
          <div style={{ display: 'flex', gap: 8 }}>
            <span style={{ color: O_FG2, flexShrink: 0, marginTop: 2 }}>
              <svg width="14" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s7-7.6 7-12.5a7 7 0 10-14 0c0 4.9 7 12.5 7 12.5z"/><circle cx="12" cy="9.5" r="2.5"/></svg>
            </span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, color: O_FG1, fontWeight: 500 }}>
                Renata Ribeiro <span style={{ fontSize: 12, color: O_FG3, fontWeight: 400, marginLeft: 4 }}>(+55) 11 8371-3870</span>
              </div>
              <div style={{ fontSize: 12, color: O_FG2, lineHeight: 1.5, marginTop: 2 }}>
                Rua Teodoro Sampaio, 2700, Pinheiros, São Paulo… <span style={{ color: O_FG1, fontWeight: 500 }}>Mais</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product card */}
        <div style={{ background: '#fff', marginTop: 8, padding: 14 }}>
          <div onClick={onOpenStore} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12, cursor: onOpenStore ? 'pointer' : 'default' }}>
            <span style={{ color: O_FG2 }}>{OIc.shop}</span>
            <span style={{ fontSize: 13, color: O_FG1, fontWeight: 700 }}>Panvel Farmácias</span>
            <span style={{ color: O_FG3, fontSize: 13 }}>›</span>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <img src="assets/novalgina.jpg" alt="" style={{ width: 64, height: 64, objectFit: 'contain', background: '#FAFAFA', borderRadius: 4, flexShrink: 0 }}/>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
              <div style={{ fontSize: 13, color: O_FG1, lineHeight: 1.4 }}>Novalgina Dipirona 1g 10 Comprimidos</div>
              <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 12, color: O_FG2 }}>x1</span>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                  <span style={{ fontSize: 11, color: O_FG4, textDecoration: 'line-through' }}>R$28,90</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: O_FG1 }}>R$24,90</span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ borderTop: `1px solid ${O_DIV}`, marginTop: 14, paddingTop: 12, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 4 }}>
            <span style={{ fontSize: 13, color: O_FG1 }}>Pedido total: <strong>R$24,90</strong></span>
            <span style={{ color: O_FG3 }}>{OIc.caretDown}</span>
          </div>
        </div>

        {/* Help with the purchase */}
        <div style={{ background: '#fff', marginTop: 8 }}>
          <div style={{ padding: '14px 14px 10px', fontSize: 14, fontWeight: 700, color: O_FG1 }}>Ajuda com a compra</div>

          {/* Reportar problema */}
          <div style={{ padding: '12px 14px', display: 'flex', alignItems: 'flex-start', gap: 12, borderTop: `1px solid ${O_DIV}`, cursor: 'pointer' }}>
            <span style={{ color: O_FG2, marginTop: 1 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 9a3 3 0 016 0c0 2-3 2-3 4"/><circle cx="12" cy="17" r="0.6" fill="currentColor"/></svg>
            </span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, color: O_FG1 }}>Reportar problema</div>
              <div style={{ fontSize: 11, color: O_FG3, marginTop: 2 }}>Você pode pedir um reembolso até 26 mai</div>
            </div>
            <span style={{ color: O_FG3, marginTop: 4 }}>{OIc.caretRight}</span>
          </div>

          {/* Falar com Vendedor */}
          <div style={{ padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 12, borderTop: `1px solid ${O_DIV}`, cursor: 'pointer' }}>
            <span style={{ color: O_FG2 }}>{OIc.chat}</span>
            <div style={{ flex: 1, fontSize: 13, color: O_FG1 }}>Falar com Vendedor</div>
            <span style={{ color: O_FG3 }}>{OIc.caretRight}</span>
          </div>

          {/* Central de Ajuda */}
          <div style={{ padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 12, borderTop: `1px solid ${O_DIV}`, cursor: 'pointer' }}>
            <div style={{ width: 20, height: 20, borderRadius: '50%', border: `1.5px solid ${O_FG3}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: O_FG2, fontWeight: 600 }}>?</div>
            <div style={{ flex: 1, fontSize: 13, color: O_FG1 }}>Central de Ajuda</div>
            <span style={{ color: O_FG3 }}>{OIc.caretRight}</span>
          </div>
        </div>

        {/* Order ID */}
        <div style={{ background: '#fff', marginTop: 8, padding: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ flex: 1, fontSize: 13, color: O_FG1 }}>ID do pedido</div>
            <span style={{ fontSize: 13, color: O_FG2 }}>260520HW1FS315</span>
            <button style={{ background: '#fff', border: `1px solid ${O_BORDER}`, borderRadius: 3, padding: '3px 10px', fontSize: 11, color: O_FG2, cursor: 'pointer', fontFamily: 'inherit' }}>Copiar</button>
          </div>
          <div style={{ marginTop: 10, display: 'flex', alignItems: 'center' }}>
            <div style={{ flex: 1, fontSize: 13, color: O_FG1 }}>Pago por</div>
            <span style={{ fontSize: 13, color: O_FG2 }}>Pix</span>
          </div>
        </div>

        <div style={{ height: 12 }}/>
      </div>

      {/* Bottom bar */}
      <div style={{ background: '#fff', borderTop: `1px solid ${O_DIV}`, padding: '8px 12px 30px', display: 'flex', gap: 8, flexShrink: 0 }}>
        <button style={{ flex: 1, background: '#fff', color: O_FG1, border: `1px solid ${O_BORDER}`, height: 40, borderRadius: 3, fontSize: 13, fontFamily: 'inherit', cursor: 'pointer' }}>Reportar problema</button>
        <button style={{ flex: 1, background: '#fff', color: O_ORANGE, border: `1px solid ${O_ORANGE}`, height: 40, borderRadius: 3, fontSize: 13, fontFamily: 'inherit', fontWeight: 500, cursor: 'pointer' }}>Avaliar</button>
      </div>
    </div>
  );
}

window.OrderFlow = { CheckoutScreen, OrderDetailsScreen, OrderCompleteScreen };
