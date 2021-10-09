import findLinksAndReplace from "./utils/findLinksAndReplace.js";

export const vLinkify = {
  bind: function (el, binding) {
    findLinksAndReplace(el, binding ? binding.value : null);
  },
  componentUpdated: function(el, binding, vNode) {
    const newEl = el;
    newEl.textContent = '';

    if(vNode && vNode.children && vNode.children[0] && vNode.children[0].text){
      newEl.textContent = vNode.children[0].text;
    }
    findLinksAndReplace(newEl, binding ? binding.value : null);
  },
};
export default {
  install(Vue, options) {
    Vue.directive("linkify", vLinkify);
  },
};
