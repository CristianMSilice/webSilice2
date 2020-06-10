import { trigger, state, style, transition,useAnimation,
    animate, group, query, stagger, keyframes
} from '@angular/animations';
 

 

export const SlideInOutAnimation = [
    trigger('slideInOut', [
       
      
        state('in', style({   transition: 'bottom 0.4s ease-in-out, opacity 0.2s ease-in-out;',opacity: 1,bottom:'40px'

 
           
          })),
          state('out', style({ transition:'bottom 0.3s ease-in-out, opacity 0.4s ease-in-out 0.1s',opacity: 0,bottom:'-145px'
            
          })),
          transition('in => out', animate('400ms ease-in-out')),
          transition('out => in', animate('400ms ease-in-out'))
    ]),
]