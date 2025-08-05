import {
  trigger,
  transition,
  animate,
  style,
  keyframes
} from '@angular/animations';

export const bounceAnimation =  trigger('bounce', [
  transition(':enter', [
    animate('1s ease-in-out', keyframes([
      style({ transform: 'translateY(0)', offset: 0 }),
      style({ transform: 'translateY(-30px)', offset: 0.3 }),
      style({ transform: 'translateY(0)', offset: 0.5 }),
      style({ transform: 'translateY(-15px)', offset: 0.7 }),
      style({ transform: 'translateY(0)', offset: 1 }),
    ]))
  ]),
  // Para repetir el bounce indefinidamente (loop), se puede usar un trigger aparte o manejarlo con Angular pero la animación default solo corre al entrar.
]);