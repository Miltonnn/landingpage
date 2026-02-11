export function Contato() {
  return (
    <section className="bg-[#fdf6ec] py-16" id="contato">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl text-center font-semibold mb-10">
          Entre em contato conosco
        </h2>

        <form className="bg-white p-8 rounded-2xl shadow-md space-y-6">
         
          <div className="flex flex-col">
            <label htmlFor="nome" className="mb-2 font-medium">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite seu nome"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

        
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu email"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="telefone" className="mb-2 font-medium">
              Telefone
            </label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              placeholder="(11) 99999-9999"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="como_nos_conheceu" className="mb-2 font-medium">
              Como nos conheceu?
            </label>
            <select
              id="como_nos_conheceu"
              name="como_nos_conheceu"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="">Selecione uma opção</option>
              <option value="google">Google</option>
              <option value="instagram">Instagram</option>
              <option value="indicacao">Indicação</option>
              <option value="outros">Outros</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="mensagem" className="mb-2 font-medium">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={5}
              placeholder="Digite sua mensagem"
              className="border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="w-full bg-[#e84c3d] hover:bg-black duration-300 text-white font-semibold py-3 rounded-lg"
          >
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
}
