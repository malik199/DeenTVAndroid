cordova.define("com.phonegap.plugins.videoplayer.VideoPlayer", function(require, exports, module) {

(function(cordova) {

	

	function VideoPlayer() {
		this.url = null;
	}

	VideoPlayer.prototype.play = function(url) {
		cordova.exec(null, null, "VideoPlayer", "playVideo", [url]);
	};


	
	VideoPlayer.install = function() {
	    if (!window.plugins) {
	      window.plugins = {};
	    }
	    window.plugins.videoPlayer = new VideoPlayer();
	 
	  videoPlayer = window.plugins.videoPlayer;
	
	//module.exports = videoPlayer;
	};

  cordova.addConstructor(VideoPlayer.install );

})(window.cordova || window.Cordova || window.PhoneGap);});
