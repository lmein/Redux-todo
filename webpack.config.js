const webpack = require('webpack');

module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    alias: {
      Main: 'app/components/main.jsx',
      Nav: 'app/components/nav.jsx',
      Weather: 'app/components/weather.jsx',
      About: 'app/components/about.jsx',
      Examples: 'app/components/examples.jsx',
      WeatherForm: 'app/components/weatherForm.jsx',
      WeatherMessage: 'app/components/weatherMessage.jsx',
      OpenWeatherMap: 'app/api/openWeatherMap.jsx',
      ErrorModal: 'app/components/errorModal.jsx',
      applicationStyles: 'app/styles/app.scss'
    },
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
