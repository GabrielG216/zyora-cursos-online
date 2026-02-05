// ============================================================================
// CONFIGURAÇÃO DO SUPABASE
// ============================================================================
// Este arquivo centraliza as credenciais do Supabase
// As variáveis são carregadas a partir das variáveis de ambiente

// Se estiver usando com Vite ou outro bundler, use:
// const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
// const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;

// Para projeto estático, configure as variáveis abaixo:
const SUPABASE_URL = 'https://yudcyacsqctdwpculyds.supabase.co';
const SUPABASE_KEY = 'sb_publishable_VO2MHCstSp368lrTqgCQcA_gcp6Efb_';

// Inicializar cliente Supabase
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// DEBUG: Expor informações para inspeção no console e confirmar o project ref
try {
	console.info('[config] SUPABASE_URL =', SUPABASE_URL);
	console.info('[config] Usando chave com comprimento', SUPABASE_KEY ? SUPABASE_KEY.length : 0);
	// Expor globalmente para depuração no console do navegador
	window.SUPABASE_URL = SUPABASE_URL;
	window.SUPABASE_KEY = SUPABASE_KEY;
	window.supabaseClient = client;
} catch (e) {
	// ambiente sem window (node/ssr) — ignora
}
