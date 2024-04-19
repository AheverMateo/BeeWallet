export default function Footer() {
    
    return (
        <div style={{ width: '100%', height: '122px', flexShrink: 0, background: '#0E0E0E' }}>
            <div style={{ height: '82px' }}></div> {/* Espacio vacío */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 20px', color: 'var(--Fuerza, #333)', fontFamily: 'Poppins', fontSize: '14px', fontStyle: 'normal', fontWeight: 400, lineHeight: '20px' }}>
                <div>
                    {'© Beewallet 2024. Todos los derechos reservados.Sitio web diseñado y desarrollado por Beewallet, para NC'}
                </div>
                <img src="/icons/beewalletIcon.png" alt="BeeWallet Icon" style={{ width: '125px', height: '45px', left: '25px', position: 'absolute'  }} />
                
                
            </div>
        </div>
    )
}

