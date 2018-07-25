import { VModuleModule } from './v-module.module';

describe('VModuleModule', () => {
  let vModuleModule: VModuleModule;

  beforeEach(() => {
    vModuleModule = new VModuleModule();
  });

  it('should create an instance', () => {
    expect(vModuleModule).toBeTruthy();
  });
});
