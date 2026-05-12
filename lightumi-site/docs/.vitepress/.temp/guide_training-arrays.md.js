import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"训练数组","description":"","frontmatter":{},"headers":[],"relativePath":"guide/training-arrays.md","filePath":"guide/training-arrays.md","lastUpdated":null}');
const _sfc_main = { name: "guide/training-arrays.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="训练数组" tabindex="-1">训练数组 <a class="header-anchor" href="#训练数组" aria-label="Permalink to &quot;训练数组&quot;">​</a></h1><p>完成一次会话录制后，可以将原始记录构建为面向训练流程的固定频率数组。</p><h2 id="构建-npz" tabindex="-1">构建 NPZ <a class="header-anchor" href="#构建-npz" aria-label="Permalink to &quot;构建 NPZ&quot;">​</a></h2><p>在项目根目录执行：</p><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">python .\\sync_acquisition_project\\build_training_zarr.py .\\sync_acquisition_project\\records\\session_YYYYMMDD_HHMMSS</span></span></code></pre></div><p>该命令会写入：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>training_arrays.npz</span></span></code></pre></div><h2 id="构建-zarr" tabindex="-1">构建 Zarr <a class="header-anchor" href="#构建-zarr" aria-label="Permalink to &quot;构建 Zarr&quot;">​</a></h2><p>如果已安装 <code>zarr</code> Python 包，可以追加 <code>--zarr</code> 参数：</p><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">python </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">-</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">m pip install zarr</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">python .\\sync_acquisition_project\\build_training_zarr.py .\\sync_acquisition_project\\records\\session_YYYYMMDD_HHMMSS </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">--</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">zarr</span></span></code></pre></div><h2 id="当前数组" tabindex="-1">当前数组 <a class="header-anchor" href="#当前数组" aria-label="Permalink to &quot;当前数组&quot;">​</a></h2><ul><li><code>timestamp_ns</code></li><li><code>camera_frame_index</code></li><li><code>image_dt_ns</code></li><li><code>image_valid</code></li><li><code>gripper_width_mm</code></li><li><code>gripper_confidence</code></li><li><code>gripper_valid</code></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/training-arrays.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const trainingArrays = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  trainingArrays as default
};
