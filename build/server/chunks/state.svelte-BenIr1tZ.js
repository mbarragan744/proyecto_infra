import { $ as noop } from './index-BF1tDW1B.js';
import './utils-KcIDVAAe.js';

const is_legacy = noop.toString().includes("$$") || /function \w+\(\) \{\}/.test(noop.toString());
if (is_legacy) {
  ({
    url: new URL("https://example.com")
  });
}
//# sourceMappingURL=state.svelte-BenIr1tZ.js.map
