//
//
//
//
//
//
//
//
var script$5 = {
  props: ['color']
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
const __vue_script__$5 = script$5;
/* template */

var __vue_render__$5 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "16.755",
      "height": "16.279",
      "viewBox": "0 0 16.755 16.279"
    }
  }, [_c('path', {
    attrs: {
      "id": "desfazer-seta",
      "d": "M15.077,7.5A8.148,8.148,0,0,0,3.665,5.987a8.175,8.175,0,0,0-1.393,1.36L1.908,5.289a.414.414,0,0,0-.48-.336L.342,5.145a.414.414,0,0,0-.336.48l.863,4.891a.413.413,0,0,0,.48.336L6.24,9.988a.414.414,0,0,0,.336-.48L6.384,8.422a.414.414,0,0,0-.48-.336l-2.038.36a6.235,6.235,0,0,1,.973-.925,6.209,6.209,0,1,1,7.548,9.86,6.139,6.139,0,0,1-3.761,1.28,6.339,6.339,0,0,1-.831-.055A6.213,6.213,0,0,1,2.49,13.49a.414.414,0,0,0-.477-.339l-1.088.184a.414.414,0,0,0-.339.477A8.145,8.145,0,0,0,7.541,20.52a8.29,8.29,0,0,0,1.088.072A8.141,8.141,0,0,0,15.077,7.5Z",
      "transform": "translate(0 -4.314)",
      "fill": _vm.color
    }
  })]);
};

var __vue_staticRenderFns__$5 = [];
/* style */

const __vue_inject_styles__$5 = undefined;
/* scoped */

const __vue_scope_id__$5 = undefined;
/* module identifier */

const __vue_module_identifier__$5 = undefined;
/* functional template */

const __vue_is_functional_template__$5 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$5 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$5,
  staticRenderFns: __vue_staticRenderFns__$5
}, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, undefined, undefined, undefined);

//
//
//
//
//
var script$4 = {
  props: ['color']
};

/* script */
const __vue_script__$4 = script$4;
/* template */

var __vue_render__$4 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "id": "play",
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "15.176",
      "height": "16.843",
      "viewBox": "0 0 15.176 16.843"
    }
  }, [_c('path', {
    attrs: {
      "id": "Caminho_1626",
      "data-name": "Caminho 1626",
      "d": "M10.857.371C9.338-.5,8.107.214,8.107,1.964V14.878c0,1.752,1.231,2.464,2.75,1.594L22.144,10c1.519-.871,1.519-2.283,0-3.154Z",
      "transform": "translate(-8.107 0)",
      "fill": _vm.color
    }
  })]);
};

var __vue_staticRenderFns__$4 = [];
/* style */

const __vue_inject_styles__$4 = undefined;
/* scoped */

const __vue_scope_id__$4 = undefined;
/* module identifier */

const __vue_module_identifier__$4 = undefined;
/* functional template */

const __vue_is_functional_template__$4 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$4 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, undefined, undefined);

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
var script$3 = {
  props: ['color']
};

/* script */
const __vue_script__$3 = script$3;
/* template */

var __vue_render__$3 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    staticStyle: {
      "enable-background": "new 0 0 47.607 47.607"
    },
    attrs: {
      "version": "1.1",
      "id": "Capa_1",
      "width": "15.176",
      "height": "16.843",
      "xmlns": "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "x": "0px",
      "y": "0px",
      "viewBox": "0 0 47.607 47.607",
      "xml:space": "preserve"
    }
  }, [_c('g', [_c('path', {
    attrs: {
      "d": "M17.991,40.976c0,3.662-2.969,6.631-6.631,6.631l0,0c-3.662,0-6.631-2.969-6.631-6.631V6.631C4.729,2.969,7.698,0,11.36,0\n\t\tl0,0c3.662,0,6.631,2.969,6.631,6.631V40.976z",
      "fill": _vm.color
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M42.877,40.976c0,3.662-2.969,6.631-6.631,6.631l0,0c-3.662,0-6.631-2.969-6.631-6.631V6.631\n\t\tC29.616,2.969,32.585,0,36.246,0l0,0c3.662,0,6.631,2.969,6.631,6.631V40.976z",
      "fill": _vm.color
    }
  })])]);
};

var __vue_staticRenderFns__$3 = [];
/* style */

const __vue_inject_styles__$3 = undefined;
/* scoped */

const __vue_scope_id__$3 = undefined;
/* module identifier */

const __vue_module_identifier__$3 = undefined;
/* functional template */

const __vue_is_functional_template__$3 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$3 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, undefined, undefined);

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
var script$2 = {
  props: ['color']
};

/* script */
const __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "14.687",
      "height": "15.503",
      "viewBox": "0 0 14.687 15.503"
    }
  }, [_c('g', {
    attrs: {
      "id": "volume-reduzido",
      "transform": "translate(-9.136)"
    }
  }, [_c('g', {
    attrs: {
      "id": "Grupo_4967",
      "data-name": "Grupo 4967",
      "transform": "translate(9.136)"
    }
  }, [_c('path', {
    attrs: {
      "id": "Caminho_1627",
      "data-name": "Caminho 1627",
      "d": "M18.111,0a.784.784,0,0,0-.574.242L13.292,4.488H9.952a.827.827,0,0,0-.816.816v4.9a.828.828,0,0,0,.816.816h3.34l4.245,4.246a.816.816,0,0,0,1.39-.574V.816a.785.785,0,0,0-.242-.574A.786.786,0,0,0,18.111,0Z",
      "transform": "translate(-9.136)",
      "fill": _vm.color
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "id": "Caminho_1628",
      "data-name": "Caminho 1628",
      "d": "M270.946,106.308a2.928,2.928,0,0,0-1.434-1.186.709.709,0,0,0-.318-.064.8.8,0,0,0-.574.236.779.779,0,0,0-.242.58.686.686,0,0,0,.153.453,1.486,1.486,0,0,0,.37.319q.216.134.433.293a1.288,1.288,0,0,1,.37.453,1.8,1.8,0,0,1,0,1.454,1.29,1.29,0,0,1-.37.453q-.217.159-.433.293a1.487,1.487,0,0,0-.37.319.686.686,0,0,0-.153.453.778.778,0,0,0,.242.58.8.8,0,0,0,.574.236.711.711,0,0,0,.318-.064,3.012,3.012,0,0,0,1.434-1.192,3.251,3.251,0,0,0,.542-1.8A3.287,3.287,0,0,0,270.946,106.308Z",
      "transform": "translate(-256.801 -100.368)",
      "fill": _vm.color
    }
  })])])]);
};

var __vue_staticRenderFns__$2 = [];
/* style */

const __vue_inject_styles__$2 = undefined;
/* scoped */

const __vue_scope_id__$2 = undefined;
/* module identifier */

const __vue_module_identifier__$2 = undefined;
/* functional template */

const __vue_is_functional_template__$2 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);

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
var script$1 = {
  props: ['color']
};

/* script */
const __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "16.35",
      "height": "15.503",
      "viewBox": "0 0 16.35 15.503"
    }
  }, [_c('g', {
    attrs: {
      "id": "Grupo_5474",
      "data-name": "Grupo 5474",
      "transform": "translate(-1089.831 -567.839)"
    }
  }, [_c('g', {
    attrs: {
      "id": "volume-reduzido",
      "transform": "translate(1080.695 567.839)"
    }
  }, [_c('g', {
    attrs: {
      "id": "Grupo_4967",
      "data-name": "Grupo 4967",
      "transform": "translate(9.136)"
    }
  }, [_c('path', {
    attrs: {
      "id": "Caminho_1627",
      "data-name": "Caminho 1627",
      "d": "M18.111,0a.784.784,0,0,0-.574.242L13.292,4.488H9.952a.827.827,0,0,0-.816.816v4.9a.828.828,0,0,0,.816.816h3.34l4.245,4.246a.816.816,0,0,0,1.39-.574V.816a.785.785,0,0,0-.242-.574A.786.786,0,0,0,18.111,0Z",
      "transform": "translate(-9.136)",
      "fill": _vm.color ? _vm.color : '#FFF'
    }
  })])]), _vm._v(" "), _c('g', {
    attrs: {
      "id": "Grupo_5473",
      "data-name": "Grupo 5473",
      "transform": "translate(0 -1.458)"
    }
  }, [_c('g', {
    attrs: {
      "id": "Retângulo_325",
      "data-name": "Retângulo 325",
      "transform": "translate(1105.5 574.636) rotate(47)",
      "fill": _vm.color,
      "stroke": _vm.color,
      "stroke-width": "1"
    }
  }, [_c('rect', {
    attrs: {
      "width": "1",
      "height": "6",
      "rx": "0.5",
      "stroke": "none"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "0.5",
      "y": "0.5",
      "height": "5",
      "fill": "none"
    }
  })]), _vm._v(" "), _c('g', {
    attrs: {
      "id": "Retângulo_326",
      "data-name": "Retângulo 326",
      "transform": "matrix(-0.695, 0.719, -0.719, -0.695, 1106.152, 578.773)",
      "fill": _vm.color,
      "stroke": _vm.color,
      "stroke-width": "1"
    }
  }, [_c('rect', {
    attrs: {
      "width": "1",
      "height": "6",
      "rx": "0.5",
      "stroke": "none"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "0.5",
      "y": "0.5",
      "height": "5",
      "fill": "none"
    }
  })])])])]);
};

var __vue_staticRenderFns__$1 = [];
/* style */

const __vue_inject_styles__$1 = undefined;
/* scoped */

const __vue_scope_id__$1 = undefined;
/* module identifier */

const __vue_module_identifier__$1 = undefined;
/* functional template */

const __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);

//

const formatTime = second => new Date(second * 1000).toISOString().substr(11, 8);

var script = {
  name: 'vue-audio-player',
  props: {
    src: {
      type: String,
      default: null
    },
    autoPlay: {
      type: Boolean,
      default: false
    },
    ended: {
      type: Function,
      default: () => {}
    },
    canPlay: {
      type: Function,
      default: () => {}
    },
    downloadable: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "#FFF"
    },
    loop: {
      type: Boolean,
      default: false
    },
    rangeColor: {
      type: String,
      default: "#FFFFFF50"
    }
  },
  computed: {
    duration: function () {
      return this.audio ? formatTime(this.totalDuration) : '';
    }
  },
  components: {
    GoBack: __vue_component__$5,
    Play: __vue_component__$4,
    Pause: __vue_component__$3,
    Volumn: __vue_component__$2,
    Mute: __vue_component__$1
  },

  data() {
    return {
      firstPlay: true,
      isMuted: false,
      loaded: false,
      playing: false,
      paused: false,
      percentage: 0,
      currentTime: '00:00:00',
      audio: undefined,
      totalDuration: 0,
      playerVolume: 1
    };
  },

  methods: {
    setPosition(e) {
      this.audio.currentTime = parseInt(this.audio.duration / 100 * e.target.value);
    },

    setVolume(e) {
      this.playerVolume = e.target.value;
    },

    plusTenSeconds() {
      this.audio.currentTime += 10;
    },

    minusTenSeconds() {
      this.audio.currentTime -= 10;
    },

    stop() {
      this.audio.pause();
      this.paused = true;
      this.playing = false;
      this.audio.currentTime = 0;
    },

    play() {
      if (this.playing) return;
      this.audio.play().then(() => this.playing = true);
      this.paused = false;
    },

    pause() {
      this.paused = !this.paused;
      this.paused ? this.audio.pause() : this.audio.play();
    },

    download() {
      this.audio.pause();
      window.open(this.src, 'download');
    },

    mute() {
      this.isMuted = !this.isMuted;
      this.audio.muted = this.isMuted;
    },

    reload() {
      this.audio.load();
    },

    _handleLoaded: function () {
      if (this.audio.readyState >= 2) {
        if (this.audio.duration === Infinity) {
          // Fix duration for streamed audio source or blob based
          // https://stackoverflow.com/questions/38443084/how-can-i-add-predefined-length-to-audio-recorded-from-mediarecorder-in-chrome/39971175#39971175
          this.audio.currentTime = 1e101;

          this.audio.ontimeupdate = () => {
            this.audio.ontimeupdate = () => {};

            this.audio.currentTime = 0;
            this.totalDuration = parseInt(this.audio.duration);
            this.loaded = true;
          };
        } else {
          this.totalDuration = parseInt(this.audio.duration);
          this.loaded = true;
        }

        if (this.autoPlay) this.audio.play();
      } else {
        throw new Error('Failed to load sound src');
      }
    },
    _handlePlayingUI: function () {
      this.audio.volume = this.playerVolume;
      this.percentage = this.audio.currentTime / this.audio.duration * 100;
      this.currentTime = formatTime(this.audio.currentTime);
      this.playing = true;
    },
    _handlePlayPause: function (e) {
      if (e.type === 'play' && this.firstPlay) {
        // in some situations, audio.currentTime is the end one on chrome
        this.audio.currentTime = 0;

        if (this.firstPlay) {
          this.firstPlay = false;
        }
      }

      if (e.type === 'pause' && this.paused === false && this.playing === false) {
        this.currentTime = '00:00:00';
      }
    },

    _handleEnded() {
      this.paused = this.playing = false;
    },

    init: function () {
      this.audio.addEventListener('timeupdate', this._handlePlayingUI);
      this.audio.addEventListener('loadeddata', this._handleLoaded);
      this.audio.addEventListener('pause', this._handlePlayPause);
      this.audio.addEventListener('play', this._handlePlayPause);
      this.audio.addEventListener('ended', this._handleEnded);
    }
  },

  mounted() {
    this.audio = this.$refs.player;
    this.init();
    this.$refs.audio_player.style.setProperty("--color", `${this.color}`);
    this.$refs.audio_player.style.setProperty("--rangeColor", `${this.rangeColor}`);
  },

  beforeDestroy() {
    this.audio.removeEventListener('timeupdate', this._handlePlayingUI);
    this.audio.removeEventListener('loadeddata', this._handleLoaded);
    this.audio.removeEventListener('pause', this._handlePlayPause);
    this.audio.removeEventListener('play', this._handlePlayPause);
    this.audio.removeEventListener('ended', this._handleEnded);
  }

};

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    ref: "audio_player",
    staticClass: "d-flex align-items-center disable-select",
    class: {
      'disabled': !_vm.loaded
    },
    attrs: {
      "id": "audio"
    }
  }, [_c('button', {
    staticClass: "button-none",
    attrs: {
      "disabled": !_vm.loaded
    },
    on: {
      "click": _vm.minusTenSeconds
    }
  }, [_c('GoBack', {
    staticClass: "left",
    attrs: {
      "color": _vm.color
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "d-flex justify-content-center"
  }, [_vm.loaded ? _c('button', {
    staticClass: "play mx-md-2 mx-1 button-none",
    attrs: {
      "disabled": !_vm.loaded
    },
    on: {
      "click": function ($event) {
        _vm.playing ? _vm.pause() : _vm.play();
      }
    }
  }, [!_vm.playing || _vm.paused ? _c('Play', {
    attrs: {
      "color": _vm.color
    }
  }) : _c('Pause', {
    attrs: {
      "color": _vm.color
    }
  })], 1) : _c('b-spinner', {
    staticClass: "spinner mx-md-2 mx-1",
    style: "color: " + _vm.color
  })], 1), _vm._v(" "), _c('button', {
    staticClass: "button-none",
    attrs: {
      "disabled": !_vm.loaded
    },
    on: {
      "click": _vm.plusTenSeconds
    }
  }, [_c('GoBack', {
    staticClass: "right",
    attrs: {
      "color": _vm.color
    }
  })], 1), _vm._v(" "), _c('input', {
    staticClass: "seak-bar mx-md-4 mx-3 default",
    attrs: {
      "min": "0",
      "step": "0.01",
      "max": 100,
      "type": "range",
      "disabled": !_vm.loaded
    },
    domProps: {
      "value": _vm.percentage
    },
    on: {
      "input": _vm.setPosition
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "mx-md-4 mx-3",
    style: "color: " + _vm.color
  }, [_vm._v(_vm._s(_vm.currentTime) + " / " + _vm._s(_vm.duration))]), _vm._v(" "), _c('div', {
    staticClass: "volume",
    on: {
      "click": _vm.mute
    }
  }, [!_vm.isMuted ? _c('Volumn', {
    attrs: {
      "color": _vm.color
    }
  }) : _c('Mute', {
    attrs: {
      "color": _vm.color
    }
  })], 1), _vm._v(" "), _c('input', {
    staticClass: "volumn-container mr-md-4 mr-2",
    attrs: {
      "min": "0",
      "step": "0.1",
      "max": 1,
      "type": "range",
      "disabled": !_vm.loaded
    },
    domProps: {
      "value": _vm.playerVolume
    },
    on: {
      "input": _vm.setVolume
    }
  }), _vm._v(" "), _c('audio', {
    ref: "player",
    attrs: {
      "id": "player",
      "loop": _vm.loop,
      "autoplay": _vm.autoPlay,
      "src": _vm.src
    },
    on: {
      "ended": _vm.ended,
      "canplay": _vm.canPlay
    }
  })]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-197bc560_0", {
    source: "#audio[data-v-197bc560]{--color:#FFF;--rangeColor:#FFFFFF50}.button-none[data-v-197bc560]{background:0 0;border:none}.white-color[data-v-197bc560]{color:#fff}#audio[data-v-197bc560]{width:100%}#audio.disabled[data-v-197bc560]{opacity:.7}#audio .seak-bar.default[data-v-197bc560]{background:var(--rangeColor)}#audio .seak-bar[data-v-197bc560]{-webkit-appearance:none;border-radius:20px;flex:1;height:14px;cursor:pointer;outline:0}#audio .seak-bar[data-v-197bc560]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:14px;height:14px;background:var(--color);cursor:pointer;border-radius:50%}#audio .seak-bar[data-v-197bc560]::-moz-range-thumb{width:14px;height:14px;background:var(--color);cursor:pointer}#audio span[data-v-197bc560]{font-size:12px;font-weight:100}#audio .left[data-v-197bc560],#audio .open[data-v-197bc560],#audio .play[data-v-197bc560],#audio .right[data-v-197bc560],#audio .volume[data-v-197bc560]{cursor:pointer;opacity:.85;transition:.5s}#audio .left[data-v-197bc560],#audio .right[data-v-197bc560]{transition:.15s}#audio .left[data-v-197bc560]:hover,#audio .open[data-v-197bc560]:hover,#audio .play[data-v-197bc560]:hover,#audio .right[data-v-197bc560]:hover,#audio .volume[data-v-197bc560]:hover{opacity:1}#audio .volume[data-v-197bc560]{width:20px;margin-right:8px}#audio .right[data-v-197bc560]{transform:matrix(-1,0,0,1,0,0)}#audio .left[data-v-197bc560]:active{transform:rotate(-45deg)}#audio .right[data-v-197bc560]:active{transform:rotate(45deg) matrix(-1,0,0,1,0,0)}#audio .volumn-container.default[data-v-197bc560]{background:var(--rangeColor)}#audio .volumn-container[data-v-197bc560]{-webkit-appearance:none;border-radius:20px;height:10px;width:54px;background:var(--rangeColor);cursor:pointer;outline:0}#audio .volumn-container[data-v-197bc560]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:10px;height:10px;background:var(--color);cursor:pointer;border-radius:50%}#audio .volumn-container[data-v-197bc560]::-moz-range-thumb{width:10px;height:10px;background:var(--color);cursor:pointer}#audio .volumn-container[data-v-197bc560]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:10px;height:10px;background:var(--color);cursor:pointer;border-radius:50%}#audio .volumn-container[data-v-197bc560]::-moz-range-thumb{width:10px;height:10px;background:var(--color);cursor:pointer}.spinner[data-v-197bc560]{height:16.843px;width:16.843px}@media (max-width:609px){#audio span[data-v-197bc560]{font-size:calc(12px * .9)}}@media (max-width:408px){#audio .seak-bar[data-v-197bc560]{width:100%}#audio .volumn-container[data-v-197bc560]{width:calc(54px * .6)}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-197bc560";
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var entry_esm = /*#__PURE__*/(() => {
  // Get component instance
  const installable = __vue_component__; // Attach install function executed by Vue.use()

  installable.install = Vue => {
    Vue.component('VueAudioPlayer', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;

export default entry_esm;
