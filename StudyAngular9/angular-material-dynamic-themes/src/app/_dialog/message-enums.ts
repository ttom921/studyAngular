export enum MessageBoxButton {
  Ok = 0,
  OkCancel = 1,
  YesNo = 2,
  AcceptReject = 3
}
export enum MessageBoxStyle {
  Simple = 0,
  Full = 1,
  Loading = 2,
};

export enum RespCode {
  WAITING = 900,//# Device需等待上傳排程
  GOP_NO_CERT = 901,//# GOP資料無法解析,須重傳.
  CAR_NO_CERT = 903,//# Car還未認證
  SERVER_TOTAL_CARS_LIMIT = 905,//# Upload Server 註冊車輛已達上限
  UPLOAD_NEED_CONTINUE = 908,//# 有上傳任務還未完成: 繼續上傳或是放棄此任務(DELETE)

  CAR_REG_ERROR = 911,//# Car註冊失敗
  ARGS_ERROR = 912,//# 上傳參數錯誤
  TOKEN_EXPIRED = 913,//# Token 已經過期
  TOKEN_ERROR = 914,//# Token 無法解析
  CAR_REGISTERED = 915,//# Car 已註冊
  USER_NOT_PERMITTED = 916,//# User 權限不夠
  USER_REGISTERED = 917,//# User 已被註冊
  USER_GROUP_REGISTERED = 918,//# UserGroup 已被註冊
  USER_GROUP_UPDATE_DUPLICATE = 919,//# UserGroup 更新後資料會重複
  USER_UPDATE_DUPLICATE = 920,//# User更新後資料會重複
  CAR_CANNOT_DEL = 921,//# 無法刪除此Car, 資料庫已經存在此車輛Log
  USER_NOT_EXIST = 922,//# User 不存在
  COMPANY_NAME_REGISTERED = 923,//# Company - 公司名稱已經被註冊過
  COMPANY_NOT_EXIST = 924,//# Company - 公司不存在
  COMPANY_EXIST_CHILD = 925,//# Company - 無法刪除該筆資料，有被其他資料關聯
  COMPANY_NOT_HAS_USER = 926,//# Company - 公司不存在該使用者
  USER_FORCED_LOGOUT = 927,//# 使用者被強制登出
  CAR_GROUP_NAME_EXIST = 928,//# 車輛群組名稱在同一間公司已有相同名稱
  CAR_GROUP_NOT_EXIST = 929,//# 車輛群組不存在
  CAR_GROUP_EXIST_CHILD = 930,//# 車輛群組 - 無法刪除該筆資料，有被其他資料關聯
  CAR_NOT_EXIST = 931,//# 車輛不存在
  COMPANY_NOT_HAS_CAR = 932,//# 公司不存在該車輛
  CAR_NOT_IN_THAT_GROUP = 933,//# 車輛不再該群組內
  USER_GROUP_NOT_EXIST = 934,//# 使用者群組不存在
  DATA_IS_EMPTY = 935,//# 資料為空
  EVENT_IS_NOT_CORRECT = 936,//# 找不到此Event或Event與車輛不符
  EVENT_HAS_BEEN_DONE = 937,//# Event已經是完成狀態
  SERVER_NOT_EXIST = 938,//# Server 不存在
  EVENT_IS_NOT_VIDEO = 939,//# Event 的 media type不是Video
  FW_IMAGE_ERROR = 940,//# 上傳的FW image內容有錯誤
  FW_TARGZ_ERROR = 941,//# 無法讀取image tar.gz檔案
  FW_NOT_FOUND = 942,//# 資料庫找不到FW的資料
  FW_NO_NEW = 943,//# 沒有新FW version
  CAR_NEED_POST = 944,//# 車輛需要POST DATA
  CAR_DATA_ERROR = 945,//# 車輛上傳的資料不完整
  SYSTEM_COFIG_NOT_EXIST = 946,//# 找不到對應的system_config
  USER_TOTAL_LIMIT = 947,//# 使用者數量已達上限
  USER_UPDATE_PERMISSION_FAIL = 948,//# 使用者更新權限失敗
  EVENT_TYPE_NOT_EXISTS = 949,//# 事件類型不存在
  USER_CANT_BE_DELETE = 950,//# 使用者無法被刪除
  CAR_STORAGE_OUT_OF_RANGE = 951,//# 車輛總容量設定不在範圍內
  CAR_SETTING_ERROR = 952,//# 車輛總數或是/media/vdisk容量錯誤
  CAR_DISK_TOTAL_LESS_THAN_10G = 953,//# 車輛容量重新分配後,個別車輛容量小於10G
  CAR_DISK_TOTAL_IS_ZERO = 954,//# 車輛總容量為0
  NO_CAR_CAN_UPLOAD_GOP = 955,//# 可以上傳gop的車輛數量為0
  CAR_DISK_STORAGE_IS_UPDATING = 956,//# 目前系統正在更新車輛容量(刪除GOP)
  TABLE_NOT_EXISTS = 957,//# 資料表不存在
  CAR_OFFLINE = 958,//# 車輛Offline
  OTA_CANNOT_DO_IT = 959,//# OTA車輛目前不能設定或接收命令
  OTA_FW_DEL_REJECT = 960,//# 不能刪除FW image file, DVR正在下載
  OTA_NO_TASK = 961,//# 沒有FW更新任務
  EVENTTYPE_UPLOAD_SETTING_NOT_EXISTS = 962,//# 事件上傳設定沒有資料
  DVR_EXIST = 963,//      # DVR 已經存在
  DVR_NOT_VERIFIED = 964,//      # DVR Rule 驗證失敗
  CAR_TOKEN_NOT_MATCH = 965,//  # car token 和資料表CarToken中的資料不匹配
  CAR_TOKEN_NOT_FOUND = 966,//       # car token表格找不到對應資料
  CAR_HAD_BOUND_DVR = 967,//       # 車輛已經綁定DVR
  DVR_HAD_BOUND_CAR = 968,//       # DVR已經綁定其他車輛
  DVR_NOT_EXIST = 969,//       # DVR 不存在
  DVR_NOT_BIND_CAR = 970,//       # DVR 還沒綁定車輛
  VENDOR_ID_EXIST = 971,//       # VENDOR ID 已經存在
  COMPANY_IS_NOT_VENDOR = 972,//       # 該公司不是經銷商
  VENDOR_COMPANY_NO_VENDOR_ID = 973,//       # 經銷商沒有設定vendor id
  COMPANY_NOT_BELONG_TO_VENDOR = 974,//      # 該子公司不隸屬於經銷商
  DVR_NOT_BELONG_TO_VENDOR = 975,//       # 該dvr不屬於經銷商
  DVR_NOT_DISTRIBUTE_YET = 976,//       # dvr尚未分配到子公司
  USER_GROUP_EXIST_CHILD = 977,//      # 使用者群組 - 無法刪除該筆資料，有被其他資料關聯
  COMPANY_HAD_ADMIN = 978,//      # 該公司已經存在一個管理者帳戶
  COMPANY_IS_NOT_SUB_COMPANY = 979,//       # 該公司不是經銷商的子公司
  CAR_UID_EXIST = 980,//       # 車牌號碼已經被使用
  DATA_NOT_FOUND = 981,//       # 找不到相關資料
  CAR_NOT_EXISTS = 982,//       # 車輛不存在
  LOCK_VIDEO_IS_TO_MANY = 983,//       # 鎖定影像太多
  DATABASE_ABNORMAL = 984,//       # 資料庫操作異常
  CMD_PENDING = 985,//       # 指令尚未處理
  //
  TOKEN_DEPRECATED = 8000001,//  # Token 已棄用，請重新登入(有其他人登入)
  EXCEPTION_OCCUR = 8708787,//   # 有例外發生
}
