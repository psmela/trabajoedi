import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PameService } from './pame/pame.service';
import { PameController } from './pame/pame.controller';
import { EdiService } from './edi/edi.service';
import { EdiController } from './edi/edi.controller';

@Module({
  imports: [],
  controllers: [AppController, PameController, EdiController],
  providers: [AppService, PameService, EdiService],
})
export class AppModule {}
