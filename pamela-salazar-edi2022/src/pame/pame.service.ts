import {  Injectable } from '@nestjs/common';
import { kStringMaxLength } from 'buffer';

@Injectable()
export class PameService{

    obtenerPame():string{
        return`HolaPame`
    }
    crearPame(): string {
        return `chau pame`
    }
}
  

