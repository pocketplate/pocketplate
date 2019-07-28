import { Store } from "./StoreExample";

it('renders without crashing', () => {
  const store: Store = new Store();
  expect(1).toBe(0);
});
