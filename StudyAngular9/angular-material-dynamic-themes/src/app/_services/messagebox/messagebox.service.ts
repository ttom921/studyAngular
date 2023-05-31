import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
//import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { MessageBox } from 'src/app/_dialog/message-box';
import { MessageBoxButton, MessageBoxStyle, RespCode } from 'src/app/_dialog/message-enums';

@Injectable({
  providedIn: 'root'
})
export class MessageboxService {
  successmsg = "<br> success";
  infotitle = "info";
  alerttitle = "alert";
  constructor(
    private dialog: MatDialog,
    private router: Router,
    //private translate: TranslateService,
  ) {
    //多國語言
    this.multilangproc();
  }
  ResponseErrorMsg(error: any, message = 'Please login again.') {
    console.log("ResponseErrorMsg->error=", error);
    let title = "Alert";
    let information = "";
    let button = 0;
    let allow_outside_click = false;
    let style = 0;
    let width = "800px";
    switch (error.status) {
      case RespCode.ARGS_ERROR:// = 912,//# 上傳參數錯誤
        message = "<br> 912 Parameter error";
        MessageBox.show(this.dialog, message);
        break;
      case RespCode.TOKEN_EXPIRED://=913 Token 已經過期
        message = "<br> 913 Token Expired";
        MessageBox.show(this.dialog, message);
        this.router.navigate(['/login']);
        break;
      case RespCode.TOKEN_ERROR://= 914,//# Token 無法解析
        message = "<br> 914 Token Unresolved";
        MessageBox.show(this.dialog, message);
        this.router.navigate(['/login']);
        break;
      case RespCode.CAR_REGISTERED:// = 915,//# Car 已註冊
        message = "<br> 915 car has registered";
        MessageBox.show(this.dialog, message);
        break;
      case RespCode.USER_NOT_PERMITTED://= 916,//# User 權限不夠
        message = "<br> 916 authority not allow";
        MessageBox.show(this.dialog, message);
        break;
      case RespCode.USER_REGISTERED:// = 917,//# User 已被註冊
        message = "<br> 917 Already registered";
        MessageBox.show(this.dialog, message);
        break;
      case RespCode.USER_NOT_EXIST://= 922,//# User 不存在
        message = "<br> 922 User not exist";
        MessageBox.show(this.dialog, message);
        this.router.navigate(['/login']);
        break;
      case RespCode.COMPANY_NAME_REGISTERED:// = 923,//# Company - 公司名稱已經被註冊過
        message = `<br> ${RespCode.COMPANY_NAME_REGISTERED} Company is exist`;
        MessageBox.show(this.dialog, message);
        break;
      case RespCode.COMPANY_NOT_EXIST:// = 924,//# Company - 公司不存在
        message = "<br> 924 The company is not exist";
        MessageBox.show(this.dialog, message);
        break;
      case RespCode.COMPANY_NOT_HAS_USER:// = 926,//# Company - 公司不存在該使用者
        message = "<br> 926 The user does not exist in the company";
        MessageBox.show(this.dialog, message);
        break;
      case RespCode.CAR_GROUP_NAME_EXIST:// = 928,//# 車輛群組名稱在同一間公司已有相同名稱
        message = "<br> 928 Car Group is the same";
        MessageBox.show(this.dialog, message);
        break;
      case RespCode.CAR_GROUP_NOT_EXIST:// = 929,//# 車輛群組不存在
        message = "<br> 929 Car Group Not exist";
        MessageBox.show(this.dialog, message);
        break;
      case RespCode.CAR_GROUP_EXIST_CHILD:// = 930,//# 車輛群組 - 無法刪除該筆資料，有被其他資料關聯
        message = "<br> 930 Car Group has child";
        MessageBox.show(this.dialog, message);
        break;
      case RespCode.CAR_NOT_EXIST:// = 931,//# 車輛不存在
        message = "<br> 931 Car is not Exist";
        MessageBox.show(this.dialog, message);
        break;
      case RespCode.DATA_IS_EMPTY:// = 935,//# 資料為空
        message = "<br> 935 Data is empty";
        MessageBox.show(this.dialog, message);
        break;
      case RespCode.FW_IMAGE_ERROR:// = 940,//# 上傳的FW image內容有錯誤
        message = "<br> 940 FW image had problem";
        MessageBox.show(this.dialog, message);
        break;
      case RespCode.USER_TOTAL_LIMIT://= 947,//# 使用者數量已達上限
        message = "<br> 947 The number of users touch limit";
        MessageBox.show(this.dialog, message);
        break;
      case RespCode.OTA_CANNOT_DO_IT:// = 959,//# OTA車輛目前不能設定或接收命令
        message = "<br> 959 Car not avaiable?";
        MessageBox.show(this.dialog, message);
        break;
      case RespCode.CAR_HAD_BOUND_DVR:// = 967,//       # 車輛已經綁定DVR
        message = "<br> 967 Car had bind DVR";
        MessageBox.show(this.dialog, message);
        break;
      case RespCode.DVR_NOT_EXIST:// = 969,//       # DVR 不存在
        message = "<br> 969 DVR no exist";
        MessageBox.show(this.dialog, message);
        break;
      case RespCode.COMPANY_IS_NOT_VENDOR://       = 972       # 該公司不是經銷商
        message = "<br> 972 Company is not Vendor";
        MessageBox.show(this.dialog, message);
        break;
      case RespCode.COMPANY_HAD_ADMIN:// = 978,//      # 該公司已經存在一個管理者帳戶
        message = "<br> 978 company had admin";
        MessageBox.show(this.dialog, message);
        break;
      case RespCode.LOCK_VIDEO_IS_TO_MANY:// = 983,//       # 鎖定影像太多
        message = "<br> 983 lock video is to many";
        MessageBox.show(this.dialog, message);
        break;
      case RespCode.CMD_PENDING://                 = 985       # 指令尚未處理
        message = "<br> 985 DVR has not been processed yet";
        //未了加大寬度
        MessageBox.show(this.dialog, message, title, information, button, allow_outside_click, style, width);
        break;
      default:

        // if (error.error) {
        //   //console.log(error.error)
        //   error.statusText = JSON.stringify(error.error);
        // }

        // message = `
        // <br>
        // ${error.status} <br><br> ${error.statusText}
        // `;
        //新的rescode
        if (error.status >= 800 && error.status <= 899) {
          //console.log(`800~899 ------------code=`, error.error);

          if (RespCode.TOKEN_DEPRECATED in error.error) {
            //console.log("RespCode.TOKEN_DEPRECATED");
            message = this.getErrorMessage(error);
            MessageBox.show(this.dialog, message, title, information, button, allow_outside_click, style, width);
            // this.router.navigate(['/login']);
            return;
          } else if (RespCode.EXCEPTION_OCCUR in error.error) {
            //有例外發生
            message = this.getErrorMessage(error);
          } else {
            //未找到
            message = this.getDefWebMessage(error);
          }
        } else {
          //標準的訊息

          //console.log("default message------ =>", message);
          message = this.getDefWebMessage(error);
        }
        //未了加大寬度
        MessageBox.show(this.dialog, message, title, information, button, allow_outside_click, style, width);
        break;
    }
  }
  private getDefWebMessage(error: any) {
    //console.log("getDefWebMessage error=>", error);
    //console.log("getDefWebMessage error.status=>", error.status);
    //console.log("getDefWebMessage error.statusText=>", error.statusText);
    //console.log(Object.keys(error.error));
    let msgkey = Object.keys(error.error)[0];
    //console.log("getDefWebMessage msgkey=", msgkey);
    let errormsg = error.error[`${msgkey}`];
    //console.log("getDefWebMessage errormsg=", errormsg);
    let message = `
    <br>
    ${msgkey} ${errormsg}
    `;
    //console.log("getDefWebMessage message =>", message);
    return message;
  }
  private getErrorMessage(error: any) {
    //console.log("getErrorMessage =>", error);
    if (error.error) {
      //console.log(error.error)
      error.statusText = JSON.stringify(error.error);
    }
    let message = `
    <br>
    ${error.status} <br><br> ${error.statusText}
    `;
    //console.log("message =>", message);
    return message;

  }
  /**
     * 服務器回傳成功訊息顯示
     */
  SuccessDialog() {
    let message = this.successmsg;
    let title = this.infotitle;
    let information = "";
    let button = MessageBoxButton.Ok;
    let allow_outside_click = false;
    let style = MessageBoxStyle.Full;
    let width = "450px";
    MessageBox.show(this.dialog, message, title, information, button, allow_outside_click, style, width);
  }
  SuccessDialogResult(): Observable<any> {
    let message = this.successmsg;
    let title = this.infotitle;
    let information = "";
    let button = MessageBoxButton.Ok;
    let allow_outside_click = false;
    let style = MessageBoxStyle.Full;
    let width = "450px";
    return MessageBox.show(this.dialog, message, title, information, button, allow_outside_click, style, width);
  }
  //#region 多國語言
  private multilangproc() {
    // this.translate.get('dialog.info').subscribe(res => {
    //   //console.log(res);
    //   this.infotitle = res;
    // });
    // this.translate.get('dialog.alert').subscribe(res => {
    //   //console.log(res);
    //   this.alerttitle = res;
    // });
    // this.translate.get('dialog.success').subscribe(res => {
    //   //console.log(res);
    //   this.successmsg = `<br> ${res}`;
    // });
  }
  //#endregion 多國語言
}
