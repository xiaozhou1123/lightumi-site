# 训练数组

完成一次会话录制后，可以将原始记录构建为面向训练流程的固定频率数组。

## 构建 NPZ

在项目根目录执行：

```powershell
python .\sync_acquisition_project\build_training_zarr.py .\sync_acquisition_project\records\session_YYYYMMDD_HHMMSS
```

该命令会写入：

```text
training_arrays.npz
```

## 构建 Zarr

如果已安装 `zarr` Python 包，可以追加 `--zarr` 参数：

```powershell
python -m pip install zarr
python .\sync_acquisition_project\build_training_zarr.py .\sync_acquisition_project\records\session_YYYYMMDD_HHMMSS --zarr
```

## 当前数组

- `timestamp_ns`
- `camera_frame_index`
- `image_dt_ns`
- `image_valid`
- `gripper_width_mm`
- `gripper_confidence`
- `gripper_valid`
