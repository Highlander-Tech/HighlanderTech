import { emailSchema } from 'pages/contato/Formulario';
import { procedure, router } from '../trpc';

export const appRouter = router({
  email: procedure.input(emailSchema).mutation(({ input, ctx }) => {
    ctx.sendEmail({ ...input });
  }),
});

export type AppRouter = typeof appRouter;
