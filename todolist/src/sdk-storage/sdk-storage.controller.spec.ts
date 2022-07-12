import { Test, TestingModule } from '@nestjs/testing';
import { SdkStorageController } from './sdk-storage.controller';

describe('SdkStorageController', () => {
  let controller: SdkStorageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SdkStorageController],
    }).compile();

    controller = module.get<SdkStorageController>(SdkStorageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
