require('./src/styles/code-button.scss');

exports.onRouteUpdate = () => {
  window.locations = window.locations || [document.referrer];
  window.locations.push(window.location.href);
  window.previousPath = window.locations[window.locations.length - 1];
};
