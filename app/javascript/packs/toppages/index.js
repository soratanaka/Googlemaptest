
  let geocoder;
  let map;
  let marker = []; // マーカーを複数表示させたいので、配列化
  let infoWindow = []; // 吹き出しを複数表示させたいので、配列化
  let markerData = gon.places; // コントローラーで定義したインスタンス変数を変数に代入
  var ramen = [];//ここが配列になる
  // let ramen = markerData.shift 
// for (var i=0; i< markerData.length; i++){function
//   onClick="chg_chk('document.write('<li>'+  markerData[i]['name'] + '</li>')')"; 
// }


// window.onload = function () {
//   document.getElementById("text-button").onclick = function () {
//     document.getElementById("text").innerHTML = "クリックされた！";
//   };
// };

// function changeMarker(){
//   document.getElementById('test').textContent = 'ok';
// }
// document.getElementById('places_name').addEventListener('click',changeMarker);

// function initMap(){
//     geocoder = new google.maps.Geocoder()
//     if(!navigator.geolocation) {
//       alert('Geolocation APIに対応していません');
//       return false;
//     }
//     navigator.geolocation.getCurrentPosition(function(position) {
//       latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

//       map = new google.maps.Map(document.getElementById('map'), {
//         center: latLng,
//         zoom: 12,
//       });

//       marker = new google.maps.Marker({
//         position:  latLng,
//         map: map
//       });
//     }, function() {
//         alert('位置情報取得に失敗しました');
//       });

//     for (var i = 0; i < markerData.length; i++) {
//       let id = markerData[i]['id']

//       // 各地点の緯度経度を算出
//       markerLatLng = new google.maps.LatLng({
//         lat: markerData[i]['latitude'],
//         lng: markerData[i]['longitude']
//       });

//       // 各地点のマーカーを作成
//       marker[i] = new google.maps.Marker({
//         position: markerLatLng,
//         map: map
//       });

//       // 各地点の吹き出しを作成
//       infoWindow[i] = new google.maps.InfoWindow({
//         // 吹き出しの内容
//         content: markerData[i]['address']
//       });

//       // マーカーにクリックイベントを追加
//       markerEvent(i);
//     }
//   // マーカーをクリックしたら吹き出しを表示
//   function markerEvent(i) {
//     marker[i].addListener('click', function () {
//       infoWindow[i].open(map, marker[i]);
//     });
//   }
//     }
// </script>

// google.maps.event.addListener(map, 'idle',function() {
//   var mapMarkerData = [];

// //地図の範囲内を取得
// var bounds = map.getBounds();
// mapNE_lat = bounds.getNorthEast().lat();
// mapSW_lat = bounds.getSouthWest().lat();
// mapNE_lng = bounds.getNorthEast().lng();
// mapSW_lng = bounds.getSouthWest().lng();



// var j = 0;
// for (var i = 0; i < items.length; i++) {
// if (mapNE_lat >= items[i]['latitude'] && items[i]['latitude'] >= mapSW_lat) {
//   if (mapNE_lng >= items[i]['studios'] && items[i]['studios'] >= mapSW_lng) { 
//     mapMarkerData[j] = items[i];
//     j++;

//   }
// }
// }
// console.log(mapMarkerData)

// $.ajax({
// url: '/items/search',
// type: 'GET',
// dataType: 'json',
// data: {
// mapMarkerData: mapMarkerData
// },
//         });