export const Option = {
  color: ['#864BFF', '#F22569', '#65E3FF', '#2D37FF', '#89DC2F', '#FFD53E', '#FF5539', '#55F696', '#F754D3', '#368BFF'],
  legend: {
    show: false
  },
  series: [{ // 数据部分
    data: [
      {value: 535, name: '本周订单数'},
      {value: 510, name: '支付订单量'},
      {value: 634, name: '上周周取消订单量'},
      {value: 735, name: '上周周被投诉订单总量'},
      {value: 510, name: '上周支付订单量'},
      {value: 634, name: '本周取消订单量'},
      {value: 735, name: '本周被投诉订单总量'}
    ],
    type: 'pie',
    label: {
      color: '#efefef'
    },
    hoverAnimation: false,
    // labelLine: {show: false},
    radius: '50%',
    center: ['50%', '50%']
  }]
};
