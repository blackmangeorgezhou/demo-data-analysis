<template>
  <div :id="elementId" class="circle-compare-panel" :style="panelStyle" @click="clickComparePanel">
    <el-card :body-style="{ padding: '0px' }" shadow="hover">
      <div slot="header">
        <span>{{title}}</span>
      </div>
      <p class="text-align-c">
        <span class="percentage-value-text" v-if="type === 'text'">{{percentage + '%'}}</span>
        <i class="percentage-value-text" :class="panelIcon" v-else-if="type === 'icon'"></i>
        <el-progress v-else type="circle" :stroke-width="height * 0.1" :width="height" :percentage="percentage" :color="circleColors"></el-progress>
      </p>
      <p v-if="target" :class="position === 'center' ? 'text-align-c' : 'text-align-l'" :style="'font-size:' + 0.1 * height +'px'">{{target}}</p>
    </el-card>
  </div>
</template>
<script>
import { Formate } from '@/utils'
import TestTagIcon from '@/assets/images/testTag.png'

export default {
  name: 'CircleComparePanel',

  props: {
    type: {
      type: String,
      default: 'text' // text; progress; icon
    },
    height: {
      type: Number,
      default: 140
    },
    bgColor: {
      type: String,
      default: '#409EFF'
    },
    title: {
      type: String,
      default: 'This is a Title'
    },
    percentage: {
      type: Number,
      default: 50
    },
    target: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: 'center'
    },
    panelIcon: {
      type: String,
      default: 'el-icon-data-analysis'
    },
    tagIcon: {
      type: Boolean,
      default: false
    }
  },

  mounted () {
    const cardEle = document.querySelector(`#${this.elementId} .el-card`)
    let cardHeaderEle = document.querySelector(`#${this.elementId} .el-card .el-card__header`)
    cardHeaderEle.style.backgroundColor = this.bgColor
    let cardBodyEle = document.querySelector(`#${this.elementId} .el-card .el-card__body`)
    let innerTextEle = document.querySelector(`#${this.elementId} .el-card .el-card__body .el-progress__text`)
    let percentageTextValueEle = document.querySelector(`#${this.elementId} .el-card .el-card__body .percentage-value-text`)

    const cardH = cardEle.clientHeight
    cardHeaderEle.style.fontSize = `${this.height * 0.1}px`
    cardHeaderEle.style.height = `${this.height * 0.25}px`
    cardHeaderEle.style.lineHeight = `${this.height * 0.25}px`
    const headerH = cardHeaderEle.clientHeight
    cardBodyEle.style.height = `${cardH - headerH}px`
    if (this.tagIcon) {
      cardBodyEle.style.backgroundImage = `url(${TestTagIcon})`
    }

    if (innerTextEle) {
      innerTextEle.style.fontSize = `${this.height * 0.25}px`
    }

    if (percentageTextValueEle) {
      if (this.type === 'icon') {
        percentageTextValueEle.style.fontSize = `${this.height * 0.5}px`
        percentageTextValueEle.style.color = this.bgColor
      } else {
        percentageTextValueEle.style.fontSize = `${this.height * 0.35}px`
        percentageTextValueEle.style.lineHeight = `${this.height * 0.8}px`
      }
    }
  },

  computed: {
    panelStyle () {
      const parentW = this.height * 1.625
      return `width: ${parentW}px; height: ${parentW}px;`
    },

    elementId () {
      return `circle-compare-panel-${Formate.generateUUID()}`
    }
  },

  data () {
    return {
      circleColors: [
        {color: '#f56c6c', percentage: 30},
        {color: '#e6a23c', percentage: 60},
        {color: '#5cb87a', percentage: 80},
        {color: '#67c23a', percentage: 100}
      ],
      TestTagIcon: TestTagIcon
    }
  },

  methods: {
    clickComparePanel () {
      this.$emit('clickPanel')
    }
  }
}
</script>

<style>
.circle-compare-panel {
  padding: 0 1rem 1rem 0;
  margin: 1rem;
}

.circle-compare-panel .el-card {
  height: 100%;
}

.circle-compare-panel .el-card .el-card__body {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-repeat: no-repeat;
  background-position: bottom right;
}

.circle-compare-panel .el-card .el-card__header {
  /* background-color: #098D91; #5CB87A */
  color: #fff;
  font-size: 1.125rem;
  padding: 0 1rem
}
</style>
