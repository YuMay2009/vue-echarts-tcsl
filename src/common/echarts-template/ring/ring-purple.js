export const Option = {
  title: [{
    text: '54%',
    subtext: '订单数',
    x: '34%',
    y: '42%',
    textStyle: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'normal'
    },
    textAlign: 'center',
    subtextStyle: {
      color: 'rgba(255,255,255,.45)',
      fontSize: 14,
      fontWeight: 'normal'
    }
  }],
  color: ['#864BFF', '#F22569', '#65E3FF', '#2D37FF', '#89DC2F', '#FFD53E', '#FF5539', '#55F696', '#F754D3', '#368BFF'],
  legend: {
    textStyle: {
      color: '#efefef'
    },
    data: ['订单量', '取消量', '支付量', '投诉量', '被投诉'],
    orient: 'vertival',
    selectedMode: false,
    itemGap: 10,
    itemWidth: 14,
    itemHeight: 14,
    left: 'right',
    right: '4%',
    top: 'center'
  },
  series: [{ // 数据部分
    data: [
      {value: 935, name: '订单量'},
      {value: 410, name: '取消量'},
      {value: 334, name: '支付量'},
      {value: 235, name: '投诉量'},
      {value: 110, name: '被投诉'}
    ],
    type: 'pie',
    hoverAnimation: false,
    label: {show: false},
    labelLine: {show: false},
    radius: ['35%', '50%'],
    center: ['35%', '50%']
  }, { // 外部圆圈
    data: [
      {value: 5, name: ''},
      {value: 5, name: ''},
      {value: 5, name: ''},
      {value: 5, name: ''},
      {value: 5, name: ''},
      {value: 5, name: ''},
      {value: 5, name: ''},
      {value: 5, name: ''}
    ],
    type: 'pie',
    itemStyle: {
      normal: {
        color: '#3A1B7A',
        borderColor: '#282151', // 需要与背景保持一致，才会出现间隙效果
        borderWidth: 6
      },
      emphasis: {
        color: '#3A1B7A',
        borderColor: '#282151', // hover高亮状态需要与背景保持一致，才会出现间隙效果
        borderWidth: 6
      }
    },
    hoverAnimation: false,
    labelLine: {show: false},
    radius: ['53%', '62%'],
    center: ['35%', '50%']
  }, { // 内部圆圈
    data: [
      {value: 100, name: ''}
    ],
    type: 'pie',
    label: {show: false},
    labelLine: {show: false},
    itemStyle: {
      normal: {
        color: '#3A1B7A'
      },
      emphasis: {
        color: '#3A1B7A'
      }
    },
    hoverAnimation: false,
    radius: ['30%', '31%'],
    center: ['35%', '50%']
  }]
};