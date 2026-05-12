# 传感器扩展

当前运行配置中仅包含已实现的 `camera_gripper` 传感器。未来传感器已有代码占位文件，但在正式实现前不会加入主配置。

## 占位文件

```text
sync_capture\sensors\imu_sensor\sensor.py
sync_capture\sensors\force_sensor\sensor.py
sync_capture\sensors\custom_sensor\sensor.py
```

## 接口要求

需要先在对应传感器文件中实现：

- `start()`
- `poll()`
- `stop()`

传感器实现完成后，再将其添加到 `config\sync_config.json` 的 `sensors` 字段下，并将设备相关参数保存在对应传感器文件夹的 `config.json` 中。

## 原始记录格式

每个未来传感器应按如下格式写入原始记录：

```text
timestamp_ns + wall_time_iso + elapsed_s + sensor_data + valid/confidence fields
```

原始数据应保持异步采集。待传感器数据格式最终确定后，再在 `build_training_zarr.py` 中增加相应的对齐逻辑。
