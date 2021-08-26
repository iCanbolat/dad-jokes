exports.ids = [3];
exports.modules = {

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SearchJokes.vue?vue&type=template&id=5d07890b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{on:{"submit":function($event){$event.preventDefault();return _vm.onSubmit.apply(null, arguments)}}},[_vm._ssrNode("<input type=\"text\" placeholder=\"Search Joke\""+(_vm._ssrAttr("value",(_vm.text)))+"> <input type=\"submit\" value=\"Search Joke\">")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/SearchJokes.vue?vue&type=template&id=5d07890b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SearchJokes.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var SearchJokesvue_type_script_lang_js_ = ({
  name: 'SearchJokes',

  data() {
    return {
      text: ''
    };
  },

  methods: {
    onSubmit() {
      this.$emit('search-text', this.text);
      this.text = "";
    }

  }
});
// CONCATENATED MODULE: ./components/SearchJokes.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SearchJokesvue_type_script_lang_js_ = (SearchJokesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/SearchJokes.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SearchJokesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4f6c8e7d"
  
)

/* harmony default export */ var SearchJokes = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=search-jokes.js.map