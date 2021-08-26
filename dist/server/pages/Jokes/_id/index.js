exports.ids = [4];
exports.modules = {

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Jokes/_id/index.vue?vue&type=template&id=b95a7614&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pt-5"},[_c('nuxt-link',{attrs:{"to":"/jokes"}},[_vm._v("Back to Jokes")]),_vm._ssrNode(" <h4 class=\"py-5\">"+_vm._ssrEscape(_vm._s(_vm.joke))+"</h4> <hr> <small>"+_vm._ssrEscape("Joke ID: "+_vm._s(_vm.$route.params.id))+"</small>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Jokes/_id/index.vue?vue&type=template&id=b95a7614&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Jokes/_id/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  data() {
    return {
      joke: {}
    };
  },

  async created() {
    const config = {
      headers: {
        'Accept': 'application/json'
      }
    };

    try {
      const res = await external_axios_default.a.get(`https://icanhazdadjoke.com/j/${this.$route.params.id}`, config);
      this.joke = res.data.joke;
    } catch (err) {
      console.log(err);
    }
  },

  head() {
    return {
      title: this.joke,
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Bunch of Dad Jokes'
      }]
    };
  },

  layout: 'normal'
});
// CONCATENATED MODULE: ./pages/Jokes/_id/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var Jokes_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/Jokes/_id/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Jokes_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "aadef1ae"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map