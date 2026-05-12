import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"数据对齐","description":"","frontmatter":{},"headers":[],"relativePath":"guide/data-alignment.md","filePath":"guide/data-alignment.md","lastUpdated":null}');
const _sfc_main = { name: "guide/data-alignment.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="数据对齐" tabindex="-1">数据对齐 <a class="header-anchor" href="#数据对齐" aria-label="Permalink to &quot;数据对齐&quot;">​</a></h1><p>LightUMI 使用共享软件时钟记录各路数据，使相机帧、夹爪宽度和未来传感器数据可以在同一时间基准下对齐。</p><h2 id="核心字段" tabindex="-1">核心字段 <a class="header-anchor" href="#核心字段" aria-label="Permalink to &quot;核心字段&quot;">​</a></h2><ul><li><code>timestamp_ns</code>：来自 <code>time.monotonic_ns()</code> 的单调时钟时间戳。</li><li><code>frame_index</code>：用于精确对齐视频帧。</li><li><code>elapsed_s</code>：相对于会话开始时刻的实验时间。</li><li><code>wall_time_iso</code>：系统绝对时间，用于与外部设备对齐。</li></ul><p>未来传感器应基于相同的 <code>elapsed_s</code> 和 <code>wall_time_iso</code> 时间基准写入各自的 CSV。</p><h2 id="相机与夹爪同步" tabindex="-1">相机与夹爪同步 <a class="header-anchor" href="#相机与夹爪同步" aria-label="Permalink to &quot;相机与夹爪同步&quot;">​</a></h2><p>相机帧时间戳由专用采集线程在 <code>capture.read()</code> 返回解码帧后立即赋值。该线程先写入 <code>raw/camera_raw.mp4</code> 和 <code>raw/camera.csv</code>，随后再将帧传递到夹爪处理队列。</p><p>由同一帧计算得到的夹爪数据行使用相同的 <code>timestamp_ns</code>，因此满足同步方案中 <code>t_gripper = t_cam</code> 的要求。这个时间戳是软件接收时间戳，不是硬件曝光开始时间戳。</p><h2 id="队列策略" tabindex="-1">队列策略 <a class="header-anchor" href="#队列策略" aria-label="Permalink to &quot;队列策略&quot;">​</a></h2><p>原始视频采集优先级高于夹爪处理。当处理队列已满时，原始帧仍会被写入，对应夹爪数据行会被标记为无效。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/data-alignment.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dataAlignment = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dataAlignment as default
};
