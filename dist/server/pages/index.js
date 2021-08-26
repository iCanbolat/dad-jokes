exports.ids = [7,2];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/RandomJoke.vue?vue&type=template&id=4853b736&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_vm._ssrNode("<div class=\"col-12\"><h4 class=\"pb-1 text-primary\">Welcome to Dad Joke Universe</h4> <h5 class=\"pb-3 text-primary\">You can generate random joke</h5> <form><button type=\"submit\" class=\"btn btn-outline-primary mb-2\">Get Joke</button><br> <small class=\"text-danger\">Built by Canbolat</small></form></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/RandomJoke.vue?vue&type=template&id=4853b736&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/RandomJoke.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var RandomJokevue_type_script_lang_js_ = ({
  data() {
    return {};
  },

  methods: {
    onSubmit() {
      this.$emit('random-joke');
    }

  },
  name: 'RandomJoke'
});
// CONCATENATED MODULE: ./components/RandomJoke.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_RandomJokevue_type_script_lang_js_ = (RandomJokevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/RandomJoke.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_RandomJokevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "96ff98fe"
  
)

/* harmony default export */ var RandomJoke = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=2b63928a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mt-5"},[_c('RandomJoke',{on:{"random-joke":_vm.getJoke}}),_vm._ssrNode("<br><hr> <h4 class=\"mt-5 mb-3\">"+_vm._ssrEscape(_vm._s(_vm.joke.joke))+"</h4> <small>"+_vm._ssrEscape("Joke ID: "+_vm._s(_vm.joke.id))+"</small>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=2b63928a&

// EXTERNAL MODULE: ./components/RandomJoke.vue + 4 modules
var RandomJoke = __webpack_require__(27);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//


/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  head() {
    return {
      title: 'Welcome to Dad Jokes',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Bunch of Dad Jokes'
      }]
    };
  },

  layout: 'normal',

  data() {
    return {
      joke: ''
    };
  },

  components: {
    RandomJoke: RandomJoke["default"]
  },
  methods: {
    async getJoke() {
      const config = {
        headers: {
          'Accept': 'application/json'
        }
      };

      try {
        const res = await external_axios_default.a.get("https://icanhazdadjoke.com/", config);
        this.joke = res.data;
      } catch (err) {
        console.log(err);
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e19505da"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {RandomJoke: __webpack_require__(27).default})


/***/ })

};;
//# sourceMappingURL=index.js.map