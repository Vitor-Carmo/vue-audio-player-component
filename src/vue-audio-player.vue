<template>
  <div
    id="audio"
    ref="audio_player"
    class="d-flex align-items-center disable-select"
    :class="{
      disabled: !loaded,
    }"
  >
    <button class="button-none" @click="minusTenSeconds" :disabled="!loaded">
      <GoBack class="left" :color="color" />
    </button>

    <div class="d-flex justify-content-center">
      <button
        v-if="loaded"
        class="play mx-md-2 mx-1 button-none"
        @click="playing ? pause() : play()"
        :disabled="!loaded"
      >
        <Play v-if="!playing || paused" :color="color" />
        <Pause v-else :color="color" />
      </button>
      <b-spinner
        v-else
        class="spinner mx-md-2 mx-1"
        :style="`color: ${color}`"
      ></b-spinner>
    </div>

    <button class="button-none" @click="plusTenSeconds" :disabled="!loaded">
      <GoBack class="right" :color="color" />
    </button>

    <input
      min="0"
      @input="setPosition"
      :value="percentage"
      step="0.01"
      :max="100"
      type="range"
      class="seak-bar mx-md-4 mx-3 default"
      :disabled="!loaded"
    />

    <span class="mx-md-4 mx-3" :style="`color: ${color}`"
      >{{ currentTime }} / {{ duration }}</span
    >
    <div @click="mute" class="volume">
      <Volumn v-if="!isMuted" :color="color" />
      <Mute v-else :color="color" />
    </div>

    <input
      min="0"
      step="0.1"
      @input="setVolume"
      :max="1"
      :value="playerVolume"
      type="range"
      class="volumn-container mr-md-4 mr-2"
      :disabled="!loaded"
    />
    <!-- <Open  class="open"/>  -->
    <audio
      id="player"
      v-on:loop="loop"
      ref="player"
      v-on:autoplay="autoPlay"
      v-on:ended="ended"
      v-on:canplay="canPlay"
      :src="src"
    ></audio>
  </div>
</template>

<script>
import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import GoBack from "../components/GoBack.vue";
import Play from "../components/Play.vue";
import Pause from "../components/Pause.vue";
import Volumn from "../components/Volumn.vue";
import Mute from "../components/Mute.vue";

Vue.use(BootstrapVue);

const formatTime = (second) =>
  new Date(second * 1000).toISOString().substr(11, 8);
  
export default {
  name: "vue-audio-player",
  props: {
    src: {
      type: String,
      default: null,
    },
    autoPlay: {
      type: Boolean,
      default: false,
    },
    ended: {
      type: Function,
      default: () => {},
    },

    canPlay: {
      type: Function,
      default: () => {},
    },

    color: {
      type: String,
      default: "#FFF",
    },

    loop: {
      type: Boolean,
      default: false,
    },

    rangeColor: {
      type: String,
      default: "#FFFFFF50",
    },
  },

  computed: {
    duration: function () {
      return this.audio ? formatTime(this.totalDuration) : "";
    },
  },

  components: {
    GoBack,
    Play,
    Pause,
    Volumn,
    Mute,
  },

  data() {
    return {
      firstPlay: true,
      isMuted: false,
      loaded: false,
      playing: false,
      paused: false,
      percentage: 0,
      currentTime: "00:00:00",
      audio: undefined,
      totalDuration: 0,
      playerVolume: 1,
    };
  },

  mounted() {
    this.audio = this.$refs.player;
    this.init();
    this.$refs.audio_player.style.setProperty("--color", `${this.color}`);
    this.$refs.audio_player.style.setProperty(
      "--rangeColor",
      `${this.rangeColor}`
    );
  },

  methods: {
    setPosition(e) {
      this.audio.currentTime = parseInt(
        (this.audio.duration / 100) * e.target.value
      );
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
      this.audio.play().then(() => (this.playing = true));
      this.paused = false;
    },
    pause() {
      this.paused = !this.paused;
      this.paused ? this.audio.pause() : this.audio.play();
    },
    download() {
      this.audio.pause();
      window.open(this.src, "download");
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
        throw new Error("Failed to load sound src");
      }
    },
    _handlePlayingUI: function () {
      this.audio.volume = this.playerVolume;
      this.percentage = (this.audio.currentTime / this.audio.duration) * 100;
      this.currentTime = formatTime(this.audio.currentTime);
      this.playing = true;
    },
    _handlePlayPause: function (e) {
      if (e.type === "play" && this.firstPlay) {
        // in some situations, audio.currentTime is the end one on chrome
        this.audio.currentTime = 0;
        if (this.firstPlay) {
          this.firstPlay = false;
        }
      }
      if (
        e.type === "pause" &&
        this.paused === false &&
        this.playing === false
      ) {
        this.currentTime = "00:00:00";
      }
    },
    _handleEnded() {
      this.paused = this.playing = false;
    },
    init: function () {
      this.audio.addEventListener("timeupdate", this._handlePlayingUI);
      this.audio.addEventListener("loadeddata", this._handleLoaded);
      this.audio.addEventListener("pause", this._handlePlayPause);
      this.audio.addEventListener("play", this._handlePlayPause);
      this.audio.addEventListener("ended", this._handleEnded);
    },
  },

  beforeDestroy() {
    this.audio.removeEventListener("timeupdate", this._handlePlayingUI);
    this.audio.removeEventListener("loadeddata", this._handleLoaded);
    this.audio.removeEventListener("pause", this._handlePlayPause);
    this.audio.removeEventListener("play", this._handlePlayPause);
    this.audio.removeEventListener("ended", this._handleEnded);
  },
};
</script>

<style scoped>
#audio {
  --color: #fff;
  --rangeColor: #ffffff50;
}
.button-none {
  background: none;
  border: none;
}

.white-color {
  color: white;
}

#audio {
  width: 100%;
}

#audio.disabled {
  opacity: 0.7;
}

#audio .seak-bar.default {
  background: var(--rangeColor); /* Grey background */
}

#audio .seak-bar {
  -webkit-appearance: none; /* Override default CSS styles */
  border-radius: 20px;
  flex: 1;
  height: 14px;
  cursor: pointer;
  outline: none;
}

#audio .seak-bar::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 14px; /* Set a specific slider handle width */
  height: 14px; /* Slider handle height */
  background: var(--color); /* Green background */
  cursor: pointer; /* Cursor on hover */
  border-radius: 50%;
}

#audio .seak-bar::-moz-range-thumb {
  width: 14px; /* Set a specific slider handle width */
  height: 14px; /* Slider handle height */
  background: var(--color); /* Green background */
  cursor: pointer; /* Cursor on hover */
}

#audio span {
  font-size: 12px;
  font-weight: 100;
}

#audio .open,
#audio .right,
#audio .play,
#audio .left,
#audio .volume {
  cursor: pointer;
  opacity: 0.85;
  transition: 0.5s;
}

#audio .left,
#audio .right {
  transition: 0.15s;
}

#audio .open:hover,
#audio .right:hover,
#audio .play:hover,
#audio .left:hover,
#audio .volume:hover {
  opacity: 1;
}

#audio .volume {
  width: 20px;
  margin-right: 8px;
}
#audio .right {
  transform: matrix(-1, 0, 0, 1, 0, 0);
}

#audio .left:active {
  transform: rotate(-45deg);
}

#audio .right:active {
  transform: rotate(45deg) matrix(-1, 0, 0, 1, 0, 0);
}

#audio .volumn-container.default {
  background: var(--rangeColor); /* Grey background */
}

#audio .volumn-container {
  -webkit-appearance: none; /* Override default CSS styles */
  border-radius: 20px;
  height: 10px;
  width: 54px;
  background: var(--rangeColor);
  cursor: pointer;
  outline: none;
}

#audio .volumn-container::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 10px; /* Set a specific slider handle width */
  height: 10px; /* Slider handle height */
  background: var(--color); /* Green background */
  cursor: pointer; /* Cursor on hover */
  border-radius: 50%;
}

#audio .volumn-container::-moz-range-thumb {
  width: 10px; /* Set a specific slider handle width */
  height: 10px; /* Slider handle height */
  background: var(--color); /* Green background */
  cursor: pointer; /* Cursor on hover */
}

#audio .volumn-container::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 10px; /* Set a specific slider handle width */
  height: 10px; /* Slider handle height */
  background: var(--color); /* Green background */
  cursor: pointer; /* Cursor on hover */
  border-radius: 50%;
}

#audio .volumn-container::-moz-range-thumb {
  width: 10px; /* Set a specific slider handle width */
  height: 10px; /* Slider handle height */
  background: var(--color); /* Green background */
  cursor: pointer; /* Cursor on hover */
}

.spinner {
  height: 16.843px;
  width: 16.843px;
}

@media (max-width: 609px) {
  #audio span {
    font-size: calc(12px * 0.9);
  }
}

@media (max-width: 408px) {
  #audio .seak-bar {
    width: 100%;
  }

  #audio .volumn-container {
    width: calc(54px * 0.6);
  }
}
</style>
