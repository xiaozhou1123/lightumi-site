import { _ as _export_sfc, o as openBlock, c as createElementBlock, ag as createStaticVNode } from "./chunks/framework.C-KJOnuh.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"LightUMI","text":"轻量级机器人训练数据采集工具","tagline":"基于共享软件时钟同步记录相机、夹爪与未来多传感器数据，保留原始记录并构建可用于训练的数据数组。","image":{"src":"/logo.svg","alt":"LightUMI"},"actions":[{"theme":"brand","text":"快速开始","link":"/guide/getting-started"},{"theme":"alt","text":"查看 Gitee","link":"https://gitee.com/zhouyangxin/light-umi"}]},"features":[{"title":"同步采集","details":"使用统一软件时钟记录 timestamp_ns、wall_time_iso 与 elapsed_s，便于跨设备对齐。"},{"title":"可追溯原始数据","details":"保留原始视频、逐帧 CSV、会话元数据和设备日志，方便回放、排查和复现实验。"},{"title":"面向训练流程","details":"将相机帧索引和夹爪宽度后处理为固定频率数组，可输出 NPZ，也可选写入 Zarr。"}]},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":null}');
const _sfc_main = { name: "index.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h2 id="项目定位" tabindex="-1">项目定位 <a class="header-anchor" href="#项目定位" aria-label="Permalink to &quot;项目定位&quot;">​</a></h2><p>LightUMI 是一个轻量级数采工具，用于采集同步数据并服务于机器人训练。当前实现聚焦 <code>camera_gripper</code> 工作流：录制原始相机视频，基于两个 ArUco 标记测量夹爪开度，并将数据对齐为训练数组。</p><div class="metric-grid"><div class="metric"><strong>1</strong><span>共享软件时钟</span></div><div class="metric"><strong>3</strong><span>核心时间字段</span></div><div class="metric"><strong>NPZ / Zarr</strong><span>训练数组输出</span></div></div><h2 id="数据产物" tabindex="-1">数据产物 <a class="header-anchor" href="#数据产物" aria-label="Permalink to &quot;数据产物&quot;">​</a></h2><p>每次采集会话都会写入独立目录，包含：</p><ul><li><code>raw/camera_raw.mp4</code></li><li><code>raw/camera.csv</code></li><li><code>raw/gripper.csv</code></li><li><code>metadata.json</code></li><li><code>device.log</code></li><li><code>camera_gripper_metadata.json</code></li></ul><h2 id="贡献者" tabindex="-1">贡献者 <a class="header-anchor" href="#贡献者" aria-label="Permalink to &quot;贡献者&quot;">​</a></h2><div class="contributor-grid"><a class="contributor" href="https://gitee.com/zhouyangxin"><img src="https://gitee.com/zhouyangxin.png" alt="zhouyangxin"><span>zhouyangxin</span></a></div>', 8)
  ])]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  index as default
};
