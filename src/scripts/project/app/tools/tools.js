/* global  document */

class Tools {

	getScaledFontSize(textConfig) {

		var maxHeight = (textConfig.maxHeight instanceof Function) ? textConfig.maxHeight.call(this) : textConfig.maxHeight;
		var fontRatio;
		var fontBase;
		var fontSize;

		if (textConfig.currentHeight && maxHeight !== null) {
			if (textConfig.currentHeight > maxHeight) {
				fontRatio = maxHeight / textConfig.currentHeight;

				fontBase = fontRatio * textConfig.currentFontSize;

				// this pulls a big fat warning:
				// fontSize = fontBase > textConfig.maxFont ? textConfig.maxFont : fontBase < textConfig.minFont ? textConfig.minFont : fontBase;
				// so it is rebuilt like this:
				if (fontBase > textConfig.maxFont) {
					fontSize = textConfig.maxFont;
				} else if (fontBase < textConfig.minFont) {
					fontSize = textConfig.minFont;
				} else {
					fontSize = fontBase;
				}
			}
		} else {
			fontRatio = textConfig.maxWidth / textConfig.currentWidth;
			fontBase = fontRatio * textConfig.currentFontSize;

			// this pulls a big fat warning:
			// fontSize = fontBase > textConfig.maxFont ? textConfig.maxFont : fontBase < textConfig.minFont ? textConfig.minFont : fontBase;
			// so it is rebuilt like this:
			if (fontBase > textConfig.maxFont) {
				fontSize = textConfig.maxFont;
			} else if (fontBase < textConfig.minFont) {
				fontSize = textConfig.minFont;
			} else {
				fontSize = fontBase;
			}
		}

		return fontSize;
	}

	getMaxNumberInArray(arrNumbers) {
		return Math.max.apply(Math, arrNumbers);
	}

	getHexaColor(str) {
		var hash = 0;
		for (var i = 0; i < str.length; i++) {
			 hash = str.charCodeAt(i) + ((hash << 5) - hash);
		}
		return hash;
	}

	strRGBtoHex(strRGBA) {
		var rgb = strRGBA.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);

		var r = parseInt(rgb[1], 10);
		var g = parseInt(rgb[2], 10);
		var b = parseInt(rgb[3], 10);

		return this.rgbToHex(r, g, b);
	}

	hexToZeroX(hex) {
		return hex.replace('#', '0x');
	}

	rgbToHex(r, g, b) {
		return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
	}

	rgbToUniforms(rgb) {
		rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);

		var r = parseInt(rgb[1], 10);
		var g = parseInt(rgb[2], 10);
		var b = parseInt(rgb[3], 10);

		return [r / 255, g / 255, b / 255, 1];
	}

	hexToRgb(hex) {
		hex = hex.replace('#', '');

		var r = parseInt(hex.substring(0, 2), 16);
		var g = parseInt(hex.substring(2, 4), 16);
		var b = parseInt(hex.substring(4, 6), 16);

		return 'rgb(' + r + ',' + g + ',' + b + ')';
	}

	hexToRgbArray(hex) {
		hex = hex.replace('#', '');
		var r = parseInt(hex.substring(0, 2), 16);
		var g = parseInt(hex.substring(2, 4), 16);
		var b = parseInt(hex.substring(4, 6), 16);

		return [r, g, b];
	}

	hexToUniforms(hex) {
		var rgb = this.hexToRgb(hex);
		return this.rgbToUniforms(rgb);
	}

	fitImage(config_) {
		var wi = config_.imageWidth;
		var hi = config_.imageHeight;
		var ri = wi / hi;
		var ws = config_.containerWidth;
		var hs = config_.containerHeight;
		var rs = ws / hs;
		var newDimensions = {};

		if (ri > rs) {
			 newDimensions.ratio = hs / hi;
			 newDimensions.w = Math.ceil(wi * hs / hi, newDimensions.h = hs);
		 } else {
			newDimensions.ratio = ws / wi;
			newDimensions.w = ws;
			newDimensions.h = Math.ceil(hi * ws / wi);
		}

		newDimensions.top = (hs - newDimensions.h) / 2;
		newDimensions.left = (ws - newDimensions.w) / 2;

		return newDimensions;
	}

	uniformsToHex(uniforms) {
		var r = uniforms[0] * 255;
		var g = uniforms[1] * 255;
		var b = uniforms[2] * 255;

		return this.rgbToHex(r, g, b);
	}

	getRandomNumber(maxValue, onlyPositive, minValue) {
		var isPositive = Math.round(Math.random());

		if (onlyPositive !== undefined && onlyPositive) isPositive = true;

		var nb = Math.round(Math.random() * maxValue);

		if (minValue !== undefined && nb < minValue) nb = minValue;

		if (isPositive) return nb;
		return -nb;
	}

	sortByAlphabeticalOrder(a, b) {
		if (a < b) return -1;
		if (b < a) return 1;
		return 0;
	}

	supportsWebGL() {
		var canvas = document.createElement('canvas');

		try {
			return Boolean(canvas.getContext('experimental-webgl')) || Boolean(canvas.getContext('webgl'));
		} catch (e) {
			return false;
		}
	}

}

export default new Tools();
