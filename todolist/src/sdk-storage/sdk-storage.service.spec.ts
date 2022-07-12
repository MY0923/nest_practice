import { Test, TestingModule } from '@nestjs/testing';
import { SdkStorageService } from './sdk-storage.service';

describe('SdkStorageService', () => {
  let service: SdkStorageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SdkStorageService],
    }).compile();

    service = module.get<SdkStorageService>(SdkStorageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
