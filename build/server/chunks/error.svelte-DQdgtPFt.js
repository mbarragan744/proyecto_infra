import { Y as escape_html, Z as getContext } from './index-BF1tDW1B.js';
import './state.svelte-BenIr1tZ.js';
import { s as stores } from './client-CSnXN5TH.js';
import './utils-KcIDVAAe.js';

({
  check: stores.updated.check
});
function context() {
  return getContext("__request__");
}
const page$1 = {
  get error() {
    return context().page.error;
  },
  get status() {
    return context().page.status;
  }
};
const page = page$1;
function Error$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<h1>${escape_html(page.status)}</h1> <p>${escape_html(page.error?.message)}</p>`);
  });
}

export { Error$1 as default };
//# sourceMappingURL=error.svelte-DQdgtPFt.js.map
