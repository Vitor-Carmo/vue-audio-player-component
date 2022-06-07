## Installing

```shell
$ npm install --save vue-audio-player-component
```

## Usage

```js
<script>
import VueAudioPlayer from 'vue-audio-player-component';

export default {
  ...

  components: {
    VueAudioPlayer
  },

  ...
}
</script>
```

```html
<vue-audio-player src="https://d3ctxlq1ktw2nl.cloudfront.net/staging/2021-05-25/fb095de4c931b43df24cef68541e89c6.m4a"/>

<vue-audio-player color="#2edeb0" rangeColor="#2edeb050" src="https://d3ctxlq1ktw2nl.cloudfront.net/staging/2021-05-17/e65d4630980a822363aee15b84b760e6.m4a"/>

<vue-audio-player color="rgb(29, 161, 242)" rangeColor="rgba(29, 161, 242, .5)" src="https://d3ctxlq1ktw2nl.cloudfront.net/staging/2021-02-19/337f657d44eee46c63a79b7302b31f6b.m4a"/>

<vue-audio-player color="#333333" rangeColor="#33333350" src="https://d3ctxlq1ktw2nl.cloudfront.net/staging/2021-03-05/1135fcddf2d57ba8a42417e36d98d825.m4a"/>
```
### Code result

![](https://raw.githubusercontent.com/Vitor-Carmo/vue-audio-player-component/master/.github/result_code.jpg)


<br/>

## Props

```js
props: {
    // audio file 
    src: {
      type: String,
      default: null,
    },

    // if true the audio player will play automatically
    autoPlay: {
      type: Boolean,
      default: false,
    },

    // on audio ended event
    ended: {
      type: Function,
      default: () => {},
    },

    // The canplay event occurs when the browser can start playing the specified audio.
    canPlay: {
      type: Function,
      default: () => {},
    },
    // it is the color of play icon, back icon, mute icon, minutes and seakbar thumb
    color: {
      type: String,
      default: "#FFF",
    },

    // it specifies that the audio will start over again, every time it is finished.
    loop: {
      type: Boolean,
      default: false,
    },
    // it is seakbar background color of volume and the audio 
    rangeColor: {
      type: String,
      default: "#FFFFFF50",
    },
}
```

enjoy it! lmao 
