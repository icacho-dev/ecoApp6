angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.factory('weatherService', function () {
  return {
      weather: function (_woeid,source) {
          $('.weather').fadeIn("slow");
          $.simpleWeather({
          woeid: _woeid, //2357536
          location: '',
          unit: 'c',
          success: function(weather) {

            /*if(weather.temp > 75) {
              $('body').animate({backgroundColor: '#F7AC57'}, 1500);
            } else {
              $('body').animate({backgroundColor: '#0091c2'}, 1500);
            }*/

            function setWeatherIcon(condid) { 
              switch(condid) {
                case '0': var icon  = '<i class="wi wi-tornado"></i>';
                break;
                case '1': var icon  = '<i class="wi wi-storm-showers"></i>';
                break;
                case '2': var icon  = '<i class="wi wi-tornado"></i>';
                break;
                case '3': var icon  = '<i class="wi wi-thunderstorm"></i>';
                break;
                case '4': var icon  = '<i class="wi wi-thunderstorm"></i>';
                break;
                case '5': var icon  = '<i class="wi wi-snow"></i>';
                break;
                case '6': var icon  = '<i class="wi wi-rain-mix"></i>';
                break;
                case '7': var icon  = '<i class="wi wi-rain-mix"></i>';
                break;
                case '8': var icon  = '<i class="wi wi-sprinkle"></i>';
                break;
                case '9': var icon  = '<i class="wi wi-sprinkle"></i>';
                break;
                case '10': var icon  = '<i class="wi wi-hail"></i>';
                break;
                case '11': var icon  = '<i class="wi wi-showers"></i>';
                break;
                case '12': var icon  = '<i class="wi wi-showers"></i>';
                break;
                case '13': var icon  = '<i class="wi wi-snow"></i>';
                break;
                case '14': var icon  = '<i class="wi wi-storm-showers"></i>';
                break;
                case '15': var icon  = '<i class="wi wi-snow"></i>';
                break;
                case '16': var icon  = '<i class="wi wi-snow"></i>';
                break;
                case '17': var icon  = '<i class="wi wi-hail"></i>';
                break;
                case '18': var icon  = '<i class="wi wi-hail"></i>';
                break;
                case '19': var icon  = '<i class="wi wi-cloudy-gusts"></i>';
                break;
                case '20': var icon  = '<i class="wi wi-fog"></i>';
                break;
                case '21': var icon  = '<i class="wi wi-fog"></i>';
                break;
                case '22': var icon  = '<i class="wi wi-fog"></i>';
                break;
                case '23': var icon  = '<i class="wi wi-cloudy-gusts"></i>';
                break;
                case '24': var icon  = '<i class="wi wi-cloudy-windy"></i>';
                break;
                case '25': var icon  = '<i class="wi wi-thermometer"></i>';
                break;
                case '26': var icon  = '<i class="wi wi-cloudy"></i>';
                break;
                case '27': var icon  = '<i class="wi wi-night-cloudy"></i>';
                break;
                case '28': var icon  = '<i class="wi wi-day-cloudy"></i>';
                break;
                case '29': var icon  = '<i class="wi wi-night-cloudy"></i>';
                break;
                case '30': var icon  = '<i class="wi wi-day-cloudy"></i>';
                break;
                case '31': var icon  = '<i class="wi wi-night-clear"></i>';
                break;
                case '32': var icon  = '<i class="wi wi-day-sunny"></i>';
                break;
                case '33': var icon  = '<i class="wi wi-night-clear"></i>';
                break;
                case '34': var icon  = '<i class="wi wi-day-sunny-overcast"></i>';
                break;
                case '35': var icon  = '<i class="wi wi-hail"></i>';
                break;
                case '36': var icon  = '<i class="wi wi-day-sunny"></i>';
                break;
                case '37': var icon  = '<i class="wi wi-thunderstorm"></i>';
                break;
                case '38': var icon  = '<i class="wi wi-thunderstorm"></i>';
                break;
                case '39': var icon  = '<i class="wi wi-thunderstorm"></i>';
                break;
                case '40': var icon  = '<i class="wi wi-storm-showers"></i>';
                break;
                case '41': var icon  = '<i class="wi wi-snow"></i>';
                break;
                case '42': var icon  = '<i class="wi wi-snow"></i>';
                break;
                case '43': var icon  = '<i class="wi wi-snow"></i>';
                break;
                case '44': var icon  = '<i class="wi wi-cloudy"></i>';
                break;
                case '45': var icon  = '<i class="wi wi-lightning"></i>';
                break;
                case '46': var icon  = '<i class="wi wi-snow"></i>';
                break;
                case '47': var icon  = '<i class="wi wi-thunderstorm"></i>';
                break;
                case '3200': var icon  =  '<i class="wi wi-cloud"></i>';
                break;
                default: var icon  =  '<i class="wi wi-cloud"></i>';
                break;
              }             
              return icon;             
            }

            var timestamp = moment(weather.updated);
            //html  = '<ul><li>'+weather.city+', '+weather.region+'</li>';
            html  = '<ul><li>'+weather.city+'</li>';
            html += '<p class="updated">Updated '+moment(timestamp).fromNow()+'</p>';
            //html += '<h1 class="icon-'+weather.code+'"></h1>';
            html += setWeatherIcon(weather.code);
            html += '<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
            html += '<h2 class="alt">'+weather.alt.temp+'&deg;f</h2>';
            html += '&nbsp;<h2 class="alt"><i class="icon ion-waterdrop" style="color: rgba(86, 171, 195, 0.79);"></i>&nbsp;'+weather.humidity+'%</h2>';
            //html += '<li class="alt">'+weather.currently+'</li></ul>';
            //html += '<li>'+weather.tempAlt+'&deg;C</li></ul>';
            
            for(var i=0;i<weather.forecast.length;i++) {
              html += '<div class="row">';
              html += (i==0)?' <div class="col eco-forecast-first">':' <div class="col eco-forecast">';
              html +=     setWeatherIcon(weather.forecast[i].code);
              html += ' </div>';
              html += (i==0)?' <div class="col eco-forecast-first">':' <div class="col eco-forecast">';
              html += '<span class="eco-forecast-day">'+weather.forecast[i].day+'</span>';
              html += ' </div>';
              html += (i==0)?' <div class="col eco-forecast-first">':' <div class="col eco-forecast">';
              html += '<span class="eco-forecast-day"><i class="icon eco-orange-dark ion-chevron-up"></i>&nbsp;'+weather.forecast[i].high+'&deg;</span>';
              html += ' </div>';
              html += (i==0)?' <div class="col eco-forecast-first">':' <div class="col eco-forecast">';
              html += '<span class="eco-forecast-day"><i class="icon eco-blue-dark ion-chevron-down"></i>&nbsp;'+weather.forecast[i].low+'&deg;</span>';
              html += ' </div>';
              html += '</div>';
              //html += '<p class="eco-forecast">'+setWeatherIcon(weather.forecast[i].code)+'<span class="eco-forecast-day">'+weather.forecast[i].day+'</span>: '+weather.forecast[i].high+'</p>';
            }
            


            html += '<div class="divider" style="height:30px;"></div>';
            
            console.info('weather.code',weather.code);
            console.info('weather.title',weather.title);
            console.info('weather.currently',weather.currently);

            return $("#"+source).hide().html(html).fadeIn("slow");
          },
          error: function(error) {
            return $("#"+source).html('<p>'+error+'</p>');
          }
        });
          
      },
      header: function(){
        $('.mainLogo').fadeIn(1500);
        return true;
      }
  }
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('DashboardCtrl', function($scope, $stateParams, weatherService) {
  
  $scope.getHeader = weatherService.header;  
  $scope.getWeather = weatherService.weather;  

});
