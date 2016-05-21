import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { JobscanAppComponent } from '../app/jobscan.component';

beforeEachProviders(() => [JobscanAppComponent]);

describe('App: Jobscan', () => {
  it('should create the app',
      inject([JobscanAppComponent], (app: JobscanAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'jobscan works!\'',
      inject([JobscanAppComponent], (app: JobscanAppComponent) => {
    expect(app.title).toEqual('jobscan works!');
  }));
});
