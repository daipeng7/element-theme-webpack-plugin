/*
 * @Author: daipeng
 * @Date: 2019-11-27 09:22:42
 * @LastEditors: VSCode
 * @LastEditTime: 2019-11-29 16:19:26
 * @Description: element-theme-webpack-plugin
 */
import path from 'path';
import fs from 'fs';
import ora from 'ora';
import ElementTheme from 'element-theme';

export default class ElementThemeWebpackPlugin {
	constructor(options) {
		this.options = { theme: 'element-theme-chalk', ...options };
		this.context = '.';
	}

	apply(compiler) {
		this.context = compiler.context;
		const hasPath = this.validResultPath();
		if (!hasPath) return;

		const { config, out } = this.options;

		// create directory
		if (!fs.existsSync(path.dirname(config))) fs.mkdirSync(path.dirname(config));

		if (!fs.existsSync(config)) ElementTheme.init(config);
		if (!fs.existsSync(out)) ElementTheme.run(this.options);
	}

	validResultPath() {
		const { config, out } = this.options;
		if (!config || !out) {
			ora().warn(`the params of element-theme-webpack-plugin is wrong`).stop();
			return false;
		} else return true;
	}
}
