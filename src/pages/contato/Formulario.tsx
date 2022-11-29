import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { z } from 'zod';
import { Subtitle } from 'components';
import { useSelect } from 'hooks/useSelect';
import { zodResolver } from '@hookform/resolvers/zod';

import { trpc } from 'utils/trpc';

export const emailSchema = z.object({
  email: z.string().email().max(45),
  mensagem: z.string().max(256),
  nome: z.string().max(120),
  service: z.enum(['sites', 'maintenance', 'mounting']),
  telefone: z.string().max(20),
});

export type EmailSchema = z.infer<typeof emailSchema>;

export function Formulario() {
  const { select, setSelect } = useSelect();

  const INITIAL_STATE: EmailSchema = {
    service: select,
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  };

  const { register, handleSubmit, watch, reset } = useForm<EmailSchema>({
    defaultValues: INITIAL_STATE,
    resolver: zodResolver(emailSchema),
  });

  const onChange = watch('service') as Select;

  const { mutate, isSuccess, isLoading, isError } = trpc.email.useMutation();

  const sendEmail = useCallback(
    async (values: EmailSchema) => {
      mutate({ ...values, service: select });
    },
    [select, mutate],
  );

  useEffect(() => {
    setSelect(onChange);
  }, [onChange, setSelect]);

  const notify = useCallback(() => {
    if (isLoading && !isSuccess) {
      toast.info('E-mail já está sendo enviado!');
    }

    if (isSuccess && !isLoading) {
      toast.success('E-mail enviado com Sucesso!');
      reset();
    }

    if (isError) {
      toast.error('Erro ao enviar e-mail!');
    }
  }, [isSuccess, isLoading, isError, reset]);

  useEffect(() => {
    notify();
  }, [notify]);

  return (
    <section className="relative mx-0 flex h-[520px] w-11/12 max-w-[425px] flex-col">
      <ToastContainer
        className="z-50"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Subtitle asChild>
        <h1>Solicite seu orçamento!</h1>
      </Subtitle>
      <ToastContainer className="z-50" />
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(sendEmail)}>
        <div className="flex w-full items-center justify-between gap-2">
          <div className="flex w-1/2 flex-col">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              className="w-full rounded border border-solid border-black p-2"
              {...register('nome', { required: true })}
            />
          </div>
          <div className="flex w-1/2 flex-col">
            <label htmlFor="service">Serviço</label>
            <select
              className="w-full rounded border border-solid border-black bg-white p-2"
              id="service"
              value={select}
              {...register('service', { required: true })}
            >
              <option value="sites">Sites</option>
              <option value="maintenance">Manutenção</option>
              <option value="mounting">Montagem</option>
            </select>
          </div>
        </div>
        <div className="flex w-full items-center justify-between gap-2">
          <div className="flex w-1/2 flex-col">
            <label htmlFor="telefone">Telefone</label>
            <input
              type="text"
              className="w-full rounded border border-solid border-black p-2"
              id="telefone"
              {...register('telefone', { required: true })}
            />
          </div>
          <div className="flex w-1/2 flex-col">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              className="w-full rounded border border-solid border-black p-2"
              {...register('email', { required: true })}
            />
          </div>
        </div>
        <section className="h-48 w-full lg:h-60">
          <label htmlFor="mensagem">Mensagem</label>
          <textarea
            className="h-full w-full rounded border border-solid border-black p-2"
            id="mensagem"
            {...register('mensagem', { required: true })}
          />
        </section>
        <button
          className="absolute bottom-0 right-0 h-10 w-36 rounded bg-purple-500 text-lg font-bold text-white transition-all hover:opacity-80"
          id="enviar"
          name="enviar"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
