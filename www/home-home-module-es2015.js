(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Admin/all-user/all-user.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Admin/all-user/all-user.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"toolbar-color1\">\r\n    <ion-row>\r\n      <ion-col size='4'>\r\n        <div class=\"rao_logo\">\r\n          <ion-img src=\"../../assets/images/raoinfotech-logo.png\" class=\"logo_img \"></ion-img>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size='4'>\r\n        <div class=\"middle_sec text-center\">\r\n          <span>All Users</span>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size='4'>\r\n        <div class=\"icon_sec\">\r\n          <ion-img src=\"../../assets/images/icon.png\"></ion-img>\r\n        </div>\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"loader\" *ngIf=\"loading\">\r\n    <img class=\"loading_img\" src=\"../../assets/images/loader.gif\" />\r\n  </div>\r\n  <div class=\"all_user_pic row\">\r\n    <div class=\"user_profile card text-center\" routerLink=\"/home/single-user/{{user._id}}\" *ngFor=\"let user of allUser\">\r\n      <div class=\"card-body\">\r\n        <div class=\"profile_img\" *ngIf=\"!user.profilePhoto\">\r\n          <img src=\"../../assets/images/person.png\" class=\"rounded-circle\">\r\n        </div>\r\n        <div class=\"profile_img\" *ngIf=\"user.profilePhoto\">\r\n          <img src=\"{{path}}{{user.profilePhoto}}\" class=\"rounded-circle\">\r\n        </div>\r\n        <p class=\"text-center allUser\">{{user.name}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Admin/dashboard/dashboard.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Admin/dashboard/dashboard.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"toolbar-color1\">\r\n    <ion-row>\r\n      <ion-col size='4'>\r\n        <div class=\"rao_logo\">\r\n          <ion-img src=\"../../assets/images/raoinfotech-logo.png\" class=\"logo_img\"></ion-img>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size='4'>\r\n        <div class=\"middle_sec text-center\">\r\n          <span>Dashboard</span>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size='4'>\r\n        <div class=\"icon_sec\">\r\n          <ion-img src=\"../../assets/images/icon.png\"></ion-img>\r\n        </div>\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n  <div class=\"user_profile text_center\" *ngIf=\"UserDetail\">\r\n    <div class=\"profile_img\">\r\n      <img *ngIf=\"!UserDetail.profilePhoto\" src=\"../../assets/images/person.png\">\r\n      <img *ngIf=\"UserDetail.profilePhoto\" src=\"{{path}}{{UserDetail.profilePhoto}}\">\r\n    </div>\r\n  </div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"all_content\">\r\n    <div class=\"title_text\">\r\n      <p class=\"text-center\">leave tracking</p>\r\n    </div>\r\n    <div class=\"leave_status\">\r\n      <ul class=\"nav nav-tabs w-100\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link active \" href=\"javascript:void(0);\" (click)=\"todayNotPresentUser()\">\r\n            <p class=\"text-center\">Today</p>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link \" href=\"javascript:void(0);\" (click)=\"getApprovedLeaves()\">\r\n            <p class=\"text-center\">Aproved</p>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"javascript:void(0);\" (click)=\"getPendingLeaves()\">\r\n            <p class=\"text-center\">Pending</p>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"loader\" *ngIf=\"loading\">\r\n      <img class=\"loading_img\" src=\"../../assets/images/loader.gif\" />\r\n    </div>\r\n\r\n    <div class=\"absent_emp_text text-white\" *ngIf=\"todaysLeave.length\">\r\n      Absent Employee\r\n    </div>\r\n\r\n    <div *ngIf=\"todaysLeave.length\">\r\n      <div *ngFor=\"let user of todaysLeave; let i=index\">\r\n        <div class=\"card\" style=\"cursor:pointer\">\r\n          <label for=\"o{{i}}\">\r\n            <div class=\"card-content w-100\">\r\n              <div class=\"absent_user_name\">\r\n                <a (click)=\"presentAlert(user)\" href=\"javascript:void(0);\" class=\"float-left\">{{user.userId.name}}</a>\r\n                <a class=\"float-right\">{{user.date.date}}/{{user.date.month}}/{{user.date.year}}</a>\r\n              </div>\r\n            </div>\r\n          </label>\r\n          <input class=\"checker\" type=\"checkbox\" id=\"o{{i}}\" hidden>\r\n          <div class=\"modal\">\r\n            <div class=\"modal-body\">\r\n              <div class=\"modal-content\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-12\">\r\n                    <p class=\"text-white\">Reason :</p>\r\n                    <div class=\"reason_text text-white\"> {{user.reason}}</div>\r\n                  </div>\r\n                  <div class=\"col-12\">\r\n                    <p class=\"text-white\">Date :</p>\r\n                    <div class=\"reason_text text-white\">{{user.date.date}}/{{user.date.month}}/{{user.date.year}}\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-12\" *ngIf=\"user.extraHours\">\r\n                    <p class=\"text-white\">Compensation :</p>\r\n                    <div class=\"reason_text text-white\">{{user.extraHours}}\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"ok_btn text-center mt-3\">\r\n                  <label for=\"o{{i}}\">Ok</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"close_btn\">\r\n                <label for=\"o{{i}}\">X</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"todayLeavesCount == 0\" class=\"dataNotAvalible text-center mt-4\">\r\n      <span>Everyone is Present</span>\r\n    </div>\r\n\r\n    <div *ngIf=\"approvedLeaves.length\">\r\n      <div *ngFor=\"let leave of approvedLeaves; let i=index\">\r\n        <div class=\"card\" style=\"cursor: pointer;\">\r\n          <label for=\"o{{i}}\">\r\n            <div class=\"card-content  w-100 aproved_leaves\">\r\n              <div class=\"row\">\r\n                <div class=\"col-4\">\r\n                  <span>{{leave.userId.name}}</span>\r\n                </div>\r\n                <div class=\"col-4\">\r\n                  <span>\r\n                    {{getNoOfDays(leave)}}\r\n                  </span>\r\n                </div>\r\n                <div class=\"col-4\">\r\n                  <span>{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </label>\r\n          <input class=\"checker\" type=\"checkbox\" id=\"o{{i}}\" hidden>\r\n          <div class=\"modal\">\r\n            <div class=\"modal-body\">\r\n              <div class=\"modal-content\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-12\">\r\n                    <p class=\"text-white\">Reason :</p>\r\n                    <div class=\"reason_text text-white\"> {{leave.reason}}</div>\r\n                  </div>\r\n                  <div class=\"col-12\">\r\n                    <p class=\"text-white\">Date :</p>\r\n                    <div class=\"reason_text text-white\">{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-12\">\r\n                    <p class=\"text-white\">Approved By :</p>\r\n                    <div class=\"reason_text text-white\">{{leave.approvedBy}}</div>\r\n                  </div>\r\n                  <div class=\"col-12\" *ngIf=\"leave.extraHours\">\r\n                    <p class=\"text-white\">Compensation :</p>\r\n                    <div class=\"reason_text text-white\">{{leave.extraHours}}\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"ok_btn text-center mt-3\">\r\n                  <label for=\"o{{i}}\">Ok</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"close_btn\">\r\n                <label for=\"o{{i}}\">X</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"approvedLeavesCount == 0\" class=\"dataNotAvalible\">\r\n      <span class=\"text-center\">No Approved Leaves Yet</span>\r\n    </div>\r\n\r\n    <div *ngIf=\"pendingLeaves.length\">\r\n      <div *ngFor=\"let leave of pendingLeaves ;let i=index\">\r\n        <div class=\"card\" style=\"cursor: pointer;\">\r\n          <label for=\"o{{i}}\">\r\n            <div class=\"card-content  w-100 aproved_leaves\">\r\n              <div class=\"row\">\r\n                <div class=\"col-4\">\r\n                  <span>{{leave.userId.name}}</span>\r\n                </div>\r\n                <div class=\"col-4\">\r\n                  <span>\r\n                    {{getNoOfDays(leave)}}\r\n                  </span>\r\n                </div>\r\n                <div class=\"col-4\">\r\n                  <span>{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </label>\r\n          <input class=\"checker\" type=\"checkbox\" id=\"o{{i}}\" hidden>\r\n          <div class=\"modal\">\r\n            <div class=\"modal-body\">\r\n              <div class=\"modal-content\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-12\">\r\n                    <p class=\"text-white\">Reason :</p>\r\n                    <div class=\"reason_text text-white\"> {{leave.reason}}</div>\r\n                  </div>\r\n                  <div class=\"col-12\">\r\n                    <p class=\"text-white\">Date :</p>\r\n                    <div class=\"reason_text text-white\">{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-12\" *ngIf=\"leave.extraHours\">\r\n                    <p class=\"text-white\">Compensation :</p>\r\n                    <div class=\"reason_text text-white\">{{leave.extraHours}}\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"ok_btn text-center mt-3\">\r\n                  <label for=\"o{{i}}\">Ok</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"close_btn\">\r\n                <label for=\"o{{i}}\">X</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"pendingLeavesCount == 0\" class=\"dataNotAvalible\">\r\n      <span class=\"text-center\">No Pending Leaves Yet</span>\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Admin/leave-application/leave-application.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Admin/leave-application/leave-application.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"toolbar-color1\">\r\n    <ion-row>\r\n      <ion-col size='4'>\r\n        <div class=\"rao_logo\">\r\n          <ion-img src=\"../../assets/images/raoinfotech-logo.png\" class=\"logo_img\"></ion-img>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size='4'>\r\n        <div class=\"middle_sec text-center\">\r\n          <span>Leave Application</span>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size='4'>\r\n        <div class=\"icon_sec\">\r\n          <ion-img src=\"../../assets/images/icon.png\"></ion-img>\r\n        </div>\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"loader\" *ngIf=\"loading\">\r\n    <img class=\"loading_img\" src=\"../../assets/images/loader.gif\" />\r\n  </div>\r\n  <div class=\"contect_class\">\r\n    <div *ngIf=\"PendingLeaves.length\">\r\n      <div *ngFor=\"let leave of PendingLeaves ;let i=index\">\r\n        <div class=\"card\" style=\"cursor: pointer;\">\r\n          <label for=\"o{{i}}\">\r\n            <div class=\"card-content  w-100 pending_leaves\">\r\n              <div class=\"row\">\r\n                <div class=\"col-4\">\r\n                  <span class=\"text-center user_name\">{{leave.userId.name}}</span>\r\n                </div>\r\n                <div class=\"col-4\">\r\n                  <span class=\"text-center number_of_days\">{{getNoOfDays(leave)}}</span>\r\n                </div>\r\n                <div class=\"col-4  text-center\">\r\n                  <span (click)=\"leaveApproval(leave._id,'Rejected')\" class=\"float-right check_cross  ml-2 \">\r\n                    <ion-img src=\"../../assets/images/cancel.png\"></ion-img>\r\n                  </span>\r\n                  <span (click)=\"leaveApproval(leave._id,'Approved')\" class=\"float-right check_right\">\r\n                    <ion-img src=\"../../assets/images/right.png\"></ion-img>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </label>\r\n          <input class=\"checker\" type=\"checkbox\" id=\"o{{i}}\" hidden>\r\n          <div class=\"modal\">\r\n            <div class=\"modal-body\">\r\n              <div class=\"modal-content\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-12\">\r\n                    <p class=\"text-white\">Reason :</p>\r\n                    <div class=\"reason_text text-white\"> {{leave.reason}}</div>\r\n                  </div>\r\n                  <div class=\"col-12\">\r\n                    <p class=\"text-white\">Date :</p>\r\n                    <div class=\"reason_text text-white\">{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-12\" *ngIf=\"leave.extraHours\">\r\n                    <p class=\"text-white\">Compensation :</p>\r\n                    <div class=\"reason_text text-white\">{{leave.extraHours}}\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"ok_btn text-center mt-3\">\r\n                  <label for=\"o{{i}}\">Ok</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"close_btn\">\r\n                <label for=\"o{{i}}\">X</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"pendingLeavesCount == 0\">\r\n    <p>There are no leaves...</p>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Admin/notification/notification.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Admin/notification/notification.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"toolbar-color1\">\r\n    <ion-row>\r\n      <ion-col size='4'>\r\n        <div class=\"rao_logo\">\r\n          <ion-img src=\"../../assets/images/raoinfotech-logo.png\" class=\"logo_img\"></ion-img>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size='4'>\r\n        <div class=\"middle_sec text-center\">\r\n          <span>Notification</span>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size='4'>\r\n          <div class=\"icon_sec\">\r\n              <ion-img src=\"../../assets/images/icon.png\"></ion-img>\r\n          </div>\r\n          <ion-menu-button></ion-menu-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"all_notification\" *ngFor=\"let item of notificationDetails\">\r\n    <div class=\"card\">\r\n      <div class=\"card-content \">\r\n        <div class=\"notify_name w-100\">\r\n          <span class=\"user_name float-left\">{{item.body}}</span>\r\n          <span class=\"float-right applied_date\">{{item.createdAt | date}} | {{item.createdTime}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"notificationDetailsCount == 0\" class=\"dataNotAvalible\">\r\n    <p>Sorry You have no new notifications</p>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Admin/reports/reports.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Admin/reports/reports.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"toolbar-color1\">\r\n    <ion-row>\r\n      <ion-col size='4'>\r\n        <div class=\"rao_logo\">\r\n          <ion-img src=\"../../assets/images/raoinfotech-logo.png\" class=\"logo_img\"></ion-img>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size='4'>\r\n        <div class=\"middle_sec text-center\">\r\n          <span>Report</span>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size='4'>\r\n        <div class=\"icon_sec\">\r\n          <ion-img src=\"../../assets/images/icon.png\"></ion-img>\r\n        </div>\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <div class=\"apply_leave\">\r\n    <div class=\"apply_leave_text text-white\">\r\n      Apply Leave\r\n    </div>\r\n\r\n    <div class=\"select_time\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6 pr-2\">\r\n          <form [formGroup]='monthLeaveForm'>\r\n            <ion-item>\r\n              <ion-datetime displayFormat=\"MMMM YYYY\" placeholder=\"Select Month\" formControlName=\"month\"\r\n                (ionChange)=getMonthLeaveReport(monthLeaveForm.value)>\r\n              </ion-datetime>\r\n            </ion-item>\r\n          </form>\r\n        </div>\r\n        <div class=\"col-6 pl-2\">\r\n          <form [formGroup]='yearLeaveForm'>\r\n            <ion-item>\r\n              <ion-datetime displayFormat=\" YYYY\" placeholder=\"Select Year\" formControlName=\"year\"\r\n                (ionChange)=getYearLeaveReport(yearLeaveForm.value)>\r\n              </ion-datetime>\r\n            </ion-item>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"loader\" *ngIf=\"loading\">\r\n      <img class=\"loading_img\" src=\"../../assets/images/loader.gif\" />\r\n    </div>\r\n    <div *ngIf=\"monthLeaveReport.length\">\r\n      <div class=\"leave_details\" *ngFor=\"let leave of monthLeaveReport; let i=index\">\r\n        <div class=\"card\" style=\"cursor: pointer;\">\r\n          <label for=\"o{{i}}\">\r\n            <div class=\"row\">\r\n              <div class=\"col-4\">\r\n                <span>{{leave.userId.name}}</span>\r\n              </div>\r\n              <div class=\"col-4 text-center\">\r\n                <span>{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</span>\r\n              </div>\r\n              <div class=\"col-4\">\r\n                <div *ngIf=\"leave.status == 'Approved'\"><span class=\"pl-2\"\r\n                    style=\"color: #3998C5;\">{{leave.status}}</span>\r\n                </div>\r\n                <div *ngIf=\"leave.status == 'Rejected'\"><span class=\"pl-2\"\r\n                    style=\"color: #FF0000;\">{{leave.status}}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </label>\r\n          <input class=\"checker\" type=\"checkbox\" id=\"o{{i}}\" hidden>\r\n          <div class=\"modal\">\r\n            <div class=\"modal-body\">\r\n              <div class=\"modal-content\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-12\">\r\n                    <p class=\"text-white\">Reason :</p>\r\n                    <div class=\"reason_text text-white\"> {{leave.reason}}</div>\r\n                  </div>\r\n                  <div class=\"col-12\">\r\n                    <p class=\"text-white\">No of Days :</p>\r\n                    <div class=\"reason_text text-white\"> {{getNoOfDays(leave)}}\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-12\" *ngIf=\"leave.extraHours\">\r\n                    <p class=\"text-white\">Compensation :</p>\r\n                    <div class=\"reason_text text-white\">{{leave.extraHours}}\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"ok_btn text-center mt-3\">\r\n                  <label for=\"o{{i}}\">Ok</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"close_btn\">\r\n                <label for=\"o{{i}}\">X</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"monthLeaveCount == 0\" class=\"no-leaves-of-month\">\r\n      <p class=\"text-center\">There are No leaves</p>\r\n    </div>\r\n    <div *ngIf=\"yearLeaveReport.length\">\r\n      <div class=\"leave_details\" *ngFor=\"let leave of yearLeaveReport ; let i=index\">\r\n        <div class=\"card\" style=\"cursor: pointer;\">\r\n          <label for=\"o{{i}}\">\r\n            <div class=\"row\">\r\n              <div class=\"col-4\">\r\n                <span>{{leave.userId.name}}</span>\r\n              </div>\r\n              <div class=\"col-4 text-center\">\r\n                <span>{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</span>\r\n              </div>\r\n              <div class=\"col-4\">\r\n                <div *ngIf=\"leave.status == 'Approved'\"><span class=\"pl-2\"\r\n                    style=\"color: #3998C5;\">{{leave.status}}</span>\r\n                </div>\r\n                <div *ngIf=\"leave.status == 'Rejected'\"><span class=\"pl-2\"\r\n                    style=\"color: #FF0000;\">{{leave.status}}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </label>\r\n          <input class=\"checker\" type=\"checkbox\" id=\"o{{i}}\" hidden>\r\n          <div class=\"modal\">\r\n            <div class=\"modal-body\">\r\n              <div class=\"modal-content\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-12\">\r\n                    <p class=\"text-white\">Reason :</p>\r\n                    <div class=\"reason_text text-white\"> {{leave.reason}}</div>\r\n                  </div>\r\n                  <div class=\"col-12\">\r\n                    <p class=\"text-white\">No of Days :</p>\r\n                    <div class=\"reason_text text-white\"> {{getNoOfDays(leave)}}\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-12\" *ngIf=\"leave.extraHours\">\r\n                      <p class=\"text-white\">Compensation :</p>\r\n                      <div class=\"reason_text text-white\">{{leave.extraHours}}\r\n                      </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ok_btn text-center mt-3\">\r\n                  <label for=\"o{{i}}\">Ok</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"close_btn\">\r\n                <label for=\"o{{i}}\">X</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"yearLeaveCount == 0\" class=\"no-leave-of-year\">\r\n      <p class=\"text-center\">There are No leaves</p>\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Admin/single-usre/single-usre.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Admin/single-usre/single-usre.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"toolbar-color1\">\r\n\r\n    <ion-row>\r\n      <ion-col size='4'>\r\n        <div class=\"rao_logo\">\r\n          <ion-img src=\"../../assets/images/raoinfotech-logo.png\" class=\"logo_img\"></ion-img>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size='4'>\r\n        <div class=\"middle_sec text-center\">\r\n          <span>Profile</span>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size='4'>\r\n        <div class=\"icon_sec\">\r\n          <ion-img src=\"../../assets/images/icon.png\"></ion-img>\r\n        </div>\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"loader\" *ngIf=\"loading\">\r\n    <img class=\"loading_img\" src=\"../../assets/images/loader.gif\" />\r\n  </div>\r\n  <div class=\"user_detail\">\r\n    <div *ngIf=\"singleUser\">\r\n      <div class=\"single_user_profile text-center\">\r\n        <div class=\"single_user\">\r\n          <div class=\"profile_img\">\r\n            <img *ngIf=\"!singleUser.profilePhoto\" src=\"../../assets/images/person.png\">\r\n            <img *ngIf=\"singleUser.profilePhoto\" src=\"{{path}}{{singleUser.profilePhoto}}\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"usee_name_text\">\r\n        <p class=\"text-center\">{{singleUser.name}}</p>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-content row\">\r\n          <div class=\"col-4\"><span class=\"user_heading\">Name : </span></div>\r\n          <div class=\"col-8\">\r\n            <span class=\"single_user_name\">{{singleUser.name}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-content row\">\r\n          <div class=\"col-4\"><span class=\"user_heading\">email : </span></div>\r\n          <div class=\"col-8\">\r\n            <span class=\"single_user_name\">{{singleUser.email}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-content row\">\r\n          <div class=\"col-4\"><span class=\"user_heading\">DOB : </span></div>\r\n          <div class=\"col-8\">\r\n            <span class=\"single_user_name\">{{singleUser.dob}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-content row\">\r\n          <div class=\"col-4\"><span class=\"user_heading\">Phone No. : </span></div>\r\n          <div class=\"col-8\">\r\n            <span class=\"single_user_name\">{{singleUser.phone}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-content row\">\r\n          <div class=\"col-4\"><span class=\"user_heading\">Location : </span></div>\r\n          <div class=\"col-8\">\r\n            <span class=\"single_user_name\">{{singleUser.location}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-content row\">\r\n          <div class=\"col-4 pr-0\"><span class=\"user_heading\">Designation : </span></div>\r\n          <div class=\"col-8\">\r\n            <span class=\"single_user_name\">{{singleUser.designation}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"leave_report\">\r\n      <div class=\"leave_report_text text-white\">\r\n        Leave Report\r\n      </div>\r\n      <div *ngIf=\"userLeaves.length\">\r\n        <div class=\"leave_details\" *ngFor=\"let leave of userLeaves; let i=index\">\r\n          <div class=\"card\" style=\"cursor:pointer\">\r\n            <label for=\"o{{i}}\">\r\n              <div class=\"row\">\r\n                <div class=\"col-4\">\r\n                  <div *ngIf=\"leave.status == 'Rejected'\">\r\n                    <span style=\" color: #FF0000;\">{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</span>\r\n                  </div>\r\n                  <div *ngIf=\"leave.status == 'Approved'\">\r\n                    <span style=\" color: #3998C5;\">{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</span>\r\n                  </div>\r\n                  <div *ngIf=\"leave.status == 'pending'\">\r\n                    <span style=\" color: #FFAA00;\">{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-4 text-center\">\r\n                  <div *ngIf=\"leave.status == 'Rejected'\">\r\n                    <span style=\"cursor: pointer; color: #FF0000;\">\r\n                      {{getNoOfDays(leave)}}</span>\r\n                  </div>\r\n                  <div *ngIf=\"leave.status == 'Approved'\">\r\n                    <span style=\"cursor: pointer; color: #3998C5;\">\r\n                      {{getNoOfDays(leave)}}</span>\r\n                  </div>\r\n                  <div *ngIf=\"leave.status == 'pending'\">\r\n                    <span style=\"cursor: pointer; color: #FFAA00;\">\r\n                      {{getNoOfDays(leave)}}</span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-4\">\r\n                  <div *ngIf=\"leave.status == 'Rejected'\">\r\n                    <span class=\"pl-2\" style=\"color: #FF0000;\">{{leave.status}}</span>\r\n                  </div>\r\n                  <div *ngIf=\"leave.status == 'Approved'\">\r\n                    <span class=\"pl-2\" style=\"color: #00B51E;\">{{leave.status}}</span>\r\n                  </div>\r\n                  <div *ngIf=\"leave.status == 'pending'\">\r\n                    <span class=\"pl-2\" style=\"color: #FFAA00;\">{{leave.status}}</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </label>\r\n            <input class=\"checker\" type=\"checkbox\" id=\"o{{i}}\" hidden>\r\n            <div class=\"modal\">\r\n              <div class=\"modal-body\">\r\n                <div class=\"modal-content\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-12\">\r\n                      <p class=\"text-white\">Reason :</p>\r\n                      <div class=\"reason_text text-white\"> {{leave.reason}}</div>\r\n                    </div>\r\n                    <div class=\"col-12\">\r\n                      <p class=\"text-white\">Date :</p>\r\n                      <div class=\"reason_text text-white\">{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-12\" *ngIf=\"leave.extraHours\">\r\n                      <p class=\"text-white\">Compensation :</p>\r\n                      <div class=\"reason_text text-white\">{{leave.extraHours}}\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"ok_btn text-center mt-3\">\r\n                    <label for=\"o{{i}}\">Ok</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"close_btn\">\r\n                  <label for=\"o{{i}}\">X</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"!userLeaves.length\" class=\"no_leaves\">\r\n        <p style=\"text-align:center;\">No leaves yet...</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-split-pane> -->\r\n<ion-menu contentId=\"content\" side=\"end\">\r\n  <ion-header>\r\n    <div class=\"header\" style=\"position: relative;\">\r\n      <ion-toolbar class=\"toolbar-color1\">\r\n\r\n        <div class=\"logo_img text-center\">\r\n          <ion-img src=\"../../assets/images/1.png\"></ion-img>\r\n        </div>\r\n      </ion-toolbar>\r\n      <div *ngIf=\"UserDetail\" class=\"user_profile text-center\">\r\n        <div class=\"profile_img\">\r\n          <img *ngIf=\"UserDetail.profilePhoto\" class=\"rounded-circle\" src=\"{{path}}{{UserDetail.profilePhoto}}\"\r\n            routerLink=\"/home/profile\" (click)=\"closeMenu()\">\r\n          <img *ngIf=\"!UserDetail.profilePhoto\" class=\"rounded-circle\" src=\"../../assets/images/person.png\"\r\n            (click)=\"closeMenu()\" routerLink='/home/profile'>\r\n        </div>\r\n        <p class=\"text-center\">{{UserDetail.name}}</p>\r\n      </div>\r\n    </div>\r\n  </ion-header>\r\n\r\n  <ion-content>\r\n    <div class=\"menu_content\">\r\n      <div *ngIf=\"currentUserRole == 'Admin'\" class=\"developer_menu\">\r\n        <div *ngFor=\"let p of adminpages\" class=\"developer_page\">\r\n          <div class=\"page_list\" (click)=\"closeMenu()\" [routerLink]=\"p.url\" routerDirection=\"root\"\r\n            [class.active-item]=\"selectedPath.startsWith(p.url)\">\r\n            {{ p.title }} </div>\r\n        </div>\r\n        <div class=\"logout\" (click)=\"logOut()\" style=\"cursor: pointer\">\r\n          Logout\r\n        </div>\r\n        <div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"currentUserRole == 'Developer'\" class=\"developer_menu\">\r\n        <div *ngFor=\"let p of developerPages\" class=\"developer_page\">\r\n          <div class=\"page_list\" (click)=\"closeMenu()\" [routerLink]=\"p.url\" routerDirection=\"root\"\r\n            [class.active-item]=\"selectedPath.startsWith(p.url)\">\r\n            {{ p.title }}\r\n          </div>\r\n        </div>\r\n        <div class=\"logout\" (click)=\"logOut()\" style=\"cursor: pointer\">\r\n          Logout </div>\r\n      </div>\r\n    </div>\r\n  </ion-content>\r\n</ion-menu>\r\n<ion-router-outlet id=\"content\" main></ion-router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/leave-form/leave-form.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/leave-form/leave-form.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"toolbar-color1\">\r\n    <ion-row>\r\n      <ion-col size='4'>\r\n        <div class=\"rao_logo\">\r\n          <ion-img src=\"../../assets/images/raoinfotech-logo.png\" class=\"logo_img\"></ion-img>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size='4'>\r\n        <div class=\"middle_sec text-center\">\r\n          <span>Leave Aplication</span>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size='4'>\r\n        <div class=\"icon_sec\">\r\n          <ion-img src=\"../../assets/images/icon.png\"></ion-img>\r\n        </div>\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"all_content\">\r\n    <form [formGroup]='leaveForm'>\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <div class=\"select_date text-white\">Select Date</div>\r\n          <ion-item>\r\n            <ion-datetime formControlName=\"date\" placeholder=\"Select Leave Date\" min={{curruntDate}}></ion-datetime>\r\n          </ion-item>\r\n        </div>\r\n        <div class=\"col-12\">\r\n          <div class=\"select_date text-white\">Days</div>\r\n          <ion-item>\r\n            <ion-input type=\"number\" id=\"field1\" formControlName=\"noOfDays\" placeholder=\"Enter Number of days\"\r\n              step=\"0.5\" min=\"0.5\" id=\"input1\">\r\n            </ion-input>\r\n          </ion-item>\r\n        </div>\r\n        <div class=\"or_text w-100 text-center\">OR</div>\r\n        <div class=\"col-12\">\r\n          <div class=\"select_date text-white\">Hours</div>\r\n          <ion-item>\r\n            <ion-input formControlName=\"shortLeave\" type=\"number\" (keyup)=\"updateList($event.target.value)\"\r\n              placeholder=\"Enter your Leave hours...\" id=\"input2\" min=\"0\"></ion-input>\r\n          </ion-item>\r\n        </div>\r\n        <div class=\"col-12\">\r\n          <div class=\"select_date text-white\">Reason</div>\r\n          <ion-item>\r\n            <ion-textarea rows=\"1\" formControlName=\"reason\" placeholder=\"Enter your reason here...\"></ion-textarea>\r\n          </ion-item>\r\n        </div>\r\n        <div class=\"col-12\">\r\n          <div class=\"select_date text-white\">Compansate</div>\r\n          <ion-item>\r\n            <ion-input formControlName=\"extraHours\" placeholder=\"Enter your compensate...\"></ion-input>\r\n          </ion-item>\r\n        </div>\r\n      </div>\r\n      <div class=\"add_leave_btn text-center text-white\">\r\n        <button type=\"submit\" (click)=\"applyLeave(leaveForm.value)\" [disabled]=\"this.leaveForm.invalid || isDisable\">\r\n          Submit</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/leave-history/leave-history.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/leave-history/leave-history.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"toolbar-color1\">\r\n    <ion-row>\r\n      <ion-col size='4'>\r\n        <div class=\"rao_logo\">\r\n          <ion-img src=\"../../assets/images/raoinfotech-logo.png\" class=\"logo_img\"></ion-img>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size='4'>\r\n        <div class=\"middle_sec text-center\">\r\n          <span>History</span>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size='4'>\r\n        <div class=\"icon_sec\">\r\n          <ion-img src=\"../../assets/images/icon.png\"></ion-img>\r\n        </div>\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"leave_history\">\r\n    <div class=\"apply_leave_text text-white\">\r\n      Apply Leave\r\n    </div>\r\n    <div class=\"select_time\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6 pr-2\">\r\n          <form [formGroup]='monthLeaveForm'>\r\n            <ion-item>\r\n              <ion-datetime displayFormat=\"MMMM YYYY\" placeholder=\"Select Month\" formControlName=\"month\"\r\n                (ionChange)=getMounthlyLeaveByUser(monthLeaveForm.value)>\r\n              </ion-datetime>\r\n            </ion-item>\r\n          </form>\r\n        </div>\r\n        <div class=\"col-6 pl-2\">\r\n          <form [formGroup]='yearLeaveForm'>\r\n            <ion-item>\r\n              <ion-datetime displayFormat=\" YYYY\" placeholder=\"Select Year\" formControlName=\"year\"\r\n                (ionChange)=getYearlyLeaveByUser(yearLeaveForm.value)>\r\n              </ion-datetime>\r\n            </ion-item>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"loader\" *ngIf=\"loading\">\r\n      <img class=\"loading_img\" src=\"../../assets/images/loader.gif\" />\r\n    </div>\r\n    <div *ngIf=\"isMonthLeave == 2\">\r\n      <div class=\"leave_details\" *ngFor=\"let leave of monthlyLeaveOfUser\">\r\n        <div class=\"card\">\r\n          <div class=\"row\">\r\n            <div class=\"col-4\">\r\n              <div *ngIf=\"leave.status == 'Rejected'\">\r\n                <span style=\"color: #FF0000;\">{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</span>\r\n              </div>\r\n              <div *ngIf=\"leave.status == 'pending'\">\r\n                <span style=\"color: #FFAA00;\">{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</span>\r\n              </div>\r\n              <div *ngIf=\"leave.status == 'Approved'\">\r\n                <span style=\"color: #3998C5;\">{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-4 text-center\">\r\n              <div *ngIf=\"leave.status == 'Rejected'\">\r\n                <span style=\"color: #FF0000;\">{{getNoOfDays(leave)}}</span>\r\n              </div>\r\n              <div *ngIf=\"leave.status == 'pending'\">\r\n                <span style=\"color: #FFAA00;\">{{getNoOfDays(leave)}}</span>\r\n              </div>\r\n              <div *ngIf=\"leave.status == 'Approved'\">\r\n                <span style=\"color: #3998C5;\">{{getNoOfDays(leave)}}</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-4\">\r\n              <div *ngIf=\"leave.status == 'Approved'\"><span class=\"pl-2\" style=\"color: #00B51E;\">{{leave.status}}</span>\r\n              </div>\r\n              <div *ngIf=\"leave.status == 'Rejected'\"><span class=\"pl-2\" style=\"color: #FF0000;\">{{leave.status}}</span>\r\n              </div>\r\n              <div *ngIf=\"leave.status == 'pending'\"><span class=\"pl-2\" style=\"color: #FFAA00;\">{{leave.status}}</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"isMonthLeave == 1\" class=\"no_leaves text-center mt-0\"><span class=\"text-center no-leaves-of-month\">There\r\n        are No\r\n        leaves</span></div>\r\n\r\n    <div *ngIf=\"isYearLeave == 2\">\r\n      <div class=\"leave_details\" *ngFor=\"let leave of yearlyLeaveOfUser\">\r\n        <div class=\"card\">\r\n          <div class=\"row\">\r\n            <div class=\"col-4\">\r\n              <div *ngIf=\"leave.status == 'Rejected'\">\r\n                <span style=\"color: #FF0000;\">{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</span>\r\n              </div>\r\n              <div *ngIf=\"leave.status == 'pending'\">\r\n                <span style=\"color: #FFAA00;\">{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</span>\r\n              </div>\r\n              <div *ngIf=\"leave.status == 'Approved'\">\r\n                <span style=\"color: #3998C5;\">{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-4 text-center\">\r\n              <div *ngIf=\"leave.status == 'Rejected'\">\r\n                <span style=\"color: #FF0000;\">{{getNoOfDays(leave)}}</span>\r\n              </div>\r\n              <div *ngIf=\"leave.status == 'pending'\">\r\n                <span style=\"color: #FFAA00;\">{{getNoOfDays(leave)}}</span>\r\n              </div>\r\n              <div *ngIf=\"leave.status == 'Approved'\">\r\n                <span style=\"color: #3998C5;\">{{getNoOfDays(leave)}}</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-4\">\r\n              <div *ngIf=\"leave.status == 'Approved'\"><span class=\"pl-2\" style=\"color: #00B51E;\">{{leave.status}}</span>\r\n              </div>\r\n              <div *ngIf=\"leave.status == 'Rejected'\"><span class=\"pl-2\" style=\"color: #FF0000;\">{{leave.status}}</span>\r\n              </div>\r\n              <div *ngIf=\"leave.status == 'pending'\"><span class=\"pl-2\" style=\"color: #FFAA00;\">{{leave.status}}</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"isYearLeave == 1\" class=\"no_leaves text-center mt-0\"><span class=\"no-leave-of-year\">There are No\r\n        leaves</span></div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-header>\r\n  <ion-toolbar class=\"toolbar-color1\">\r\n    <ion-row>\r\n      <ion-col size='4'>\r\n        <div class=\"rao_logo\">\r\n          <ion-img src=\"../../assets/images/raoinfotech-logo.png\" class=\"logo_img\"></ion-img>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size='4'>\r\n        <div class=\"middle_sec text-center\">\r\n          <span>Profile</span>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size='4'>\r\n        <div class=\"icon_sec\">\r\n          <ion-img src=\"../../assets/images/icon.png\"></ion-img>\r\n        </div>\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"loader\" *ngIf=\"loading\">\r\n    <img class=\"loading_img\" src=\"../../assets/images/loader.gif\" />\r\n  </div>\r\n  <div *ngIf=\"userDetail\" class=\"user_detail\">\r\n    <div class=\"single_user_profile text-center\">\r\n      <div class=\"user_img\">\r\n        <div class=\"profile_img\">\r\n          <img *ngIf=\"!userDetail.profilePhoto\" class=\"circle-ronded\" src=\"../../assets/images/person.png\">\r\n          <img *ngIf=\"userDetail.profilePhoto\" class=\"circle-ronded\" src=\"{{path}}{{userDetail.profilePhoto}}\">\r\n        </div>\r\n        <input type=\"file\" name=\"files\" value=\"files\" id=\"customFile\" accept=\"image/png, image/jpeg, image/jpg\" hidden\r\n          (change)=\"fileSelected($event)\">\r\n        <label for=\"customFile\" class=\"profile_and_cover_edit text-center\" title=\"Change Profile\"><i\r\n            class=\"fa fa-camera\" aria-hidden=\"true\"></i></label>\r\n      </div>\r\n      <!-- <ion-img *ngIf=\"urls\" [src]=\"urls\"></ion-img> -->\r\n    </div>\r\n    <div class=\"usee_name_text\">\r\n      <p class=\"text-center\">{{userDetail.name}}</p>\r\n    </div>\r\n    <div class=\"card\">\r\n      <div class=\"card-content row\">\r\n        <div class=\"col-4\"><span class=\"user_heading\">first Name : </span></div>\r\n        <div class=\"col-8\">\r\n          <span class=\"single_user_name\">{{userDetail.name}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <div class=\"card-content row\">\r\n        <div class=\"col-4\"><span class=\"user_heading\">email : </span></div>\r\n        <div class=\"col-8\">\r\n          <span class=\"single_user_name\">{{userDetail.email}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <div class=\"card-content row\">\r\n        <div class=\"col-4\"><span class=\"user_heading\">DOB : </span></div>\r\n        <div class=\"col-8\">\r\n          <span class=\"single_user_name\">{{userDetail.dob}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <div class=\"card-content row\">\r\n        <div class=\"col-4\"><span class=\"user_heading\">Phone No. : </span></div>\r\n        <div class=\"col-8\">\r\n          <span class=\"single_user_name\">{{userDetail.phone}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <div class=\"card-content row\">\r\n        <div class=\"col-4\"><span class=\"user_heading\">Location : </span></div>\r\n        <div class=\"col-8\">\r\n          <span class=\"single_user_name\">{{userDetail.location}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <div class=\"card-content row\">\r\n        <div class=\"col-4 pr-0\"><span class=\"user_heading\">Designation : </span></div>\r\n        <div class=\"col-8\">\r\n          <span class=\"single_user_name\">{{userDetail.designation}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/Admin/all-user/all-user.component.scss":
/*!********************************************************!*\
  !*** ./src/app/Admin/all-user/all-user.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#device-android .frame-container .statusbar {\n  background-color: #fff;\n}\n\nionlab-device-frame .frame-container .statusbar {\n  background-color: #fff !important;\n}\n\nion-toolbar .toolbar-color1 {\n  height: 52px;\n  width: 100%;\n}\n\nion-header ion-toolbar:first-child {\n  --background: #01023F !important;\n}\n\nion-menu-button {\n  --color: transparent;\n  --padding-start: 55px;\n}\n\n.rao_logo {\n  background-color: #fff;\n  width: 47px;\n  height: 22px;\n  border-radius: 30px;\n  margin-left: 10px;\n  text-align: center;\n  position: relative;\n}\n\n.rao_logo .logo_img {\n  max-height: 100%;\n  max-width: 100%;\n  height: 12px;\n  width: 20px;\n  margin: auto;\n  vertical-align: center;\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n\n.middle_sec span {\n  font-size: 15px;\n  color: #fff;\n  font-weight: 100;\n}\n\n.icon_sec {\n  z-index: -1;\n  position: absolute;\n  right: 17px;\n  top: 10px;\n}\n\nion-content {\n  padding: 10px;\n}\n\nion-content .row {\n  margin: 0px !important;\n}\n\n.all_user_pic {\n  width: 100%;\n}\n\n.all_user_pic .card {\n  box-shadow: 4px 4px 10px 2px #dcdcdc;\n}\n\n.all_user_pic .card p {\n  margin-bottom: 0px;\n}\n\n.all_user_pic .user_profile {\n  width: calc(100%/3 - 14px);\n  border-radius: 8px;\n  background-color: #fff;\n  color: #3998C5;\n  margin: 11px 0px 0px 11px;\n  cursor: pointer;\n}\n\n.all_user_pic .user_profile .card-body {\n  padding: 10px 5px;\n  margin: auto;\n}\n\n.all_user_pic .user_profile .profile_img {\n  height: 60px;\n  width: 60px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin: auto;\n}\n\n.all_user_pic .user_profile .profile_img img {\n  max-width: 100%;\n  min-width: 100%;\n  min-height: 100%;\n  max-height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.all_user_pic .user_profile .allUser {\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.all_user_pic .user_profile:hover {\n  background-color: #3998C5;\n  color: #fff;\n  border-radius: 8px;\n}\n\n.all_user_pic .user_profile:hover .profile_img {\n  height: 60px;\n  width: 60px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin: auto;\n}\n\n.all_user_pic .user_profile:hover .profile_img ion-img {\n  max-width: 100%;\n  min-width: 100%;\n  min-height: 100%;\n  max-height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.user_profile:focus {\n  box-shadow: none;\n  outline: none;\n  background-color: #3998C5;\n  color: #fff;\n  border-radius: 8px;\n}\n\n.user_profile:focus .profile_img {\n  height: 60px;\n  width: 60px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin: auto;\n}\n\n.user_profile:focus .profile_img ion-img {\n  max-width: 100%;\n  min-width: 100%;\n  min-height: 100%;\n  max-height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbGVhdmVUcmFja2luZ0ZpbmFsL3NyYy9hcHAvQWRtaW4vYWxsLXVzZXIvYWxsLXVzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0FkbWluL2FsbC11c2VyL2FsbC11c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9JO0VBQ0Usc0JBQUE7QUNOTjs7QURhSTtFQUNFLGlDQUFBO0FDVk47O0FEaUJFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNkSjs7QURrQkE7RUFDRSxnQ0FBQTtBQ2ZGOztBRGtCQTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7QUNmRjs7QURtQkE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNoQkY7O0FEa0JFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNoQko7O0FEcUJBO0VBQ0UsZUFoRWM7RUFpRWQsV0FBQTtFQUNBLGdCQUFBO0FDbEJGOztBRHFCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDbEJGOztBRHVCQTtFQUNFLGFBQUE7QUNwQkY7O0FEc0JFO0VBQ0Usc0JBQUE7QUNwQko7O0FEd0JBO0VBQ0UsV0FBQTtBQ3JCRjs7QUR1QkU7RUFDRSxvQ0FBQTtBQ3JCSjs7QURzQkk7RUFDRSxrQkFBQTtBQ3BCTjs7QUR3QkU7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDdEJKOztBRHdCSTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQ3RCTjs7QUR5Qkk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDdkJOOztBRHdCSztFQUNHLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUN0QlI7O0FEMEJJO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUN4Qk47O0FENEJFO0VBQ0UseUJBbklZO0VBb0laLFdBQUE7RUFDQSxrQkFBQTtBQzFCSjs7QUQ0Qkk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDMUJOOztBRDRCTTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUMxQlI7O0FEZ0NBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBNUpjO0VBNkpkLFdBQUE7RUFDQSxrQkFBQTtBQzdCRjs7QUQrQkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDN0JKOztBRCtCSTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUM3Qk4iLCJmaWxlIjoic3JjL2FwcC9BZG1pbi9hbGwtdXNlci9hbGwtdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRhcHBfYmFyX2NvbG9yOiAjMDEwMjNGO1xyXG4kZm9udF9zaXplICAgIDogMTVweDtcclxuJHRleHRfY29sb3IgICA6ICMzOTk4QzU7XHJcblxyXG4vLyBzdGF0dXMgYmFyIGNvbG9yXHJcbiNkZXZpY2UtYW5kcm9pZCB7XHJcbiAgLmZyYW1lLWNvbnRhaW5lciB7XHJcbiAgICAuc3RhdHVzYmFyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmlvbmxhYi1kZXZpY2UtZnJhbWUge1xyXG4gIC5mcmFtZS1jb250YWluZXIge1xyXG4gICAgLnN0YXR1c2JhciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLnRvb2xiYXItY29sb3IxIHtcclxuICAgIGhlaWdodDogNTJweDtcclxuICAgIHdpZHRoIDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXI6Zmlyc3QtY2hpbGQge1xyXG4gIC0tYmFja2dyb3VuZDogIzAxMDIzRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tbWVudS1idXR0b24ge1xyXG4gIC0tY29sb3IgICAgICAgIDogdHJhbnNwYXJlbnQ7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiA1NXB4O1xyXG4gIC8vIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbi5wbmcpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yYW9fbG9nbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB3aWR0aCAgICAgICAgICAgOiA0N3B4O1xyXG4gIGhlaWdodCAgICAgICAgICA6IDIycHg7XHJcbiAgYm9yZGVyLXJhZGl1cyAgIDogMzBweDtcclxuICBtYXJnaW4tbGVmdCAgICAgOiAxMHB4O1xyXG4gIHRleHQtYWxpZ24gICAgICA6IGNlbnRlcjtcclxuICBwb3NpdGlvbiAgICAgICAgOiByZWxhdGl2ZTtcclxuXHJcbiAgLmxvZ29faW1nIHtcclxuICAgIG1heC1oZWlnaHQgICAgOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoICAgICA6IDEwMCU7XHJcbiAgICBoZWlnaHQgICAgICAgIDogMTJweDtcclxuICAgIHdpZHRoICAgICAgICAgOiAyMHB4O1xyXG4gICAgbWFyZ2luICAgICAgICA6IGF1dG87XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb24gICAgICA6IGFic29sdXRlO1xyXG4gICAgdG9wICAgICAgICAgICA6IDBweDtcclxuICAgIGJvdHRvbSAgICAgICAgOiAwcHg7XHJcbiAgICBsZWZ0ICAgICAgICAgIDogMHB4O1xyXG4gICAgcmlnaHQgICAgICAgICA6IDBweDtcclxuXHJcbiAgfVxyXG59XHJcblxyXG4ubWlkZGxlX3NlYyBzcGFuIHtcclxuICBmb250LXNpemUgIDogJGZvbnRfc2l6ZTtcclxuICBjb2xvciAgICAgIDogI2ZmZjtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG59XHJcblxyXG4uaWNvbl9zZWMge1xyXG4gIHotaW5kZXggOiAtMTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQgICA6IDE3cHg7XHJcbiAgdG9wICAgICA6IDEwcHg7XHJcbn1cclxuXHJcblxyXG4vLyBjb250ZW50IHN0YXJ0IGhlcmVcclxuaW9uLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gIC5yb3cge1xyXG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5hbGxfdXNlcl9waWMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAuY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDEwcHggMnB4ICNkY2RjZGM7XHJcbiAgICBwe1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudXNlcl9wcm9maWxlIHtcclxuICAgIHdpZHRoICAgICAgICAgICA6IGNhbGMoMTAwJS8zIC0gMTRweCk7XHJcbiAgICBib3JkZXItcmFkaXVzICAgOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgY29sb3IgICAgICAgICAgIDogIzM5OThDNTtcclxuICAgIG1hcmdpbiAgICAgICAgICA6IDExcHggMHB4IDBweCAxMXB4O1xyXG4gICAgY3Vyc29yICAgICAgICAgIDogcG9pbnRlcjtcclxuXHJcbiAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgICAgIG1hcmdpbiA6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGVfaW1nIHtcclxuICAgICAgaGVpZ2h0ICAgICAgIDogNjBweDtcclxuICAgICAgd2lkdGggICAgICAgIDogNjBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBvdmVyZmxvdyAgICAgOiBoaWRkZW47XHJcbiAgICAgIG1hcmdpbiAgICAgICA6IGF1dG87XHJcbiAgICAgaW1nIHtcclxuICAgICAgICBtYXgtd2lkdGggOiAxMDAlO1xyXG4gICAgICAgIG1pbi13aWR0aCA6IDEwMCU7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFsbFVzZXIge1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBmb250LXNpemUgICAgIDogMTJweDtcclxuICAgICAgZm9udC13ZWlnaHQgICA6IGJvbGQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudXNlcl9wcm9maWxlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXh0X2NvbG9yO1xyXG4gICAgY29sb3IgICAgICAgICAgIDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXMgICA6IDhweDtcclxuXHJcbiAgICAucHJvZmlsZV9pbWcge1xyXG4gICAgICBoZWlnaHQgICAgICAgOiA2MHB4O1xyXG4gICAgICB3aWR0aCAgICAgICAgOiA2MHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIG92ZXJmbG93ICAgICA6IGhpZGRlbjtcclxuICAgICAgbWFyZ2luICAgICAgIDogYXV0bztcclxuXHJcbiAgICAgIGlvbi1pbWcge1xyXG4gICAgICAgIG1heC13aWR0aCA6IDEwMCU7XHJcbiAgICAgICAgbWluLXdpZHRoIDogMTAwJTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi51c2VyX3Byb2ZpbGU6Zm9jdXMge1xyXG4gIGJveC1zaGFkb3cgICAgICA6IG5vbmU7XHJcbiAgb3V0bGluZSAgICAgICAgIDogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGV4dF9jb2xvcjtcclxuICBjb2xvciAgICAgICAgICAgOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXMgICA6IDhweDtcclxuXHJcbiAgLnByb2ZpbGVfaW1nIHtcclxuICAgIGhlaWdodCAgICAgICA6IDYwcHg7XHJcbiAgICB3aWR0aCAgICAgICAgOiA2MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgb3ZlcmZsb3cgICAgIDogaGlkZGVuO1xyXG4gICAgbWFyZ2luICAgICAgIDogYXV0bztcclxuXHJcbiAgICBpb24taW1nIHtcclxuICAgICAgbWF4LXdpZHRoIDogMTAwJTtcclxuICAgICAgbWluLXdpZHRoIDogMTAwJTtcclxuICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiI2RldmljZS1hbmRyb2lkIC5mcmFtZS1jb250YWluZXIgLnN0YXR1c2JhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbmlvbmxhYi1kZXZpY2UtZnJhbWUgLmZyYW1lLWNvbnRhaW5lciAuc3RhdHVzYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG5pb24tdG9vbGJhciAudG9vbGJhci1jb2xvcjEge1xuICBoZWlnaHQ6IDUycHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24taGVhZGVyIGlvbi10b29sYmFyOmZpcnN0LWNoaWxkIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDEwMjNGICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gIC0tY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDU1cHg7XG59XG5cbi5yYW9fbG9nbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiA0N3B4O1xuICBoZWlnaHQ6IDIycHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5yYW9fbG9nbyAubG9nb19pbWcge1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTJweDtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbn1cblxuLm1pZGRsZV9zZWMgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbi5pY29uX3NlYyB7XG4gIHotaW5kZXg6IC0xO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxN3B4O1xuICB0b3A6IDEwcHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgcGFkZGluZzogMTBweDtcbn1cbmlvbi1jb250ZW50IC5yb3cge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuXG4uYWxsX3VzZXJfcGljIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYWxsX3VzZXJfcGljIC5jYXJkIHtcbiAgYm94LXNoYWRvdzogNHB4IDRweCAxMHB4IDJweCAjZGNkY2RjO1xufVxuLmFsbF91c2VyX3BpYyAuY2FyZCBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLmFsbF91c2VyX3BpYyAudXNlcl9wcm9maWxlIHtcbiAgd2lkdGg6IGNhbGMoMTAwJS8zIC0gMTRweCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICMzOTk4QzU7XG4gIG1hcmdpbjogMTFweCAwcHggMHB4IDExcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hbGxfdXNlcl9waWMgLnVzZXJfcHJvZmlsZSAuY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMTBweCA1cHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5hbGxfdXNlcl9waWMgLnVzZXJfcHJvZmlsZSAucHJvZmlsZV9pbWcge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogYXV0bztcbn1cbi5hbGxfdXNlcl9waWMgLnVzZXJfcHJvZmlsZSAucHJvZmlsZV9pbWcgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLmFsbF91c2VyX3BpYyAudXNlcl9wcm9maWxlIC5hbGxVc2VyIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5hbGxfdXNlcl9waWMgLnVzZXJfcHJvZmlsZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTk4QzU7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4uYWxsX3VzZXJfcGljIC51c2VyX3Byb2ZpbGU6aG92ZXIgLnByb2ZpbGVfaW1nIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IGF1dG87XG59XG4uYWxsX3VzZXJfcGljIC51c2VyX3Byb2ZpbGU6aG92ZXIgLnByb2ZpbGVfaW1nIGlvbi1pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi51c2VyX3Byb2ZpbGU6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk5OEM1O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLnVzZXJfcHJvZmlsZTpmb2N1cyAucHJvZmlsZV9pbWcge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogYXV0bztcbn1cbi51c2VyX3Byb2ZpbGU6Zm9jdXMgLnByb2ZpbGVfaW1nIGlvbi1pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/Admin/all-user/all-user.component.ts":
/*!******************************************************!*\
  !*** ./src/app/Admin/all-user/all-user.component.ts ***!
  \******************************************************/
/*! exports provided: AllUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllUserComponent", function() { return AllUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./src/app/config.ts");




let AllUserComponent = class AllUserComponent {
    constructor(_userService) {
        this._userService = _userService;
        this.path = _config__WEBPACK_IMPORTED_MODULE_3__["config"].baseMediaUrl;
        this.loading = false;
    }
    ngOnInit() {
        this.getAllUser();
    }
    /**
     * get all user
     */
    getAllUser() {
        this.loading = true;
        this._userService.getAllUser().subscribe((res) => {
            console.log("all user=>", res);
            this.allUser = res.data;
            this.loading = false;
        }, err => {
            console.log(err);
            this.loading = false;
        });
    }
    changeToDarkColor() {
        this.currentColor = 'danger';
    }
};
AllUserComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
AllUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-all-user',
        template: __webpack_require__(/*! raw-loader!./all-user.component.html */ "./node_modules/raw-loader/index.js!./src/app/Admin/all-user/all-user.component.html"),
        styles: [__webpack_require__(/*! ./all-user.component.scss */ "./src/app/Admin/all-user/all-user.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
], AllUserComponent);



/***/ }),

/***/ "./src/app/Admin/dashboard/dashboard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/Admin/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  margin: 0px;\n  padding: 0px;\n}\n\np {\n  margin: 0px;\n}\n\na:hover {\n  text-decoration: none;\n  padding: 6px 0px;\n}\n\n.nav-link:hover {\n  padding: 6px 0px;\n}\n\n#device-android .frame-container .statusbar {\n  background-color: #fff;\n}\n\nionlab-device-frame .frame-container .statusbar {\n  background-color: #fff !important;\n}\n\nion-toolbar {\n  height: 107px;\n  width: 100%;\n}\n\nion-header ion-toolbar:first-child {\n  --background: #01023F !important;\n}\n\nion-menu-button {\n  --color: transparent;\n  --padding-start: 55px;\n}\n\n.rao_logo {\n  background-color: #fff;\n  width: 47px;\n  height: 22px;\n  border-radius: 30px;\n  margin-left: 10px;\n  text-align: center;\n  position: relative;\n}\n\n.rao_logo .logo_img {\n  max-height: 100%;\n  max-width: 100%;\n  height: 12px;\n  width: 20px;\n  margin: auto;\n  vertical-align: center;\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n\n.middle_sec span {\n  font-size: 15px;\n  color: #fff;\n  font-weight: 100;\n}\n\n.icon_sec {\n  z-index: -1;\n  position: absolute;\n  right: 17px;\n  top: 10px;\n}\n\n.user_profile {\n  position: absolute;\n  left: 0;\n  right: 0px;\n  z-index: 1111;\n  bottom: -34px;\n}\n\n.user_profile .profile_img {\n  height: 70px;\n  width: 70px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin: auto;\n}\n\n.user_profile .profile_img img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  max-width: 100%;\n  max-height: 100%;\n  min-width: 100%;\n  min-height: 100%;\n}\n\n.all_content {\n  padding: 10px;\n  z-index: 100;\n}\n\n.leave_status {\n  margin-bottom: 15px;\n}\n\n.title_text {\n  margin-top: 42px;\n}\n\n.title_text p {\n  text-transform: uppercase;\n  color: #01023F;\n  font-size: 20px;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n\n.leave_status ul li {\n  list-style: none;\n  display: inline-block;\n  width: 33.33%;\n}\n\n.nav-tabs {\n  border: 1px solid #3998C5;\n  border-radius: 30px;\n  padding: 0px;\n}\n\n.nav-link {\n  border: 1px solid transparent;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  padding: 6px 0px;\n  font-size: 15px;\n  color: #000;\n}\n\n.nav-link:hover {\n  border: none !important;\n}\n\n.nav-item a.active {\n  border: 1px solid #3998C5 !important;\n  text-decoration: none;\n  background-color: #3998C5;\n  border-radius: 30px;\n  border-color: #3998C5;\n  color: #fff;\n  font-weight: bold;\n}\n\n.nav-tabs .nav-item {\n  margin-bottom: 0px !important;\n}\n\n.aproved_leaves span {\n  font-size: 12px;\n  color: #3998C5;\n}\n\n.card {\n  box-shadow: 4px 4px 10px 2px #dcdcdc;\n  margin-top: 5px;\n  padding: 10px;\n}\n\n.absent_user_name a {\n  font-size: 12px;\n  color: #3998C5;\n}\n\n.dataNotAvalible span {\n  font-size: 15px;\n  color: #000;\n  font-weight: 300;\n}\n\n.absent_emp_text {\n  background-color: #3998C5;\n  border-radius: 4px;\n  width: 100%;\n  padding: 6px 18px;\n  font-size: 18px;\n  font-weight: bold;\n  margin-bottom: 15px;\n}\n\nlabel {\n  display: inline-block;\n  cursor: pointer;\n  margin-bottom: 0px !important;\n}\n\n.checker:checked + .modal {\n  display: -webkit-box;\n  display: flex;\n}\n\n.modal {\n  display: none;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 25px;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.modal-body {\n  width: 200px;\n  background-color: #01023F;\n  border-radius: 12px;\n  padding: 15px;\n  border-radius: 8px;\n  position: relative;\n}\n\n.modal-content {\n  background-color: #01023F !important;\n}\n\n.modal-footer {\n  overflow: hidden;\n}\n\n.modal-content p {\n  font-size: 20px;\n  margin-top: 10px;\n  margin-bottom: 0px !important;\n}\n\n.reason_text {\n  background-color: #3998C5;\n  border-radius: 5px;\n  font-size: 12px;\n  padding: 8px;\n}\n\n.ok_btn {\n  margin-bottom: 10px;\n}\n\n.ok_btn label {\n  padding: 8px 18px;\n  background-color: #fff;\n  color: #3998C5;\n  border-radius: 30px;\n  font-size: 12px;\n  text-transform: uppercase;\n}\n\n.close_btn label {\n  background-color: #fff;\n  color: #3998C5;\n  font-size: 15px;\n  border-radius: 50%;\n  height: 26px;\n  width: 26px;\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  text-align: center;\n  line-height: 25px;\n}\n\n.alertCustomCss {\n  background-color: #01023F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbGVhdmVUcmFja2luZ0ZpbmFsL3NyYy9hcHAvQWRtaW4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQWRtaW4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDTko7O0FEU0E7RUFDSSxXQUFBO0FDTko7O0FEU0E7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0FDTko7O0FEUUE7RUFDSSxnQkFBQTtBQ0xKOztBRFVRO0VBQ0ksc0JBQUE7QUNQWjs7QURjUTtFQUNJLGlDQUFBO0FDWFo7O0FEZ0JBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUNiSjs7QURnQkE7RUFDSSxnQ0FBQTtBQ2JKOztBRGdCQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7QUNiSjs7QURpQkE7RUFDSSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNkSjs7QURnQkk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ2RSOztBRG1CQTtFQUNJLGVBaEZZO0VBaUZaLFdBQUE7RUFDQSxnQkFBQTtBQ2hCSjs7QURtQkE7RUFDSSxXQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ2hCTjs7QURvQkE7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUNqQko7O0FEbUJJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ2pCUjs7QURtQlE7RUFDSSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDakJaOztBRHNCQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FDbkJKOztBRHNCQTtFQUNJLG1CQUFBO0FDbkJKOztBRHNCQTtFQUNJLGdCQUFBO0FDbkJKOztBRHFCSTtFQUNJLHlCQUFBO0VBQ0EsY0FwSVE7RUFxSVIsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNuQlI7O0FEdUJBO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUNwQko7O0FEdUJBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNwQko7O0FEdUJBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ3BCSjs7QUR1QkE7RUFDSSx1QkFBQTtBQ3BCSjs7QUR1QkE7RUFDSSxvQ0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBcktZO0VBc0taLG1CQUFBO0VBQ0EscUJBdktZO0VBd0taLFdBQUE7RUFDQSxpQkFBQTtBQ3BCSjs7QUR1QkE7RUFDSSw2QkFBQTtBQ3BCSjs7QUR3Qkk7RUFDSSxlQUFBO0VBQ0EsY0FuTFE7QUM4SmhCOztBRHlCQTtFQUNJLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUN0Qko7O0FEeUJLO0VBQ0wsZUFBQTtFQUNBLGNBL0xnQjtBQ3lLaEI7O0FEMEJJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ3ZCUjs7QUQyQkE7RUFDSSx5QkEzTVk7RUE0TVosa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ3hCSjs7QUQ0QkE7RUFDSSxxQkFBQTtFQUNDLGVBQUE7RUFDQSw2QkFBQTtBQ3pCTDs7QUQyQkU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7QUN4Qko7O0FEMEJFO0VBQ0UsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFBUSxhQUFBO0VBQ1gsb0NBQUE7QUN0QkQ7O0FEd0JFO0VBQ0UsWUFBQTtFQUNBLHlCQTVPWTtFQTZPWixtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDckJKOztBRHVCRTtFQUNLLG9DQUFBO0FDcEJQOztBRHNCRTtFQUNFLGdCQUFBO0FDbkJKOztBRHFCQztFQUNHLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FDbEJKOztBRG9CQTtFQUNJLHlCQTVQWTtFQTZQWixrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDakJKOztBRG1CQTtFQUNJLG1CQUFBO0FDaEJKOztBRGlCSTtFQUNJLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQXRRUTtFQXVRUixtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ2ZSOztBRG9CSTtFQUNJLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNqQlI7O0FEcUJBO0VBQ0kseUJBaFNZO0FDOFFoQiIsImZpbGUiOiJzcmMvYXBwL0FkbWluL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYXBwX2Jhcl9jb2xvcjogIzAxMDIzRjtcclxuJGZvbnRfc2l6ZSAgICA6IDE1cHg7XHJcbiR0ZXh0X2NvbG9yICAgOiAjMzk5OEM1O1xyXG5cclxuLy8gaGVhZGVyIHN0YXJ0IGhlcmVcclxuXHJcbi8vIHN0YXR1cyBiYXIgY29sb3JcclxudWwge1xyXG4gICAgbWFyZ2luIDogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG5wIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDZweCAwcHg7XHJcbiAgICB9XHJcbi5uYXYtbGluazpob3ZlciAge1xyXG4gICAgcGFkZGluZzogNnB4IDBweDtcclxufVxyXG5cclxuI2RldmljZS1hbmRyb2lkIHtcclxuICAgIC5mcmFtZS1jb250YWluZXIge1xyXG4gICAgICAgIC5zdGF0dXNiYXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9ubGFiLWRldmljZS1mcmFtZSB7XHJcbiAgICAuZnJhbWUtY29udGFpbmVyIHtcclxuICAgICAgICAuc3RhdHVzYmFyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgaGVpZ2h0OiAxMDdweDtcclxuICAgIHdpZHRoIDogMTAwJTtcclxufVxyXG5cclxuaW9uLWhlYWRlciBpb24tdG9vbGJhcjpmaXJzdC1jaGlsZCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMTAyM0YgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLW1lbnUtYnV0dG9ue1xyXG4gICAgLS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDU1cHg7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2ljb24ucG5nKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIFxyXG4ucmFvX2xvZ28ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoICAgICAgICAgICA6IDQ3cHg7XHJcbiAgICBoZWlnaHQgICAgICAgICAgOiAyMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1cyAgIDogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0ICAgICA6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduICAgICAgOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbiAgICAgICAgOiByZWxhdGl2ZTtcclxuXHJcbiAgICAubG9nb19pbWcge1xyXG4gICAgICAgIG1heC1oZWlnaHQgICAgOiAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aCAgICAgOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodCAgICAgICAgOiAxMnB4O1xyXG4gICAgICAgIHdpZHRoICAgICAgICAgOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbiAgICAgICAgOiBhdXRvO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb24gICAgICA6IGFic29sdXRlO1xyXG4gICAgICAgIHRvcCAgICAgICAgICAgOiAwcHg7XHJcbiAgICAgICAgYm90dG9tICAgICAgICA6IDBweDtcclxuICAgICAgICBsZWZ0ICAgICAgICAgIDogMHB4O1xyXG4gICAgICAgIHJpZ2h0ICAgICAgICAgOiAwcHg7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG4ubWlkZGxlX3NlYyBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZSAgOiAkZm9udF9zaXplO1xyXG4gICAgY29sb3IgICAgICA6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG59XHJcblxyXG4uaWNvbl9zZWN7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMTdweDtcclxuICAgICAgdG9wOiAxMHB4O1xyXG4gIH1cclxuXHJcbi8vIGNvbnRlbnQgc3RhcnQgXHJcbi51c2VyX3Byb2ZpbGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdCAgICA6IDA7XHJcbiAgICByaWdodCAgIDogMHB4O1xyXG4gICAgei1pbmRleCA6IDExMTE7XHJcbiAgICBib3R0b20gIDogLTM0cHg7XHJcblxyXG4gICAgLnByb2ZpbGVfaW1nIHtcclxuICAgICAgICBoZWlnaHQgICAgICAgOiA3MHB4O1xyXG4gICAgICAgIHdpZHRoICAgICAgICA6IDcwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIG92ZXJmbG93ICAgICA6IGhpZGRlbjtcclxuICAgICAgICBtYXJnaW4gICAgICAgOiBhdXRvO1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgbWF4LXdpZHRoIDogMTAwJTtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgbWluLXdpZHRoIDogMTAwJTtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hbGxfY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgei1pbmRleDogMTAwO1xyXG59XHJcblxyXG4ubGVhdmVfc3RhdHVzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi50aXRsZV90ZXh0IHtcclxuICAgIG1hcmdpbi10b3A6IDQycHg7XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBjb2xvciAgICAgICAgIDogJGFwcF9iYXJfY29sb3I7XHJcbiAgICAgICAgZm9udC1zaXplICAgICA6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQgICA6IGJvbGQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbSA6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5sZWF2ZV9zdGF0dXMgdWwgbGkge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGRpc3BsYXkgICA6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoICAgICA6IDMzLjMzJTtcclxufVxyXG5cclxuLm5hdi10YWJzIHtcclxuICAgIGJvcmRlciAgICAgICA6IDFweCBzb2xpZCAkdGV4dF9jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBwYWRkaW5nICAgICAgOiAwcHg7XHJcbn1cclxuXHJcbi5uYXYtbGluayB7XHJcbiAgICBib3JkZXIgICAgICAgICAgICAgICAgIDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cyA6IDBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XHJcbiAgICBwYWRkaW5nICAgICAgICAgICAgICAgIDogNnB4IDBweDtcclxuICAgIGZvbnQtc2l6ZSAgICAgICAgICAgICAgOiAxNXB4O1xyXG4gICAgY29sb3IgICAgICAgICAgICAgICAgICA6ICMwMDA7XHJcbn1cclxuXHJcbi5uYXYtbGluazpob3ZlciB7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdi1pdGVtIGEuYWN0aXZlIHtcclxuICAgIGJvcmRlciAgICAgICAgICA6IDFweCBzb2xpZCAkdGV4dF9jb2xvciAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uIDogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXh0X2NvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1cyAgIDogMzBweDtcclxuICAgIGJvcmRlci1jb2xvciAgICA6ICR0ZXh0X2NvbG9yO1xyXG4gICAgY29sb3IgICAgICAgICAgIDogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0ICAgICA6IGJvbGQ7XHJcbn1cclxuXHJcbi5uYXYtdGFicyAubmF2LWl0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hcHJvdmVkX2xlYXZlcyB7XHJcbiAgICBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3IgICAgOiAkdGV4dF9jb2xvcjtcclxuICAgIH1cclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCAxMHB4IDJweCAjZGNkY2RjO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZyAgIDogMTBweDtcclxufVxyXG4uYWJzZW50X3VzZXJfbmFtZXtcclxuICAgICBhe1xyXG5mb250LXNpemU6IDEycHg7XHJcbmNvbG9yOiAkdGV4dF9jb2xvcjtcclxuICAgIH1cclxufVxyXG4uZGF0YU5vdEF2YWxpYmxlIHtcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZSAgOiAxNXB4O1xyXG4gICAgICAgIGNvbG9yICAgICAgOiAjMDAwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hYnNlbnRfZW1wX3RleHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRleHRfY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzICAgOiA0cHg7XHJcbiAgICB3aWR0aCAgICAgICAgICAgOiAxMDAlO1xyXG4gICAgcGFkZGluZyAgICAgICAgIDogNnB4IDE4cHg7XHJcbiAgICBmb250LXNpemUgICAgICAgOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQgICAgIDogYm9sZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcblxyXG5sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDBweCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5jaGVja2VyOmNoZWNrZWQgKyAubW9kYWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgLm1vZGFsIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7cGFkZGluZzogMjVweDtcclxuIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjQpO1xyXG4gIH1cclxuICAubW9kYWwtYm9keSB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXBwX2Jhcl9jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAubW9kYWwtY29udGVudCB7XHJcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXBwX2Jhcl9jb2xvciFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5tb2RhbC1mb290ZXIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAubW9kYWwtY29udGVudCBwe1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweCFpbXBvcnRhbnQ7XHJcbn1cclxuLnJlYXNvbl90ZXh0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRleHRfY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuLm9rX2J0bntcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBsYWJlbHtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMThweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGNvbG9yOiAkdGV4dF9jb2xvcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2xvc2VfYnRue1xyXG4gICAgbGFiZWx7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBjb2xvcjogIzM5OThDNTtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGhlaWdodDogMjZweDtcclxuICAgICAgICB3aWR0aDogMjZweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAtMTBweDtcclxuICAgICAgICByaWdodDogLTEwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYWxlcnRDdXN0b21Dc3N7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXBwX2Jhcl9jb2xvcjtcclxufVxyXG5cclxuaW1nLmxvYWRpbmdfaW1ne1xyXG4gICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy8gdG9wOjA7XHJcbiAgICAvLyBib3R0b206IDA7XHJcbiAgICAvLyBsZWZ0OiAwO1xyXG4gICAgLy8gcmlnaHQ6IDA7XHJcbiAgICAvLyBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuIiwidWwge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbmE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDZweCAwcHg7XG59XG5cbi5uYXYtbGluazpob3ZlciB7XG4gIHBhZGRpbmc6IDZweCAwcHg7XG59XG5cbiNkZXZpY2UtYW5kcm9pZCAuZnJhbWUtY29udGFpbmVyIC5zdGF0dXNiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG5pb25sYWItZGV2aWNlLWZyYW1lIC5mcmFtZS1jb250YWluZXIgLnN0YXR1c2JhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICBoZWlnaHQ6IDEwN3B4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWhlYWRlciBpb24tdG9vbGJhcjpmaXJzdC1jaGlsZCB7XG4gIC0tYmFja2dyb3VuZDogIzAxMDIzRiAhaW1wb3J0YW50O1xufVxuXG5pb24tbWVudS1idXR0b24ge1xuICAtLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA1NXB4O1xufVxuXG4ucmFvX2xvZ28ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogNDdweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucmFvX2xvZ28gLmxvZ29faW1nIHtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEycHg7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG59XG5cbi5taWRkbGVfc2VjIHNwYW4ge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogMTAwO1xufVxuXG4uaWNvbl9zZWMge1xuICB6LWluZGV4OiAtMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTdweDtcbiAgdG9wOiAxMHB4O1xufVxuXG4udXNlcl9wcm9maWxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMHB4O1xuICB6LWluZGV4OiAxMTExO1xuICBib3R0b206IC0zNHB4O1xufVxuLnVzZXJfcHJvZmlsZSAucHJvZmlsZV9pbWcge1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiA3MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogYXV0bztcbn1cbi51c2VyX3Byb2ZpbGUgLnByb2ZpbGVfaW1nIGltZyB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuLmFsbF9jb250ZW50IHtcbiAgcGFkZGluZzogMTBweDtcbiAgei1pbmRleDogMTAwO1xufVxuXG4ubGVhdmVfc3RhdHVzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLnRpdGxlX3RleHQge1xuICBtYXJnaW4tdG9wOiA0MnB4O1xufVxuLnRpdGxlX3RleHQgcCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMDEwMjNGO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubGVhdmVfc3RhdHVzIHVsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzMuMzMlO1xufVxuXG4ubmF2LXRhYnMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzk5OEM1O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5uYXYtbGluayB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XG4gIHBhZGRpbmc6IDZweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5uYXYtbGluazpob3ZlciB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubmF2LWl0ZW0gYS5hY3RpdmUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzk5OEM1ICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5OThDNTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYm9yZGVyLWNvbG9yOiAjMzk5OEM1O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5uYXYtdGFicyAubmF2LWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmFwcm92ZWRfbGVhdmVzIHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMzk5OEM1O1xufVxuXG4uY2FyZCB7XG4gIGJveC1zaGFkb3c6IDRweCA0cHggMTBweCAycHggI2RjZGNkYztcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uYWJzZW50X3VzZXJfbmFtZSBhIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzM5OThDNTtcbn1cblxuLmRhdGFOb3RBdmFsaWJsZSBzcGFuIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmFic2VudF9lbXBfdGV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTk4QzU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDZweCAxOHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmNoZWNrZXI6Y2hlY2tlZCArIC5tb2RhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5tb2RhbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4ubW9kYWwtYm9keSB7XG4gIHdpZHRoOiAyMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMDIzRjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMDIzRiAhaW1wb3J0YW50O1xufVxuXG4ubW9kYWwtZm9vdGVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm1vZGFsLWNvbnRlbnQgcCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5yZWFzb25fdGV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTk4QzU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5va19idG4ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm9rX2J0biBsYWJlbCB7XG4gIHBhZGRpbmc6IDhweCAxOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzM5OThDNTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uY2xvc2VfYnRuIGxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICMzOTk4QzU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDI2cHg7XG4gIHdpZHRoOiAyNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEwcHg7XG4gIHJpZ2h0OiAtMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMjVweDtcbn1cblxuLmFsZXJ0Q3VzdG9tQ3NzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMDIzRjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Admin/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/Admin/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_leave_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/leave.service */ "./src/app/services/leave.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./src/app/config.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let DashboardComponent = class DashboardComponent {
    constructor(_userService, _leaveService, alertController) {
        this._userService = _userService;
        this._leaveService = _leaveService;
        this.alertController = alertController;
        this.path = _config__WEBPACK_IMPORTED_MODULE_4__["config"].baseMediaUrl;
        this.todaysLeave = [];
        this.approvedLeaves = [];
        this.pendingLeaves = [];
        this.isReasonVisible = false;
        this.loading = false;
    }
    ngOnInit() {
        this.todayDate = new Date().toISOString();
        this.todayDate = this.todayDate.split("T")[0];
        this.todayDate = this.todayDate.split("-");
        console.log(this.todayDate);
        this.getUserDetail();
        this.todayNotPresentUser();
        $(".nav-item  a ").click(function () {
            $(".nav-item  a").removeClass("active");
            $(this).addClass("active");
        });
    }
    /**
     * Get Single user details
     */
    getUserDetail() {
        this._userService.getUserDetail().subscribe((res) => {
            console.log("user details==========>", res.data);
            this.UserDetail = res.data;
            console.log("data=======>", res.data, this.UserDetail);
            // this.UserDetail.dob = this.UserDetail.dob.split("T")[0];
        }, err => {
            console.log(err);
        });
    }
    /**
     * Get user whose not present today
     */
    todayNotPresentUser() {
        this.loading = true;
        this.approvedLeaves = [];
        this.pendingLeaves = [];
        console.log("today not present user");
        this._leaveService.todayNotPresentUser().subscribe((res) => {
            console.log("not present user", res);
            $('.step_one').css({ 'display': 'block' });
            $('.step_two').css({ 'display': 'none' });
            $('.step_three').css({ 'display': 'none' });
            this.todaysLeave = res.data;
            this.todayLeavesCount = res.data.length;
            this.loading = false;
            console.log("not present user=======>", res, this.todaysLeave, this.todayLeavesCount);
        }, err => {
            console.log(err);
            this.loading = false;
        });
    }
    /**
     * Get Approved Leaves
     */
    getApprovedLeaves() {
        console.log("approved leaves");
        this.pendingLeaves = [];
        this.todaysLeave = [];
        this.loading = true;
        this._leaveService.getApprovedLeaves().subscribe((res) => {
            this.approvedLeaves = res.data;
            this.approvedLeavesCount = res.data.length;
            $('.step_two').css({ 'display': 'block' });
            $('.step_one').css({ 'display': 'none' });
            $('.step_three').css({ 'display': 'none' });
            // $('.step_one').css({ 'display': 'none' });
            this.loading = false;
            console.log("approved leaves", res, this.approvedLeaves, this.approvedLeavesCount);
        }, err => {
            console.log("err");
            this.loading = false;
        });
    }
    /**
     * Get Pending Leaves
     */
    getPendingLeaves() {
        console.log("Pending leaves");
        this.loading = true;
        this.approvedLeaves = [];
        this.todaysLeave = [];
        this._leaveService.getPendingLeaves().subscribe((res) => {
            $('.step_two').css({ 'display': 'none' });
            $('.step_one').css({ 'display': 'none' });
            $('.step_three').css({ 'display': 'block' });
            this.pendingLeaves = res.data;
            this.pendingLeavesCount = res.data.length;
            this.loading = false;
            console.log("Pending leaves", res, this.pendingLeaves, this.pendingLeavesCount);
        }, err => {
            console.log("err");
            this.loading = false;
        });
    }
    /**
     * Display leave Reason
     */
    presentAlert(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(data);
            let date = data.date;
            let extrahours = data.extraHours;
            console.log(extrahours);
            let finalDate = date.date + '/' + date.month + '/' + date.year;
            console.log(finalDate);
            console.log(date);
            const alert = yield this.alertController.create({
                message: '<b>' + 'Reason :' + '</b>' + ' ' + data.reason + '<br>' + '<b>' + 'Date :' + '</b>' + ' ' + finalDate + '<br>' + (data.extraHours !== null && data.extraHours !== '' ? '<b>' + 'Compensation:' + '</b>' + data.extraHours : ''),
                buttons: ['OK'],
                cssClass: 'alertCustomCss'
            });
            yield alert.present();
        });
    }
    getNoOfDays(days) {
        // console.log("leave details", days);
        if (days.shortLeave) {
            if (days.shortLeave == 1) {
                return days.shortLeave + ' hour';
            }
            return days.shortLeave + ' hours';
        }
        else {
            if (days.noOfDays < 0) {
                return 'You have no leaves..';
            }
            else {
                const noOfDays = Math.floor(days.noOfDays / 8);
                // console.log("Days", noOfDays);
                const noOfhours = days.noOfDays % 8;
                // console.log("noOfhours", noOfhours);
                if (!noOfDays && noOfhours) {
                    if (noOfhours > 1) {
                        return noOfhours + ' hours';
                    }
                    else {
                        return noOfhours + ' hour';
                    }
                }
                else if (noOfDays && !noOfhours) {
                    if (noOfDays > 1) {
                        return noOfDays + ' Days';
                    }
                    else {
                        return noOfDays + ' Day';
                    }
                }
                else {
                    if (noOfDays > 1 && noOfhours > 1) {
                        return noOfDays + ' Days ' + noOfhours + ' hours';
                    }
                    else if (noOfDays == 1 && noOfhours == 1) {
                        return noOfDays + ' Day ' + noOfhours + ' hour';
                    }
                    else if (noOfDays > 1 && noOfhours == 1) {
                        return noOfDays + ' Days ' + noOfhours + ' hour';
                    }
                    else {
                        return noOfDays + ' Day ' + noOfhours + ' hours';
                    }
                }
            }
        }
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _services_leave_service__WEBPACK_IMPORTED_MODULE_3__["LeaveService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/Admin/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/Admin/dashboard/dashboard.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
        _services_leave_service__WEBPACK_IMPORTED_MODULE_3__["LeaveService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
], DashboardComponent);



/***/ }),

/***/ "./src/app/Admin/leave-application/leave-application.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/Admin/leave-application/leave-application.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#device-android .frame-container .statusbar {\n  background-color: #fff;\n}\n\nionlab-device-frame .frame-container .statusbar {\n  background-color: #fff !important;\n}\n\nion-toolbar .toolbar-color1 {\n  height: 52px;\n  width: 100%;\n}\n\nion-header ion-toolbar:first-child {\n  --background: #01023F !important;\n}\n\nion-menu-button {\n  --color: transparent;\n  --padding-start: 55px;\n}\n\n.rao_logo {\n  background-color: #fff;\n  width: 47px;\n  height: 22px;\n  border-radius: 30px;\n  margin-left: 10px;\n  text-align: center;\n  position: relative;\n}\n\n.rao_logo .logo_img {\n  max-height: 100%;\n  max-width: 100%;\n  height: 12px;\n  width: 20px;\n  margin: auto;\n  vertical-align: center;\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n\n.middle_sec span {\n  font-size: 15px;\n  color: #fff;\n  font-weight: 100;\n}\n\n.icon_sec {\n  z-index: -1;\n  position: absolute;\n  right: 17px;\n  top: 10px;\n}\n\n.contect_class {\n  padding: 10px;\n}\n\n.contect_class .card {\n  box-shadow: 4px 4px 10px 2px #dcdcdc;\n  margin-top: 5px;\n  padding: 10px;\n}\n\n.contect_class .pending_leaves span {\n  font-size: 12px;\n}\n\n.contect_class .pending_leaves .user_count,\n.contect_class .pending_leaves .user_name {\n  color: #3998C5;\n}\n\n.contect_class .pending_leaves .check_cross,\n.contect_class .pending_leaves .check_right {\n  cursor: pointer;\n  margin-top: 3px;\n}\n\n.contect_class .number_of_days {\n  color: #01023F;\n  text-align: center;\n}\n\nlabel {\n  display: inline-block;\n  cursor: pointer;\n  margin-bottom: 0px !important;\n}\n\n.checker:checked + .modal {\n  display: -webkit-box;\n  display: flex;\n}\n\n.modal {\n  display: none;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 25px;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.modal-body {\n  width: 200px;\n  background-color: #01023F;\n  border-radius: 12px;\n  padding: 15px;\n  border-radius: 8px;\n  position: relative;\n}\n\n.modal-content {\n  background-color: #01023F !important;\n}\n\n.modal-footer {\n  overflow: hidden;\n}\n\n.modal-content p {\n  font-size: 20px;\n  margin-top: 10px;\n  margin-bottom: 0px !important;\n}\n\n.reason_text {\n  background-color: #3998C5;\n  border-radius: 5px;\n  font-size: 12px;\n  padding: 8px;\n}\n\n.ok_btn {\n  margin-bottom: 10px;\n}\n\n.ok_btn label {\n  padding: 8px 18px;\n  background-color: #fff;\n  color: #3998C5;\n  border-radius: 30px;\n  font-size: 12px;\n  text-transform: uppercase;\n}\n\n.close_btn label {\n  background-color: #fff;\n  color: #3998C5;\n  font-size: 15px;\n  border-radius: 50%;\n  height: 26px;\n  width: 26px;\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  text-align: center;\n  line-height: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbGVhdmVUcmFja2luZ0ZpbmFsL3NyYy9hcHAvQWRtaW4vbGVhdmUtYXBwbGljYXRpb24vbGVhdmUtYXBwbGljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0FkbWluL2xlYXZlLWFwcGxpY2F0aW9uL2xlYXZlLWFwcGxpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNJO0VBQ0Usc0JBQUE7QUNSTjs7QURlSTtFQUNFLGlDQUFBO0FDWk47O0FEbUJFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNoQko7O0FEb0JBO0VBQ0UsZ0NBQUE7QUNqQkY7O0FEb0JBO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtBQ2pCRjs7QURxQkE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNsQkY7O0FEb0JFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNsQko7O0FEdUJBO0VBQ0UsZUFsRWM7RUFtRWQsV0FBQTtFQUNBLGdCQUFBO0FDcEJGOztBRHVCQTtFQUNFLFdBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDcEJKOztBRDBCQTtFQUNFLGFBQUE7QUN2QkY7O0FEeUJFO0VBQ0Usb0NBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ3ZCSjs7QUQyQkk7RUFDRSxlQUFBO0FDekJOOztBRDRCSTs7RUFFRSxjQUFBO0FDMUJOOztBRDZCSTs7RUFFRSxlQUFBO0VBQ0EsZUFBQTtBQzNCTjs7QUQrQkU7RUFDRSxjQTdHWTtFQThHWixrQkFBQTtBQzdCSjs7QURpQ0E7RUFDRSxxQkFBQTtFQUNDLGVBQUE7RUFDQSw2QkFBQTtBQzlCSDs7QURnQ0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7QUM3QkY7O0FEK0JBO0VBQ0UsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFBUSxhQUFBO0VBQ1Ysb0NBQUE7QUMzQkE7O0FENkJBO0VBQ0UsWUFBQTtFQUNBLHlCQXZJYztFQXdJZCxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDMUJGOztBRDRCQTtFQUNLLG9DQUFBO0FDekJMOztBRDJCQTtFQUNFLGdCQUFBO0FDeEJGOztBRDBCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FDdkJGOztBRHlCQTtFQUNFLHlCQXZKYztFQXdKZCxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDdEJGOztBRHdCQTtFQUNFLG1CQUFBO0FDckJGOztBRHNCRTtFQUNJLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQWpLVTtFQWtLVixtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ3BCTjs7QUR5QkU7RUFDSSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDdEJOIiwiZmlsZSI6InNyYy9hcHAvQWRtaW4vbGVhdmUtYXBwbGljYXRpb24vbGVhdmUtYXBwbGljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYXBwX2Jhcl9jb2xvcjogIzAxMDIzRjtcclxuJGZvbnRfc2l6ZSAgICA6IDE1cHg7XHJcbiR0ZXh0X2NvbG9yICAgOiAjMzk5OEM1O1xyXG5cclxuLy8gaGVhZGVyIHN0YXJ0IGhlcmVcclxuXHJcbi8vIHN0YXR1cyBiYXIgY29sb3JcclxuI2RldmljZS1hbmRyb2lkIHtcclxuICAuZnJhbWUtY29udGFpbmVyIHtcclxuICAgIC5zdGF0dXNiYXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW9ubGFiLWRldmljZS1mcmFtZSB7XHJcbiAgLmZyYW1lLWNvbnRhaW5lciB7XHJcbiAgICAuc3RhdHVzYmFyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAudG9vbGJhci1jb2xvcjEge1xyXG4gICAgaGVpZ2h0OiA1MnB4O1xyXG4gICAgd2lkdGggOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWhlYWRlciBpb24tdG9vbGJhcjpmaXJzdC1jaGlsZCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMDEwMjNGICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1tZW51LWJ1dHRvbntcclxuICAtLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDU1cHg7XHJcbiAgLy8gLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29uLnBuZykgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4ucmFvX2xvZ28ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgd2lkdGggICAgICAgICAgIDogNDdweDtcclxuICBoZWlnaHQgICAgICAgICAgOiAyMnB4O1xyXG4gIGJvcmRlci1yYWRpdXMgICA6IDMwcHg7XHJcbiAgbWFyZ2luLWxlZnQgICAgIDogMTBweDtcclxuICB0ZXh0LWFsaWduICAgICAgOiBjZW50ZXI7XHJcbiAgcG9zaXRpb24gICAgICAgIDogcmVsYXRpdmU7XHJcblxyXG4gIC5sb2dvX2ltZyB7XHJcbiAgICBtYXgtaGVpZ2h0ICAgIDogMTAwJTtcclxuICAgIG1heC13aWR0aCAgICAgOiAxMDAlO1xyXG4gICAgaGVpZ2h0ICAgICAgICA6IDEycHg7XHJcbiAgICB3aWR0aCAgICAgICAgIDogMjBweDtcclxuICAgIG1hcmdpbiAgICAgICAgOiBhdXRvO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uICAgICAgOiBhYnNvbHV0ZTtcclxuICAgIHRvcCAgICAgICAgICAgOiAwcHg7XHJcbiAgICBib3R0b20gICAgICAgIDogMHB4O1xyXG4gICAgbGVmdCAgICAgICAgICA6IDBweDtcclxuICAgIHJpZ2h0ICAgICAgICAgOiAwcHg7XHJcblxyXG4gIH1cclxufVxyXG5cclxuLm1pZGRsZV9zZWMgc3BhbiB7XHJcbiAgZm9udC1zaXplICA6ICRmb250X3NpemU7XHJcbiAgY29sb3IgICAgICA6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxufVxyXG5cclxuLmljb25fc2Vje1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDE3cHg7XHJcbiAgICB0b3A6IDEwcHg7XHJcbn1cclxuXHJcblxyXG4vLyBjb250ZW50IHN0YXJ0IGhlcmVcclxuXHJcbi5jb250ZWN0X2NsYXNzIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAuY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDEwcHggMnB4ICNkY2RjZGM7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBwYWRkaW5nICAgOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLnBlbmRpbmdfbGVhdmVzIHtcclxuICAgIHNwYW4ge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnVzZXJfY291bnQsXHJcbiAgICAudXNlcl9uYW1lIHtcclxuICAgICAgY29sb3I6ICMzOTk4QzU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNoZWNrX2Nyb3NzLFxyXG4gICAgLmNoZWNrX3JpZ2h0IHtcclxuICAgICAgY3Vyc29yICAgIDogcG9pbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm51bWJlcl9vZl9kYXlzIHtcclxuICAgIGNvbG9yICAgICA6ICRhcHBfYmFyX2NvbG9yO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxubGFiZWwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICBtYXJnaW4tYm90dG9tOiAwcHghaW1wb3J0YW50O1xyXG59XHJcbi5jaGVja2VyOmNoZWNrZWQgKyAubW9kYWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLm1vZGFsIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtwYWRkaW5nOiAyNXB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC40KTtcclxufVxyXG4ubW9kYWwtYm9keSB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcHBfYmFyX2NvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5tb2RhbC1jb250ZW50IHtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXBwX2Jhcl9jb2xvciFpbXBvcnRhbnQ7XHJcbn1cclxuLm1vZGFsLWZvb3RlciB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ubW9kYWwtY29udGVudCBwe1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweCFpbXBvcnRhbnQ7XHJcbn1cclxuLnJlYXNvbl90ZXh0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR0ZXh0X2NvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgcGFkZGluZzogOHB4O1xyXG59XHJcbi5va19idG57XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBsYWJlbHtcclxuICAgICAgcGFkZGluZzogOHB4IDE4cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIGNvbG9yOiAkdGV4dF9jb2xvcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxufVxyXG5cclxuLmNsb3NlX2J0bntcclxuICBsYWJlbHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgY29sb3I6ICMzOTk4QzU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogLTEwcHg7XHJcbiAgICAgIHJpZ2h0OiAtMTBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICB9XHJcbn0iLCIjZGV2aWNlLWFuZHJvaWQgLmZyYW1lLWNvbnRhaW5lciAuc3RhdHVzYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuaW9ubGFiLWRldmljZS1mcmFtZSAuZnJhbWUtY29udGFpbmVyIC5zdGF0dXNiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10b29sYmFyIC50b29sYmFyLWNvbG9yMSB7XG4gIGhlaWdodDogNTJweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXI6Zmlyc3QtY2hpbGQge1xuICAtLWJhY2tncm91bmQ6ICMwMTAyM0YgIWltcG9ydGFudDtcbn1cblxuaW9uLW1lbnUtYnV0dG9uIHtcbiAgLS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogNTVweDtcbn1cblxuLnJhb19sb2dvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDQ3cHg7XG4gIGhlaWdodDogMjJweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnJhb19sb2dvIC5sb2dvX2ltZyB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMnB4O1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xufVxuXG4ubWlkZGxlX3NlYyBzcGFuIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLmljb25fc2VjIHtcbiAgei1pbmRleDogLTE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE3cHg7XG4gIHRvcDogMTBweDtcbn1cblxuLmNvbnRlY3RfY2xhc3Mge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmNvbnRlY3RfY2xhc3MgLmNhcmQge1xuICBib3gtc2hhZG93OiA0cHggNHB4IDEwcHggMnB4ICNkY2RjZGM7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5jb250ZWN0X2NsYXNzIC5wZW5kaW5nX2xlYXZlcyBzcGFuIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmNvbnRlY3RfY2xhc3MgLnBlbmRpbmdfbGVhdmVzIC51c2VyX2NvdW50LFxuLmNvbnRlY3RfY2xhc3MgLnBlbmRpbmdfbGVhdmVzIC51c2VyX25hbWUge1xuICBjb2xvcjogIzM5OThDNTtcbn1cbi5jb250ZWN0X2NsYXNzIC5wZW5kaW5nX2xlYXZlcyAuY2hlY2tfY3Jvc3MsXG4uY29udGVjdF9jbGFzcyAucGVuZGluZ19sZWF2ZXMgLmNoZWNrX3JpZ2h0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG4uY29udGVjdF9jbGFzcyAubnVtYmVyX29mX2RheXMge1xuICBjb2xvcjogIzAxMDIzRjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmNoZWNrZXI6Y2hlY2tlZCArIC5tb2RhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5tb2RhbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4ubW9kYWwtYm9keSB7XG4gIHdpZHRoOiAyMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMDIzRjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMDIzRiAhaW1wb3J0YW50O1xufVxuXG4ubW9kYWwtZm9vdGVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm1vZGFsLWNvbnRlbnQgcCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5yZWFzb25fdGV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTk4QzU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5va19idG4ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm9rX2J0biBsYWJlbCB7XG4gIHBhZGRpbmc6IDhweCAxOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzM5OThDNTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uY2xvc2VfYnRuIGxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICMzOTk4QzU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDI2cHg7XG4gIHdpZHRoOiAyNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEwcHg7XG4gIHJpZ2h0OiAtMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMjVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Admin/leave-application/leave-application.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/Admin/leave-application/leave-application.component.ts ***!
  \************************************************************************/
/*! exports provided: LeaveApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveApplicationComponent", function() { return LeaveApplicationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_leave_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/leave.service */ "./src/app/services/leave.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let LeaveApplicationComponent = class LeaveApplicationComponent {
    constructor(_leavService, alertController, _toastService, localNotifications) {
        this._leavService = _leavService;
        this.alertController = alertController;
        this._toastService = _toastService;
        this.localNotifications = localNotifications;
        this.PendingLeaves = [];
        this.loading = false;
    }
    ngOnInit() {
        this.getPendingLeaves();
    }
    /**
     * Get Pending Leave Application
     */
    getPendingLeaves() {
        this.loading = true;
        this._leavService.getPendingLeaves().subscribe((res) => {
            this.PendingLeaves = res.data;
            this.pendingLeavesCount = res.data.length;
            console.log("pending leaves=======>", this.PendingLeaves);
            this.loading = false;
        }, err => {
            console.log(err);
            this.loading = false;
        });
    }
    /**
    * Display leave Reason
    */
    presentAlert(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(data);
            let date = data.date;
            let extrahours = data.extraHours;
            console.log(extrahours);
            let finalDate = date.date + '/' + date.month + '/' + date.year;
            console.log(finalDate);
            console.log(date);
            const alert = yield this.alertController.create({
                message: '<b>' + 'Reason :' + '</b>' + ' ' + data.reason + '<br>' + '<b>' + 'Date :' + '</b>' + ' ' + finalDate + '<br>' + (data.extraHours !== null && data.extraHours !== '' ? '<b>' + 'Compensation:' + '</b>' + data.extraHours : ''),
                buttons: ['OK'],
                cssClass: 'alertCustomCss'
            });
            yield alert.present();
        });
    }
    /**
     * Leave Approval
     * @param {String} id
     */
    leaveApproval(id, status) {
        console.log(id, status);
        const obj = {
            leaveId: id,
            status: status
        };
        this._leavService.leaveApproval(obj).subscribe((res) => {
            console.log("res========>", res);
            if (status == 'Approved') {
                this._toastService.presentToast('Leave Approved');
            }
            else {
                this._toastService.presentToast('Leave Rejected');
            }
            this.getPendingLeaves();
        }, err => {
            console.log(err);
        });
    }
    getNoOfDays(days) {
        // console.log("leave details", days);
        if (days.shortLeave) {
            if (days.shortLeave == 1) {
                return days.shortLeave + ' hour';
            }
            return days.shortLeave + ' hours';
        }
        else {
            if (days.noOfDays < 0) {
                return 'You have no leaves..';
            }
            else {
                const noOfDays = Math.floor(days.noOfDays / 8);
                // console.log("Days", noOfDays);
                const noOfhours = days.noOfDays % 8;
                // console.log("noOfhours", noOfhours);
                if (!noOfDays && noOfhours) {
                    if (noOfhours > 1) {
                        return noOfhours + ' hours';
                    }
                    else {
                        return noOfhours + ' hour';
                    }
                }
                else if (noOfDays && !noOfhours) {
                    if (noOfDays > 1) {
                        return noOfDays + ' Days';
                    }
                    else {
                        return noOfDays + ' Day';
                    }
                }
                else {
                    if (noOfDays > 1 && noOfhours > 1) {
                        return noOfDays + ' Days ' + noOfhours + ' hours';
                    }
                    else if (noOfDays == 1 && noOfhours == 1) {
                        return noOfDays + ' Day ' + noOfhours + ' hour';
                    }
                    else if (noOfDays > 1 && noOfhours == 1) {
                        return noOfDays + ' Days ' + noOfhours + ' hour';
                    }
                    else {
                        return noOfDays + ' Day ' + noOfhours + ' hours';
                    }
                }
            }
        }
    }
};
LeaveApplicationComponent.ctorParameters = () => [
    { type: _services_leave_service__WEBPACK_IMPORTED_MODULE_2__["LeaveService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_4__["LocalNotifications"] }
];
LeaveApplicationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-leave-application',
        template: __webpack_require__(/*! raw-loader!./leave-application.component.html */ "./node_modules/raw-loader/index.js!./src/app/Admin/leave-application/leave-application.component.html"),
        styles: [__webpack_require__(/*! ./leave-application.component.scss */ "./src/app/Admin/leave-application/leave-application.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_leave_service__WEBPACK_IMPORTED_MODULE_2__["LeaveService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_4__["LocalNotifications"]])
], LeaveApplicationComponent);



/***/ }),

/***/ "./src/app/Admin/notification/notification.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/Admin/notification/notification.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#device-android .frame-container .statusbar {\n  background-color: #fff;\n}\n\nionlab-device-frame .frame-container .statusbar {\n  background-color: #fff !important;\n}\n\nion-toolbar .toolbar-color1 {\n  height: 52px;\n  width: 100%;\n}\n\nion-header ion-toolbar:first-child {\n  --background: #01023F !important;\n}\n\nion-menu-button {\n  --color: transparent;\n  --padding-start: 55px;\n}\n\n.rao_logo {\n  background-color: #fff;\n  width: 47px;\n  height: 22px;\n  border-radius: 30px;\n  margin-left: 10px;\n  text-align: center;\n  position: relative;\n}\n\n.rao_logo .logo_img {\n  max-height: 100%;\n  max-width: 100%;\n  height: 12px;\n  width: 20px;\n  margin: auto;\n  vertical-align: center;\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n\n.middle_sec span {\n  font-size: 15px;\n  color: #fff;\n  font-weight: 100;\n}\n\n.icon_sec {\n  z-index: -1;\n  position: absolute;\n  right: 17px;\n  top: 10px;\n}\n\n.card-content {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.dataNotAvalible p {\n  text-align: center;\n  font-size: 15px;\n  margin-top: 30px;\n  color: #000;\n}\n\n.all_notification {\n  padding: 10px;\n}\n\n.card {\n  box-shadow: 4px 4px 10px 2px #dcdcdc;\n  margin-bottom: 8px;\n  padding: 5px;\n}\n\n.card .card-content {\n  min-height: 34px;\n}\n\n.notify_name {\n  display: inline-block;\n  vertical-align: -webkit-baseline-middle;\n}\n\n.notify_name span {\n  font-size: 12px;\n  margin-bottom: 0px !important;\n}\n\n.notify_name .user_name {\n  color: #01023F;\n}\n\n.notify_name .applied_date {\n  color: #3998C5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbGVhdmVUcmFja2luZ0ZpbmFsL3NyYy9hcHAvQWRtaW4vbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQWRtaW4vbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRUTtFQUNJLHNCQUFBO0FDUFo7O0FEY1E7RUFDSSxpQ0FBQTtBQ1haOztBRGlCSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDZFI7O0FEa0JBO0VBQ0ksZ0NBQUE7QUNmSjs7QURrQkE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0FDZko7O0FEaUJBO0VBQ0ksc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDZEo7O0FEZ0JJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNkUjs7QURtQkE7RUFDSSxlQTdEWTtFQThEWixXQUFBO0VBQ0EsZ0JBQUE7QUNoQko7O0FEbUJBO0VBQ0ksV0FBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNoQk47O0FEc0JBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ25CSjs7QUR1Qkk7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNwQlI7O0FEd0JBO0VBQ0ksYUFBQTtBQ3JCSjs7QUR3QkE7RUFDSSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ3JCSjs7QUR1Qkk7RUFDSSxnQkFBQTtBQ3JCUjs7QUR5QkE7RUFDSSxxQkFBQTtFQUNBLHVDQUFBO0FDdEJKOztBRHdCSTtFQUNJLGVBQUE7RUFDQSw2QkFBQTtBQ3RCUjs7QUR5Qkk7RUFDSSxjQW5IUTtBQzRGaEI7O0FEMEJJO0VBQ0ksY0FySFE7QUM2RmhCIiwiZmlsZSI6InNyYy9hcHAvQWRtaW4vbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGhlYWRlciBkZXNpZ24gc3RhcnQgXHJcbiRhcHBfYmFyX2NvbG9yOiAjMDEwMjNGO1xyXG4kZm9udF9zaXplICAgIDogMTVweDtcclxuJHRleHRfY29sb3IgICA6ICMzOTk4QzU7XHJcblxyXG4vLyBzdGF0dXMgYmFyIGNvbG9yXHJcbiNkZXZpY2UtYW5kcm9pZCB7XHJcbiAgICAuZnJhbWUtY29udGFpbmVyIHtcclxuICAgICAgICAuc3RhdHVzYmFyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbmxhYi1kZXZpY2UtZnJhbWUge1xyXG4gICAgLmZyYW1lLWNvbnRhaW5lciB7XHJcbiAgICAgICAgLnN0YXR1c2JhciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIC50b29sYmFyLWNvbG9yMSB7XHJcbiAgICAgICAgaGVpZ2h0OiA1MnB4O1xyXG4gICAgICAgIHdpZHRoIDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWhlYWRlciBpb24tdG9vbGJhcjpmaXJzdC1jaGlsZCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMTAyM0YgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLW1lbnUtYnV0dG9ue1xyXG4gICAgLS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDU1cHg7XHJcbiAgICAgICB9XHJcbi5yYW9fbG9nbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgd2lkdGggICAgICAgICAgIDogNDdweDtcclxuICAgIGhlaWdodCAgICAgICAgICA6IDIycHg7XHJcbiAgICBib3JkZXItcmFkaXVzICAgOiAzMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQgICAgIDogMTBweDtcclxuICAgIHRleHQtYWxpZ24gICAgICA6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uICAgICAgICA6IHJlbGF0aXZlO1xyXG5cclxuICAgIC5sb2dvX2ltZyB7XHJcbiAgICAgICAgbWF4LWhlaWdodCAgICA6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoICAgICA6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0ICAgICAgICA6IDEycHg7XHJcbiAgICAgICAgd2lkdGggICAgICAgICA6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luICAgICAgICA6IGF1dG87XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbiAgICAgIDogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wICAgICAgICAgICA6IDBweDtcclxuICAgICAgICBib3R0b20gICAgICAgIDogMHB4O1xyXG4gICAgICAgIGxlZnQgICAgICAgICAgOiAwcHg7XHJcbiAgICAgICAgcmlnaHQgICAgICAgICA6IDBweDtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbi5taWRkbGVfc2VjIHNwYW4ge1xyXG4gICAgZm9udC1zaXplICA6ICRmb250X3NpemU7XHJcbiAgICBjb2xvciAgICAgIDogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuXHJcbi5pY29uX3NlY3tcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAxN3B4O1xyXG4gICAgICB0b3A6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG5cclxuLy8gIGNvbnRlbnQgZGVzaWduIHN0YXJ0XHJcblxyXG4uY2FyZC1jb250ZW50IHtcclxuICAgIHBhZGRpbmctdG9wICAgOiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4uZGF0YU5vdEF2YWxpYmxlIHtcclxuICAgIHAge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemUgOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgY29sb3IgICAgIDogIzAwMDtcclxuICAgIH1cclxufVxyXG5cclxuLmFsbF9ub3RpZmljYXRpb24ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgYm94LXNoYWRvdyAgIDogNHB4IDRweCAxMHB4IDJweCAjZGNkY2RjO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgcGFkZGluZyAgICAgIDogNXB4O1xyXG5cclxuICAgIC5jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDM0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ub3RpZnlfbmFtZSB7XHJcbiAgICBkaXNwbGF5ICAgICAgIDogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IC13ZWJraXQtYmFzZWxpbmUtbWlkZGxlO1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZSAgICA6IDEycHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnVzZXJfbmFtZSB7XHJcbiAgICAgICAgY29sb3I6ICRhcHBfYmFyX2NvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIC5hcHBsaWVkX2RhdGUge1xyXG4gICAgICAgIGNvbG9yOiAkdGV4dF9jb2xvcjtcclxuICAgIH1cclxufSIsIiNkZXZpY2UtYW5kcm9pZCAuZnJhbWUtY29udGFpbmVyIC5zdGF0dXNiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG5pb25sYWItZGV2aWNlLWZyYW1lIC5mcmFtZS1jb250YWluZXIgLnN0YXR1c2JhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuaW9uLXRvb2xiYXIgLnRvb2xiYXItY29sb3IxIHtcbiAgaGVpZ2h0OiA1MnB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWhlYWRlciBpb24tdG9vbGJhcjpmaXJzdC1jaGlsZCB7XG4gIC0tYmFja2dyb3VuZDogIzAxMDIzRiAhaW1wb3J0YW50O1xufVxuXG5pb24tbWVudS1idXR0b24ge1xuICAtLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA1NXB4O1xufVxuXG4ucmFvX2xvZ28ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogNDdweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucmFvX2xvZ28gLmxvZ29faW1nIHtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEycHg7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG59XG5cbi5taWRkbGVfc2VjIHNwYW4ge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogMTAwO1xufVxuXG4uaWNvbl9zZWMge1xuICB6LWluZGV4OiAtMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTdweDtcbiAgdG9wOiAxMHB4O1xufVxuXG4uY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuLmRhdGFOb3RBdmFsaWJsZSBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uYWxsX25vdGlmaWNhdGlvbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jYXJkIHtcbiAgYm94LXNoYWRvdzogNHB4IDRweCAxMHB4IDJweCAjZGNkY2RjO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5jYXJkIC5jYXJkLWNvbnRlbnQge1xuICBtaW4taGVpZ2h0OiAzNHB4O1xufVxuXG4ubm90aWZ5X25hbWUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiAtd2Via2l0LWJhc2VsaW5lLW1pZGRsZTtcbn1cbi5ub3RpZnlfbmFtZSBzcGFuIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cbi5ub3RpZnlfbmFtZSAudXNlcl9uYW1lIHtcbiAgY29sb3I6ICMwMTAyM0Y7XG59XG4ubm90aWZ5X25hbWUgLmFwcGxpZWRfZGF0ZSB7XG4gIGNvbG9yOiAjMzk5OEM1O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Admin/notification/notification.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/Admin/notification/notification.component.ts ***!
  \**************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");




let NotificationComponent = class NotificationComponent {
    constructor(_userService, localNotifications) {
        this._userService = _userService;
        this.localNotifications = localNotifications;
    }
    ngOnInit() {
        this.getNotification();
    }
    getNotification() {
        this._userService.getNotification().subscribe((data) => {
            this.notificationDetails = data.data;
            this.notificationDetailsCount = data.data.length;
            console.log("notification data", this.notificationDetails);
            // this.scheduleNotification(this.notificationDetails)
        }, err => {
            console.log(err);
        });
    }
};
NotificationComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__["LocalNotifications"] }
];
NotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notification',
        template: __webpack_require__(/*! raw-loader!./notification.component.html */ "./node_modules/raw-loader/index.js!./src/app/Admin/notification/notification.component.html"),
        styles: [__webpack_require__(/*! ./notification.component.scss */ "./src/app/Admin/notification/notification.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__["LocalNotifications"]])
], NotificationComponent);



/***/ }),

/***/ "./src/app/Admin/reports/reports.component.scss":
/*!******************************************************!*\
  !*** ./src/app/Admin/reports/reports.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n#device-android .frame-container .statusbar {\n  background-color: #fff;\n}\nionlab-device-frame .frame-container .statusbar {\n  background-color: #fff !important;\n}\nion-toolbar .toolbar-color1 {\n  height: 52px;\n  width: 100%;\n}\nion-header ion-toolbar:first-child {\n  --background: #01023F !important;\n}\nion-menu-button {\n  --color: transparent;\n  --padding-start: 55px;\n}\n.rao_logo {\n  background-color: #fff;\n  width: 47px;\n  height: 22px;\n  border-radius: 30px;\n  margin-left: 10px;\n  text-align: center;\n  position: relative;\n}\n.rao_logo .logo_img {\n  max-height: 100%;\n  max-width: 100%;\n  height: 12px;\n  width: 20px;\n  margin: auto;\n  vertical-align: center;\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n.middle_sec span {\n  font-size: 15px;\n  color: #fff;\n  font-weight: 100;\n}\n.icon_sec {\n  z-index: -1;\n  position: absolute;\n  right: 17px;\n  top: 10px;\n}\n.apply_leave {\n  padding: 10px;\n}\n.apply_leave .apply_leave_text {\n  background-color: #3998C5;\n  border-radius: 4px;\n  width: 100%;\n  padding: 7px 18px;\n  font-size: 18px;\n  font-weight: bold;\n}\n.select_time {\n  margin: 15px 0px;\n}\n.select_time ion-item {\n  box-shadow: 4px 4px 10px 2px #dcdcdc;\n  border: 1px solid #D9D9D9;\n  border-radius: 30px;\n  height: 38px;\n}\n.select_time ion-item ion-label {\n  color: #D9D9D9;\n  font-size: 12px;\n  margin-top: -3px;\n}\n.leave_details .card {\n  box-shadow: 4px 4px 10px 2px #dcdcdc;\n  margin-bottom: 4px;\n  padding: 10px;\n}\n.leave_details .card span {\n  font-size: 12px;\n  color: #3998C5;\n}\nion-datetime {\n  color: #D9D9D9;\n  font-size: 14px;\n  margin-top: -10px;\n  position: relative;\n  padding: 0px;\n  width: 140px;\n}\nion-datetime::after {\n  content: \"❯\";\n  position: absolute;\n  top: 0px;\n  right: 4px;\n  z-index: 1;\n  color: #D9D9D9;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n.item-native {\n  padding: 0px !important;\n}\n.datetime-text {\n  font-size: 12px;\n}\nlabel {\n  display: inline-block;\n  cursor: pointer;\n  margin-bottom: 0px !important;\n}\n.checker:checked + .modal {\n  display: -webkit-box;\n  display: flex;\n}\n.modal {\n  display: none;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 25px;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.modal-body {\n  width: 200px;\n  background-color: #01023F;\n  border-radius: 12px;\n  padding: 15px;\n  border-radius: 8px;\n  position: relative;\n}\n.modal-content {\n  background-color: #01023F !important;\n}\n.modal-footer {\n  overflow: hidden;\n}\n.modal-content p {\n  font-size: 20px;\n  margin-top: 10px;\n  margin-bottom: 0px !important;\n}\n.reason_text {\n  background-color: #3998C5;\n  border-radius: 5px;\n  font-size: 12px;\n  padding: 8px;\n}\n.ok_btn {\n  margin-bottom: 10px;\n}\n.ok_btn label {\n  padding: 8px 18px;\n  background-color: #fff;\n  color: #3998C5;\n  border-radius: 30px;\n  font-size: 12px;\n  text-transform: uppercase;\n}\n.close_btn label {\n  background-color: #fff;\n  color: #3998C5;\n  font-size: 15px;\n  border-radius: 50%;\n  height: 26px;\n  width: 26px;\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  text-align: center;\n  line-height: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWRtaW4vcmVwb3J0cy9yZXBvcnRzLmNvbXBvbmVudC5zY3NzIiwiL3Zhci93d3cvaHRtbC9sZWF2ZVRyYWNraW5nRmluYWwvc3JjL2FwcC9BZG1pbi9yZXBvcnRzL3JlcG9ydHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDUVo7RUFDRSxzQkFBQTtBRE5OO0FDYUk7RUFDRSxpQ0FBQTtBRFZOO0FDZ0JFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QURiSjtBQ2lCQTtFQUNFLGdDQUFBO0FEZEY7QUNpQkE7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0FEZEY7QUNrQkE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QURmRjtBQ2lCRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FEZko7QUNvQkE7RUFDRSxlQS9EYztFQWdFZCxXQUFBO0VBQ0EsZ0JBQUE7QURqQkY7QUNvQkE7RUFDRSxXQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBRGpCSjtBQ29CQTtFQUNFLGFBQUE7QURqQkY7QUNtQkU7RUFDRSx5QkFoRlk7RUFpRlosa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QURqQko7QUNzQkE7RUFDRSxnQkFBQTtBRG5CRjtBQ3FCRTtFQUNFLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QURuQko7QUNxQkk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEbkJOO0FDeUJFO0VBQ0Usb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUR0Qko7QUN3Qkk7RUFDRSxlQUFBO0VBQ0EsY0FuSFU7QUQ2RmhCO0FDMkJBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUR4QkY7QUMyQkE7RUFDRSxZQUFBO0VBQ0Msa0JBQUE7RUFDRCxRQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtBRHhCRjtBQzBCQztFQUNELHVCQUFBO0FEdkJBO0FDeUJDO0VBQ0UsZUFBQTtBRHRCSDtBQ3lCQztFQUNDLHFCQUFBO0VBQ0MsZUFBQTtFQUNBLDZCQUFBO0FEdEJIO0FDd0JBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0FEckJGO0FDdUJBO0VBQ0UsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFBUSxhQUFBO0VBQ1Ysb0NBQUE7QURuQkE7QUNxQkE7RUFDRSxZQUFBO0VBQ0EseUJBdktjO0VBd0tkLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QURsQkY7QUNvQkE7RUFDSyxvQ0FBQTtBRGpCTDtBQ21CQTtFQUNFLGdCQUFBO0FEaEJGO0FDa0JBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QURmRjtBQ2lCQTtFQUNFLHlCQXhMYztFQXlMZCxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FEZEY7QUNnQkE7RUFDRSxtQkFBQTtBRGJGO0FDY0U7RUFDSSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FsTVU7RUFtTVYsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QURaTjtBQ2lCRTtFQUNJLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QURkTiIsImZpbGUiOiJzcmMvYXBwL0FkbWluL3JlcG9ydHMvcmVwb3J0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbiNkZXZpY2UtYW5kcm9pZCAuZnJhbWUtY29udGFpbmVyIC5zdGF0dXNiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG5pb25sYWItZGV2aWNlLWZyYW1lIC5mcmFtZS1jb250YWluZXIgLnN0YXR1c2JhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuaW9uLXRvb2xiYXIgLnRvb2xiYXItY29sb3IxIHtcbiAgaGVpZ2h0OiA1MnB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWhlYWRlciBpb24tdG9vbGJhcjpmaXJzdC1jaGlsZCB7XG4gIC0tYmFja2dyb3VuZDogIzAxMDIzRiAhaW1wb3J0YW50O1xufVxuXG5pb24tbWVudS1idXR0b24ge1xuICAtLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA1NXB4O1xufVxuXG4ucmFvX2xvZ28ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogNDdweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucmFvX2xvZ28gLmxvZ29faW1nIHtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEycHg7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG59XG5cbi5taWRkbGVfc2VjIHNwYW4ge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogMTAwO1xufVxuXG4uaWNvbl9zZWMge1xuICB6LWluZGV4OiAtMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTdweDtcbiAgdG9wOiAxMHB4O1xufVxuXG4uYXBwbHlfbGVhdmUge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmFwcGx5X2xlYXZlIC5hcHBseV9sZWF2ZV90ZXh0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5OThDNTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogN3B4IDE4cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zZWxlY3RfdGltZSB7XG4gIG1hcmdpbjogMTVweCAwcHg7XG59XG4uc2VsZWN0X3RpbWUgaW9uLWl0ZW0ge1xuICBib3gtc2hhZG93OiA0cHggNHB4IDEwcHggMnB4ICNkY2RjZGM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNEOUQ5RDk7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGhlaWdodDogMzhweDtcbn1cbi5zZWxlY3RfdGltZSBpb24taXRlbSBpb24tbGFiZWwge1xuICBjb2xvcjogI0Q5RDlEOTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAtM3B4O1xufVxuXG4ubGVhdmVfZGV0YWlscyAuY2FyZCB7XG4gIGJveC1zaGFkb3c6IDRweCA0cHggMTBweCAycHggI2RjZGNkYztcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmxlYXZlX2RldGFpbHMgLmNhcmQgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMzOTk4QzU7XG59XG5cbmlvbi1kYXRldGltZSB7XG4gIGNvbG9yOiAjRDlEOUQ5O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDBweDtcbiAgd2lkdGg6IDE0MHB4O1xufVxuXG5pb24tZGF0ZXRpbWU6OmFmdGVyIHtcbiAgY29udGVudDogXCLina9cIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDRweDtcbiAgei1pbmRleDogMTtcbiAgY29sb3I6ICNEOUQ5RDk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cblxuLml0ZW0tbmF0aXZlIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kYXRldGltZS10ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmNoZWNrZXI6Y2hlY2tlZCArIC5tb2RhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5tb2RhbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4ubW9kYWwtYm9keSB7XG4gIHdpZHRoOiAyMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMDIzRjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMDIzRiAhaW1wb3J0YW50O1xufVxuXG4ubW9kYWwtZm9vdGVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm1vZGFsLWNvbnRlbnQgcCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5yZWFzb25fdGV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTk4QzU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5va19idG4ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm9rX2J0biBsYWJlbCB7XG4gIHBhZGRpbmc6IDhweCAxOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzM5OThDNTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uY2xvc2VfYnRuIGxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICMzOTk4QzU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDI2cHg7XG4gIHdpZHRoOiAyNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEwcHg7XG4gIHJpZ2h0OiAtMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMjVweDtcbn0iLCIkYXBwX2Jhcl9jb2xvcjogIzAxMDIzRjtcclxuJHRleHRfY29sb3IgICA6ICMzOTk4QzU7XHJcbiRmb250X3NpemUgICAgOiAxNXB4O1xyXG5cclxuLy8gaGVhZGVyIHN0YXJ0XHJcbi8vIHN0YXR1cyBiYXIgY29sb3JcclxuI2RldmljZS1hbmRyb2lkIHtcclxuICAuZnJhbWUtY29udGFpbmVyIHtcclxuICAgIC5zdGF0dXNiYXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW9ubGFiLWRldmljZS1mcmFtZSB7XHJcbiAgLmZyYW1lLWNvbnRhaW5lciB7XHJcbiAgICAuc3RhdHVzYmFyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC50b29sYmFyLWNvbG9yMSB7XHJcbiAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICB3aWR0aCA6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5pb24taGVhZGVyIGlvbi10b29sYmFyOmZpcnN0LWNoaWxkIHtcclxuICAtLWJhY2tncm91bmQ6ICMwMTAyM0YgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLW1lbnUtYnV0dG9ue1xyXG4gIC0tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIC0tcGFkZGluZy1zdGFydDogNTVweDtcclxuICAvLyAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2ljb24ucG5nKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbi5yYW9fbG9nbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB3aWR0aCAgICAgICAgICAgOiA0N3B4O1xyXG4gIGhlaWdodCAgICAgICAgICA6IDIycHg7XHJcbiAgYm9yZGVyLXJhZGl1cyAgIDogMzBweDtcclxuICBtYXJnaW4tbGVmdCAgICAgOiAxMHB4O1xyXG4gIHRleHQtYWxpZ24gICAgICA6IGNlbnRlcjtcclxuICBwb3NpdGlvbiAgICAgICAgOiByZWxhdGl2ZTtcclxuXHJcbiAgLmxvZ29faW1nIHtcclxuICAgIG1heC1oZWlnaHQgICAgOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoICAgICA6IDEwMCU7XHJcbiAgICBoZWlnaHQgICAgICAgIDogMTJweDtcclxuICAgIHdpZHRoICAgICAgICAgOiAyMHB4O1xyXG4gICAgbWFyZ2luICAgICAgICA6IGF1dG87XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb24gICAgICA6IGFic29sdXRlO1xyXG4gICAgdG9wICAgICAgICAgICA6IDBweDtcclxuICAgIGJvdHRvbSAgICAgICAgOiAwcHg7XHJcbiAgICBsZWZ0ICAgICAgICAgIDogMHB4O1xyXG4gICAgcmlnaHQgICAgICAgICA6IDBweDtcclxuXHJcbiAgfVxyXG59XHJcblxyXG4ubWlkZGxlX3NlYyBzcGFuIHtcclxuICBmb250LXNpemUgIDogJGZvbnRfc2l6ZTtcclxuICBjb2xvciAgICAgIDogI2ZmZjtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG59XHJcblxyXG4uaWNvbl9zZWN7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTdweDtcclxuICAgIHRvcDogMTBweDtcclxufVxyXG5cclxuLmFwcGx5X2xlYXZlIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAuYXBwbHlfbGVhdmVfdGV4dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGV4dF9jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXMgICA6IDRweDtcclxuICAgIHdpZHRoICAgICAgICAgICA6IDEwMCU7XHJcbiAgICBwYWRkaW5nICAgICAgICAgOiA3cHggMThweDtcclxuICAgIGZvbnQtc2l6ZSAgICAgICA6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodCAgICAgOiBib2xkO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5zZWxlY3RfdGltZSB7XHJcbiAgbWFyZ2luOiAxNXB4IDBweDtcclxuXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgYm94LXNoYWRvdyAgIDogNHB4IDRweCAxMHB4IDJweCAjZGNkY2RjO1xyXG4gICAgYm9yZGVyICAgICAgIDogMXB4IHNvbGlkICNEOUQ5RDk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgaGVpZ2h0ICAgICAgIDogMzhweDtcclxuXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICBjb2xvciAgICAgOiAjRDlEOUQ5O1xyXG4gICAgICBmb250LXNpemUgOiAxMnB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAtM3B4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmxlYXZlX2RldGFpbHMge1xyXG4gIC5jYXJkIHtcclxuICAgIGJveC1zaGFkb3cgICA6IDRweCA0cHggMTBweCAycHggI2RjZGNkYztcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgIHBhZGRpbmcgICAgICA6IDEwcHg7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgY29sb3IgICAgOiAkdGV4dF9jb2xvcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmlvbi1kYXRldGltZSB7XHJcbiAgY29sb3IgICAgIDogI0Q5RDlEOTtcclxuICBmb250LXNpemUgOiAxNHB4O1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgd2lkdGg6IDE0MHB4O1xyXG59XHJcblxyXG5pb24tZGF0ZXRpbWU6OmFmdGVye1xyXG4gIGNvbnRlbnQ6ICdcXDI3NkYnO1xyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwcHg7XHJcbiAgcmlnaHQ6IDRweDtcclxuICB6LWluZGV4OiAxO1xyXG4gIGNvbG9yOiAjRDlEOUQ5O1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuIH1cclxuIC5pdGVtLW5hdGl2ZXtcclxucGFkZGluZzogMHB4IWltcG9ydGFudDtcclxuIH1cclxuIC5kYXRldGltZS10ZXh0e1xyXG4gICBmb250LXNpemU6IDEycHg7XHJcbiB9XHJcblxyXG4gbGFiZWwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICBtYXJnaW4tYm90dG9tOiAwcHghaW1wb3J0YW50O1xyXG59XHJcbi5jaGVja2VyOmNoZWNrZWQgKyAubW9kYWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLm1vZGFsIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtwYWRkaW5nOiAyNXB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC40KTtcclxufVxyXG4ubW9kYWwtYm9keSB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcHBfYmFyX2NvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5tb2RhbC1jb250ZW50IHtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXBwX2Jhcl9jb2xvciFpbXBvcnRhbnQ7XHJcbn1cclxuLm1vZGFsLWZvb3RlciB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ubW9kYWwtY29udGVudCBwe1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweCFpbXBvcnRhbnQ7XHJcbn1cclxuLnJlYXNvbl90ZXh0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR0ZXh0X2NvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgcGFkZGluZzogOHB4O1xyXG59XHJcbi5va19idG57XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBsYWJlbHtcclxuICAgICAgcGFkZGluZzogOHB4IDE4cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIGNvbG9yOiAkdGV4dF9jb2xvcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxufVxyXG5cclxuLmNsb3NlX2J0bntcclxuICBsYWJlbHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgY29sb3I6ICMzOTk4QzU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogLTEwcHg7XHJcbiAgICAgIHJpZ2h0OiAtMTBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Admin/reports/reports.component.ts":
/*!****************************************************!*\
  !*** ./src/app/Admin/reports/reports.component.ts ***!
  \****************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_leave_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/leave.service */ "./src/app/services/leave.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let ReportsComponent = class ReportsComponent {
    constructor(_leaveService) {
        this._leaveService = _leaveService;
        this.monthLeaveReport = [];
        this.yearLeaveReport = [];
        this.loading = false;
        this.monthLeaveForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            month: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
        });
        this.yearLeaveForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            year: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
        });
    }
    ngOnInit() { }
    /**
     * Get month leave report
     * @param {object} data
     */
    getMonthLeaveReport(data) {
        $(".no-leave-of-year").css({ 'display': 'none' });
        this.yearLeaveReport = [];
        this.loading = true;
        console.log(data);
        this._leaveService.getMonthLeaveReport(data).subscribe((res) => {
            this.monthLeaveReport = res.data;
            this.monthLeaveCount = res.data.length;
            if (!res.data.length) {
                $('.no-leaves-of-month').css({ 'display': 'block' });
            }
            console.log("month report=======>", res);
            this.loading = false;
        }, err => {
            console.log(err);
            this.loading = false;
        });
    }
    /**
     * Get year leave report
     * @param {Object} data
     */
    getYearLeaveReport(data) {
        $('.no-leaves-of-month').css({ 'display': 'none' });
        this.monthLeaveReport = [];
        console.log(data);
        this.loading = true;
        this._leaveService.getYearLeaveReport(data).subscribe((res) => {
            this.yearLeaveReport = res.data;
            this.yearLeaveCount = res.data.length;
            if (!res.data.length) {
                $('.no-leave-of-year').css({ 'display': 'block' });
            }
            console.log("year report=======>", this.yearLeaveReport, this.yearLeaveCount);
            this.loading = false;
        }, err => {
            console.log(err);
            this.loading = false;
        });
    }
    /**
     * Get number of days
     * @param {String} days
     */
    getNoOfDays(days) {
        // console.log("leave details", days);
        if (days.shortLeave) {
            if (days.shortLeave == 1) {
                return days.shortLeave + ' hour';
            }
            return days.shortLeave + ' hours';
        }
        else {
            if (days.noOfDays < 0) {
                return 'You have no leaves..';
            }
            else {
                const noOfDays = Math.floor(days.noOfDays / 8);
                // console.log("Days", noOfDays);
                const noOfhours = days.noOfDays % 8;
                // console.log("noOfhours", noOfhours);
                if (!noOfDays && noOfhours) {
                    if (noOfhours > 1) {
                        return noOfhours + ' hours';
                    }
                    else {
                        return noOfhours + ' hour';
                    }
                }
                else if (noOfDays && !noOfhours) {
                    if (noOfDays > 1) {
                        return noOfDays + ' Days';
                    }
                    else {
                        return noOfDays + ' Day';
                    }
                }
                else {
                    if (noOfDays > 1 && noOfhours > 1) {
                        return noOfDays + ' Days ' + noOfhours + ' hours';
                    }
                    else if (noOfDays == 1 && noOfhours == 1) {
                        return noOfDays + ' Day ' + noOfhours + ' hour';
                    }
                    else if (noOfDays > 1 && noOfhours == 1) {
                        return noOfDays + ' Days ' + noOfhours + ' hour';
                    }
                    else {
                        return noOfDays + ' Day ' + noOfhours + ' hours';
                    }
                }
            }
        }
    }
};
ReportsComponent.ctorParameters = () => [
    { type: _services_leave_service__WEBPACK_IMPORTED_MODULE_2__["LeaveService"] }
];
ReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reports',
        template: __webpack_require__(/*! raw-loader!./reports.component.html */ "./node_modules/raw-loader/index.js!./src/app/Admin/reports/reports.component.html"),
        styles: [__webpack_require__(/*! ./reports.component.scss */ "./src/app/Admin/reports/reports.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_leave_service__WEBPACK_IMPORTED_MODULE_2__["LeaveService"]])
], ReportsComponent);



/***/ }),

/***/ "./src/app/Admin/single-usre/single-usre.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/Admin/single-usre/single-usre.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  margin: 0px;\n  padding: 0px;\n}\n\np {\n  margin: 0px;\n}\n\na:hover {\n  text-decoration: none;\n}\n\n#device-android .frame-container .statusbar {\n  background-color: #fff;\n}\n\nionlab-device-frame .frame-container .statusbar {\n  background-color: #fff !important;\n}\n\nion-toolbar .toolbar-color1 {\n  height: 52px;\n  width: 100%;\n}\n\nion-header ion-toolbar:first-child {\n  --background: #01023f !important;\n}\n\nion-menu-button {\n  --color: transparent;\n  --padding-start: 55px;\n}\n\n.rao_logo {\n  background-color: #fff;\n  width: 47px;\n  height: 22px;\n  border-radius: 30px;\n  margin-left: 10px;\n  text-align: center;\n  position: relative;\n}\n\n.rao_logo .logo_img {\n  max-height: 100%;\n  max-width: 100%;\n  height: 12px;\n  width: 20px;\n  margin: auto;\n  vertical-align: center;\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n\n.middle_sec span {\n  font-size: 15px;\n  color: #fff;\n  font-weight: 100;\n}\n\n.menu_icon {\n  position: absolute;\n  cursor: pointer;\n  right: 40px;\n  top: 15px;\n}\n\n.menu_icon:focus {\n  outline: none;\n}\n\n.icon_sec {\n  z-index: -1;\n  position: absolute;\n  right: 17px;\n  top: 10px;\n}\n\n.user_detail {\n  padding: 10px;\n}\n\n.single_user_profile {\n  margin-top: 2px;\n}\n\n.single_user {\n  position: relative;\n  z-index: 11;\n  width: 108px;\n  height: 108px;\n  margin: auto;\n}\n\n.profile_img {\n  width: 108px;\n  height: 108px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin: auto;\n}\n\n.profile_img img {\n  max-width: 100%;\n  min-width: 100%;\n  max-height: 100%;\n  min-height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nlabel.profile_and_cover_edit {\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n  cursor: pointer;\n  font-size: 10px;\n  position: absolute;\n  bottom: 4px;\n  right: 0;\n  background-color: #01023f;\n  z-index: 111;\n  line-height: 19px;\n  color: #fff;\n  display: inline-block;\n  border: 1px solid #01023f;\n  font-weight: normal;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n}\n\n.usee_name_text p {\n  text-transform: uppercase;\n  font-size: 20px;\n  color: #01023f;\n  font-weight: bold;\n  margin-top: 6px;\n}\n\n.card {\n  box-shadow: 4px 4px 10px 2px #dcdcdc;\n  margin-top: 3px;\n  padding: 9px;\n}\n\n.card .user_heading {\n  font-size: 12px;\n  color: #3998c5;\n  font-weight: 400;\n  text-transform: capitalize;\n}\n\n.card .single_user_name {\n  font-size: 12px;\n  color: #01023f;\n  text-transform: capitalize;\n}\n\n.leave_report {\n  margin-top: 15px;\n}\n\n.leave_report .leave_report_text {\n  background-color: #3998c5;\n  border-radius: 4px;\n  width: 100%;\n  padding: 7px 18px;\n  font-size: 18px;\n  font-weight: bold;\n  margin-bottom: 15px;\n}\n\n.leave_details span {\n  font-size: 12px;\n  color: #3998c5;\n}\n\n.no_leaves p {\n  font-size: 15px;\n}\n\nlabel {\n  display: inline-block;\n  cursor: pointer;\n  margin-bottom: 0px !important;\n}\n\n.checker:checked + .modal {\n  display: -webkit-box;\n  display: flex;\n}\n\n.modal {\n  display: none;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 25px;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.modal-body {\n  width: 200px;\n  background-color: #01023f;\n  border-radius: 12px;\n  padding: 15px;\n  border-radius: 8px;\n  position: relative;\n}\n\n.modal-content {\n  background-color: #01023f !important;\n}\n\n.modal-footer {\n  overflow: hidden;\n}\n\n.modal-content p {\n  font-size: 20px;\n  margin-top: 10px;\n  margin-bottom: 0px !important;\n}\n\n.reason_text {\n  background-color: #3998c5;\n  border-radius: 5px;\n  font-size: 12px;\n  padding: 8px;\n}\n\n.ok_btn {\n  margin-bottom: 10px;\n}\n\n.ok_btn label {\n  padding: 8px 18px;\n  background-color: #fff;\n  color: #3998c5;\n  border-radius: 30px;\n  font-size: 12px;\n  text-transform: uppercase;\n}\n\n.close_btn label {\n  background-color: #fff;\n  color: #3998c5;\n  font-size: 15px;\n  border-radius: 50%;\n  height: 26px;\n  width: 26px;\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  text-align: center;\n  line-height: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbGVhdmVUcmFja2luZ0ZpbmFsL3NyYy9hcHAvQWRtaW4vc2luZ2xlLXVzcmUvc2luZ2xlLXVzcmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0FkbWluL3NpbmdsZS11c3JlL3NpbmdsZS11c3JlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNORjs7QURTQTtFQUNFLFdBQUE7QUNORjs7QURTQTtFQUNFLHFCQUFBO0FDTkY7O0FEV0k7RUFDRSxzQkFBQTtBQ1JOOztBRGVJO0VBQ0UsaUNBQUE7QUNaTjs7QURrQkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ2ZKOztBRG1CQTtFQUNFLGdDQUFBO0FDaEJGOztBRG1CQTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7QUNoQkY7O0FEb0JBO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDakJGOztBRG1CRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDakJKOztBRHFCQTtFQUNFLGVBN0VVO0VBOEVWLFdBQUE7RUFDQSxnQkFBQTtBQ2xCRjs7QURxQkE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ2xCRjs7QURxQkE7RUFDRSxhQUFBO0FDbEJGOztBRG9CQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDakJGOztBRHNCQTtFQUNFLGFBQUE7QUNuQkY7O0FEc0JBO0VBQ0UsZUFBQTtBQ25CRjs7QURxQkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNsQkY7O0FEcUJBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ2xCRjs7QURvQkU7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDbEJKOztBRHNCQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSx5QkE5SWM7RUErSWQsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7QUNuQkY7O0FEdUJFO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0E1Slk7RUE2SlosaUJBQUE7RUFDQSxlQUFBO0FDcEJKOztBRHdCQTtFQUNFLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNyQkY7O0FEdUJFO0VBQ0UsZUFBQTtFQUNBLGNBdktTO0VBd0tULGdCQUFBO0VBQ0EsMEJBQUE7QUNyQko7O0FEd0JFO0VBQ0UsZUFBQTtFQUNBLGNBaExZO0VBaUxaLDBCQUFBO0FDdEJKOztBRHlCQTtFQUNFLGdCQUFBO0FDdEJGOztBRHVCRTtFQUNFLHlCQXJMUztFQXNMVCxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDckJKOztBRHlCRTtFQUNFLGVBQUE7RUFDQSxjQWpNUztBQzJLYjs7QUR5QkE7RUFDRSxlQUFBO0FDdEJGOztBRHdCQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FDckJGOztBRHVCQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtBQ3BCRjs7QURzQkE7RUFDRSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtBQ25CRjs7QURxQkE7RUFDRSxZQUFBO0VBQ0EseUJBL05jO0VBZ09kLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNsQkY7O0FEb0JBO0VBQ0Usb0NBQUE7QUNqQkY7O0FEbUJBO0VBQ0UsZ0JBQUE7QUNoQkY7O0FEa0JBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUNmRjs7QURpQkE7RUFDRSx5QkEvT1c7RUFnUFgsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ2RGOztBRGdCQTtFQUNFLG1CQUFBO0FDYkY7O0FEY0U7RUFDRSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0F6UFM7RUEwUFQsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNaSjs7QURpQkU7RUFDRSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDZEoiLCJmaWxlIjoic3JjL2FwcC9BZG1pbi9zaW5nbGUtdXNyZS9zaW5nbGUtdXNyZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRhcHBfYmFyX2NvbG9yOiAjMDEwMjNmO1xyXG4kZm9udF9zaXplOiAxNXB4O1xyXG4kdGV4dF9jb2xvcjogIzM5OThjNTtcclxuXHJcbi8vIGhlYWRlciBzdGFydCBoZXJlXHJcblxyXG4vLyBzdGF0dXMgYmFyIGNvbG9yXHJcbnVsIHtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbiNkZXZpY2UtYW5kcm9pZCB7XHJcbiAgLmZyYW1lLWNvbnRhaW5lciB7XHJcbiAgICAuc3RhdHVzYmFyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmlvbmxhYi1kZXZpY2UtZnJhbWUge1xyXG4gIC5mcmFtZS1jb250YWluZXIge1xyXG4gICAgLnN0YXR1c2JhciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAudG9vbGJhci1jb2xvcjEge1xyXG4gICAgaGVpZ2h0OiA1MnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5pb24taGVhZGVyIGlvbi10b29sYmFyOmZpcnN0LWNoaWxkIHtcclxuICAtLWJhY2tncm91bmQ6ICMwMTAyM2YgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLW1lbnUtYnV0dG9uIHtcclxuICAtLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDU1cHg7XHJcbiAgLy8gLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29uLnBuZykgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJhb19sb2dvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHdpZHRoOiA0N3B4O1xyXG4gIGhlaWdodDogMjJweDtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIC5sb2dvX2ltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubWlkZGxlX3NlYyBzcGFuIHtcclxuICBmb250LXNpemU6ICRmb250X3NpemU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxufVxyXG5cclxuLm1lbnVfaWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICByaWdodDogNDBweDtcclxuICB0b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5tZW51X2ljb246Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLmljb25fc2VjIHtcclxuICB6LWluZGV4OiAtMTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDE3cHg7XHJcbiAgdG9wOiAxMHB4O1xyXG59XHJcblxyXG4vLyBjb250ZW50IHN0YXJ0ICBoZXJlXHJcblxyXG4udXNlcl9kZXRhaWwge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5zaW5nbGVfdXNlcl9wcm9maWxlIHtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuLnNpbmdsZV91c2VyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTE7XHJcbiAgd2lkdGg6IDEwOHB4O1xyXG4gIGhlaWdodDogMTA4cHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ucHJvZmlsZV9pbWcge1xyXG4gIHdpZHRoOiAxMDhweDtcclxuICBoZWlnaHQ6IDEwOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbjogYXV0bztcclxuXHJcbiAgaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5sYWJlbC5wcm9maWxlX2FuZF9jb3Zlcl9lZGl0IHtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogNHB4O1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcHBfYmFyX2NvbG9yO1xyXG4gIHotaW5kZXg6IDExMTtcclxuICBsaW5lLWhlaWdodDogMTlweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFwcF9iYXJfY29sb3I7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxufVxyXG5cclxuLnVzZWVfbmFtZV90ZXh0IHtcclxuICBwIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogJGFwcF9iYXJfY29sb3I7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBib3gtc2hhZG93OiA0cHggNHB4IDEwcHggMnB4ICNkY2RjZGM7XHJcbiAgbWFyZ2luLXRvcDogM3B4O1xyXG4gIHBhZGRpbmc6IDlweDtcclxuXHJcbiAgLnVzZXJfaGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogJHRleHRfY29sb3I7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgfVxyXG5cclxuICAuc2luZ2xlX3VzZXJfbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogJGFwcF9iYXJfY29sb3I7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB9XHJcbn1cclxuLmxlYXZlX3JlcG9ydCB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICAubGVhdmVfcmVwb3J0X3RleHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRleHRfY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDdweCAxOHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxufVxyXG4ubGVhdmVfZGV0YWlscyB7XHJcbiAgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogJHRleHRfY29sb3I7XHJcbiAgfVxyXG59XHJcbi5ub19sZWF2ZXMgcCB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbmxhYmVsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5jaGVja2VyOmNoZWNrZWQgKyAubW9kYWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLm1vZGFsIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxufVxyXG4ubW9kYWwtYm9keSB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcHBfYmFyX2NvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5tb2RhbC1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXBwX2Jhcl9jb2xvciAhaW1wb3J0YW50O1xyXG59XHJcbi5tb2RhbC1mb290ZXIge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLm1vZGFsLWNvbnRlbnQgcCB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnJlYXNvbl90ZXh0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGV4dF9jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxufVxyXG4ub2tfYnRuIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGxhYmVsIHtcclxuICAgIHBhZGRpbmc6IDhweCAxOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGNvbG9yOiAkdGV4dF9jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxufVxyXG5cclxuLmNsb3NlX2J0biB7XHJcbiAgbGFiZWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGNvbG9yOiAjMzk5OGM1O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgd2lkdGg6IDI2cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0xMHB4O1xyXG4gICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgfVxyXG59XHJcbiIsInVsIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxucCB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5hOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4jZGV2aWNlLWFuZHJvaWQgLmZyYW1lLWNvbnRhaW5lciAuc3RhdHVzYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuaW9ubGFiLWRldmljZS1mcmFtZSAuZnJhbWUtY29udGFpbmVyIC5zdGF0dXNiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10b29sYmFyIC50b29sYmFyLWNvbG9yMSB7XG4gIGhlaWdodDogNTJweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXI6Zmlyc3QtY2hpbGQge1xuICAtLWJhY2tncm91bmQ6ICMwMTAyM2YgIWltcG9ydGFudDtcbn1cblxuaW9uLW1lbnUtYnV0dG9uIHtcbiAgLS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogNTVweDtcbn1cblxuLnJhb19sb2dvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDQ3cHg7XG4gIGhlaWdodDogMjJweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnJhb19sb2dvIC5sb2dvX2ltZyB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMnB4O1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xufVxuXG4ubWlkZGxlX3NlYyBzcGFuIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLm1lbnVfaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICByaWdodDogNDBweDtcbiAgdG9wOiAxNXB4O1xufVxuXG4ubWVudV9pY29uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmljb25fc2VjIHtcbiAgei1pbmRleDogLTE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE3cHg7XG4gIHRvcDogMTBweDtcbn1cblxuLnVzZXJfZGV0YWlsIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnNpbmdsZV91c2VyX3Byb2ZpbGUge1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi5zaW5nbGVfdXNlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTE7XG4gIHdpZHRoOiAxMDhweDtcbiAgaGVpZ2h0OiAxMDhweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ucHJvZmlsZV9pbWcge1xuICB3aWR0aDogMTA4cHg7XG4gIGhlaWdodDogMTA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLnByb2ZpbGVfaW1nIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxubGFiZWwucHJvZmlsZV9hbmRfY292ZXJfZWRpdCB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA0cHg7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwMjNmO1xuICB6LWluZGV4OiAxMTE7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDEwMjNmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cblxuLnVzZWVfbmFtZV90ZXh0IHAge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMDEwMjNmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG4uY2FyZCB7XG4gIGJveC1zaGFkb3c6IDRweCA0cHggMTBweCAycHggI2RjZGNkYztcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBwYWRkaW5nOiA5cHg7XG59XG4uY2FyZCAudXNlcl9oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzM5OThjNTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4uY2FyZCAuc2luZ2xlX3VzZXJfbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMwMTAyM2Y7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4ubGVhdmVfcmVwb3J0IHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5sZWF2ZV9yZXBvcnQgLmxlYXZlX3JlcG9ydF90ZXh0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5OThjNTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogN3B4IDE4cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5sZWF2ZV9kZXRhaWxzIHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMzk5OGM1O1xufVxuXG4ubm9fbGVhdmVzIHAge1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbmxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG4uY2hlY2tlcjpjaGVja2VkICsgLm1vZGFsIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm1vZGFsIHtcbiAgZGlzcGxheTogbm9uZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5tb2RhbC1ib2R5IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwMjNmO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwMjNmICFpbXBvcnRhbnQ7XG59XG5cbi5tb2RhbC1mb290ZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubW9kYWwtY29udGVudCBwIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnJlYXNvbl90ZXh0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5OThjNTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLm9rX2J0biB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ub2tfYnRuIGxhYmVsIHtcbiAgcGFkZGluZzogOHB4IDE4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjMzk5OGM1O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jbG9zZV9idG4gbGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzM5OThjNTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogMjZweDtcbiAgd2lkdGg6IDI2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTBweDtcbiAgcmlnaHQ6IC0xMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Admin/single-usre/single-usre.component.ts":
/*!************************************************************!*\
  !*** ./src/app/Admin/single-usre/single-usre.component.ts ***!
  \************************************************************/
/*! exports provided: SingleUsreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleUsreComponent", function() { return SingleUsreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_leave_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/leave.service */ "./src/app/services/leave.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config */ "./src/app/config.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







let SingleUsreComponent = class SingleUsreComponent {
    constructor(route, _userService, _leaveService, alertController) {
        this.route = route;
        this._userService = _userService;
        this._leaveService = _leaveService;
        this.alertController = alertController;
        this.userLeaves = [];
        this.path = _config__WEBPACK_IMPORTED_MODULE_5__["config"].baseMediaUrl;
        this.loading = false;
    }
    ngOnInit() {
        this.route.params.subscribe(param => {
            this.userId = param.userId;
            console.log("userId==========>", this.userId);
            this.getUserById(this.userId);
            this.getLeaveByUserId(this.userId);
        });
    }
    /**
     * Get user by Userid
     * @param {String} userId
     */
    getUserById(userId) {
        this.loading = true;
        console.log("userId===========>", userId);
        this._userService.getUserById(userId).subscribe((res) => {
            this.singleUser = res.data;
            // this.singleUser.dob = this.singleUser.dob.split("T")[0];
            console.log("res of single user=========>", res, this.singleUser);
            this.loading = false;
        }, err => {
            console.log(err);
            this.loading = false;
        });
    }
    /**
     * Get leave By userId
     * @param {String} userId
     */
    getLeaveByUserId(userId) {
        console.log('userid=======>', userId);
        this._leaveService.getLeaveByUserId(userId).subscribe((res) => {
            this.userLeaves = res.data;
            console.log("res of leave by userid====>", res);
        }, err => {
            console.log(err);
        });
    }
    /**
    * Display leave Reason
    */
    presentAlert(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(data);
            let date = data.date;
            let extrahours = data.extraHours;
            console.log(extrahours);
            let finalDate = date.date + '/' + date.month + '/' + date.year;
            console.log(finalDate);
            console.log(date);
            const alert = yield this.alertController.create({
                message: '<b>' + 'Reason :' + '</b>' + ' ' + data.reason + '<br>' + '<b>' + 'Date :' + '</b>' + ' ' + finalDate + '<br>' + (data.extraHours !== null && data.extraHours !== '' ? '<b>' + 'Compensation:' + '</b>' + data.extraHours : ''),
                buttons: ['OK'],
                cssClass: 'alertCustomCss'
            });
            yield alert.present();
        });
    }
    getNoOfDays(days) {
        // console.log("leave details", days);
        if (days.shortLeave) {
            if (days.shortLeave == 1) {
                return days.shortLeave + ' hour';
            }
            return days.shortLeave + ' hours';
        }
        else {
            if (days.noOfDays < 0) {
                return 'You have no leaves..';
            }
            else {
                const noOfDays = Math.floor(days.noOfDays / 8);
                // console.log("Days", noOfDays);
                const noOfhours = days.noOfDays % 8;
                // console.log("noOfhours", noOfhours);
                if (!noOfDays && noOfhours) {
                    if (noOfhours > 1) {
                        return noOfhours + ' hours';
                    }
                    else {
                        return noOfhours + ' hour';
                    }
                }
                else if (noOfDays && !noOfhours) {
                    if (noOfDays > 1) {
                        return noOfDays + ' Days';
                    }
                    else {
                        return noOfDays + ' Day';
                    }
                }
                else {
                    if (noOfDays > 1 && noOfhours > 1) {
                        return noOfDays + ' Days ' + noOfhours + ' hours';
                    }
                    else if (noOfDays == 1 && noOfhours == 1) {
                        return noOfDays + ' Day ' + noOfhours + ' hour';
                    }
                    else if (noOfDays > 1 && noOfhours == 1) {
                        return noOfDays + ' Days ' + noOfhours + ' hour';
                    }
                    else {
                        return noOfDays + ' Day ' + noOfhours + ' hours';
                    }
                }
            }
        }
    }
};
SingleUsreComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _services_leave_service__WEBPACK_IMPORTED_MODULE_4__["LeaveService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
SingleUsreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-single-usre',
        template: __webpack_require__(/*! raw-loader!./single-usre.component.html */ "./node_modules/raw-loader/index.js!./src/app/Admin/single-usre/single-usre.component.html"),
        styles: [__webpack_require__(/*! ./single-usre.component.scss */ "./src/app/Admin/single-usre/single-usre.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _services_leave_service__WEBPACK_IMPORTED_MODULE_4__["LeaveService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])
], SingleUsreComponent);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _profile_profile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../profile/profile.page */ "./src/app/profile/profile.page.ts");
/* harmony import */ var _leave_form_leave_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../leave-form/leave-form.component */ "./src/app/leave-form/leave-form.component.ts");
/* harmony import */ var _leave_history_leave_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../leave-history/leave-history.component */ "./src/app/leave-history/leave-history.component.ts");
/* harmony import */ var _Admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Admin/dashboard/dashboard.component */ "./src/app/Admin/dashboard/dashboard.component.ts");
/* harmony import */ var _Admin_all_user_all_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Admin/all-user/all-user.component */ "./src/app/Admin/all-user/all-user.component.ts");
/* harmony import */ var _Admin_single_usre_single_usre_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Admin/single-usre/single-usre.component */ "./src/app/Admin/single-usre/single-usre.component.ts");
/* harmony import */ var _Admin_reports_reports_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Admin/reports/reports.component */ "./src/app/Admin/reports/reports.component.ts");
/* harmony import */ var _Admin_leave_application_leave_application_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Admin/leave-application/leave-application.component */ "./src/app/Admin/leave-application/leave-application.component.ts");
/* harmony import */ var _Admin_notification_notification_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Admin/notification/notification.component */ "./src/app/Admin/notification/notification.component.ts");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");

















let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"],
                    children: [
                        {
                            path: '',
                            redirectTo: 'profile',
                            pathMatch: 'full'
                        },
                        {
                            path: 'profile',
                            component: _profile_profile_page__WEBPACK_IMPORTED_MODULE_7__["ProfilePage"]
                        },
                        {
                            path: 'leave-form',
                            component: _leave_form_leave_form_component__WEBPACK_IMPORTED_MODULE_8__["LeaveFormComponent"]
                        },
                        {
                            path: 'leave-history',
                            component: _leave_history_leave_history_component__WEBPACK_IMPORTED_MODULE_9__["LeaveHistoryComponent"]
                        },
                        {
                            path: 'dashboard',
                            component: _Admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"]
                        },
                        {
                            path: 'all-user',
                            component: _Admin_all_user_all_user_component__WEBPACK_IMPORTED_MODULE_11__["AllUserComponent"]
                        },
                        {
                            path: 'single-user/:userId',
                            component: _Admin_single_usre_single_usre_component__WEBPACK_IMPORTED_MODULE_12__["SingleUsreComponent"]
                        },
                        {
                            path: 'report',
                            component: _Admin_reports_reports_component__WEBPACK_IMPORTED_MODULE_13__["ReportsComponent"]
                        },
                        {
                            path: 'leave-application',
                            component: _Admin_leave_application_leave_application_component__WEBPACK_IMPORTED_MODULE_14__["LeaveApplicationComponent"]
                        },
                        {
                            path: 'notification',
                            component: _Admin_notification_notification_component__WEBPACK_IMPORTED_MODULE_15__["NotificationComponent"]
                        }
                    ]
                }
            ])
        ],
        declarations: [
            _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"],
            _profile_profile_page__WEBPACK_IMPORTED_MODULE_7__["ProfilePage"],
            _leave_form_leave_form_component__WEBPACK_IMPORTED_MODULE_8__["LeaveFormComponent"],
            _leave_history_leave_history_component__WEBPACK_IMPORTED_MODULE_9__["LeaveHistoryComponent"],
            _Admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
            _Admin_all_user_all_user_component__WEBPACK_IMPORTED_MODULE_11__["AllUserComponent"],
            _Admin_single_usre_single_usre_component__WEBPACK_IMPORTED_MODULE_12__["SingleUsreComponent"],
            _Admin_reports_reports_component__WEBPACK_IMPORTED_MODULE_13__["ReportsComponent"],
            _Admin_leave_application_leave_application_component__WEBPACK_IMPORTED_MODULE_14__["LeaveApplicationComponent"],
            _Admin_notification_notification_component__WEBPACK_IMPORTED_MODULE_15__["NotificationComponent"]
        ],
        providers: [
            _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_16__["LocalNotifications"]
        ]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\nul {\n  margin: 0px;\n  padding: 0px;\n}\nion-toolbar .toolbar-color1 {\n  height: 98px;\n}\n.logo_img {\n  width: 184px;\n  height: 83px;\n  margin: auto;\n  padding: 6px;\n}\n.logo_img img {\n  max-width: 100%;\n  max-height: 100%;\n  min-width: 100%;\n  min-height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.user_profile {\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  z-index: 1111;\n  bottom: -32px;\n  height: 72px;\n  width: 100%;\n  margin: auto;\n}\n.profile_img {\n  height: 72px;\n  width: 72px;\n  overflow: hidden;\n  margin: auto;\n  cursor: pointer;\n}\n.profile_img img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  max-width: 100%;\n  max-height: 100%;\n  min-width: 100%;\n  min-height: 100%;\n  border-radius: 50%;\n}\np {\n  color: #01023F;\n  text-transform: uppercase;\n  font-size: 20px;\n  font-weight: 700;\n  cursor: pointer;\n}\nion-header ion-toolbar:first-child {\n  --background: #01023F !important;\n}\n.menu_content {\n  margin-top: 50px;\n}\n.developer_menu {\n  margin-top: 62px;\n}\n.developer_page {\n  color: #fff;\n  background-color: #3998C5;\n  font-size: 12px;\n  text-transform: capitalize;\n  padding: 8px 25px;\n  cursor: pointer;\n  position: relative;\n}\n.developer_page:nth-child(odd) {\n  border-top-right-radius: 35px;\n  border-bottom-right-radius: 35px;\n  margin: 12px 35px 12px 0px;\n}\n.developer_page:nth-child(even) {\n  border-top-left-radius: 35px;\n  border-bottom-left-radius: 35px;\n  margin: 12px 0px 12px 35px;\n}\n.logout {\n  color: #fff;\n  background-color: #3998C5;\n  font-size: 12px;\n  text-transform: capitalize;\n  padding: 8px 25px;\n  cursor: pointer;\n  border-top-left-radius: 35px !important;\n  border-bottom-left-radius: 35px !important;\n  margin: 12px 0px 12px 35px !important;\n  position: relative;\n}\n.page_list:focus, .logout:focus {\n  box-shadow: none !important;\n  outline: none !important;\n}\n.developer_page::after, .logout::after, .notification::after, .logout::after {\n  content: \"❯\";\n  position: absolute;\n  right: 26px;\n  top: 10px;\n  z-index: 1;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsIi92YXIvd3d3L2h0bWwvbGVhdmVUcmFja2luZ0ZpbmFsL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNJaEI7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBREZGO0FDTUU7RUFDRSxZQUFBO0FESEo7QUNPQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QURKRjtBQ01FO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBREpKO0FDUUE7RUFDRSxrQkFBQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QURMSjtBQ09FO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FESko7QUNNSTtFQUNFLG9CQUFBO0tBQUEsaUJBQUE7RUFDRCxlQUFBO0VBQ0MsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBREpOO0FDUUU7RUFDRSxjQTFEWTtFQTJEWix5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QURMSjtBQ1NBO0VBQ0UsZ0NBQUE7QURORjtBQ1dBO0VBQ0UsZ0JBQUE7QURSRjtBQ1VBO0VBQ0UsZ0JBQUE7QURQRjtBQ1NBO0VBQ0csV0FBQTtFQUNELHlCQTlFYztFQStFZCxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBRE5GO0FDU0E7RUFDRSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsMEJBQUE7QURORjtBQ1NBO0VBQ0UsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0FETkY7QUNRQTtFQUNFLFdBQUE7RUFDQSx5QkFuR2M7RUFvR2QsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUNBQUE7RUFDQSwwQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7QURMRjtBQ09BO0VBQ0UsMkJBQUE7RUFDQSx3QkFBQTtBREpGO0FDTUE7RUFDRSxZQUFBO0VBQ0Msa0JBQUE7RUFDRCxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FESEYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xudWwge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5pb24tdG9vbGJhciAudG9vbGJhci1jb2xvcjEge1xuICBoZWlnaHQ6IDk4cHg7XG59XG5cbi5sb2dvX2ltZyB7XG4gIHdpZHRoOiAxODRweDtcbiAgaGVpZ2h0OiA4M3B4O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDZweDtcbn1cbi5sb2dvX2ltZyBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi51c2VyX3Byb2ZpbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgei1pbmRleDogMTExMTtcbiAgYm90dG9tOiAtMzJweDtcbiAgaGVpZ2h0OiA3MnB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ucHJvZmlsZV9pbWcge1xuICBoZWlnaHQ6IDcycHg7XG4gIHdpZHRoOiA3MnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IGF1dG87XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wcm9maWxlX2ltZyBpbWcge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxucCB7XG4gIGNvbG9yOiAjMDEwMjNGO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW9uLWhlYWRlciBpb24tdG9vbGJhcjpmaXJzdC1jaGlsZCB7XG4gIC0tYmFja2dyb3VuZDogIzAxMDIzRiAhaW1wb3J0YW50O1xufVxuXG4ubWVudV9jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLmRldmVsb3Blcl9tZW51IHtcbiAgbWFyZ2luLXRvcDogNjJweDtcbn1cblxuLmRldmVsb3Blcl9wYWdlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTk4QzU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHBhZGRpbmc6IDhweCAyNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmRldmVsb3Blcl9wYWdlOm50aC1jaGlsZChvZGQpIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDM1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzNXB4O1xuICBtYXJnaW46IDEycHggMzVweCAxMnB4IDBweDtcbn1cblxuLmRldmVsb3Blcl9wYWdlOm50aC1jaGlsZChldmVuKSB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDM1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDM1cHg7XG4gIG1hcmdpbjogMTJweCAwcHggMTJweCAzNXB4O1xufVxuXG4ubG9nb3V0IHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTk4QzU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHBhZGRpbmc6IDhweCAyNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDM1cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMzVweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDEycHggMHB4IDEycHggMzVweCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wYWdlX2xpc3Q6Zm9jdXMsIC5sb2dvdXQ6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmRldmVsb3Blcl9wYWdlOjphZnRlciwgLmxvZ291dDo6YWZ0ZXIsIC5ub3RpZmljYXRpb246OmFmdGVyLCAubG9nb3V0OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4p2vXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDI2cHg7XG4gIHRvcDogMTBweDtcbiAgei1pbmRleDogMTtcbiAgY29sb3I6ICNmZmY7XG59IiwiJGFwcF9iYXJfY29sb3I6ICMwMTAyM0Y7XHJcbiRmb250X3NpemUgICAgOiAxNXB4O1xyXG4kdGV4dF9jb2xvciAgIDogIzM5OThDNTtcclxuXHJcbnVsIHtcclxuICBtYXJnaW4gOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLnRvb2xiYXItY29sb3IxIHtcclxuICAgIGhlaWdodDogOThweDtcclxuICB9XHJcbn1cclxuXHJcbi5sb2dvX2ltZyB7XHJcbiAgd2lkdGggIDogMTg0cHg7XHJcbiAgaGVpZ2h0IDogODNweDtcclxuICBtYXJnaW4gOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDZweDtcclxuXHJcbiAgaW1nIHtcclxuICAgIG1heC13aWR0aCA6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWluLXdpZHRoIDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcbn1cclxuXHJcbi51c2VyX3Byb2ZpbGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICB6LWluZGV4OiAxMTExO1xyXG4gICAgYm90dG9tOiAtMzJweDtcclxuICAgIGhlaWdodDogNzJweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbiAgLnByb2ZpbGVfaW1nIHtcclxuICAgIGhlaWdodCAgICAgICA6IDcycHg7XHJcbiAgICB3aWR0aCAgICAgICAgOiA3MnB4O1xyXG4gICAgb3ZlcmZsb3cgICAgIDogaGlkZGVuO1xyXG4gICAgbWFyZ2luICAgICAgIDogYXV0bztcclxuICAgIGN1cnNvciAgICAgICA6IHBvaW50ZXI7XHJcbiAgICBcclxuICAgIGltZyB7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgIG1heC13aWR0aCA6IDEwMCU7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG1pbi13aWR0aCA6IDEwMCU7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgY29sb3IgICAgICAgICA6ICRhcHBfYmFyX2NvbG9yO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZSAgICAgOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQgICA6IDcwMDtcclxuICAgIGN1cnNvciAgICAgICAgOiBwb2ludGVyO1xyXG4gIFxyXG59XHJcblxyXG5pb24taGVhZGVyIGlvbi10b29sYmFyOmZpcnN0LWNoaWxkIHtcclxuICAtLWJhY2tncm91bmQ6ICMwMTAyM0YgIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8gY29udGVudCBzdGFydFxyXG5cclxuLm1lbnVfY29udGVudCB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG4uZGV2ZWxvcGVyX21lbnV7XHJcbiAgbWFyZ2luLXRvcDogNjJweDtcclxufVxyXG4uZGV2ZWxvcGVyX3BhZ2V7XHJcbiAgIGNvbG9yICAgICAgICAgICA6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRleHRfY29sb3I7XHJcbiAgZm9udC1zaXplICAgICAgIDogMTJweDtcclxuICB0ZXh0LXRyYW5zZm9ybSAgOiBjYXBpdGFsaXplO1xyXG4gIHBhZGRpbmc6IDhweCAyNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiB9XHJcblxyXG4uZGV2ZWxvcGVyX3BhZ2U6bnRoLWNoaWxkKG9kZCl7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMgICA6IDM1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDM1cHg7XHJcbiAgbWFyZ2luOiAxMnB4IDM1cHggMTJweCAwcHg7XHJcbn1cclxuXHJcbi5kZXZlbG9wZXJfcGFnZTpudGgtY2hpbGQoZXZlbikge1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXMgICA6IDM1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMzVweDtcclxuICBtYXJnaW46IDEycHggMHB4IDEycHggMzVweDtcclxufVxyXG4ubG9nb3V0e1xyXG4gIGNvbG9yICAgICAgICAgICA6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRleHRfY29sb3I7XHJcbiAgZm9udC1zaXplICAgICAgIDogMTJweDtcclxuICB0ZXh0LXRyYW5zZm9ybSAgOiBjYXBpdGFsaXplO1xyXG4gIHBhZGRpbmc6IDhweCAyNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzICAgOiAzNXB4IWltcG9ydGFudDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzNXB4IWltcG9ydGFudDtcclxuICBtYXJnaW46IDEycHggMHB4IDEycHggMzVweCFpbXBvcnRhbnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5wYWdlX2xpc3Q6Zm9jdXMsIC5sb2dvdXQ6Zm9jdXN7XHJcbiAgYm94LXNoYWRvdzogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgb3V0bGluZTogbm9uZSFpbXBvcnRhbnQ7XHJcbn1cclxuLmRldmVsb3Blcl9wYWdlOjphZnRlciwgLmxvZ291dDo6YWZ0ZXIsIC5ub3RpZmljYXRpb246OmFmdGVyLCAubG9nb3V0OjphZnRlcntcclxuICBjb250ZW50OiAnXFwyNzZGJztcclxuICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAyNnB4O1xyXG4gIHRvcDogMTBweDtcclxuICB6LWluZGV4OiAxO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gfSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/services/toast.service.ts");









let HomePage = class HomePage {
    constructor(router, _userService, menu, plt, fcm, _toastService, localNotifications, events2) {
        this.router = router;
        this._userService = _userService;
        this.menu = menu;
        this.plt = plt;
        this.fcm = fcm;
        this._toastService = _toastService;
        this.localNotifications = localNotifications;
        this.events2 = events2;
        this.currentUserRole = JSON.parse(localStorage.getItem('designation'));
        this.selectedPath = '';
        this.developerPages = [];
        this.adminpages = [];
        this.path = _config__WEBPACK_IMPORTED_MODULE_5__["config"].baseMediaUrl;
        this.events2.subscribe('profile', (data) => {
            this.UserDetail.profilePhoto = data;
        });
        this._userService.currentUser.subscribe(x => this.currentUser = x);
        console.log("this.curruntUserRole====>", this.currentUserRole);
        this.getUserDetail();
        this.developerPages = [
            {
                title: 'Leave Form',
                url: '/home/leave-form'
            },
            {
                title: 'History',
                url: '/home/leave-history'
            },
            {
                title: 'Profile',
                url: '/home/profile'
            },
        ];
        this.adminpages = [
            {
                title: 'Dashboard',
                url: '/home/dashboard'
            },
            {
                title: 'Report',
                url: '/home/report'
            },
            {
                title: 'Leave Application',
                url: '/home/leave-application'
            },
            {
                title: 'Notifications',
                url: '/home/notification'
            },
            {
                title: 'All Users',
                url: '/home/all-user'
            }
        ];
        this.router.events.subscribe((event) => {
            if (event && event.url) {
                this.selectedPath = event.url;
            }
        });
    }
    /**
     * Logout user
     */
    logOut() {
        console.log("log out");
        this._userService.logOut().subscribe((res) => {
            console.log("data of login yser ", res);
            this.router.navigate(['/login']);
        }, err => {
            console.log(err);
        });
    }
    closeMenu() {
        this.menu.close();
    }
    /**
     * git user detail
     */
    getUserDetail() {
        this._userService.getUserDetail().subscribe((res) => {
            this.UserDetail = res.data;
            console.log("===", this.UserDetail);
        }, err => {
            console.log(err);
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_6__["FCM"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"] },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_7__["LocalNotifications"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_6__["FCM"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"],
        _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_7__["LocalNotifications"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]])
], HomePage);



/***/ }),

/***/ "./src/app/leave-form/leave-form.component.scss":
/*!******************************************************!*\
  !*** ./src/app/leave-form/leave-form.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  margin: 0px;\n  padding: 0px;\n}\n\np {\n  margin: 0px;\n}\n\na:hover {\n  text-decoration: none;\n}\n\n#device-android .frame-container .statusbar {\n  background-color: #fff;\n}\n\nionlab-device-frame .frame-container .statusbar {\n  background-color: #fff !important;\n}\n\nion-toolbar .toolbar-color1 {\n  height: 52px;\n  width: 100%;\n}\n\nion-header ion-toolbar:first-child {\n  --background: #01023F !important;\n}\n\nion-menu-button {\n  --color: transparent;\n  --padding-start: 55px;\n}\n\n.rao_logo {\n  background-color: #fff;\n  width: 47px;\n  height: 22px;\n  border-radius: 30px;\n  margin-left: 10px;\n  text-align: center;\n  position: relative;\n}\n\n.rao_logo .logo_img {\n  max-height: 100%;\n  max-width: 100%;\n  height: 12px;\n  width: 20px;\n  margin: auto;\n  vertical-align: center;\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n\n.middle_sec span {\n  font-size: 15px;\n  color: #fff;\n  font-weight: 100;\n}\n\n.icon_sec {\n  z-index: -1;\n  position: absolute;\n  right: 17px;\n  top: 10px;\n}\n\n.all_content {\n  padding: 10px;\n}\n\n.select_date {\n  background-color: #3998C5;\n  border-radius: 4px;\n  width: 100%;\n  padding: 5px 18px;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.or_text {\n  color: #01023F;\n  font-size: 19px;\n  font-weight: bold;\n  padding: 5px 0px;\n}\n\nion-item {\n  height: 30px;\n  margin-bottom: 10px;\n  border-bottom: 1px solid #01023F !important;\n  background-color: #fff;\n}\n\nion-datetime, ion-input, ion-textarea {\n  color: #01023F;\n  font-size: 12px;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n\n.sc-ion-input-md-h {\n  --placeholder-opacity: 1!important;\n  margin-left: 15px !important;\n}\n\n.sc-ion-textarea-md-h {\n  margin-left: 15px !important;\n  --padding-top: 0px!important;\n  --placeholder-opacity: 1!important;\n}\n\n.add_leave_btn button {\n  background-color: #01023F;\n  border-radius: 30px;\n  font-size: 17px;\n  font-weight: 500;\n  padding: 8px 18px;\n  margin-top: 10px;\n  color: #fff;\n  cursor: pointer;\n  text-transform: uppercase;\n}\n\n.add_leave_btn button:focus {\n  box-shadow: none !important;\n  outline: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbGVhdmVUcmFja2luZ0ZpbmFsL3NyYy9hcHAvbGVhdmUtZm9ybS9sZWF2ZS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sZWF2ZS1mb3JtL2xlYXZlLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ05GOztBRFNBO0VBQ0UsV0FBQTtBQ05GOztBRFNBO0VBQ0UscUJBQUE7QUNORjs7QURXSTtFQUNFLHNCQUFBO0FDUk47O0FEZUk7RUFDRSxpQ0FBQTtBQ1pOOztBRGtCRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDZko7O0FEbUJBO0VBQ0UsZ0NBQUE7QUNoQkY7O0FEbUJBO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtBQ2hCRjs7QURvQkE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNqQkY7O0FEbUJFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNqQko7O0FEc0JBO0VBQ0UsZUE5RWM7RUErRWQsV0FBQTtFQUNBLGdCQUFBO0FDbkJGOztBRHNCQTtFQUNFLFdBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDbkJKOztBRHVCQTtFQUNFLGFBQUE7QUNwQkY7O0FEc0JBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ25CRjs7QURxQkE7RUFDRSxjQXhHYztFQXlHZCxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ2xCRjs7QURvQkE7RUFDRSxZQUFBO0VBQ0UsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLHNCQUFBO0FDakJKOztBRG9CQTtFQUNFLGNBckhjO0VBc0hkLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDakJGOztBRG1CQTtFQUNJLGtDQUFBO0VBQ0csNEJBQUE7QUNoQlA7O0FEbUJBO0VBQ0UsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0FDaEJGOztBRGtCQztFQUNHLHlCQXJJWTtFQXNJWixtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDZko7O0FEaUJBO0VBQ0UsMkJBQUE7RUFDQSx3QkFBQTtBQ2RGIiwiZmlsZSI6InNyYy9hcHAvbGVhdmUtZm9ybS9sZWF2ZS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGFwcF9iYXJfY29sb3I6ICMwMTAyM0Y7XHJcbiRmb250X3NpemUgICAgOiAxNXB4O1xyXG4kdGV4dF9jb2xvciAgIDogIzM5OThDNTtcclxuXHJcbi8vIGhlYWRlciBzdGFydCBoZXJlXHJcblxyXG4vLyBzdGF0dXMgYmFyIGNvbG9yXHJcbnVsIHtcclxuICBtYXJnaW4gOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG5wIHtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4jZGV2aWNlLWFuZHJvaWQge1xyXG4gIC5mcmFtZS1jb250YWluZXIge1xyXG4gICAgLnN0YXR1c2JhciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5pb25sYWItZGV2aWNlLWZyYW1lIHtcclxuICAuZnJhbWUtY29udGFpbmVyIHtcclxuICAgIC5zdGF0dXNiYXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLnRvb2xiYXItY29sb3IxIHtcclxuICAgIGhlaWdodDogNTJweDtcclxuICAgIHdpZHRoIDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXI6Zmlyc3QtY2hpbGQge1xyXG4gIC0tYmFja2dyb3VuZDogIzAxMDIzRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tbWVudS1idXR0b257XHJcbiAgLS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiA1NXB4O1xyXG4gIC8vIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbi5wbmcpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuLnJhb19sb2dvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHdpZHRoICAgICAgICAgICA6IDQ3cHg7XHJcbiAgaGVpZ2h0ICAgICAgICAgIDogMjJweDtcclxuICBib3JkZXItcmFkaXVzICAgOiAzMHB4O1xyXG4gIG1hcmdpbi1sZWZ0ICAgICA6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbiAgICAgIDogY2VudGVyO1xyXG4gIHBvc2l0aW9uICAgICAgICA6IHJlbGF0aXZlO1xyXG5cclxuICAubG9nb19pbWcge1xyXG4gICAgbWF4LWhlaWdodCAgICA6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGggICAgIDogMTAwJTtcclxuICAgIGhlaWdodCAgICAgICAgOiAxMnB4O1xyXG4gICAgd2lkdGggICAgICAgICA6IDIwcHg7XHJcbiAgICBtYXJnaW4gICAgICAgIDogYXV0bztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbiAgICAgIDogYWJzb2x1dGU7XHJcbiAgICB0b3AgICAgICAgICAgIDogMHB4O1xyXG4gICAgYm90dG9tICAgICAgICA6IDBweDtcclxuICAgIGxlZnQgICAgICAgICAgOiAwcHg7XHJcbiAgICByaWdodCAgICAgICAgIDogMHB4O1xyXG5cclxuICB9XHJcbn1cclxuXHJcbi5taWRkbGVfc2VjIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZSAgOiAkZm9udF9zaXplO1xyXG4gIGNvbG9yICAgICAgOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuXHJcbi5pY29uX3NlY3tcclxuICB6LWluZGV4OiAtMTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxN3B4O1xyXG4gICAgdG9wOiAxMHB4O1xyXG59XHJcblxyXG4vLyBjb250ZW50IHN0YXJ0ICBoZXJlXHJcbi5hbGxfY29udGVudHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5zZWxlY3RfZGF0ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5OThDNTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogNXB4IDE4cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5vcl90ZXh0e1xyXG4gIGNvbG9yOiAkYXBwX2Jhcl9jb2xvcjtcclxuICBmb250LXNpemU6IDE5cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogNXB4IDBweDtcclxufVxyXG5pb24taXRlbXtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRhcHBfYmFyX2NvbG9yIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmlvbi1kYXRldGltZSwgaW9uLWlucHV0LCBpb24tdGV4dGFyZWF7XHJcbiAgY29sb3I6ICRhcHBfYmFyX2NvbG9yO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodCAgICAgOiBib2xkO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLnNjLWlvbi1pbnB1dC1tZC1oIHtcclxuICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMSFpbXBvcnRhbnQ7IFxyXG4gICAgICAgbWFyZ2luLWxlZnQ6IDE1cHghaW1wb3J0YW50O1xyXG4gfVxyXG5cclxuLnNjLWlvbi10ZXh0YXJlYS1tZC1oIHtcclxuICBtYXJnaW4tbGVmdDogMTVweCFpbXBvcnRhbnQ7XHJcbiAgLS1wYWRkaW5nLXRvcDogMHB4IWltcG9ydGFudDtcclxuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDEhaW1wb3J0YW50OyBcclxuICB9XHJcbiAuYWRkX2xlYXZlX2J0biBidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjokYXBwX2Jhcl9jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgcGFkZGluZzogOHB4IDE4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5hZGRfbGVhdmVfYnRuIGJ1dHRvbjpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgb3V0bGluZTogbm9uZSFpbXBvcnRhbnQ7XHJcbn0iLCJ1bCB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbnAge1xuICBtYXJnaW46IDBweDtcbn1cblxuYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuI2RldmljZS1hbmRyb2lkIC5mcmFtZS1jb250YWluZXIgLnN0YXR1c2JhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbmlvbmxhYi1kZXZpY2UtZnJhbWUgLmZyYW1lLWNvbnRhaW5lciAuc3RhdHVzYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG5pb24tdG9vbGJhciAudG9vbGJhci1jb2xvcjEge1xuICBoZWlnaHQ6IDUycHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24taGVhZGVyIGlvbi10b29sYmFyOmZpcnN0LWNoaWxkIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDEwMjNGICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gIC0tY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDU1cHg7XG59XG5cbi5yYW9fbG9nbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiA0N3B4O1xuICBoZWlnaHQ6IDIycHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5yYW9fbG9nbyAubG9nb19pbWcge1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTJweDtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbn1cblxuLm1pZGRsZV9zZWMgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbi5pY29uX3NlYyB7XG4gIHotaW5kZXg6IC0xO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxN3B4O1xuICB0b3A6IDEwcHg7XG59XG5cbi5hbGxfY29udGVudCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5zZWxlY3RfZGF0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTk4QzU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweCAxOHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ub3JfdGV4dCB7XG4gIGNvbG9yOiAjMDEwMjNGO1xuICBmb250LXNpemU6IDE5cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiA1cHggMHB4O1xufVxuXG5pb24taXRlbSB7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMTAyM0YgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuaW9uLWRhdGV0aW1lLCBpb24taW5wdXQsIGlvbi10ZXh0YXJlYSB7XG4gIGNvbG9yOiAjMDEwMjNGO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uc2MtaW9uLWlucHV0LW1kLWgge1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDEhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMTVweCAhaW1wb3J0YW50O1xufVxuXG4uc2MtaW9uLXRleHRhcmVhLW1kLWgge1xuICBtYXJnaW4tbGVmdDogMTVweCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctdG9wOiAwcHghaW1wb3J0YW50O1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDEhaW1wb3J0YW50O1xufVxuXG4uYWRkX2xlYXZlX2J0biBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwMjNGO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDhweCAxOHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uYWRkX2xlYXZlX2J0biBidXR0b246Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/leave-form/leave-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/leave-form/leave-form.component.ts ***!
  \****************************************************/
/*! exports provided: LeaveFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveFormComponent", function() { return LeaveFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_leave_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/leave.service */ "./src/app/services/leave.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");






// let format = require("date-fns/format");
let LeaveFormComponent = class LeaveFormComponent {
    // dates: new Date();
    constructor(_leaveService, elementRef, _toastService, localNotifications) {
        this._leaveService = _leaveService;
        this.elementRef = elementRef;
        this._toastService = _toastService;
        this.localNotifications = localNotifications;
        this.isDisable = false;
        this.curruntDate = new Date().toISOString();
        this.leaveForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            noOfDays: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            reason: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            extraHours: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            shortLeave: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    ngOnInit() {
        console.log("date", this.curruntDate);
        var inp1 = document.getElementById("input1");
        var inp2 = document.getElementById("input2");
        inp1.onkeyup = function () { inputValidation(this, inp2); };
        inp2.onkeyup = function () { inputValidation(this, inp1); };
        function inputValidation(origin, lock) {
            var response = hasValue(origin.value);
            lock.disabled = response;
        }
        function hasValue(value) {
            return value != "" && value.length > 0;
        }
    }
    applyLeave(data) {
        this.isDisable = false;
        console.log("leave application details", this.leaveForm.value);
        console.log('data===========>', data);
        console.log('data============>', data);
        if (this.leaveForm.invalid) {
            return;
        }
        this._leaveService.applyLeave(data).subscribe((res) => {
            console.log("res of leave==========>", res);
            this._toastService.presentToast(res.message);
            this.leaveForm.reset();
            this.isDisable = false;
        }, err => {
            console.log("==========>", err);
            this.isDisable = false;
        });
    }
    updateList(e) {
        console.log(e);
        if (e > 3) {
            // console.log("first ==========", e)
            alert("please enter value less than three");
            const element = this.elementRef.nativeElement.querySelector('#input2');
            console.log("element -----------", element);
            element.value = 3;
        }
        else if (e < 3 && e > 1) {
            const element = this.elementRef.nativeElement.querySelector('#input2');
            element.value = e;
        }
        else if (e == "") {
            const element = this.elementRef.nativeElement.querySelector('#input2');
            element.value = '';
        }
        else if (e < 1) {
            alert("value must be positive ");
            const element = this.elementRef.nativeElement.querySelector('#input2');
            element.value = 1;
        }
    }
};
LeaveFormComponent.ctorParameters = () => [
    { type: _services_leave_service__WEBPACK_IMPORTED_MODULE_3__["LeaveService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__["LocalNotifications"] }
];
LeaveFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-leave-form',
        template: __webpack_require__(/*! raw-loader!./leave-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/leave-form/leave-form.component.html"),
        styles: [__webpack_require__(/*! ./leave-form.component.scss */ "./src/app/leave-form/leave-form.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_leave_service__WEBPACK_IMPORTED_MODULE_3__["LeaveService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__["LocalNotifications"]])
], LeaveFormComponent);



/***/ }),

/***/ "./src/app/leave-history/leave-history.component.scss":
/*!************************************************************!*\
  !*** ./src/app/leave-history/leave-history.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\nul {\n  margin: 0px;\n  padding: 0px;\n}\np {\n  margin: 0px;\n}\na:hover {\n  text-decoration: none;\n}\n#device-android .frame-container .statusbar {\n  background-color: #fff;\n}\nionlab-device-frame .frame-container .statusbar {\n  background-color: #fff !important;\n}\nion-toolbar .toolbar-color1 {\n  height: 52px;\n  width: 100%;\n}\nion-header ion-toolbar:first-child {\n  --background: #01023F !important;\n}\nion-menu-button {\n  --color: transparent;\n  --padding-start: 55px;\n}\n.rao_logo {\n  background-color: #fff;\n  width: 47px;\n  height: 22px;\n  border-radius: 30px;\n  margin-left: 10px;\n  text-align: center;\n  position: relative;\n}\n.rao_logo .logo_img {\n  max-height: 100%;\n  max-width: 100%;\n  height: 12px;\n  width: 20px;\n  margin: auto;\n  vertical-align: center;\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n.middle_sec span {\n  font-size: 15px;\n  color: #fff;\n  font-weight: 100;\n}\n.icon_sec {\n  z-index: -1;\n  position: absolute;\n  right: 17px;\n  top: 10px;\n}\n.leave_history {\n  padding: 10px;\n}\n.leave_history .apply_leave_text {\n  background-color: #3998C5;\n  border-radius: 4px;\n  width: 100%;\n  padding: 7px 18px;\n  font-size: 18px;\n  font-weight: bold;\n}\n.select_time {\n  margin: 15px 0px;\n}\n.select_time ion-item {\n  box-shadow: 1px 1px 4px 1px #dcdcdc;\n  border: 1px solid #D9D9D9;\n  border-radius: 30px;\n  height: 38px;\n}\n.select_time ion-item ion-label {\n  color: #D9D9D9;\n  font-size: 14px;\n  margin-top: -3px;\n}\n.leave_details .card {\n  box-shadow: 4px 4px 10px 2px #dcdcdc;\n  margin-bottom: 4px;\n  padding: 10px;\n}\n.leave_details .card span {\n  font-size: 12px;\n  color: #3998C5;\n}\n.no_leaves span {\n  font-size: 15px;\n  color: #000;\n}\nion-datetime {\n  color: #D9D9D9;\n  font-size: 14px;\n  margin-top: -10px;\n  position: relative;\n  padding: 0px;\n  width: 140px;\n}\nion-datetime::after {\n  content: \"❯\";\n  position: absolute;\n  top: 0px;\n  right: 4px;\n  z-index: 1;\n  color: #D9D9D9;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n.item-native {\n  padding: 0px !important;\n}\n.datetime-text {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVhdmUtaGlzdG9yeS9sZWF2ZS1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwiL3Zhci93d3cvaHRtbC9sZWF2ZVRyYWNraW5nRmluYWwvc3JjL2FwcC9sZWF2ZS1oaXN0b3J5L2xlYXZlLWhpc3RvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDT2hCO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QURMRjtBQ1FBO0VBQ0UsV0FBQTtBRExGO0FDUUE7RUFDRSxxQkFBQTtBRExGO0FDVUk7RUFDRSxzQkFBQTtBRFBOO0FDY0k7RUFDRSxpQ0FBQTtBRFhOO0FDaUJFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QURkSjtBQ2tCQTtFQUNFLGdDQUFBO0FEZkY7QUNpQkE7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0FEZEY7QUNpQkE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QURkRjtBQ2dCRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FEZEo7QUNtQkE7RUFDRSxlQTVFYztFQTZFZCxXQUFBO0VBQ0EsZ0JBQUE7QURoQkY7QUNtQkE7RUFDRSxXQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBRGhCSjtBQ21CQTtFQUNJLGFBQUE7QURoQko7QUNpQkk7RUFDSSx5QkExRlE7RUEyRlIsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QURmUjtBQ21CQTtFQUNJLGdCQUFBO0FEaEJKO0FDa0JJO0VBQ0ksbUNBQUE7RUFDTyx5QkFBQTtFQUNQLG1CQUFBO0VBQ0EsWUFBQTtBRGhCUjtBQ2tCUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURoQlo7QUNzQkk7RUFDSSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBRG5CUjtBQ3FCUTtFQUNJLGVBQUE7RUFDQSxjQTVISTtBRHlHaEI7QUN3Qkk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBRHJCUjtBQ3dCQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FEckJGO0FDd0JBO0VBQ0UsWUFBQTtFQUNDLGtCQUFBO0VBQ0QsUUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7QURyQkY7QUN1QkM7RUFDRCx1QkFBQTtBRHBCQTtBQ3NCQztFQUNFLGVBQUE7QURuQkgiLCJmaWxlIjoic3JjL2FwcC9sZWF2ZS1oaXN0b3J5L2xlYXZlLWhpc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG51bCB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbnAge1xuICBtYXJnaW46IDBweDtcbn1cblxuYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuI2RldmljZS1hbmRyb2lkIC5mcmFtZS1jb250YWluZXIgLnN0YXR1c2JhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbmlvbmxhYi1kZXZpY2UtZnJhbWUgLmZyYW1lLWNvbnRhaW5lciAuc3RhdHVzYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG5pb24tdG9vbGJhciAudG9vbGJhci1jb2xvcjEge1xuICBoZWlnaHQ6IDUycHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24taGVhZGVyIGlvbi10b29sYmFyOmZpcnN0LWNoaWxkIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDEwMjNGICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gIC0tY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDU1cHg7XG59XG5cbi5yYW9fbG9nbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiA0N3B4O1xuICBoZWlnaHQ6IDIycHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5yYW9fbG9nbyAubG9nb19pbWcge1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTJweDtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbn1cblxuLm1pZGRsZV9zZWMgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbi5pY29uX3NlYyB7XG4gIHotaW5kZXg6IC0xO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxN3B4O1xuICB0b3A6IDEwcHg7XG59XG5cbi5sZWF2ZV9oaXN0b3J5IHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5sZWF2ZV9oaXN0b3J5IC5hcHBseV9sZWF2ZV90ZXh0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5OThDNTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogN3B4IDE4cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zZWxlY3RfdGltZSB7XG4gIG1hcmdpbjogMTVweCAwcHg7XG59XG4uc2VsZWN0X3RpbWUgaW9uLWl0ZW0ge1xuICBib3gtc2hhZG93OiAxcHggMXB4IDRweCAxcHggI2RjZGNkYztcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q5RDlEOTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgaGVpZ2h0OiAzOHB4O1xufVxuLnNlbGVjdF90aW1lIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiAjRDlEOUQ5O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IC0zcHg7XG59XG5cbi5sZWF2ZV9kZXRhaWxzIC5jYXJkIHtcbiAgYm94LXNoYWRvdzogNHB4IDRweCAxMHB4IDJweCAjZGNkY2RjO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ubGVhdmVfZGV0YWlscyAuY2FyZCBzcGFuIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzM5OThDNTtcbn1cblxuLm5vX2xlYXZlcyBzcGFuIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzAwMDtcbn1cblxuaW9uLWRhdGV0aW1lIHtcbiAgY29sb3I6ICNEOUQ5RDk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMHB4O1xuICB3aWR0aDogMTQwcHg7XG59XG5cbmlvbi1kYXRldGltZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIuKdr1wiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICByaWdodDogNHB4O1xuICB6LWluZGV4OiAxO1xuICBjb2xvcjogI0Q5RDlEOTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuXG4uaXRlbS1uYXRpdmUge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmRhdGV0aW1lLXRleHQge1xuICBmb250LXNpemU6IDEycHg7XG59IiwiJGFwcF9iYXJfY29sb3I6ICMwMTAyM0Y7XHJcbiRmb250X3NpemUgICAgOiAxNXB4O1xyXG4kdGV4dF9jb2xvciAgIDogIzM5OThDNTtcclxuXHJcbi8vIGhlYWRlciBzdGFydCBoZXJlXHJcblxyXG4vLyBzdGF0dXMgYmFyIGNvbG9yXHJcbnVsIHtcclxuICBtYXJnaW4gOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG5wIHtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4jZGV2aWNlLWFuZHJvaWQge1xyXG4gIC5mcmFtZS1jb250YWluZXIge1xyXG4gICAgLnN0YXR1c2JhciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5pb25sYWItZGV2aWNlLWZyYW1lIHtcclxuICAuZnJhbWUtY29udGFpbmVyIHtcclxuICAgIC5zdGF0dXNiYXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLnRvb2xiYXItY29sb3IxIHtcclxuICAgIGhlaWdodDogNTJweDtcclxuICAgIHdpZHRoIDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXI6Zmlyc3QtY2hpbGQge1xyXG4gIC0tYmFja2dyb3VuZDogIzAxMDIzRiAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1tZW51LWJ1dHRvbntcclxuICAtLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDU1cHg7XHJcbiAgLy8gLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29uLnBuZykgIWltcG9ydGFudDtcclxuICB9XHJcbi5yYW9fbG9nbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB3aWR0aCAgICAgICAgICAgOiA0N3B4O1xyXG4gIGhlaWdodCAgICAgICAgICA6IDIycHg7XHJcbiAgYm9yZGVyLXJhZGl1cyAgIDogMzBweDtcclxuICBtYXJnaW4tbGVmdCAgICAgOiAxMHB4O1xyXG4gIHRleHQtYWxpZ24gICAgICA6IGNlbnRlcjtcclxuICBwb3NpdGlvbiAgICAgICAgOiByZWxhdGl2ZTtcclxuXHJcbiAgLmxvZ29faW1nIHtcclxuICAgIG1heC1oZWlnaHQgICAgOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoICAgICA6IDEwMCU7XHJcbiAgICBoZWlnaHQgICAgICAgIDogMTJweDtcclxuICAgIHdpZHRoICAgICAgICAgOiAyMHB4O1xyXG4gICAgbWFyZ2luICAgICAgICA6IGF1dG87XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb24gICAgICA6IGFic29sdXRlO1xyXG4gICAgdG9wICAgICAgICAgICA6IDBweDtcclxuICAgIGJvdHRvbSAgICAgICAgOiAwcHg7XHJcbiAgICBsZWZ0ICAgICAgICAgIDogMHB4O1xyXG4gICAgcmlnaHQgICAgICAgICA6IDBweDtcclxuXHJcbiAgfVxyXG59XHJcblxyXG4ubWlkZGxlX3NlYyBzcGFuIHtcclxuICBmb250LXNpemUgIDogJGZvbnRfc2l6ZTtcclxuICBjb2xvciAgICAgIDogI2ZmZjtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG59XHJcblxyXG4uaWNvbl9zZWN7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTdweDtcclxuICAgIHRvcDogMTBweDtcclxufVxyXG4vLyBjb250ZW50IHN0YXJ0ICBoZXJlXHJcbi5sZWF2ZV9oaXN0b3J5e1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIC5hcHBseV9sZWF2ZV90ZXh0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGV4dF9jb2xvcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzICAgOiA0cHg7XHJcbiAgICAgICAgd2lkdGggICAgICAgICAgIDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nICAgICAgICAgOiA3cHggMThweDtcclxuICAgICAgICBmb250LXNpemUgICAgICAgOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0ICAgICA6IGJvbGQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZWxlY3RfdGltZSB7XHJcbiAgICBtYXJnaW46IDE1cHggMHB4O1xyXG5cclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICBib3gtc2hhZG93ICAgOiAxcHggMXB4IDRweCAxcHggI2RjZGNkYztcclxuICAgICAgICAgICAgICAgYm9yZGVyICAgICAgIDogMXB4IHNvbGlkICNEOUQ5RDk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICBoZWlnaHQgICAgICAgOiAzOHB4O1xyXG5cclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBjb2xvciAgICAgOiAjRDlEOUQ5O1xyXG4gICAgICAgICAgICBmb250LXNpemUgOiAxNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtM3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmxlYXZlX2RldGFpbHMge1xyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIGJveC1zaGFkb3cgICA6IDRweCA0cHggMTBweCAycHggI2RjZGNkYztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgICAgcGFkZGluZyAgICAgIDogMTBweDtcclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgY29sb3IgICAgOiAkdGV4dF9jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLm5vX2xlYXZlc3tcclxuICAgIHNwYW57XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgfVxyXG59XHJcbmlvbi1kYXRldGltZSB7XHJcbiAgY29sb3IgICAgIDogI0Q5RDlEOTtcclxuICBmb250LXNpemUgOiAxNHB4O1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgd2lkdGg6IDE0MHB4O1xyXG59XHJcblxyXG5pb24tZGF0ZXRpbWU6OmFmdGVye1xyXG4gIGNvbnRlbnQ6ICdcXDI3NkYnO1xyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwcHg7XHJcbiAgcmlnaHQ6IDRweDtcclxuICB6LWluZGV4OiAxO1xyXG4gIGNvbG9yOiAjRDlEOUQ5O1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuIH1cclxuIC5pdGVtLW5hdGl2ZXtcclxucGFkZGluZzogMHB4IWltcG9ydGFudDtcclxuIH1cclxuIC5kYXRldGltZS10ZXh0e1xyXG4gICBmb250LXNpemU6IDEycHg7XHJcbiB9XHJcbiAiXX0= */"

/***/ }),

/***/ "./src/app/leave-history/leave-history.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/leave-history/leave-history.component.ts ***!
  \**********************************************************/
/*! exports provided: LeaveHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveHistoryComponent", function() { return LeaveHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_leave_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/leave.service */ "./src/app/services/leave.service.ts");




let LeaveHistoryComponent = class LeaveHistoryComponent {
    constructor(_leaveService) {
        this._leaveService = _leaveService;
        this.isMonthLeave = 0;
        this.isYearLeave = 0;
        this.monthlyLeaveOfUser = [];
        this.yearlyLeaveOfUser = [];
        this.loading = false;
        this.monthLeaveForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            month: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
        this.yearLeaveForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            year: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    }
    ngOnInit() {
    }
    /**
     * Get monthly leave history of user
     * @param {object} data
     */
    getMounthlyLeaveByUser(data) {
        $(".no-leave-of-year").css({ 'display': 'none' });
        this.loading = true;
        console.log("data==========>", data);
        this.yearlyLeaveOfUser = [];
        this._leaveService.getMounthlyLeaveByUser(data).subscribe((res) => {
            console.log("data===========>", res);
            this.loading = false;
            this.monthlyLeaveOfUser = res.data;
            if (res.data.length > 0) {
                this.isMonthLeave = 2;
            }
            else {
                this.isMonthLeave = 1;
                $('.no-leaves-of-month').css({ 'display': 'block' });
            }
        }, err => {
            console.log(err);
            this.loading = false;
        });
    }
    /**
     *  Get yearly leave history of user
     * @param {Object} data
     */
    getYearlyLeaveByUser(data) {
        $('.no-leaves-of-month').css({ 'display': 'none' });
        this.monthlyLeaveOfUser = [];
        this.loading = true;
        console.log("data==========>", data);
        this._leaveService.getYearlyLeaveByUser(data).subscribe((res) => {
            console.log("data===========>", res);
            this.loading = false;
            this.yearlyLeaveOfUser = res.data;
            if (res.data.length > 0) {
                this.isYearLeave = 2;
            }
            else {
                this.isYearLeave = 1;
                $('.no-leave-of-year').css({ 'display': 'block' });
            }
        }, err => {
            console.log(err);
            this.loading = false;
        });
    }
    getNoOfDays(days) {
        // console.log("leave details", days);
        if (days.shortLeave) {
            if (days.shortLeave == 1) {
                return days.shortLeave + ' hour';
            }
            return days.shortLeave + ' hours';
        }
        else {
            if (days.noOfDays < 0) {
                return 'You have no leaves..';
            }
            else {
                const noOfDays = Math.floor(days.noOfDays / 8);
                // console.log("Days", noOfDays);
                const noOfhours = days.noOfDays % 8;
                // console.log("noOfhours", noOfhours);
                if (!noOfDays && noOfhours) {
                    if (noOfhours > 1) {
                        return noOfhours + ' hours';
                    }
                    else {
                        return noOfhours + ' hour';
                    }
                }
                else if (noOfDays && !noOfhours) {
                    if (noOfDays > 1) {
                        return noOfDays + ' Days';
                    }
                    else {
                        return noOfDays + ' Day';
                    }
                }
                else {
                    if (noOfDays > 1 && noOfhours > 1) {
                        return noOfDays + ' Days ' + noOfhours + ' hours';
                    }
                    else if (noOfDays == 1 && noOfhours == 1) {
                        return noOfDays + ' Day ' + noOfhours + ' hour';
                    }
                    else if (noOfDays > 1 && noOfhours == 1) {
                        return noOfDays + ' Days ' + noOfhours + ' hour';
                    }
                    else {
                        return noOfDays + ' Day ' + noOfhours + ' hours';
                    }
                }
            }
        }
    }
};
LeaveHistoryComponent.ctorParameters = () => [
    { type: _services_leave_service__WEBPACK_IMPORTED_MODULE_3__["LeaveService"] }
];
LeaveHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-leave-history',
        template: __webpack_require__(/*! raw-loader!./leave-history.component.html */ "./node_modules/raw-loader/index.js!./src/app/leave-history/leave-history.component.html"),
        styles: [__webpack_require__(/*! ./leave-history.component.scss */ "./src/app/leave-history/leave-history.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_leave_service__WEBPACK_IMPORTED_MODULE_3__["LeaveService"]])
], LeaveHistoryComponent);



/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  margin: 0px;\n  padding: 0px;\n}\n\np {\n  margin: 0px;\n}\n\na:hover {\n  text-decoration: none;\n}\n\n#device-android .frame-container .statusbar {\n  background-color: #fff;\n}\n\nionlab-device-frame .frame-container .statusbar {\n  background-color: #fff !important;\n}\n\nion-toolbar .toolbar-color1 {\n  height: 52px;\n  width: 100%;\n}\n\nion-header ion-toolbar:first-child {\n  --background: #01023F !important;\n}\n\nion-menu-button {\n  --color: transparent;\n  --padding-start: 55px;\n}\n\n.rao_logo {\n  background-color: #fff;\n  width: 47px;\n  height: 22px;\n  border-radius: 30px;\n  margin-left: 10px;\n  text-align: center;\n  position: relative;\n}\n\n.rao_logo .logo_img {\n  max-height: 100%;\n  max-width: 100%;\n  height: 12px;\n  width: 20px;\n  margin: auto;\n  vertical-align: center;\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n\n.middle_sec span {\n  font-size: 15px;\n  color: #fff;\n  font-weight: 100;\n}\n\n.menu_icon {\n  position: absolute;\n  cursor: pointer;\n  right: 40px;\n  top: 15px;\n}\n\n.menu_icon:focus {\n  outline: none;\n}\n\n.icon_sec {\n  z-index: -1;\n  position: absolute;\n  right: 17px;\n  top: 10px;\n}\n\n.user_detail {\n  padding: 10px;\n}\n\n.single_user_profile {\n  margin-top: 2px;\n  z-index: 12;\n}\n\n.user_img {\n  position: relative;\n  z-index: 11;\n  width: 108px;\n  height: 108px;\n  margin: auto;\n}\n\n.profile_img {\n  width: 108px;\n  height: 108px;\n  border-radius: 50%;\n  margin: auto;\n}\n\n.profile_img img {\n  max-width: 100%;\n  min-width: 100%;\n  border-radius: 50%;\n  max-height: 100%;\n  min-height: 100%;\n}\n\nlabel.profile_and_cover_edit {\n  height: 24px;\n  width: 24px;\n  border-radius: 50%;\n  cursor: pointer;\n  font-size: 10px;\n  position: absolute;\n  bottom: 4px;\n  right: 0;\n  background-color: #01023F;\n  z-index: 111;\n  line-height: 23px;\n  color: #fff;\n  display: inline-block;\n  border: 1px solid #01023F;\n  font-weight: normal;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n}\n\n.usee_name_text p {\n  text-transform: uppercase;\n  font-size: 20px;\n  color: #01023F;\n  font-weight: bold;\n  margin-top: 6px;\n}\n\n.card {\n  box-shadow: 4px 4px 10px 2px #dcdcdc;\n  margin-top: 3px;\n  padding: 9px;\n}\n\n.card .user_heading {\n  font-size: 12px;\n  color: #3998C5;\n  font-weight: 400;\n  text-transform: capitalize;\n}\n\n.card .single_user_name {\n  font-size: 12px;\n  color: #01023F;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbGVhdmVUcmFja2luZ0ZpbmFsL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDTkY7O0FEU0E7RUFDRSxXQUFBO0FDTkY7O0FEU0E7RUFDRSxxQkFBQTtBQ05GOztBRFdJO0VBQ0Usc0JBQUE7QUNSTjs7QURlSTtFQUNFLGlDQUFBO0FDWk47O0FEa0JFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNmSjs7QURtQkE7RUFDRSxnQ0FBQTtBQ2hCRjs7QURvQkE7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0FDakJGOztBRHFCQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ2xCRjs7QURvQkU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ2xCSjs7QUR1QkE7RUFDRSxlQS9FYztFQWdGZCxXQUFBO0VBQ0EsZ0JBQUE7QUNwQkY7O0FEdUJBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNwQkY7O0FEdUJBO0VBQ0UsYUFBQTtBQ3BCRjs7QURzQkE7RUFDRSxXQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ25CSjs7QUR3QkE7RUFDRSxhQUFBO0FDckJGOztBRHdCQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDckJGOztBRHdCQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ3JCRjs7QUR3QkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0MsWUFBQTtBQ3JCSDs7QUR1QkU7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ3JCSjs7QUQwQkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EseUJBbEpjO0VBbUpkLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0MsbUJBQUE7RUFDRCw0QkFBQTtFQUFBLG9CQUFBO0FDdkJGOztBRDJCRTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBaEtZO0VBaUtaLGlCQUFBO0VBQ0EsZUFBQTtBQ3hCSjs7QUQ0QkE7RUFDRSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDekJGOztBRDJCRTtFQUNFLGVBQUE7RUFDQSxjQTNLWTtFQTRLWixnQkFBQTtFQUNBLDBCQUFBO0FDekJKOztBRDRCRTtFQUNFLGVBQUE7RUFDQSxjQXBMWTtFQXFMWiwwQkFBQTtBQzFCSiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYXBwX2Jhcl9jb2xvcjogIzAxMDIzRjtcclxuJGZvbnRfc2l6ZSAgICA6IDE1cHg7XHJcbiR0ZXh0X2NvbG9yICAgOiAjMzk5OEM1O1xyXG5cclxuLy8gaGVhZGVyIHN0YXJ0IGhlcmVcclxuXHJcbi8vIHN0YXR1cyBiYXIgY29sb3JcclxudWwge1xyXG4gIG1hcmdpbiA6IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbiNkZXZpY2UtYW5kcm9pZCB7XHJcbiAgLmZyYW1lLWNvbnRhaW5lciB7XHJcbiAgICAuc3RhdHVzYmFyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmlvbmxhYi1kZXZpY2UtZnJhbWUge1xyXG4gIC5mcmFtZS1jb250YWluZXIge1xyXG4gICAgLnN0YXR1c2JhciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAudG9vbGJhci1jb2xvcjEge1xyXG4gICAgaGVpZ2h0OiA1MnB4O1xyXG4gICAgd2lkdGggOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWhlYWRlciBpb24tdG9vbGJhcjpmaXJzdC1jaGlsZCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMDEwMjNGICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5pb24tbWVudS1idXR0b257XHJcbiAgLS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiA1NXB4O1xyXG4gIC8vIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbi5wbmcpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuLnJhb19sb2dvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHdpZHRoICAgICAgICAgICA6IDQ3cHg7XHJcbiAgaGVpZ2h0ICAgICAgICAgIDogMjJweDtcclxuICBib3JkZXItcmFkaXVzICAgOiAzMHB4O1xyXG4gIG1hcmdpbi1sZWZ0ICAgICA6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbiAgICAgIDogY2VudGVyO1xyXG4gIHBvc2l0aW9uICAgICAgICA6IHJlbGF0aXZlO1xyXG5cclxuICAubG9nb19pbWcge1xyXG4gICAgbWF4LWhlaWdodCAgICA6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGggICAgIDogMTAwJTtcclxuICAgIGhlaWdodCAgICAgICAgOiAxMnB4O1xyXG4gICAgd2lkdGggICAgICAgICA6IDIwcHg7XHJcbiAgICBtYXJnaW4gICAgICAgIDogYXV0bztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbiAgICAgIDogYWJzb2x1dGU7XHJcbiAgICB0b3AgICAgICAgICAgIDogMHB4O1xyXG4gICAgYm90dG9tICAgICAgICA6IDBweDtcclxuICAgIGxlZnQgICAgICAgICAgOiAwcHg7XHJcbiAgICByaWdodCAgICAgICAgIDogMHB4O1xyXG5cclxuICB9XHJcbn1cclxuXHJcbi5taWRkbGVfc2VjIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZSAgOiAkZm9udF9zaXplO1xyXG4gIGNvbG9yICAgICAgOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuXHJcbi5tZW51X2ljb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjdXJzb3IgIDogcG9pbnRlcjtcclxuICByaWdodCAgIDogNDBweDtcclxuICB0b3AgICAgIDogMTVweDtcclxufVxyXG5cclxuLm1lbnVfaWNvbjpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uaWNvbl9zZWN7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTdweDtcclxuICAgIHRvcDogMTBweDtcclxufVxyXG5cclxuLy8gY29udGVudCBzdGFydCAgaGVyZVxyXG5cclxuLnVzZXJfZGV0YWlsIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uc2luZ2xlX3VzZXJfcHJvZmlsZSB7XHJcbiAgbWFyZ2luLXRvcDogMnB4O1xyXG4gIHotaW5kZXg6IDEyO1xyXG4gXHJcbn1cclxuLnVzZXJfaW1ne1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxMTtcclxuICB3aWR0aCAgICAgICAgOiAxMDhweDtcclxuICBoZWlnaHQgICAgICAgOiAxMDhweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5wcm9maWxlX2ltZyB7XHJcbiAgd2lkdGggICAgICAgIDogMTA4cHg7XHJcbiAgaGVpZ2h0ICAgICAgIDogMTA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICBtYXJnaW4gICAgICAgOiBhdXRvO1xyXG4gIFxyXG4gIGltZyB7XHJcbiAgICBtYXgtd2lkdGggOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoIDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgIH1cclxufVxyXG5cclxuXHJcbmxhYmVsLnByb2ZpbGVfYW5kX2NvdmVyX2VkaXQge1xyXG4gIGhlaWdodDogMjRweDtcclxuICB3aWR0aDogMjRweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiA0cHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvciA6ICRhcHBfYmFyX2NvbG9yO1xyXG4gIHotaW5kZXg6IDExMTtcclxuICBsaW5lLWhlaWdodDogMjNweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFwcF9iYXJfY29sb3I7XHJcbiAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnNcclxufVxyXG5cclxuLnVzZWVfbmFtZV90ZXh0IHtcclxuICBwIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemUgICAgIDogMjBweDtcclxuICAgIGNvbG9yICAgICAgICAgOiAkYXBwX2Jhcl9jb2xvcjtcclxuICAgIGZvbnQtd2VpZ2h0ICAgOiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcCAgICA6IDZweDtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBib3gtc2hhZG93OiA0cHggNHB4IDEwcHggMnB4ICNkY2RjZGM7XHJcbiAgbWFyZ2luLXRvcDogM3B4O1xyXG4gIHBhZGRpbmcgICA6IDlweDtcclxuXHJcbiAgLnVzZXJfaGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvciAgICA6ICR0ZXh0X2NvbG9yO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIH1cclxuXHJcbiAgLnNpbmdsZV91c2VyX25hbWUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3IgICAgOiAkYXBwX2Jhcl9jb2xvcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIH1cclxufVxyXG4iLCJ1bCB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbnAge1xuICBtYXJnaW46IDBweDtcbn1cblxuYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuI2RldmljZS1hbmRyb2lkIC5mcmFtZS1jb250YWluZXIgLnN0YXR1c2JhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbmlvbmxhYi1kZXZpY2UtZnJhbWUgLmZyYW1lLWNvbnRhaW5lciAuc3RhdHVzYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG5pb24tdG9vbGJhciAudG9vbGJhci1jb2xvcjEge1xuICBoZWlnaHQ6IDUycHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24taGVhZGVyIGlvbi10b29sYmFyOmZpcnN0LWNoaWxkIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDEwMjNGICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gIC0tY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDU1cHg7XG59XG5cbi5yYW9fbG9nbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiA0N3B4O1xuICBoZWlnaHQ6IDIycHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5yYW9fbG9nbyAubG9nb19pbWcge1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTJweDtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbn1cblxuLm1pZGRsZV9zZWMgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbi5tZW51X2ljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcmlnaHQ6IDQwcHg7XG4gIHRvcDogMTVweDtcbn1cblxuLm1lbnVfaWNvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5pY29uX3NlYyB7XG4gIHotaW5kZXg6IC0xO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxN3B4O1xuICB0b3A6IDEwcHg7XG59XG5cbi51c2VyX2RldGFpbCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5zaW5nbGVfdXNlcl9wcm9maWxlIHtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICB6LWluZGV4OiAxMjtcbn1cblxuLnVzZXJfaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMTtcbiAgd2lkdGg6IDEwOHB4O1xuICBoZWlnaHQ6IDEwOHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5wcm9maWxlX2ltZyB7XG4gIHdpZHRoOiAxMDhweDtcbiAgaGVpZ2h0OiAxMDhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IGF1dG87XG59XG4ucHJvZmlsZV9pbWcgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cblxubGFiZWwucHJvZmlsZV9hbmRfY292ZXJfZWRpdCB7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA0cHg7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwMjNGO1xuICB6LWluZGV4OiAxMTE7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDEwMjNGO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cblxuLnVzZWVfbmFtZV90ZXh0IHAge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMDEwMjNGO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG4uY2FyZCB7XG4gIGJveC1zaGFkb3c6IDRweCA0cHggMTBweCAycHggI2RjZGNkYztcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBwYWRkaW5nOiA5cHg7XG59XG4uY2FyZCAudXNlcl9oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzM5OThDNTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4uY2FyZCAuc2luZ2xlX3VzZXJfbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMwMTAyM0Y7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");





let ProfilePage = class ProfilePage {
    constructor(modalController, _userService, events1) {
        this.modalController = modalController;
        this._userService = _userService;
        this.events1 = events1;
        this.path = _config__WEBPACK_IMPORTED_MODULE_4__["config"].baseMediaUrl;
        this.currentUserRole = localStorage.getItem('designation');
        this.token = JSON.parse(localStorage.getItem('accessToken'));
        this.loading = false;
    }
    ngOnInit() {
        this.getUserDetail();
        console.log("current user role login", this.token);
    }
    getUserDetail() {
        this.loading = true;
        this._userService.getUserDetail().subscribe((res) => {
            // this.UserDetail = res.data[0];
            console.log("login user details===", res);
            this.userDetail = res.data;
            this.loading = false;
            console.log("this.userDetails login", this.userDetail);
            // this.UserDetail.dob = this.UserDetail.dob.split("T")[0];
        }, err => {
            console.log(err);
            this.loading = false;
        });
    }
    /**
     * Select file
     * @param {object} file
     */
    fileSelected(event) {
        console.log("===============", event.target.files);
        this.urls = "";
        this.files = event.target.files[0];
        // if (this.files) {
        //   // console.log("in if")
        //   let reader = new FileReader();
        //   reader.onload = (e: any) => {
        //     this.urls = e.target.result;
        //   }
        //   reader.readAsDataURL(this.files);
        // }
        // console.log("url=>",this.urls)
        this._userService.updateProfile(this.files).subscribe((res) => {
            console.log("res=======>", res);
            this.urls = "";
            this.userDetail.profilePhoto = res.data.profilePhoto;
            this.events1.publish('profile', res.data.profilePhoto);
        }, err => {
            console.log("err=>>>>>>>>>>>>", err);
            this.urls = "";
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] }
];
ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html"),
        styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]])
], ProfilePage);



/***/ }),

/***/ "./src/app/services/leave.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/leave.service.ts ***!
  \*******************************************/
/*! exports provided: LeaveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveService", function() { return LeaveService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");




let LeaveService = class LeaveService {
    constructor(http) {
        this.http = http;
    }
    /**
     * Apply leave
     * @param {Object} data
     */
    applyLeave(data) {
        console.log("leave application form details ", data);
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "api/leave/add-leave", data);
    }
    /**
     * Get monthly leave history of user
     * @param {object} data
     */
    getMounthlyLeaveByUser(data) {
        console.log(data);
        const detail = data.month.split("-");
        const obj = {
            month: detail[1],
            year: detail[0]
        };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "api/leave/get-leave-by-month", obj);
    }
    /**
     * Get yearly leave history of user
     * @param {object} data
     */
    getYearlyLeaveByUser(data) {
        console.log(data.year.split("-")[0]);
        const obj = {
            year: data.year.split("-")[0]
        };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "api/leave/get-leave-by-year", obj);
    }
    /**
     * Get Todat not present user
     */
    todayNotPresentUser() {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "api/leave/get-today-not-present-users");
    }
    /**
     * Get Approved Leaves
     */
    getApprovedLeaves() {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "api/leave/get-approved-leaves");
    }
    /**
     * Get Pending Leaves
     */
    getPendingLeaves() {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "api/leave/get-pending-leaves");
    }
    /**
     * Get leaves by userId
     * @param {String} userId
     */
    getLeaveByUserId(userId) {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "api/leave/get-leave-by-userId/" + userId);
    }
    /**
     * Get Month leave report
     * @param {Object} data
     */
    getMonthLeaveReport(data) {
        const detail = data.month.split("-");
        const obj = {
            month: detail[1],
            year: detail[0]
        };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "api/leave/get-monthly-report", obj);
    }
    /**
     * Get Year leave report
     * @param  { object} data
     */
    getYearLeaveReport(data) {
        console.log(data.year.split("-")[0]);
        const obj = {
            year: data.year.split("-")[0]
        };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "api/leave/get-yearly-report", obj);
    }
    /**
     * Leave Approval
     * @param {object} data
     */
    leaveApproval(data) {
        console.log(data);
        return this.http.put(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "api/leave/leave-update-by-status", data);
    }
};
LeaveService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LeaveService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], LeaveService);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map