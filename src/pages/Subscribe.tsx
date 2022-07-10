import { Calendar, Check, Globe } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { useCreateSubscriberMutationMutation } from '../graphql/generated';

export function Subscribe() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useCreateSubscriberMutationMutation();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate('/event');
  };

  return (
    <div className="min-h-screen bg-hero bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-7xl m-auto p-4">
        <aside className="max-w-[500px] flex flex-col gap-5 bg-black/50 rounded p-8 border-4 border-red-700/50 backdrop-blur-sm">
          <h1 className="border-red-600 border-solid border-l-4 text-[2.5rem] font-bold leading-tight uppercase px-4 py-1 ">
            Aprenda como <span className="text-red-700">acabar</span> com o{' '}
            <span className="text-red-700">vecna</span> de uma vez por{' '}
            <span className="text-red-700">todas.</span>
          </h1>
          <p className="text-gray-200 leading-relaxed text-[1.25rem]">
            Cansado(a) de ser perturbado(a) pelos monstros do mundo invertido?
            Aprenda o passo a passo de como destruir essas formas malignas.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
            <Input
              name="name"
              className="bg-red-500/30 border-red-700/70 border-4 rounded px-5 h-14 caret-red-400 focus:outline-red-500"
              type="text"
              placeholder="Digite seu nome"
              onChange={(event) => setName(event.target.value)}
            />

            <Input
              name="email"
              className="bg-red-500/30 border-red-700/70 border-4 rounded px-5 h-14 caret-red-400 focus:outline-red-500"
              type="email"
              placeholder="Digite seu melhor e-mail"
              onChange={(event) => setEmail(event.target.value)}
            />

            <Link
              to="/event"
              className="text-red-500 mx-auto inline italic text-xl hover:underline"
            >
              <a href="event">Já sou cadastrado</a>
            </Link>

            <Button
              disabled={loading}
              className="mt-4 bg-red-700 uppercase py-4 rounded font-bold text-sm hover:bg-red-700/60 transition-colors disabled:opacity-50"
              type="submit"
            >
              Quero Derrotar o Vecna!
            </Button>
          </form>

          <footer className="flex gap-8">
            <span className="flex items-center gap-2 font-semibold text-lg">
              <Check size={20} className="text-red-700" />
              Grauito
            </span>
            <span className="flex items-center gap-2 font-semibold text-lg">
              <Calendar size={20} className="text-red-700" />
              Online
            </span>
            <span className="flex items-center gap-2 font-semibold text-lg">
              <Globe size={20} className="text-red-700" />
              01 a 08 de Julho
            </span>
          </footer>
        </aside>
      </div>
    </div>
  );
}
