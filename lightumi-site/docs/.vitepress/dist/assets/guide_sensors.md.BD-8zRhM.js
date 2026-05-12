import { _ as _export_sfc, o as openBlock, c as createElementBlock, ag as createStaticVNode } from "./chunks/framework.C-KJOnuh.js";
const __pageData = JSON.parse('{"title":"传感器扩展","description":"","frontmatter":{},"headers":[],"relativePath":"guide/sensors.md","filePath":"guide/sensors.md","lastUpdated":null}');
const _sfc_main = { name: "guide/sensors.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h1 id="传感器扩展" tabindex="-1">传感器扩展 <a class="header-anchor" href="#传感器扩展" aria-label="Permalink to &quot;传感器扩展&quot;">​</a></h1><p>当前运行配置中仅包含已实现的 <code>camera_gripper</code> 传感器。未来传感器已有代码占位文件，但在正式实现前不会加入主配置。</p><h2 id="占位文件" tabindex="-1">占位文件 <a class="header-anchor" href="#占位文件" aria-label="Permalink to &quot;占位文件&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sync_capture\\sensors\\imu_sensor\\sensor.py</span></span>\n<span class="line"><span>sync_capture\\sensors\\force_sensor\\sensor.py</span></span>\n<span class="line"><span>sync_capture\\sensors\\custom_sensor\\sensor.py</span></span></code></pre></div><h2 id="接口要求" tabindex="-1">接口要求 <a class="header-anchor" href="#接口要求" aria-label="Permalink to &quot;接口要求&quot;">​</a></h2><p>需要先在对应传感器文件中实现：</p><ul><li><code>start()</code></li><li><code>poll()</code></li><li><code>stop()</code></li></ul><p>传感器实现完成后，再将其添加到 <code>config\\sync_config.json</code> 的 <code>sensors</code> 字段下，并将设备相关参数保存在对应传感器文件夹的 <code>config.json</code> 中。</p><h2 id="原始记录格式" tabindex="-1">原始记录格式 <a class="header-anchor" href="#原始记录格式" aria-label="Permalink to &quot;原始记录格式&quot;">​</a></h2><p>每个未来传感器应按如下格式写入原始记录：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>timestamp_ns + wall_time_iso + elapsed_s + sensor_data + valid/confidence fields</span></span></code></pre></div><p>原始数据应保持异步采集。待传感器数据格式最终确定后，再在 <code>build_training_zarr.py</code> 中增加相应的对齐逻辑。</p>', 12)
  ])]);
}
const sensors = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  sensors as default
};
