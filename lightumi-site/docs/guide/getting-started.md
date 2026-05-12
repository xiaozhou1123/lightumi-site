# 快速开始

LightUMI 目前提供 `camera_gripper` 采集流程。运行前请先安装 Python 依赖，并确认相机与 ArUco 标记配置正确。

## 安装 Python 依赖

在项目根目录执行：

```powershell
python -m pip install -r requirements.txt
```

如需输出 Zarr 文件，可以额外安装：

```powershell
python -m pip install zarr
```

## 启动采集

在项目根目录执行：

```powershell
python .\sync_acquisition_project\run_capture.py --config .\sync_acquisition_project\config\sync_config.json
```

## 配置结构

配置文件采用分层结构：

- `config/sync_config.json`：会话、采集循环、训练时间线、已启用传感器引用。
- `sync_capture/sensors/camera_gripper/config.json`：相机、ArUco、开度测量、视频、预览和相机控制设置。

每个传感器拥有独立目录：

```text
sync_capture/sensors/
  camera_gripper/
    sensor.py
    config.json
  imu_sensor/
    sensor.py
    config.json
  force_sensor/
    sensor.py
    config.json
  custom_sensor/
    sensor.py
    config.json
```

## 输出目录

采集结果写入：

```text
sync_acquisition_project\records\session_YYYYMMDD_HHMMSS\
```

每个会话目录包含原始视频、原始 CSV、会话元数据和设备日志。
