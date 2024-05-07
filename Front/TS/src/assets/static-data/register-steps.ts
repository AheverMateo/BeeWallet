import type { RegisterStep } from '@/types/register-types';

export const registerSteps: RegisterStep[] = [
    {
        title: 'correo electrónico',
        id: 1,
    },
    {
        title: 'Tipo de cuenta',
        id: 2,
    },
    {
        title: 'País',
        id: 3,
    },
    {
        title: 'Datos personales',
        id: 4,
    },
    {
        title: 'Autenticación 2FA',
        id: 5,
    },
    {
        title: 'Contraseña',
        id: 6,
    },
]