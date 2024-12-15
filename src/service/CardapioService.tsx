import axios from "axios";

export class CardapioService {
    private cardapioCache: any = null;

    // Inicializa o serviço e carrega os dados do cardápio
    async inicializar(): Promise<void> {
        
        if (!this.cardapioCache) {
            const BASE_URL = "http://localhost:3000/menu";
            try {
                const response = await axios.get(BASE_URL);
                this.cardapioCache = response.data; // Armazena os dados do cardápio
            } catch (error) {
                console.error("Erro ao buscar o cardápio:", error);
                throw new Error("Não foi possível carregar o cardápio do servidor.");
            }
        }
    }

    // Retorna os dados do cache
    getCardapio(): any {
        if (!this.cardapioCache) {
            throw new Error("Cardápio ainda não foi inicializado. Chame o método `inicializar` primeiro.");
        }
        console.log(this.cardapioCache)
        return this.cardapioCache;
    }
}
