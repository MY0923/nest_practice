import { Module } from '@nestjs/common';
import { SdkStorageController } from './sdk-storage.controller';
import { SdkStorageService } from './sdk-storage.service';

@Module({
  controllers: [SdkStorageController],
  providers: [SdkStorageService]
})
export class SdkStorageModule {}
