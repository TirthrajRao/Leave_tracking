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

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"toolbar-color1\">\r\n    <ion-row>\r\n      <ion-col size='4'>\r\n        <div class=\"rao_logo\">\r\n          <ion-img src=\"../../assets/images/raoinfotech-logo.png\" class=\"logo_img\"></ion-img>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size='4'>\r\n        <div class=\"middle_sec text-center\">\r\n          <span>Dashboard</span>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size='4'>\r\n        <div class=\"icon_sec\">\r\n          <ion-img src=\"../../assets/images/icon.png\"></ion-img>\r\n        </div>\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n  <div class=\"user_profile text_center\" *ngIf=\"UserDetail\">\r\n    <div class=\"profile_img\">\r\n      <img *ngIf=\"!UserDetail.profilePhoto\" src=\"../../assets/images/person.png\">\r\n      <img *ngIf=\"UserDetail.profilePhoto\" src=\"{{path}}{{UserDetail.profilePhoto}}\">\r\n    </div>\r\n  </div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"all_content\">\r\n    <div class=\"title_text\">\r\n      <p class=\"text-center\">leave tracking</p>\r\n    </div>\r\n    <div class=\"leave_status\">\r\n      <ul class=\"nav nav-tabs w-100\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link active \" href=\"javascript:void(0);\" (click)=\"todayNotPresentUser()\">\r\n            <p class=\"text-center\">Today</p>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link \" href=\"javascript:void(0);\" (click)=\"getApprovedLeaves()\">\r\n            <p class=\"text-center\">Aproved</p>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"javascript:void(0);\" (click)=\"getPendingLeaves()\">\r\n            <p class=\"text-center\">Pending</p>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"loader\" *ngIf=\"loading\">\r\n      <img class=\"loading_img\" src=\"../../assets/images/loader.gif\" />\r\n    </div>\r\n    <div class=\"step_one\" style=\"display: none;\">\r\n\r\n      <div class=\"absent_emp_text text-white\" *ngIf=\"todaysLeave.length\">\r\n        Absent Employee\r\n      </div>\r\n\r\n      <div *ngIf=\"todaysLeave.length\">\r\n        <div *ngFor=\"let user of todaysLeave\">\r\n          <div class=\"card\">\r\n            <div class=\"card-content w-100\">\r\n              <div class=\"absent_user_name\">\r\n                <a (click)=\"presentAlert(user)\" href=\"javascript:void(0);\" class=\"float-left\">{{user.userId.name}}</a>\r\n                <a class=\"float-right\">{{todayDate[2]}}/{{todayDate[1]}}/{{todayDate[0]}}</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"todayLeavesCount == 0\" class=\"dataNotAvalible text-center mt-4\">\r\n        <span>Everyone is Present</span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"step_two\" style=\"display:none\">\r\n\r\n      <div *ngIf=\"approvedLeaves.length\">\r\n        <div *ngFor=\"let leave of approvedLeaves; let i=index\">\r\n          <div class=\"card\" style=\"cursor: pointer;\">\r\n            <label for=\"o{{i}}\">\r\n              <div class=\"card-content  w-100 aproved_leaves\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-4\">\r\n                    <span>{{leave.userId.name}}</span>\r\n                  </div>\r\n                  <div class=\"col-4\">\r\n                    <span>\r\n\r\n                      {{getNoOfDays(leave.noOfDays)}}\r\n                    </span>\r\n                  </div>\r\n                  <div class=\"col-4\">\r\n                    <span>{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </label>\r\n            <input class=\"checker\" type=\"checkbox\" id=\"o{{i}}\" hidden>\r\n            <div class=\"modal\">\r\n              <div class=\"modal-body\">\r\n                <div class=\"modal-content\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-12\">\r\n                      <p class=\"text-white\">Reason :</p>\r\n                      <div class=\"reason_text text-white\"> {{leave.reason}}</div>\r\n                    </div>\r\n                    <div class=\"col-12\">\r\n                      <p class=\"text-white\">Date :</p>\r\n                      <div class=\"reason_text text-white\">{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-12\">\r\n                      <p class=\"text-white\">Approved By :</p>\r\n                      <div class=\"reason_text text-white\">{{leave.approvedBy}}</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"ok_btn text-center mt-3\">\r\n                    <label for=\"o{{i}}\">Ok</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"close_btn\">\r\n                  <label for=\"o{{i}}\">X</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"approvedLeavesCount == 0\" class=\"dataNotAvalible\">\r\n        <span class=\"text-center\">No Approved Leaves Yet</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"step_three\" style=\"display:none\">\r\n      <div *ngIf=\"pendingLeaves.length\">\r\n        <div *ngFor=\"let leave of pendingLeaves ;let i=index\">\r\n          <div class=\"card\" style=\"cursor: pointer;\">\r\n            <label for=\"o{{i}}\">\r\n              <div class=\"card-content  w-100 aproved_leaves\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-4\">\r\n                    <span>{{leave.userId.name}}</span>\r\n                  </div>\r\n                  <div class=\"col-4\">\r\n                    <span>\r\n                      {{getNoOfDays(leave.noOfDays)}}\r\n                    </span>\r\n                  </div>\r\n                  <div class=\"col-4\">\r\n                    <span>{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </label>\r\n            <input class=\"checker\" type=\"checkbox\" id=\"o{{i}}\" hidden>\r\n            <div class=\"modal\">\r\n              <div class=\"modal-body\">\r\n                <div class=\"modal-content\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-12\">\r\n                      <p class=\"text-white\">Reason :</p>\r\n                      <div class=\"reason_text text-white\"> {{leave.reason}}</div>\r\n                    </div>\r\n                    <div class=\"col-12\">\r\n                      <p class=\"text-white\">Date :</p>\r\n                      <div class=\"reason_text text-white\">{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}\r\n                      </div>\r\n                    </div>\r\n\r\n                  </div>\r\n                  <div class=\"ok_btn text-center mt-3\">\r\n                    <label for=\"o{{i}}\">Ok</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"close_btn\">\r\n                  <label for=\"o{{i}}\">X</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"pendingLeavesCount == 0\" class=\"dataNotAvalible\">\r\n        <span class=\"text-center\">No Pending Leaves Yet</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Admin/leave-application/leave-application.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Admin/leave-application/leave-application.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"toolbar-color1\">\r\n    <ion-row>\r\n      <ion-col size='4'>\r\n        <div class=\"rao_logo\">\r\n          <ion-img src=\"../../assets/images/raoinfotech-logo.png\" class=\"logo_img\"></ion-img>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size='4'>\r\n        <div class=\"middle_sec text-center\">\r\n          <span>Leave Application</span>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size='4'>\r\n        <div class=\"icon_sec\">\r\n          <ion-img src=\"../../assets/images/icon.png\"></ion-img>\r\n        </div>\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"loader\" *ngIf=\"loading\">\r\n    <img class=\"loading_img\" src=\"../../assets/images/loader.gif\" />\r\n  </div>\r\n  <div class=\"contect_class\">\r\n    <div *ngIf=\"PendingLeaves.length\">\r\n      <div *ngFor=\"let leave of PendingLeaves ;let i=index\">\r\n        <div class=\"card\" style=\"cursor: pointer;\">\r\n          <label for=\"o{{i}}\">\r\n            <div class=\"card-content  w-100 pending_leaves\">\r\n              <div class=\"row\">\r\n                <div class=\"col-4\">\r\n                  <span class=\"text-center user_name\">{{leave.userId.name}}</span>\r\n                </div>\r\n                <div class=\"col-4\">\r\n                  <span class=\"text-center number_of_days\">{{getNoOfDays(leave.noOfDays)}}</span>\r\n                </div>\r\n                <div class=\"col-4  text-center\">\r\n                  <span (click)=\"leaveApproval(leave._id,'Rejected')\" class=\"float-right check_cross  ml-2 \">\r\n                    <ion-img src=\"../../assets/images/cancel.png\"></ion-img>\r\n                  </span>\r\n                  <span (click)=\"leaveApproval(leave._id,'Approved')\" class=\"float-right check_right\">\r\n                    <ion-img src=\"../../assets/images/right.png\"></ion-img>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </label>\r\n          <input class=\"checker\" type=\"checkbox\" id=\"o{{i}}\" hidden>\r\n          <div class=\"modal\">\r\n            <div class=\"modal-body\">\r\n              <div class=\"modal-content\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-12\">\r\n                    <p class=\"text-white\">Reason :</p>\r\n                    <div class=\"reason_text text-white\"> {{leave.reason}}</div>\r\n                  </div>\r\n                  <div class=\"col-12\">\r\n                    <p class=\"text-white\">Date :</p>\r\n                    <div class=\"reason_text text-white\">{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-12\" *ngIf=\"leave.extraHours\">\r\n                    <p class=\"text-white\">Compensation :</p>\r\n                    <div class=\"reason_text text-white\">{{leave.extraHours}}\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"ok_btn text-center mt-3\">\r\n                  <label for=\"o{{i}}\">Ok</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"close_btn\">\r\n                <label for=\"o{{i}}\">X</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"pendingLeavesCount == 0\">\r\n    <p>There are no leaves...</p>\r\n  </div>\r\n</ion-content>"

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

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"toolbar-color1\">\r\n    <ion-row>\r\n      <ion-col size='4'>\r\n        <div class=\"rao_logo\">\r\n          <ion-img src=\"../../assets/images/raoinfotech-logo.png\" class=\"logo_img\"></ion-img>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size='4'>\r\n        <div class=\"middle_sec text-center\">\r\n          <span>Report</span>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size='4'>\r\n        <div class=\"icon_sec\">\r\n          <ion-img src=\"../../assets/images/icon.png\"></ion-img>\r\n        </div>\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <div class=\"apply_leave\">\r\n    <div class=\"apply_leave_text text-white\">\r\n      Apply Leave\r\n    </div>\r\n\r\n    <div class=\"select_time\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6 pr-2\">\r\n          <form [formGroup]='monthLeaveForm'>\r\n            <ion-item>\r\n              <ion-datetime displayFormat=\"MMMM YYYY\" placeholder=\"Select Month\" formControlName=\"month\"\r\n                (ionChange)=getMonthLeaveReport(monthLeaveForm.value)>\r\n              </ion-datetime>\r\n            </ion-item>\r\n          </form>\r\n        </div>\r\n        <div class=\"col-6 pl-2\">\r\n          <form [formGroup]='yearLeaveForm'>\r\n            <ion-item>\r\n              <ion-datetime displayFormat=\" YYYY\" placeholder=\"Select Year\" formControlName=\"year\"\r\n                (ionChange)=getYearLeaveReport(yearLeaveForm.value)>\r\n              </ion-datetime>\r\n            </ion-item>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"loader\" *ngIf=\"loading\">\r\n      <img class=\"loading_img\" src=\"../../assets/images/loader.gif\" />\r\n    </div>\r\n    <div *ngIf=\"monthLeaveReport.length\">\r\n      <div class=\"leave_details\" *ngFor=\"let leave of monthLeaveReport\">\r\n        <div class=\"card\" style=\"cursor: pointer;\">\r\n          <label for=\"o{{i}}\">\r\n            <div class=\"row\">\r\n              <div class=\"col-4\">\r\n                <span>{{leave.userId.name}}</span>\r\n              </div>\r\n              <div class=\"col-4 text-center\">\r\n                <span>{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</span>\r\n              </div>\r\n              <div class=\"col-4\">\r\n                <div *ngIf=\"leave.status == 'Approved'\"><span class=\"pl-2\"\r\n                    style=\"color: #3998C5;\">{{leave.status}}</span>\r\n                </div>\r\n                <div *ngIf=\"leave.status == 'Rejected'\"><span class=\"pl-2\"\r\n                    style=\"color: #FF0000;\">{{leave.status}}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </label>\r\n          <input class=\"checker\" type=\"checkbox\" id=\"o{{i}}\" hidden>\r\n          <div class=\"modal\">\r\n            <div class=\"modal-body\">\r\n              <div class=\"modal-content\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-12\">\r\n                    <p class=\"text-white\">Reason :</p>\r\n                    <div class=\"reason_text text-white\"> {{leave.reason}}</div>\r\n                  </div>\r\n                  <div class=\"col-12\">\r\n                    <p class=\"text-white\">No of Days :</p>\r\n                    <div class=\"reason_text text-white\">  {{getNoOfDays(leave.noOfDays)}}\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"ok_btn text-center mt-3\">\r\n                  <label for=\"o{{i}}\">Ok</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"close_btn\">\r\n                <label for=\"o{{i}}\">X</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"monthLeaveCount == 0\" class=\"no-leaves-of-month\">\r\n      <p class=\"text-center\">There are No leaves</p>\r\n    </div>\r\n    <div *ngIf=\"yearLeaveReport.length\">\r\n      <div class=\"leave_details\" *ngFor=\"let leave of yearLeaveReport ; let i=index\">\r\n        <div class=\"card\" style=\"cursor: pointer;\">\r\n          <label for=\"o{{i}}\">\r\n            <div class=\"row\">\r\n              <div class=\"col-4\">\r\n                <span>{{leave.userId.name}}</span>\r\n              </div>\r\n              <div class=\"col-4 text-center\">\r\n                <span>{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</span>\r\n              </div>\r\n              <div class=\"col-4\">\r\n                <div *ngIf=\"leave.status == 'Approved'\"><span class=\"pl-2\"\r\n                    style=\"color: #3998C5;\">{{leave.status}}</span>\r\n                </div>\r\n                <div *ngIf=\"leave.status == 'Rejected'\"><span class=\"pl-2\"\r\n                    style=\"color: #FF0000;\">{{leave.status}}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </label>\r\n          <input class=\"checker\" type=\"checkbox\" id=\"o{{i}}\" hidden>\r\n          <div class=\"modal\">\r\n            <div class=\"modal-body\">\r\n              <div class=\"modal-content\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-12\">\r\n                    <p class=\"text-white\">Reason :</p>\r\n                    <div class=\"reason_text text-white\"> {{leave.reason}}</div>\r\n                  </div>\r\n                  <div class=\"col-12\">\r\n                    <p class=\"text-white\">No of Days :</p>\r\n                    <div class=\"reason_text text-white\">  {{getNoOfDays(leave.noOfDays)}}\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"ok_btn text-center mt-3\">\r\n                  <label for=\"o{{i}}\">Ok</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"close_btn\">\r\n                <label for=\"o{{i}}\">X</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"yearLeaveCount == 0\" class=\"no-leave-of-year\">\r\n      <p class=\"text-center\">There are No leaves</p>\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Admin/single-usre/single-usre.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Admin/single-usre/single-usre.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"toolbar-color1\">\r\n\r\n    <ion-row>\r\n      <ion-col size='4'>\r\n        <div class=\"rao_logo\">\r\n          <ion-img src=\"../../assets/images/raoinfotech-logo.png\" class=\"logo_img\"></ion-img>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size='4'>\r\n        <div class=\"middle_sec text-center\">\r\n          <span>Profile</span>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size='4'>\r\n        <div class=\"icon_sec\">\r\n          <ion-img src=\"../../assets/images/icon.png\"></ion-img>\r\n        </div>\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"loader\" *ngIf=\"loading\">\r\n    <img class=\"loading_img\" src=\"../../assets/images/loader.gif\" />\r\n  </div>\r\n  <div class=\"user_detail\">\r\n    <div *ngIf=\"singleUser\">\r\n      <div class=\"single_user_profile text-center\">\r\n        <div class=\"single_user\">\r\n          <div class=\"profile_img\">\r\n            <img *ngIf=\"!singleUser.profilePhoto\" src=\"../../assets/images/person.png\">\r\n            <img *ngIf=\"singleUser.profilePhoto\" src=\"{{path}}{{singleUser.profilePhoto}}\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"usee_name_text\">\r\n        <p class=\"text-center\">{{singleUser.name}}</p>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-content row\">\r\n          <div class=\"col-4\"><span class=\"user_heading\">Name : </span></div>\r\n          <div class=\"col-8\">\r\n            <span class=\"single_user_name\">{{singleUser.name}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-content row\">\r\n          <div class=\"col-4\"><span class=\"user_heading\">email : </span></div>\r\n          <div class=\"col-8\">\r\n            <span class=\"single_user_name\">{{singleUser.email}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-content row\">\r\n          <div class=\"col-4\"><span class=\"user_heading\">DOB : </span></div>\r\n          <div class=\"col-8\">\r\n            <span class=\"single_user_name\">{{singleUser.dob}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-content row\">\r\n          <div class=\"col-4\"><span class=\"user_heading\">Phone No. : </span></div>\r\n          <div class=\"col-8\">\r\n            <span class=\"single_user_name\">{{singleUser.phone}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-content row\">\r\n          <div class=\"col-4\"><span class=\"user_heading\">Location : </span></div>\r\n          <div class=\"col-8\">\r\n            <span class=\"single_user_name\">{{singleUser.location}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-content row\">\r\n          <div class=\"col-4 pr-0\"><span class=\"user_heading\">Designation : </span></div>\r\n          <div class=\"col-8\">\r\n            <span class=\"single_user_name\">{{singleUser.designation}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"leave_report\">\r\n      <div class=\"leave_report_text text-white\">\r\n        Leave Report\r\n      </div>\r\n      <div *ngIf=\"userLeaves.length\">\r\n        <div class=\"leave_details\" *ngFor=\"let leave of userLeaves\">\r\n          <div class=\"card\">\r\n            <div class=\"row\">\r\n              <div class=\"col-4\">\r\n                <div *ngIf=\"leave.status == 'Rejected'\">\r\n                  <span style=\" color: #FF0000;\">{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</span>\r\n                </div>\r\n                <div *ngIf=\"leave.status == 'Approved'\">\r\n                  <span style=\" color: #3998C5;\">{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</span>\r\n                </div>\r\n                <div *ngIf=\"leave.status == 'pending'\">\r\n                  <span style=\" color: #FFAA00;\">{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-4 text-center\">\r\n                <div *ngIf=\"leave.status == 'Rejected'\">\r\n                  <span (click)='presentAlert(leave)' style=\"cursor: pointer; color: #FF0000;\">\r\n                    {{getNoOfDays(leave.noOfDays)}}</span>\r\n                </div>\r\n                <div *ngIf=\"leave.status == 'Approved'\">\r\n                  <span (click)='presentAlert(leave)' style=\"cursor: pointer; color: #3998C5;\">\r\n                    {{getNoOfDays(leave.noOfDays)}}</span>\r\n                </div>\r\n                <div *ngIf=\"leave.status == 'pending'\">\r\n                  <span (click)='presentAlert(leave)' style=\"cursor: pointer; color: #FFAA00;\">\r\n                    {{getNoOfDays(leave.noOfDays)}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-4\">\r\n                <div *ngIf=\"leave.status == 'Rejected'\">\r\n                  <span class=\"pl-2\" style=\"color: #FF0000;\">{{leave.status}}</span>\r\n                </div>\r\n                <div *ngIf=\"leave.status == 'Approved'\">\r\n                  <span class=\"pl-2\" style=\"color: #00B51E;\">{{leave.status}}</span>\r\n                </div>\r\n                <div *ngIf=\"leave.status == 'pending'\">\r\n                  <span class=\"pl-2\" style=\"color: #FFAA00;\">{{leave.status}}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"!userLeaves.length\" class=\"no_leaves\">\r\n        <p style=\"text-align:center;\">No leaves yet...</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>"

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

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"toolbar-color1\">\r\n    <ion-row>\r\n      <ion-col size='4'>\r\n        <div class=\"rao_logo\">\r\n          <ion-img src=\"../../assets/images/raoinfotech-logo.png\" class=\"logo_img\"></ion-img>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size='4'>\r\n        <div class=\"middle_sec text-center\">\r\n          <span>History</span>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size='4'>\r\n        <div class=\"icon_sec\">\r\n          <ion-img src=\"../../assets/images/icon.png\"></ion-img>\r\n        </div>\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"leave_history\">\r\n    <div class=\"apply_leave_text text-white\">\r\n      Apply Leave\r\n    </div>\r\n    <div class=\"select_time\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6 pr-2\">\r\n          <form [formGroup]='monthLeaveForm'>\r\n            <ion-item>\r\n              <ion-datetime displayFormat=\"MMMM YYYY\" placeholder=\"Select Month\" formControlName=\"month\"\r\n                (ionChange)=getMounthlyLeaveByUser(monthLeaveForm.value)>\r\n              </ion-datetime>\r\n            </ion-item>\r\n          </form>\r\n        </div>\r\n        <div class=\"col-6 pl-2\">\r\n          <form [formGroup]='yearLeaveForm'>\r\n            <ion-item>\r\n              <ion-datetime displayFormat=\" YYYY\" placeholder=\"Select Year\" formControlName=\"year\"\r\n                (ionChange)=getYearlyLeaveByUser(yearLeaveForm.value)>\r\n              </ion-datetime>\r\n            </ion-item>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"loader\" *ngIf=\"loading\">\r\n      <img class=\"loading_img\" src=\"../../assets/images/loader.gif\" />\r\n    </div>\r\n    <div *ngIf=\"isMonthLeave == 2\">\r\n      <div class=\"leave_details\" *ngFor=\"let leave of monthlyLeaveOfUser\">\r\n        <div class=\"card\">\r\n          <div class=\"row\">\r\n            <div class=\"col-4\">\r\n              <div *ngIf=\"leave.status == 'Rejected'\">\r\n                <span style=\"color: #FF0000;\">{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</span>\r\n              </div>\r\n              <div *ngIf=\"leave.status == 'pending'\">\r\n                <span style=\"color: #FFAA00;\">{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</span>\r\n              </div>\r\n              <div *ngIf=\"leave.status == 'Approved'\">\r\n                <span style=\"color: #3998C5;\">{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-4 text-center\">\r\n              <div *ngIf=\"leave.status == 'Rejected'\">\r\n                <span style=\"color: #FF0000;\">{{leave.noOfDays}}</span>\r\n              </div>\r\n              <div *ngIf=\"leave.status == 'pending'\">\r\n                <span style=\"color: #FFAA00;\">{{leave.noOfDays}}</span>\r\n              </div>\r\n              <div *ngIf=\"leave.status == 'Approved'\">\r\n                <span style=\"color: #3998C5;\">{{leave.noOfDays}}</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-4\">\r\n              <div *ngIf=\"leave.status == 'Approved'\"><span class=\"pl-2\" style=\"color: #00B51E;\">{{leave.status}}</span>\r\n              </div>\r\n              <div *ngIf=\"leave.status == 'Rejected'\"><span class=\"pl-2\" style=\"color: #FF0000;\">{{leave.status}}</span>\r\n              </div>\r\n              <div *ngIf=\"leave.status == 'pending'\"><span class=\"pl-2\" style=\"color: #FFAA00;\">{{leave.status}}</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"isMonthLeave == 1\" class=\"no_leaves text-center mt-0\"><span class=\"text-center no-leaves-of-month\">There\r\n        are No\r\n        leaves</span></div>\r\n\r\n    <div *ngIf=\"isYearLeave == 2\">\r\n      <div class=\"leave_details\" *ngFor=\"let leave of yearlyLeaveOfUser\">\r\n        <div class=\"card\">\r\n          <div class=\"row\">\r\n            <div class=\"col-4\">\r\n              <div *ngIf=\"leave.status == 'Rejected'\">\r\n                <span style=\"color: #FF0000;\">{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</span>\r\n              </div>\r\n              <div *ngIf=\"leave.status == 'pending'\">\r\n                <span style=\"color: #FFAA00;\">{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</span>\r\n              </div>\r\n              <div *ngIf=\"leave.status == 'Approved'\">\r\n                <span style=\"color: #3998C5;\">{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-4 text-center\">\r\n              <div *ngIf=\"leave.status == 'Rejected'\">\r\n                <span style=\"color: #FF0000;\">{{leave.noOfDays}}</span>\r\n              </div>\r\n              <div *ngIf=\"leave.status == 'pending'\">\r\n                <span style=\"color: #FFAA00;\">{{leave.noOfDays}}</span>\r\n              </div>\r\n              <div *ngIf=\"leave.status == 'Approved'\">\r\n                <span style=\"color: #3998C5;\">{{leave.noOfDays}}</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-4\">\r\n              <div *ngIf=\"leave.status == 'Approved'\"><span class=\"pl-2\" style=\"color: #00B51E;\">{{leave.status}}</span>\r\n              </div>\r\n              <div *ngIf=\"leave.status == 'Rejected'\"><span class=\"pl-2\" style=\"color: #FF0000;\">{{leave.status}}</span>\r\n              </div>\r\n              <div *ngIf=\"leave.status == 'pending'\"><span class=\"pl-2\" style=\"color: #FFAA00;\">{{leave.status}}</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"isYearLeave == 1\" class=\"no_leaves text-center mt-0\"><span class=\"no-leave-of-year\">There are No\r\n        leaves</span></div>\r\n  </div>\r\n</ion-content>"

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

module.exports = "#device-android .frame-container .statusbar {\n  background-color: #fff;\n}\n\nionlab-device-frame .frame-container .statusbar {\n  background-color: #fff !important;\n}\n\nion-toolbar .toolbar-color1 {\n  height: 52px;\n  width: 100%;\n}\n\nion-header ion-toolbar:first-child {\n  --background: #01023F !important;\n}\n\nion-menu-button {\n  --color: transparent;\n  --padding-start: 55px;\n}\n\n.rao_logo {\n  background-color: #fff;\n  width: 47px;\n  height: 22px;\n  border-radius: 30px;\n  margin-left: 10px;\n  text-align: center;\n  position: relative;\n}\n\n.rao_logo .logo_img {\n  max-height: 100%;\n  max-width: 100%;\n  height: 12px;\n  width: 20px;\n  margin: auto;\n  vertical-align: center;\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n\n.middle_sec span {\n  font-size: 15px;\n  color: #fff;\n  font-weight: 100;\n}\n\n.icon_sec {\n  z-index: -1;\n  position: absolute;\n  right: 17px;\n  top: 10px;\n}\n\nion-content {\n  padding: 10px;\n}\n\nion-content .row {\n  margin: 0px !important;\n}\n\n.all_user_pic {\n  width: 100%;\n}\n\n.all_user_pic .card {\n  box-shadow: 4px 4px 10px 2px #dcdcdc;\n}\n\n.all_user_pic .card p {\n  margin-bottom: 0px;\n}\n\n.all_user_pic .user_profile {\n  width: calc(100%/3 - 14px);\n  border-radius: 8px;\n  background-color: #fff;\n  color: #3998C5;\n  margin: 11px 0px 0px 11px;\n  cursor: pointer;\n}\n\n.all_user_pic .user_profile .card-body {\n  padding: 10px 5px;\n  margin: auto;\n}\n\n.all_user_pic .user_profile .profile_img {\n  height: 60px;\n  width: 60px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin: auto;\n}\n\n.all_user_pic .user_profile .profile_img img {\n  max-width: 100%;\n  min-width: 100%;\n  min-height: 100%;\n  max-height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.all_user_pic .user_profile .allUser {\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.all_user_pic .user_profile:hover {\n  background-color: #3998C5;\n  color: #fff;\n  border-radius: 8px;\n}\n\n.all_user_pic .user_profile:hover .profile_img {\n  height: 60px;\n  width: 60px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin: auto;\n}\n\n.all_user_pic .user_profile:hover .profile_img ion-img {\n  max-width: 100%;\n  min-width: 100%;\n  min-height: 100%;\n  max-height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.user_profile:focus {\n  box-shadow: none;\n  outline: none;\n  background-color: #3998C5;\n  color: #fff;\n  border-radius: 8px;\n}\n\n.user_profile:focus .profile_img {\n  height: 60px;\n  width: 60px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin: auto;\n}\n\n.user_profile:focus .profile_img ion-img {\n  max-width: 100%;\n  min-width: 100%;\n  min-height: 100%;\n  max-height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbGVhdmUtbWFuYWdlci9zcmMvYXBwL0FkbWluL2FsbC11c2VyL2FsbC11c2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9BZG1pbi9hbGwtdXNlci9hbGwtdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPSTtFQUNFLHNCQUFBO0FDTk47O0FEYUk7RUFDRSxpQ0FBQTtBQ1ZOOztBRGlCRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDZEo7O0FEa0JBO0VBQ0UsZ0NBQUE7QUNmRjs7QURrQkE7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0FDZkY7O0FEbUJBO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDaEJGOztBRGtCRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDaEJKOztBRHFCQTtFQUNFLGVBaEVjO0VBaUVkLFdBQUE7RUFDQSxnQkFBQTtBQ2xCRjs7QURxQkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ2xCRjs7QUR1QkE7RUFDRSxhQUFBO0FDcEJGOztBRHNCRTtFQUNFLHNCQUFBO0FDcEJKOztBRHdCQTtFQUNFLFdBQUE7QUNyQkY7O0FEdUJFO0VBQ0Usb0NBQUE7QUNyQko7O0FEc0JJO0VBQ0Usa0JBQUE7QUNwQk47O0FEd0JFO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ3RCSjs7QUR3Qkk7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUN0Qk47O0FEeUJJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ3ZCTjs7QUR3Qks7RUFDRyxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDdEJSOztBRDBCSTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDeEJOOztBRDRCRTtFQUNFLHlCQW5JWTtFQW9JWixXQUFBO0VBQ0Esa0JBQUE7QUMxQko7O0FENEJJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQzFCTjs7QUQ0Qk07RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDMUJSOztBRGdDQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQTVKYztFQTZKZCxXQUFBO0VBQ0Esa0JBQUE7QUM3QkY7O0FEK0JFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQzdCSjs7QUQrQkk7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDN0JOIiwiZmlsZSI6InNyYy9hcHAvQWRtaW4vYWxsLXVzZXIvYWxsLXVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYXBwX2Jhcl9jb2xvcjogIzAxMDIzRjtcclxuJGZvbnRfc2l6ZSAgICA6IDE1cHg7XHJcbiR0ZXh0X2NvbG9yICAgOiAjMzk5OEM1O1xyXG5cclxuLy8gc3RhdHVzIGJhciBjb2xvclxyXG4jZGV2aWNlLWFuZHJvaWQge1xyXG4gIC5mcmFtZS1jb250YWluZXIge1xyXG4gICAgLnN0YXR1c2JhciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5pb25sYWItZGV2aWNlLWZyYW1lIHtcclxuICAuZnJhbWUtY29udGFpbmVyIHtcclxuICAgIC5zdGF0dXNiYXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC50b29sYmFyLWNvbG9yMSB7XHJcbiAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICB3aWR0aCA6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5pb24taGVhZGVyIGlvbi10b29sYmFyOmZpcnN0LWNoaWxkIHtcclxuICAtLWJhY2tncm91bmQ6ICMwMTAyM0YgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLW1lbnUtYnV0dG9uIHtcclxuICAtLWNvbG9yICAgICAgICA6IHRyYW5zcGFyZW50O1xyXG4gIC0tcGFkZGluZy1zdGFydDogNTVweDtcclxuICAvLyAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2ljb24ucG5nKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmFvX2xvZ28ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgd2lkdGggICAgICAgICAgIDogNDdweDtcclxuICBoZWlnaHQgICAgICAgICAgOiAyMnB4O1xyXG4gIGJvcmRlci1yYWRpdXMgICA6IDMwcHg7XHJcbiAgbWFyZ2luLWxlZnQgICAgIDogMTBweDtcclxuICB0ZXh0LWFsaWduICAgICAgOiBjZW50ZXI7XHJcbiAgcG9zaXRpb24gICAgICAgIDogcmVsYXRpdmU7XHJcblxyXG4gIC5sb2dvX2ltZyB7XHJcbiAgICBtYXgtaGVpZ2h0ICAgIDogMTAwJTtcclxuICAgIG1heC13aWR0aCAgICAgOiAxMDAlO1xyXG4gICAgaGVpZ2h0ICAgICAgICA6IDEycHg7XHJcbiAgICB3aWR0aCAgICAgICAgIDogMjBweDtcclxuICAgIG1hcmdpbiAgICAgICAgOiBhdXRvO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uICAgICAgOiBhYnNvbHV0ZTtcclxuICAgIHRvcCAgICAgICAgICAgOiAwcHg7XHJcbiAgICBib3R0b20gICAgICAgIDogMHB4O1xyXG4gICAgbGVmdCAgICAgICAgICA6IDBweDtcclxuICAgIHJpZ2h0ICAgICAgICAgOiAwcHg7XHJcblxyXG4gIH1cclxufVxyXG5cclxuLm1pZGRsZV9zZWMgc3BhbiB7XHJcbiAgZm9udC1zaXplICA6ICRmb250X3NpemU7XHJcbiAgY29sb3IgICAgICA6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxufVxyXG5cclxuLmljb25fc2VjIHtcclxuICB6LWluZGV4IDogLTE7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0ICAgOiAxN3B4O1xyXG4gIHRvcCAgICAgOiAxMHB4O1xyXG59XHJcblxyXG5cclxuLy8gY29udGVudCBzdGFydCBoZXJlXHJcbmlvbi1jb250ZW50IHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAucm93IHtcclxuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uYWxsX3VzZXJfcGljIHtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgLmNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCAxMHB4IDJweCAjZGNkY2RjO1xyXG4gICAgcHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnVzZXJfcHJvZmlsZSB7XHJcbiAgICB3aWR0aCAgICAgICAgICAgOiBjYWxjKDEwMCUvMyAtIDE0cHgpO1xyXG4gICAgYm9yZGVyLXJhZGl1cyAgIDogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGNvbG9yICAgICAgICAgICA6ICMzOTk4QzU7XHJcbiAgICBtYXJnaW4gICAgICAgICAgOiAxMXB4IDBweCAwcHggMTFweDtcclxuICAgIGN1cnNvciAgICAgICAgICA6IHBvaW50ZXI7XHJcblxyXG4gICAgLmNhcmQtYm9keSB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gICAgICBtYXJnaW4gOiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlX2ltZyB7XHJcbiAgICAgIGhlaWdodCAgICAgICA6IDYwcHg7XHJcbiAgICAgIHdpZHRoICAgICAgICA6IDYwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgb3ZlcmZsb3cgICAgIDogaGlkZGVuO1xyXG4gICAgICBtYXJnaW4gICAgICAgOiBhdXRvO1xyXG4gICAgIGltZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoIDogMTAwJTtcclxuICAgICAgICBtaW4td2lkdGggOiAxMDAlO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hbGxVc2VyIHtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgZm9udC1zaXplICAgICA6IDEycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0ICAgOiBib2xkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnVzZXJfcHJvZmlsZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGV4dF9jb2xvcjtcclxuICAgIGNvbG9yICAgICAgICAgICA6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzICAgOiA4cHg7XHJcblxyXG4gICAgLnByb2ZpbGVfaW1nIHtcclxuICAgICAgaGVpZ2h0ICAgICAgIDogNjBweDtcclxuICAgICAgd2lkdGggICAgICAgIDogNjBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBvdmVyZmxvdyAgICAgOiBoaWRkZW47XHJcbiAgICAgIG1hcmdpbiAgICAgICA6IGF1dG87XHJcblxyXG4gICAgICBpb24taW1nIHtcclxuICAgICAgICBtYXgtd2lkdGggOiAxMDAlO1xyXG4gICAgICAgIG1pbi13aWR0aCA6IDEwMCU7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4udXNlcl9wcm9maWxlOmZvY3VzIHtcclxuICBib3gtc2hhZG93ICAgICAgOiBub25lO1xyXG4gIG91dGxpbmUgICAgICAgICA6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRleHRfY29sb3I7XHJcbiAgY29sb3IgICAgICAgICAgIDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzICAgOiA4cHg7XHJcblxyXG4gIC5wcm9maWxlX2ltZyB7XHJcbiAgICBoZWlnaHQgICAgICAgOiA2MHB4O1xyXG4gICAgd2lkdGggICAgICAgIDogNjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG92ZXJmbG93ICAgICA6IGhpZGRlbjtcclxuICAgIG1hcmdpbiAgICAgICA6IGF1dG87XHJcblxyXG4gICAgaW9uLWltZyB7XHJcbiAgICAgIG1heC13aWR0aCA6IDEwMCU7XHJcbiAgICAgIG1pbi13aWR0aCA6IDEwMCU7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgfVxyXG4gIH1cclxufSIsIiNkZXZpY2UtYW5kcm9pZCAuZnJhbWUtY29udGFpbmVyIC5zdGF0dXNiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG5pb25sYWItZGV2aWNlLWZyYW1lIC5mcmFtZS1jb250YWluZXIgLnN0YXR1c2JhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuaW9uLXRvb2xiYXIgLnRvb2xiYXItY29sb3IxIHtcbiAgaGVpZ2h0OiA1MnB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWhlYWRlciBpb24tdG9vbGJhcjpmaXJzdC1jaGlsZCB7XG4gIC0tYmFja2dyb3VuZDogIzAxMDIzRiAhaW1wb3J0YW50O1xufVxuXG5pb24tbWVudS1idXR0b24ge1xuICAtLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA1NXB4O1xufVxuXG4ucmFvX2xvZ28ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogNDdweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucmFvX2xvZ28gLmxvZ29faW1nIHtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEycHg7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG59XG5cbi5taWRkbGVfc2VjIHNwYW4ge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogMTAwO1xufVxuXG4uaWNvbl9zZWMge1xuICB6LWluZGV4OiAtMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTdweDtcbiAgdG9wOiAxMHB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5pb24tY29udGVudCAucm93IHtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmFsbF91c2VyX3BpYyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmFsbF91c2VyX3BpYyAuY2FyZCB7XG4gIGJveC1zaGFkb3c6IDRweCA0cHggMTBweCAycHggI2RjZGNkYztcbn1cbi5hbGxfdXNlcl9waWMgLmNhcmQgcCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5hbGxfdXNlcl9waWMgLnVzZXJfcHJvZmlsZSB7XG4gIHdpZHRoOiBjYWxjKDEwMCUvMyAtIDE0cHgpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjMzk5OEM1O1xuICBtYXJnaW46IDExcHggMHB4IDBweCAxMXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYWxsX3VzZXJfcGljIC51c2VyX3Byb2ZpbGUgLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xuICBtYXJnaW46IGF1dG87XG59XG4uYWxsX3VzZXJfcGljIC51c2VyX3Byb2ZpbGUgLnByb2ZpbGVfaW1nIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IGF1dG87XG59XG4uYWxsX3VzZXJfcGljIC51c2VyX3Byb2ZpbGUgLnByb2ZpbGVfaW1nIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5hbGxfdXNlcl9waWMgLnVzZXJfcHJvZmlsZSAuYWxsVXNlciB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uYWxsX3VzZXJfcGljIC51c2VyX3Byb2ZpbGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk5OEM1O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLmFsbF91c2VyX3BpYyAudXNlcl9wcm9maWxlOmhvdmVyIC5wcm9maWxlX2ltZyB7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmFsbF91c2VyX3BpYyAudXNlcl9wcm9maWxlOmhvdmVyIC5wcm9maWxlX2ltZyBpb24taW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4udXNlcl9wcm9maWxlOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5OThDNTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi51c2VyX3Byb2ZpbGU6Zm9jdXMgLnByb2ZpbGVfaW1nIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IGF1dG87XG59XG4udXNlcl9wcm9maWxlOmZvY3VzIC5wcm9maWxlX2ltZyBpb24taW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufSJdfQ== */"

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

module.exports = "ul {\n  margin: 0px;\n  padding: 0px;\n}\n\np {\n  margin: 0px;\n}\n\na:hover {\n  text-decoration: none;\n  padding: 6px 0px;\n}\n\n.nav-link:hover {\n  padding: 6px 0px;\n}\n\n#device-android .frame-container .statusbar {\n  background-color: #fff;\n}\n\nionlab-device-frame .frame-container .statusbar {\n  background-color: #fff !important;\n}\n\nion-toolbar {\n  height: 107px;\n  width: 100%;\n}\n\nion-header ion-toolbar:first-child {\n  --background: #01023F !important;\n}\n\nion-menu-button {\n  --color: transparent;\n  --padding-start: 55px;\n}\n\n.rao_logo {\n  background-color: #fff;\n  width: 47px;\n  height: 22px;\n  border-radius: 30px;\n  margin-left: 10px;\n  text-align: center;\n  position: relative;\n}\n\n.rao_logo .logo_img {\n  max-height: 100%;\n  max-width: 100%;\n  height: 12px;\n  width: 20px;\n  margin: auto;\n  vertical-align: center;\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n\n.middle_sec span {\n  font-size: 15px;\n  color: #fff;\n  font-weight: 100;\n}\n\n.icon_sec {\n  z-index: -1;\n  position: absolute;\n  right: 17px;\n  top: 10px;\n}\n\n.user_profile {\n  position: absolute;\n  left: 0;\n  right: 0px;\n  z-index: 1111;\n  bottom: -34px;\n}\n\n.user_profile .profile_img {\n  height: 70px;\n  width: 70px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin: auto;\n}\n\n.user_profile .profile_img img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  max-width: 100%;\n  max-height: 100%;\n  min-width: 100%;\n  min-height: 100%;\n}\n\n.all_content {\n  padding: 10px;\n  z-index: 100;\n}\n\n.leave_status {\n  margin-bottom: 15px;\n}\n\n.title_text {\n  margin-top: 42px;\n}\n\n.title_text p {\n  text-transform: uppercase;\n  color: #01023F;\n  font-size: 20px;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n\n.leave_status ul li {\n  list-style: none;\n  display: inline-block;\n  width: 33.33%;\n}\n\n.nav-tabs {\n  border: 1px solid #3998C5;\n  border-radius: 30px;\n  padding: 0px;\n}\n\n.nav-link {\n  border: 1px solid transparent;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  padding: 6px 0px;\n  font-size: 15px;\n  color: #000;\n}\n\n.nav-link:hover {\n  border: none !important;\n}\n\n.nav-item a.active {\n  border: 1px solid #3998C5 !important;\n  text-decoration: none;\n  background-color: #3998C5;\n  border-radius: 30px;\n  border-color: #3998C5;\n  color: #fff;\n  font-weight: bold;\n}\n\n.nav-tabs .nav-item {\n  margin-bottom: 0px !important;\n}\n\n.aproved_leaves span {\n  font-size: 12px;\n  color: #3998C5;\n}\n\n.card {\n  box-shadow: 4px 4px 10px 2px #dcdcdc;\n  margin-top: 5px;\n  padding: 10px;\n}\n\n.absent_user_name a {\n  font-size: 12px;\n  color: #3998C5;\n}\n\n.dataNotAvalible span {\n  font-size: 15px;\n  color: #000;\n  font-weight: 300;\n}\n\n.absent_emp_text {\n  background-color: #3998C5;\n  border-radius: 4px;\n  width: 100%;\n  padding: 6px 18px;\n  font-size: 18px;\n  font-weight: bold;\n  margin-bottom: 15px;\n}\n\nlabel {\n  display: inline-block;\n  cursor: pointer;\n  margin-bottom: 0px !important;\n}\n\n.checker:checked + .modal {\n  display: -webkit-box;\n  display: flex;\n}\n\n.modal {\n  display: none;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 25px;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.modal-body {\n  width: 200px;\n  background-color: #01023F;\n  border-radius: 12px;\n  padding: 15px;\n  border-radius: 8px;\n  position: relative;\n}\n\n.modal-content {\n  background-color: #01023F !important;\n}\n\n.modal-footer {\n  overflow: hidden;\n}\n\n.modal-content p {\n  font-size: 20px;\n  margin-top: 10px;\n  margin-bottom: 0px !important;\n}\n\n.reason_text {\n  background-color: #3998C5;\n  border-radius: 5px;\n  font-size: 12px;\n  padding: 8px;\n}\n\n.ok_btn {\n  margin-bottom: 10px;\n}\n\n.ok_btn label {\n  padding: 8px 18px;\n  background-color: #fff;\n  color: #3998C5;\n  border-radius: 30px;\n  font-size: 12px;\n  text-transform: uppercase;\n}\n\n.close_btn label {\n  background-color: #fff;\n  color: #3998C5;\n  font-size: 15px;\n  border-radius: 50%;\n  height: 26px;\n  width: 26px;\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  text-align: center;\n  line-height: 25px;\n}\n\n.alertCustomCss {\n  background-color: #01023F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbGVhdmUtbWFuYWdlci9zcmMvYXBwL0FkbWluL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0FkbWluL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ05KOztBRFNBO0VBQ0ksV0FBQTtBQ05KOztBRFNBO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtBQ05KOztBRFFBO0VBQ0ksZ0JBQUE7QUNMSjs7QURVUTtFQUNJLHNCQUFBO0FDUFo7O0FEY1E7RUFDSSxpQ0FBQTtBQ1haOztBRGdCQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FDYko7O0FEZ0JBO0VBQ0ksZ0NBQUE7QUNiSjs7QURnQkE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0FDYko7O0FEaUJBO0VBQ0ksc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDZEo7O0FEZ0JJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNkUjs7QURtQkE7RUFDSSxlQWhGWTtFQWlGWixXQUFBO0VBQ0EsZ0JBQUE7QUNoQko7O0FEbUJBO0VBQ0ksV0FBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNoQk47O0FEb0JBO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FDakJKOztBRG1CSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNqQlI7O0FEbUJRO0VBQ0ksb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ2pCWjs7QURzQkE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQ25CSjs7QURzQkE7RUFDSSxtQkFBQTtBQ25CSjs7QURzQkE7RUFDSSxnQkFBQTtBQ25CSjs7QURxQkk7RUFDSSx5QkFBQTtFQUNBLGNBcElRO0VBcUlSLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDbkJSOztBRHVCQTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FDcEJKOztBRHVCQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDcEJKOztBRHVCQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNwQko7O0FEdUJBO0VBQ0ksdUJBQUE7QUNwQko7O0FEdUJBO0VBQ0ksb0NBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQXJLWTtFQXNLWixtQkFBQTtFQUNBLHFCQXZLWTtFQXdLWixXQUFBO0VBQ0EsaUJBQUE7QUNwQko7O0FEdUJBO0VBQ0ksNkJBQUE7QUNwQko7O0FEd0JJO0VBQ0ksZUFBQTtFQUNBLGNBbkxRO0FDOEpoQjs7QUR5QkE7RUFDSSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDdEJKOztBRHlCSztFQUNMLGVBQUE7RUFDQSxjQS9MZ0I7QUN5S2hCOztBRDBCSTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUN2QlI7O0FEMkJBO0VBQ0kseUJBM01ZO0VBNE1aLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUN4Qko7O0FENEJBO0VBQ0kscUJBQUE7RUFDQyxlQUFBO0VBQ0EsNkJBQUE7QUN6Qkw7O0FEMkJFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0FDeEJKOztBRDBCRTtFQUNFLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQVEsYUFBQTtFQUNYLG9DQUFBO0FDdEJEOztBRHdCRTtFQUNFLFlBQUE7RUFDQSx5QkE1T1k7RUE2T1osbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ3JCSjs7QUR1QkU7RUFDSyxvQ0FBQTtBQ3BCUDs7QURzQkU7RUFDRSxnQkFBQTtBQ25CSjs7QURxQkM7RUFDRyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQ2xCSjs7QURvQkE7RUFDSSx5QkE1UFk7RUE2UFosa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ2pCSjs7QURtQkE7RUFDSSxtQkFBQTtBQ2hCSjs7QURpQkk7RUFDSSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0F0UVE7RUF1UVIsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNmUjs7QURvQkk7RUFDSSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDakJSOztBRHFCQTtFQUNJLHlCQWhTWTtBQzhRaEIiLCJmaWxlIjoic3JjL2FwcC9BZG1pbi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGFwcF9iYXJfY29sb3I6ICMwMTAyM0Y7XHJcbiRmb250X3NpemUgICAgOiAxNXB4O1xyXG4kdGV4dF9jb2xvciAgIDogIzM5OThDNTtcclxuXHJcbi8vIGhlYWRlciBzdGFydCBoZXJlXHJcblxyXG4vLyBzdGF0dXMgYmFyIGNvbG9yXHJcbnVsIHtcclxuICAgIG1hcmdpbiA6IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxucCB7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA2cHggMHB4O1xyXG4gICAgfVxyXG4ubmF2LWxpbms6aG92ZXIgIHtcclxuICAgIHBhZGRpbmc6IDZweCAwcHg7XHJcbn1cclxuXHJcbiNkZXZpY2UtYW5kcm9pZCB7XHJcbiAgICAuZnJhbWUtY29udGFpbmVyIHtcclxuICAgICAgICAuc3RhdHVzYmFyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbmxhYi1kZXZpY2UtZnJhbWUge1xyXG4gICAgLmZyYW1lLWNvbnRhaW5lciB7XHJcbiAgICAgICAgLnN0YXR1c2JhciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIGhlaWdodDogMTA3cHg7XHJcbiAgICB3aWR0aCA6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXI6Zmlyc3QtY2hpbGQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDEwMjNGICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1tZW51LWJ1dHRvbntcclxuICAgIC0tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1NXB4O1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29uLnBuZykgIWltcG9ydGFudDtcclxuICAgIH1cclxuICBcclxuLnJhb19sb2dvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB3aWR0aCAgICAgICAgICAgOiA0N3B4O1xyXG4gICAgaGVpZ2h0ICAgICAgICAgIDogMjJweDtcclxuICAgIGJvcmRlci1yYWRpdXMgICA6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdCAgICAgOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbiAgICAgIDogY2VudGVyO1xyXG4gICAgcG9zaXRpb24gICAgICAgIDogcmVsYXRpdmU7XHJcblxyXG4gICAgLmxvZ29faW1nIHtcclxuICAgICAgICBtYXgtaGVpZ2h0ICAgIDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGggICAgIDogMTAwJTtcclxuICAgICAgICBoZWlnaHQgICAgICAgIDogMTJweDtcclxuICAgICAgICB3aWR0aCAgICAgICAgIDogMjBweDtcclxuICAgICAgICBtYXJnaW4gICAgICAgIDogYXV0bztcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBvc2l0aW9uICAgICAgOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3AgICAgICAgICAgIDogMHB4O1xyXG4gICAgICAgIGJvdHRvbSAgICAgICAgOiAwcHg7XHJcbiAgICAgICAgbGVmdCAgICAgICAgICA6IDBweDtcclxuICAgICAgICByaWdodCAgICAgICAgIDogMHB4O1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuLm1pZGRsZV9zZWMgc3BhbiB7XHJcbiAgICBmb250LXNpemUgIDogJGZvbnRfc2l6ZTtcclxuICAgIGNvbG9yICAgICAgOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxufVxyXG5cclxuLmljb25fc2Vje1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDE3cHg7XHJcbiAgICAgIHRvcDogMTBweDtcclxuICB9XHJcblxyXG4vLyBjb250ZW50IHN0YXJ0IFxyXG4udXNlcl9wcm9maWxlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQgICAgOiAwO1xyXG4gICAgcmlnaHQgICA6IDBweDtcclxuICAgIHotaW5kZXggOiAxMTExO1xyXG4gICAgYm90dG9tICA6IC0zNHB4O1xyXG5cclxuICAgIC5wcm9maWxlX2ltZyB7XHJcbiAgICAgICAgaGVpZ2h0ICAgICAgIDogNzBweDtcclxuICAgICAgICB3aWR0aCAgICAgICAgOiA3MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBvdmVyZmxvdyAgICAgOiBoaWRkZW47XHJcbiAgICAgICAgbWFyZ2luICAgICAgIDogYXV0bztcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgIG1heC13aWR0aCA6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aCA6IDEwMCU7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYWxsX2NvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuLmxlYXZlX3N0YXR1cyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4udGl0bGVfdGV4dCB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MnB4O1xyXG5cclxuICAgIHAge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgY29sb3IgICAgICAgICA6ICRhcHBfYmFyX2NvbG9yO1xyXG4gICAgICAgIGZvbnQtc2l6ZSAgICAgOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0ICAgOiBib2xkO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b20gOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubGVhdmVfc3RhdHVzIHVsIGxpIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5ICAgOiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aCAgICAgOiAzMy4zMyU7XHJcbn1cclxuXHJcbi5uYXYtdGFicyB7XHJcbiAgICBib3JkZXIgICAgICAgOiAxcHggc29saWQgJHRleHRfY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgcGFkZGluZyAgICAgIDogMHB4O1xyXG59XHJcblxyXG4ubmF2LWxpbmsge1xyXG4gICAgYm9yZGVyICAgICAgICAgICAgICAgICA6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXMgOiAwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xyXG4gICAgcGFkZGluZyAgICAgICAgICAgICAgICA6IDZweCAwcHg7XHJcbiAgICBmb250LXNpemUgICAgICAgICAgICAgIDogMTVweDtcclxuICAgIGNvbG9yICAgICAgICAgICAgICAgICAgOiAjMDAwO1xyXG59XHJcblxyXG4ubmF2LWxpbms6aG92ZXIge1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXYtaXRlbSBhLmFjdGl2ZSB7XHJcbiAgICBib3JkZXIgICAgICAgICAgOiAxcHggc29saWQgJHRleHRfY29sb3IgIWltcG9ydGFudDtcclxuICAgIHRleHQtZGVjb3JhdGlvbiA6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGV4dF9jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXMgICA6IDMwcHg7XHJcbiAgICBib3JkZXItY29sb3IgICAgOiAkdGV4dF9jb2xvcjtcclxuICAgIGNvbG9yICAgICAgICAgICA6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodCAgICAgOiBib2xkO1xyXG59XHJcblxyXG4ubmF2LXRhYnMgLm5hdi1pdGVtIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYXByb3ZlZF9sZWF2ZXMge1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yICAgIDogJHRleHRfY29sb3I7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggMTBweCAycHggI2RjZGNkYztcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIHBhZGRpbmcgICA6IDEwcHg7XHJcbn1cclxuLmFic2VudF91c2VyX25hbWV7XHJcbiAgICAgYXtcclxuZm9udC1zaXplOiAxMnB4O1xyXG5jb2xvcjogJHRleHRfY29sb3I7XHJcbiAgICB9XHJcbn1cclxuLmRhdGFOb3RBdmFsaWJsZSB7XHJcbiAgICBzcGFuIHtcclxuICAgICAgICBmb250LXNpemUgIDogMTVweDtcclxuICAgICAgICBjb2xvciAgICAgIDogIzAwMDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYWJzZW50X2VtcF90ZXh0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXh0X2NvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1cyAgIDogNHB4O1xyXG4gICAgd2lkdGggICAgICAgICAgIDogMTAwJTtcclxuICAgIHBhZGRpbmcgICAgICAgICA6IDZweCAxOHB4O1xyXG4gICAgZm9udC1zaXplICAgICAgIDogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0ICAgICA6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG5cclxubGFiZWwge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICBtYXJnaW4tYm90dG9tOiAwcHghaW1wb3J0YW50O1xyXG4gIH1cclxuICAuY2hlY2tlcjpjaGVja2VkICsgLm1vZGFsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIC5tb2RhbCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO3BhZGRpbmc6IDI1cHg7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC40KTtcclxuICB9XHJcbiAgLm1vZGFsLWJvZHkge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGFwcF9iYXJfY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFwcF9iYXJfY29sb3IhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubW9kYWwtZm9vdGVyIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gLm1vZGFsLWNvbnRlbnQgcHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHghaW1wb3J0YW50O1xyXG59XHJcbi5yZWFzb25fdGV4dHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXh0X2NvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG59XHJcbi5va19idG57XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbGFiZWx7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDE4cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBjb2xvcjogJHRleHRfY29sb3I7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIH1cclxufVxyXG5cclxuLmNsb3NlX2J0bntcclxuICAgIGxhYmVse1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgY29sb3I6ICMzOTk4QzU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogLTEwcHg7XHJcbiAgICAgICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIH1cclxufVxyXG5cclxuLmFsZXJ0Q3VzdG9tQ3Nze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGFwcF9iYXJfY29sb3I7XHJcbn1cclxuXHJcbmltZy5sb2FkaW5nX2ltZ3tcclxuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vIHRvcDowO1xyXG4gICAgLy8gYm90dG9tOiAwO1xyXG4gICAgLy8gbGVmdDogMDtcclxuICAgIC8vIHJpZ2h0OiAwO1xyXG4gICAgLy8gaGVpZ2h0OiAyNXB4O1xyXG59XHJcbiIsInVsIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxucCB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5hOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiA2cHggMHB4O1xufVxuXG4ubmF2LWxpbms6aG92ZXIge1xuICBwYWRkaW5nOiA2cHggMHB4O1xufVxuXG4jZGV2aWNlLWFuZHJvaWQgLmZyYW1lLWNvbnRhaW5lciAuc3RhdHVzYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuaW9ubGFiLWRldmljZS1mcmFtZSAuZnJhbWUtY29udGFpbmVyIC5zdGF0dXNiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgaGVpZ2h0OiAxMDdweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXI6Zmlyc3QtY2hpbGQge1xuICAtLWJhY2tncm91bmQ6ICMwMTAyM0YgIWltcG9ydGFudDtcbn1cblxuaW9uLW1lbnUtYnV0dG9uIHtcbiAgLS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogNTVweDtcbn1cblxuLnJhb19sb2dvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDQ3cHg7XG4gIGhlaWdodDogMjJweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnJhb19sb2dvIC5sb2dvX2ltZyB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMnB4O1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xufVxuXG4ubWlkZGxlX3NlYyBzcGFuIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLmljb25fc2VjIHtcbiAgei1pbmRleDogLTE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE3cHg7XG4gIHRvcDogMTBweDtcbn1cblxuLnVzZXJfcHJvZmlsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDBweDtcbiAgei1pbmRleDogMTExMTtcbiAgYm90dG9tOiAtMzRweDtcbn1cbi51c2VyX3Byb2ZpbGUgLnByb2ZpbGVfaW1nIHtcbiAgaGVpZ2h0OiA3MHB4O1xuICB3aWR0aDogNzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IGF1dG87XG59XG4udXNlcl9wcm9maWxlIC5wcm9maWxlX2ltZyBpbWcge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbi5hbGxfY29udGVudCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLmxlYXZlX3N0YXR1cyB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi50aXRsZV90ZXh0IHtcbiAgbWFyZ2luLXRvcDogNDJweDtcbn1cbi50aXRsZV90ZXh0IHAge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzAxMDIzRjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmxlYXZlX3N0YXR1cyB1bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDMzLjMzJTtcbn1cblxuLm5hdi10YWJzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzM5OThDNTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4ubmF2LWxpbmsge1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xuICBwYWRkaW5nOiA2cHggMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4ubmF2LWxpbms6aG92ZXIge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLm5hdi1pdGVtIGEuYWN0aXZlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzM5OThDNSAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTk4QzU7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJvcmRlci1jb2xvcjogIzM5OThDNTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubmF2LXRhYnMgLm5hdi1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hcHJvdmVkX2xlYXZlcyBzcGFuIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzM5OThDNTtcbn1cblxuLmNhcmQge1xuICBib3gtc2hhZG93OiA0cHggNHB4IDEwcHggMnB4ICNkY2RjZGM7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmFic2VudF91c2VyX25hbWUgYSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMzOTk4QzU7XG59XG5cbi5kYXRhTm90QXZhbGlibGUgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5hYnNlbnRfZW1wX3RleHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk5OEM1O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA2cHggMThweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxubGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jaGVja2VyOmNoZWNrZWQgKyAubW9kYWwge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubW9kYWwge1xuICBkaXNwbGF5OiBub25lO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLm1vZGFsLWJvZHkge1xuICB3aWR0aDogMjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTAyM0Y7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubW9kYWwtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTAyM0YgIWltcG9ydGFudDtcbn1cblxuLm1vZGFsLWZvb3RlciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tb2RhbC1jb250ZW50IHAge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG4ucmVhc29uX3RleHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk5OEM1O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4ub2tfYnRuIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5va19idG4gbGFiZWwge1xuICBwYWRkaW5nOiA4cHggMThweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICMzOTk4QzU7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmNsb3NlX2J0biBsYWJlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjMzk5OEM1O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAyNnB4O1xuICB3aWR0aDogMjZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMHB4O1xuICByaWdodDogLTEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG59XG5cbi5hbGVydEN1c3RvbUNzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTAyM0Y7XG59Il19 */"

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
        // console.log(days);
        if (days < 0) {
            return 'You have no leaves..';
        }
        else {
            const noOfDays = Math.floor(days / 8);
            // console.log("Days", noOfDays);
            const noOfhours = days % 8;
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

module.exports = "#device-android .frame-container .statusbar {\n  background-color: #fff;\n}\n\nionlab-device-frame .frame-container .statusbar {\n  background-color: #fff !important;\n}\n\nion-toolbar .toolbar-color1 {\n  height: 52px;\n  width: 100%;\n}\n\nion-header ion-toolbar:first-child {\n  --background: #01023F !important;\n}\n\nion-menu-button {\n  --color: transparent;\n  --padding-start: 55px;\n}\n\n.rao_logo {\n  background-color: #fff;\n  width: 47px;\n  height: 22px;\n  border-radius: 30px;\n  margin-left: 10px;\n  text-align: center;\n  position: relative;\n}\n\n.rao_logo .logo_img {\n  max-height: 100%;\n  max-width: 100%;\n  height: 12px;\n  width: 20px;\n  margin: auto;\n  vertical-align: center;\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n\n.middle_sec span {\n  font-size: 15px;\n  color: #fff;\n  font-weight: 100;\n}\n\n.icon_sec {\n  z-index: -1;\n  position: absolute;\n  right: 17px;\n  top: 10px;\n}\n\n.contect_class {\n  padding: 10px;\n}\n\n.contect_class .card {\n  box-shadow: 4px 4px 10px 2px #dcdcdc;\n  margin-top: 5px;\n  padding: 10px;\n}\n\n.contect_class .pending_leaves span {\n  font-size: 12px;\n}\n\n.contect_class .pending_leaves .user_count,\n.contect_class .pending_leaves .user_name {\n  color: #3998C5;\n}\n\n.contect_class .pending_leaves .check_cross,\n.contect_class .pending_leaves .check_right {\n  cursor: pointer;\n  margin-top: 3px;\n}\n\n.contect_class .number_of_days {\n  color: #01023F;\n  text-align: center;\n}\n\nlabel {\n  display: inline-block;\n  cursor: pointer;\n  margin-bottom: 0px !important;\n}\n\n.checker:checked + .modal {\n  display: -webkit-box;\n  display: flex;\n}\n\n.modal {\n  display: none;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 25px;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.modal-body {\n  width: 200px;\n  background-color: #01023F;\n  border-radius: 12px;\n  padding: 15px;\n  border-radius: 8px;\n  position: relative;\n}\n\n.modal-content {\n  background-color: #01023F !important;\n}\n\n.modal-footer {\n  overflow: hidden;\n}\n\n.modal-content p {\n  font-size: 20px;\n  margin-top: 10px;\n  margin-bottom: 0px !important;\n}\n\n.reason_text {\n  background-color: #3998C5;\n  border-radius: 5px;\n  font-size: 12px;\n  padding: 8px;\n}\n\n.ok_btn {\n  margin-bottom: 10px;\n}\n\n.ok_btn label {\n  padding: 8px 18px;\n  background-color: #fff;\n  color: #3998C5;\n  border-radius: 30px;\n  font-size: 12px;\n  text-transform: uppercase;\n}\n\n.close_btn label {\n  background-color: #fff;\n  color: #3998C5;\n  font-size: 15px;\n  border-radius: 50%;\n  height: 26px;\n  width: 26px;\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  text-align: center;\n  line-height: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbGVhdmUtbWFuYWdlci9zcmMvYXBwL0FkbWluL2xlYXZlLWFwcGxpY2F0aW9uL2xlYXZlLWFwcGxpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9BZG1pbi9sZWF2ZS1hcHBsaWNhdGlvbi9sZWF2ZS1hcHBsaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTSTtFQUNFLHNCQUFBO0FDUk47O0FEZUk7RUFDRSxpQ0FBQTtBQ1pOOztBRG1CRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDaEJKOztBRG9CQTtFQUNFLGdDQUFBO0FDakJGOztBRG9CQTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7QUNqQkY7O0FEcUJBO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDbEJGOztBRG9CRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDbEJKOztBRHVCQTtFQUNFLGVBbEVjO0VBbUVkLFdBQUE7RUFDQSxnQkFBQTtBQ3BCRjs7QUR1QkE7RUFDRSxXQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ3BCSjs7QUQwQkE7RUFDRSxhQUFBO0FDdkJGOztBRHlCRTtFQUNFLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUN2Qko7O0FEMkJJO0VBQ0UsZUFBQTtBQ3pCTjs7QUQ0Qkk7O0VBRUUsY0FBQTtBQzFCTjs7QUQ2Qkk7O0VBRUUsZUFBQTtFQUNBLGVBQUE7QUMzQk47O0FEK0JFO0VBQ0UsY0E3R1k7RUE4R1osa0JBQUE7QUM3Qko7O0FEaUNBO0VBQ0UscUJBQUE7RUFDQyxlQUFBO0VBQ0EsNkJBQUE7QUM5Qkg7O0FEZ0NBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0FDN0JGOztBRCtCQTtFQUNFLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQVEsYUFBQTtFQUNWLG9DQUFBO0FDM0JBOztBRDZCQTtFQUNFLFlBQUE7RUFDQSx5QkF2SWM7RUF3SWQsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQzFCRjs7QUQ0QkE7RUFDSyxvQ0FBQTtBQ3pCTDs7QUQyQkE7RUFDRSxnQkFBQTtBQ3hCRjs7QUQwQkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQ3ZCRjs7QUR5QkE7RUFDRSx5QkF2SmM7RUF3SmQsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ3RCRjs7QUR3QkE7RUFDRSxtQkFBQTtBQ3JCRjs7QURzQkU7RUFDSSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FqS1U7RUFrS1YsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNwQk47O0FEeUJFO0VBQ0ksc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ3RCTiIsImZpbGUiOiJzcmMvYXBwL0FkbWluL2xlYXZlLWFwcGxpY2F0aW9uL2xlYXZlLWFwcGxpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGFwcF9iYXJfY29sb3I6ICMwMTAyM0Y7XHJcbiRmb250X3NpemUgICAgOiAxNXB4O1xyXG4kdGV4dF9jb2xvciAgIDogIzM5OThDNTtcclxuXHJcbi8vIGhlYWRlciBzdGFydCBoZXJlXHJcblxyXG4vLyBzdGF0dXMgYmFyIGNvbG9yXHJcbiNkZXZpY2UtYW5kcm9pZCB7XHJcbiAgLmZyYW1lLWNvbnRhaW5lciB7XHJcbiAgICAuc3RhdHVzYmFyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmlvbmxhYi1kZXZpY2UtZnJhbWUge1xyXG4gIC5mcmFtZS1jb250YWluZXIge1xyXG4gICAgLnN0YXR1c2JhciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLnRvb2xiYXItY29sb3IxIHtcclxuICAgIGhlaWdodDogNTJweDtcclxuICAgIHdpZHRoIDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXI6Zmlyc3QtY2hpbGQge1xyXG4gIC0tYmFja2dyb3VuZDogIzAxMDIzRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tbWVudS1idXR0b257XHJcbiAgLS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiA1NXB4O1xyXG4gIC8vIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbi5wbmcpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuLnJhb19sb2dvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHdpZHRoICAgICAgICAgICA6IDQ3cHg7XHJcbiAgaGVpZ2h0ICAgICAgICAgIDogMjJweDtcclxuICBib3JkZXItcmFkaXVzICAgOiAzMHB4O1xyXG4gIG1hcmdpbi1sZWZ0ICAgICA6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbiAgICAgIDogY2VudGVyO1xyXG4gIHBvc2l0aW9uICAgICAgICA6IHJlbGF0aXZlO1xyXG5cclxuICAubG9nb19pbWcge1xyXG4gICAgbWF4LWhlaWdodCAgICA6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGggICAgIDogMTAwJTtcclxuICAgIGhlaWdodCAgICAgICAgOiAxMnB4O1xyXG4gICAgd2lkdGggICAgICAgICA6IDIwcHg7XHJcbiAgICBtYXJnaW4gICAgICAgIDogYXV0bztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbiAgICAgIDogYWJzb2x1dGU7XHJcbiAgICB0b3AgICAgICAgICAgIDogMHB4O1xyXG4gICAgYm90dG9tICAgICAgICA6IDBweDtcclxuICAgIGxlZnQgICAgICAgICAgOiAwcHg7XHJcbiAgICByaWdodCAgICAgICAgIDogMHB4O1xyXG5cclxuICB9XHJcbn1cclxuXHJcbi5taWRkbGVfc2VjIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZSAgOiAkZm9udF9zaXplO1xyXG4gIGNvbG9yICAgICAgOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuXHJcbi5pY29uX3NlY3tcclxuICB6LWluZGV4OiAtMTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxN3B4O1xyXG4gICAgdG9wOiAxMHB4O1xyXG59XHJcblxyXG5cclxuLy8gY29udGVudCBzdGFydCBoZXJlXHJcblxyXG4uY29udGVjdF9jbGFzcyB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgLmNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCAxMHB4IDJweCAjZGNkY2RjO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZyAgIDogMTBweDtcclxuICB9XHJcblxyXG4gIC5wZW5kaW5nX2xlYXZlcyB7XHJcbiAgICBzcGFuIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC51c2VyX2NvdW50LFxyXG4gICAgLnVzZXJfbmFtZSB7XHJcbiAgICAgIGNvbG9yOiAjMzk5OEM1O1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGVja19jcm9zcyxcclxuICAgIC5jaGVja19yaWdodCB7XHJcbiAgICAgIGN1cnNvciAgICA6IHBvaW50ZXI7XHJcbiAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5udW1iZXJfb2ZfZGF5cyB7XHJcbiAgICBjb2xvciAgICAgOiAkYXBwX2Jhcl9jb2xvcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgbWFyZ2luLWJvdHRvbTogMHB4IWltcG9ydGFudDtcclxufVxyXG4uY2hlY2tlcjpjaGVja2VkICsgLm1vZGFsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5tb2RhbCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7cGFkZGluZzogMjVweDtcclxuYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuNCk7XHJcbn1cclxuLm1vZGFsLWJvZHkge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXBwX2Jhcl9jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFwcF9iYXJfY29sb3IhaW1wb3J0YW50O1xyXG59XHJcbi5tb2RhbC1mb290ZXIge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLm1vZGFsLWNvbnRlbnQgcHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHghaW1wb3J0YW50O1xyXG59XHJcbi5yZWFzb25fdGV4dHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGV4dF9jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxufVxyXG4ub2tfYnRue1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgbGFiZWx7XHJcbiAgICAgIHBhZGRpbmc6IDhweCAxOHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICBjb2xvcjogJHRleHRfY29sb3I7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbn1cclxuXHJcbi5jbG9zZV9idG57XHJcbiAgbGFiZWx7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIGNvbG9yOiAjMzk5OEM1O1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgICB3aWR0aDogMjZweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IC0xMHB4O1xyXG4gICAgICByaWdodDogLTEwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgfVxyXG59IiwiI2RldmljZS1hbmRyb2lkIC5mcmFtZS1jb250YWluZXIgLnN0YXR1c2JhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbmlvbmxhYi1kZXZpY2UtZnJhbWUgLmZyYW1lLWNvbnRhaW5lciAuc3RhdHVzYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG5pb24tdG9vbGJhciAudG9vbGJhci1jb2xvcjEge1xuICBoZWlnaHQ6IDUycHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24taGVhZGVyIGlvbi10b29sYmFyOmZpcnN0LWNoaWxkIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDEwMjNGICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gIC0tY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDU1cHg7XG59XG5cbi5yYW9fbG9nbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiA0N3B4O1xuICBoZWlnaHQ6IDIycHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5yYW9fbG9nbyAubG9nb19pbWcge1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTJweDtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbn1cblxuLm1pZGRsZV9zZWMgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbi5pY29uX3NlYyB7XG4gIHotaW5kZXg6IC0xO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxN3B4O1xuICB0b3A6IDEwcHg7XG59XG5cbi5jb250ZWN0X2NsYXNzIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5jb250ZWN0X2NsYXNzIC5jYXJkIHtcbiAgYm94LXNoYWRvdzogNHB4IDRweCAxMHB4IDJweCAjZGNkY2RjO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uY29udGVjdF9jbGFzcyAucGVuZGluZ19sZWF2ZXMgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5jb250ZWN0X2NsYXNzIC5wZW5kaW5nX2xlYXZlcyAudXNlcl9jb3VudCxcbi5jb250ZWN0X2NsYXNzIC5wZW5kaW5nX2xlYXZlcyAudXNlcl9uYW1lIHtcbiAgY29sb3I6ICMzOTk4QzU7XG59XG4uY29udGVjdF9jbGFzcyAucGVuZGluZ19sZWF2ZXMgLmNoZWNrX2Nyb3NzLFxuLmNvbnRlY3RfY2xhc3MgLnBlbmRpbmdfbGVhdmVzIC5jaGVja19yaWdodCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuLmNvbnRlY3RfY2xhc3MgLm51bWJlcl9vZl9kYXlzIHtcbiAgY29sb3I6ICMwMTAyM0Y7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jaGVja2VyOmNoZWNrZWQgKyAubW9kYWwge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubW9kYWwge1xuICBkaXNwbGF5OiBub25lO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLm1vZGFsLWJvZHkge1xuICB3aWR0aDogMjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTAyM0Y7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubW9kYWwtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTAyM0YgIWltcG9ydGFudDtcbn1cblxuLm1vZGFsLWZvb3RlciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tb2RhbC1jb250ZW50IHAge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG4ucmVhc29uX3RleHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk5OEM1O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4ub2tfYnRuIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5va19idG4gbGFiZWwge1xuICBwYWRkaW5nOiA4cHggMThweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICMzOTk4QzU7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmNsb3NlX2J0biBsYWJlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjMzk5OEM1O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAyNnB4O1xuICB3aWR0aDogMjZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMHB4O1xuICByaWdodDogLTEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG59Il19 */"

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
        // console.log(days);
        if (days < 0) {
            return 'You have no leaves..';
        }
        else {
            const noOfDays = Math.floor(days / 8);
            // console.log("Days", noOfDays);
            const noOfhours = days % 8;
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

module.exports = "#device-android .frame-container .statusbar {\n  background-color: #fff;\n}\n\nionlab-device-frame .frame-container .statusbar {\n  background-color: #fff !important;\n}\n\nion-toolbar .toolbar-color1 {\n  height: 52px;\n  width: 100%;\n}\n\nion-header ion-toolbar:first-child {\n  --background: #01023F !important;\n}\n\nion-menu-button {\n  --color: transparent;\n  --padding-start: 55px;\n}\n\n.rao_logo {\n  background-color: #fff;\n  width: 47px;\n  height: 22px;\n  border-radius: 30px;\n  margin-left: 10px;\n  text-align: center;\n  position: relative;\n}\n\n.rao_logo .logo_img {\n  max-height: 100%;\n  max-width: 100%;\n  height: 12px;\n  width: 20px;\n  margin: auto;\n  vertical-align: center;\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n\n.middle_sec span {\n  font-size: 15px;\n  color: #fff;\n  font-weight: 100;\n}\n\n.icon_sec {\n  z-index: -1;\n  position: absolute;\n  right: 17px;\n  top: 10px;\n}\n\n.card-content {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.dataNotAvalible p {\n  text-align: center;\n  font-size: 15px;\n  margin-top: 30px;\n  color: #000;\n}\n\n.all_notification {\n  padding: 10px;\n}\n\n.card {\n  box-shadow: 4px 4px 10px 2px #dcdcdc;\n  margin-bottom: 8px;\n  padding: 5px;\n}\n\n.card .card-content {\n  min-height: 34px;\n}\n\n.notify_name {\n  display: inline-block;\n  vertical-align: -webkit-baseline-middle;\n}\n\n.notify_name span {\n  font-size: 12px;\n  margin-bottom: 0px !important;\n}\n\n.notify_name .user_name {\n  color: #01023F;\n}\n\n.notify_name .applied_date {\n  color: #3998C5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbGVhdmUtbWFuYWdlci9zcmMvYXBwL0FkbWluL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0FkbWluL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUVE7RUFDSSxzQkFBQTtBQ1BaOztBRGNRO0VBQ0ksaUNBQUE7QUNYWjs7QURpQkk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ2RSOztBRGtCQTtFQUNJLGdDQUFBO0FDZko7O0FEa0JBO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtBQ2ZKOztBRGlCQTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ2RKOztBRGdCSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDZFI7O0FEbUJBO0VBQ0ksZUE3RFk7RUE4RFosV0FBQTtFQUNBLGdCQUFBO0FDaEJKOztBRG1CQTtFQUNJLFdBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDaEJOOztBRHNCQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUNuQko7O0FEdUJJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDcEJSOztBRHdCQTtFQUNJLGFBQUE7QUNyQko7O0FEd0JBO0VBQ0ksb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNyQko7O0FEdUJJO0VBQ0ksZ0JBQUE7QUNyQlI7O0FEeUJBO0VBQ0kscUJBQUE7RUFDQSx1Q0FBQTtBQ3RCSjs7QUR3Qkk7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7QUN0QlI7O0FEeUJJO0VBQ0ksY0FuSFE7QUM0RmhCOztBRDBCSTtFQUNJLGNBckhRO0FDNkZoQiIsImZpbGUiOiJzcmMvYXBwL0FkbWluL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBoZWFkZXIgZGVzaWduIHN0YXJ0IFxyXG4kYXBwX2Jhcl9jb2xvcjogIzAxMDIzRjtcclxuJGZvbnRfc2l6ZSAgICA6IDE1cHg7XHJcbiR0ZXh0X2NvbG9yICAgOiAjMzk5OEM1O1xyXG5cclxuLy8gc3RhdHVzIGJhciBjb2xvclxyXG4jZGV2aWNlLWFuZHJvaWQge1xyXG4gICAgLmZyYW1lLWNvbnRhaW5lciB7XHJcbiAgICAgICAgLnN0YXR1c2JhciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb25sYWItZGV2aWNlLWZyYW1lIHtcclxuICAgIC5mcmFtZS1jb250YWluZXIge1xyXG4gICAgICAgIC5zdGF0dXNiYXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgICAudG9vbGJhci1jb2xvcjEge1xyXG4gICAgICAgIGhlaWdodDogNTJweDtcclxuICAgICAgICB3aWR0aCA6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXI6Zmlyc3QtY2hpbGQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDEwMjNGICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1tZW51LWJ1dHRvbntcclxuICAgIC0tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1NXB4O1xyXG4gICAgICAgfVxyXG4ucmFvX2xvZ28ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoICAgICAgICAgICA6IDQ3cHg7XHJcbiAgICBoZWlnaHQgICAgICAgICAgOiAyMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1cyAgIDogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0ICAgICA6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduICAgICAgOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbiAgICAgICAgOiByZWxhdGl2ZTtcclxuXHJcbiAgICAubG9nb19pbWcge1xyXG4gICAgICAgIG1heC1oZWlnaHQgICAgOiAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aCAgICAgOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodCAgICAgICAgOiAxMnB4O1xyXG4gICAgICAgIHdpZHRoICAgICAgICAgOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbiAgICAgICAgOiBhdXRvO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb24gICAgICA6IGFic29sdXRlO1xyXG4gICAgICAgIHRvcCAgICAgICAgICAgOiAwcHg7XHJcbiAgICAgICAgYm90dG9tICAgICAgICA6IDBweDtcclxuICAgICAgICBsZWZ0ICAgICAgICAgIDogMHB4O1xyXG4gICAgICAgIHJpZ2h0ICAgICAgICAgOiAwcHg7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG4ubWlkZGxlX3NlYyBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZSAgOiAkZm9udF9zaXplO1xyXG4gICAgY29sb3IgICAgICA6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG59XHJcblxyXG4uaWNvbl9zZWN7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMTdweDtcclxuICAgICAgdG9wOiAxMHB4O1xyXG4gIH1cclxuICBcclxuXHJcbi8vICBjb250ZW50IGRlc2lnbiBzdGFydFxyXG5cclxuLmNhcmQtY29udGVudCB7XHJcbiAgICBwYWRkaW5nLXRvcCAgIDogMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxufVxyXG5cclxuLmRhdGFOb3RBdmFsaWJsZSB7XHJcbiAgICBwIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplIDogMTVweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgIGNvbG9yICAgICA6ICMwMDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hbGxfbm90aWZpY2F0aW9uIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGJveC1zaGFkb3cgICA6IDRweCA0cHggMTBweCAycHggI2RjZGNkYztcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIHBhZGRpbmcgICAgICA6IDVweDtcclxuXHJcbiAgICAuY2FyZC1jb250ZW50IHtcclxuICAgICAgICBtaW4taGVpZ2h0OiAzNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubm90aWZ5X25hbWUge1xyXG4gICAgZGlzcGxheSAgICAgICA6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiAtd2Via2l0LWJhc2VsaW5lLW1pZGRsZTtcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBmb250LXNpemUgICAgOiAxMnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC51c2VyX25hbWUge1xyXG4gICAgICAgIGNvbG9yOiAkYXBwX2Jhcl9jb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICAuYXBwbGllZF9kYXRlIHtcclxuICAgICAgICBjb2xvcjogJHRleHRfY29sb3I7XHJcbiAgICB9XHJcbn0iLCIjZGV2aWNlLWFuZHJvaWQgLmZyYW1lLWNvbnRhaW5lciAuc3RhdHVzYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuaW9ubGFiLWRldmljZS1mcmFtZSAuZnJhbWUtY29udGFpbmVyIC5zdGF0dXNiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10b29sYmFyIC50b29sYmFyLWNvbG9yMSB7XG4gIGhlaWdodDogNTJweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXI6Zmlyc3QtY2hpbGQge1xuICAtLWJhY2tncm91bmQ6ICMwMTAyM0YgIWltcG9ydGFudDtcbn1cblxuaW9uLW1lbnUtYnV0dG9uIHtcbiAgLS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogNTVweDtcbn1cblxuLnJhb19sb2dvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDQ3cHg7XG4gIGhlaWdodDogMjJweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnJhb19sb2dvIC5sb2dvX2ltZyB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMnB4O1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xufVxuXG4ubWlkZGxlX3NlYyBzcGFuIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLmljb25fc2VjIHtcbiAgei1pbmRleDogLTE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE3cHg7XG4gIHRvcDogMTBweDtcbn1cblxuLmNhcmQtY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbi5kYXRhTm90QXZhbGlibGUgcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBjb2xvcjogIzAwMDtcbn1cblxuLmFsbF9ub3RpZmljYXRpb24ge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY2FyZCB7XG4gIGJveC1zaGFkb3c6IDRweCA0cHggMTBweCAycHggI2RjZGNkYztcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG4uY2FyZCAuY2FyZC1jb250ZW50IHtcbiAgbWluLWhlaWdodDogMzRweDtcbn1cblxuLm5vdGlmeV9uYW1lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogLXdlYmtpdC1iYXNlbGluZS1taWRkbGU7XG59XG4ubm90aWZ5X25hbWUgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG4ubm90aWZ5X25hbWUgLnVzZXJfbmFtZSB7XG4gIGNvbG9yOiAjMDEwMjNGO1xufVxuLm5vdGlmeV9uYW1lIC5hcHBsaWVkX2RhdGUge1xuICBjb2xvcjogIzM5OThDNTtcbn0iXX0= */"

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

module.exports = "@charset \"UTF-8\";\n#device-android .frame-container .statusbar {\n  background-color: #fff;\n}\nionlab-device-frame .frame-container .statusbar {\n  background-color: #fff !important;\n}\nion-toolbar .toolbar-color1 {\n  height: 52px;\n  width: 100%;\n}\nion-header ion-toolbar:first-child {\n  --background: #01023F !important;\n}\nion-menu-button {\n  --color: transparent;\n  --padding-start: 55px;\n}\n.rao_logo {\n  background-color: #fff;\n  width: 47px;\n  height: 22px;\n  border-radius: 30px;\n  margin-left: 10px;\n  text-align: center;\n  position: relative;\n}\n.rao_logo .logo_img {\n  max-height: 100%;\n  max-width: 100%;\n  height: 12px;\n  width: 20px;\n  margin: auto;\n  vertical-align: center;\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n.middle_sec span {\n  font-size: 15px;\n  color: #fff;\n  font-weight: 100;\n}\n.icon_sec {\n  z-index: -1;\n  position: absolute;\n  right: 17px;\n  top: 10px;\n}\n.apply_leave {\n  padding: 10px;\n}\n.apply_leave .apply_leave_text {\n  background-color: #3998C5;\n  border-radius: 4px;\n  width: 100%;\n  padding: 7px 18px;\n  font-size: 18px;\n  font-weight: bold;\n}\n.select_time {\n  margin: 15px 0px;\n}\n.select_time ion-item {\n  box-shadow: 4px 4px 10px 2px #dcdcdc;\n  border: 1px solid #D9D9D9;\n  border-radius: 30px;\n  height: 38px;\n}\n.select_time ion-item ion-label {\n  color: #D9D9D9;\n  font-size: 12px;\n  margin-top: -3px;\n}\n.leave_details .card {\n  box-shadow: 4px 4px 10px 2px #dcdcdc;\n  margin-bottom: 4px;\n  padding: 10px;\n}\n.leave_details .card span {\n  font-size: 12px;\n  color: #3998C5;\n}\nion-datetime {\n  color: #D9D9D9;\n  font-size: 14px;\n  margin-top: -10px;\n  position: relative;\n  padding: 0px;\n  width: 140px;\n}\nion-datetime::after {\n  content: \"❯\";\n  position: absolute;\n  top: 0px;\n  right: 4px;\n  z-index: 1;\n  color: #D9D9D9;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n.item-native {\n  padding: 0px !important;\n}\n.datetime-text {\n  font-size: 12px;\n}\nlabel {\n  display: inline-block;\n  cursor: pointer;\n  margin-bottom: 0px !important;\n}\n.checker:checked + .modal {\n  display: -webkit-box;\n  display: flex;\n}\n.modal {\n  display: none;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 25px;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.modal-body {\n  width: 200px;\n  background-color: #01023F;\n  border-radius: 12px;\n  padding: 15px;\n  border-radius: 8px;\n  position: relative;\n}\n.modal-content {\n  background-color: #01023F !important;\n}\n.modal-footer {\n  overflow: hidden;\n}\n.modal-content p {\n  font-size: 20px;\n  margin-top: 10px;\n  margin-bottom: 0px !important;\n}\n.reason_text {\n  background-color: #3998C5;\n  border-radius: 5px;\n  font-size: 12px;\n  padding: 8px;\n}\n.ok_btn {\n  margin-bottom: 10px;\n}\n.ok_btn label {\n  padding: 8px 18px;\n  background-color: #fff;\n  color: #3998C5;\n  border-radius: 30px;\n  font-size: 12px;\n  text-transform: uppercase;\n}\n.close_btn label {\n  background-color: #fff;\n  color: #3998C5;\n  font-size: 15px;\n  border-radius: 50%;\n  height: 26px;\n  width: 26px;\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  text-align: center;\n  line-height: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWRtaW4vcmVwb3J0cy9yZXBvcnRzLmNvbXBvbmVudC5zY3NzIiwiL3Zhci93d3cvaHRtbC9sZWF2ZS1tYW5hZ2VyL3NyYy9hcHAvQWRtaW4vcmVwb3J0cy9yZXBvcnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ1FaO0VBQ0Usc0JBQUE7QUROTjtBQ2FJO0VBQ0UsaUNBQUE7QURWTjtBQ2dCRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FEYko7QUNpQkE7RUFDRSxnQ0FBQTtBRGRGO0FDaUJBO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtBRGRGO0FDa0JBO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FEZkY7QUNpQkU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBRGZKO0FDb0JBO0VBQ0UsZUEvRGM7RUFnRWQsV0FBQTtFQUNBLGdCQUFBO0FEakJGO0FDb0JBO0VBQ0UsV0FBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QURqQko7QUNvQkE7RUFDRSxhQUFBO0FEakJGO0FDbUJFO0VBQ0UseUJBaEZZO0VBaUZaLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FEakJKO0FDc0JBO0VBQ0UsZ0JBQUE7QURuQkY7QUNxQkU7RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FEbkJKO0FDcUJJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRG5CTjtBQ3lCRTtFQUNFLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FEdEJKO0FDd0JJO0VBQ0UsZUFBQTtFQUNBLGNBbkhVO0FENkZoQjtBQzJCQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FEeEJGO0FDMkJBO0VBQ0UsWUFBQTtFQUNDLGtCQUFBO0VBQ0QsUUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7QUR4QkY7QUMwQkM7RUFDRCx1QkFBQTtBRHZCQTtBQ3lCQztFQUNFLGVBQUE7QUR0Qkg7QUN5QkM7RUFDQyxxQkFBQTtFQUNDLGVBQUE7RUFDQSw2QkFBQTtBRHRCSDtBQ3dCQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtBRHJCRjtBQ3VCQTtFQUNFLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQVEsYUFBQTtFQUNWLG9DQUFBO0FEbkJBO0FDcUJBO0VBQ0UsWUFBQTtFQUNBLHlCQXZLYztFQXdLZCxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FEbEJGO0FDb0JBO0VBQ0ssb0NBQUE7QURqQkw7QUNtQkE7RUFDRSxnQkFBQTtBRGhCRjtBQ2tCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FEZkY7QUNpQkE7RUFDRSx5QkF4TGM7RUF5TGQsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBRGRGO0FDZ0JBO0VBQ0UsbUJBQUE7QURiRjtBQ2NFO0VBQ0ksaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBbE1VO0VBbU1WLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FEWk47QUNpQkU7RUFDSSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FEZE4iLCJmaWxlIjoic3JjL2FwcC9BZG1pbi9yZXBvcnRzL3JlcG9ydHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4jZGV2aWNlLWFuZHJvaWQgLmZyYW1lLWNvbnRhaW5lciAuc3RhdHVzYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuaW9ubGFiLWRldmljZS1mcmFtZSAuZnJhbWUtY29udGFpbmVyIC5zdGF0dXNiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10b29sYmFyIC50b29sYmFyLWNvbG9yMSB7XG4gIGhlaWdodDogNTJweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXI6Zmlyc3QtY2hpbGQge1xuICAtLWJhY2tncm91bmQ6ICMwMTAyM0YgIWltcG9ydGFudDtcbn1cblxuaW9uLW1lbnUtYnV0dG9uIHtcbiAgLS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogNTVweDtcbn1cblxuLnJhb19sb2dvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDQ3cHg7XG4gIGhlaWdodDogMjJweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnJhb19sb2dvIC5sb2dvX2ltZyB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMnB4O1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xufVxuXG4ubWlkZGxlX3NlYyBzcGFuIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLmljb25fc2VjIHtcbiAgei1pbmRleDogLTE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE3cHg7XG4gIHRvcDogMTBweDtcbn1cblxuLmFwcGx5X2xlYXZlIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5hcHBseV9sZWF2ZSAuYXBwbHlfbGVhdmVfdGV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTk4QzU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDdweCAxOHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc2VsZWN0X3RpbWUge1xuICBtYXJnaW46IDE1cHggMHB4O1xufVxuLnNlbGVjdF90aW1lIGlvbi1pdGVtIHtcbiAgYm94LXNoYWRvdzogNHB4IDRweCAxMHB4IDJweCAjZGNkY2RjO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRDlEOUQ5O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBoZWlnaHQ6IDM4cHg7XG59XG4uc2VsZWN0X3RpbWUgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgY29sb3I6ICNEOUQ5RDk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXRvcDogLTNweDtcbn1cblxuLmxlYXZlX2RldGFpbHMgLmNhcmQge1xuICBib3gtc2hhZG93OiA0cHggNHB4IDEwcHggMnB4ICNkY2RjZGM7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5sZWF2ZV9kZXRhaWxzIC5jYXJkIHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMzk5OEM1O1xufVxuXG5pb24tZGF0ZXRpbWUge1xuICBjb2xvcjogI0Q5RDlEOTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwcHg7XG4gIHdpZHRoOiAxNDBweDtcbn1cblxuaW9uLWRhdGV0aW1lOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4p2vXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiA0cHg7XG4gIHotaW5kZXg6IDE7XG4gIGNvbG9yOiAjRDlEOUQ5O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5cbi5pdGVtLW5hdGl2ZSB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uZGF0ZXRpbWUtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxubGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jaGVja2VyOmNoZWNrZWQgKyAubW9kYWwge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubW9kYWwge1xuICBkaXNwbGF5OiBub25lO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLm1vZGFsLWJvZHkge1xuICB3aWR0aDogMjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTAyM0Y7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubW9kYWwtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTAyM0YgIWltcG9ydGFudDtcbn1cblxuLm1vZGFsLWZvb3RlciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tb2RhbC1jb250ZW50IHAge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG4ucmVhc29uX3RleHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk5OEM1O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4ub2tfYnRuIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5va19idG4gbGFiZWwge1xuICBwYWRkaW5nOiA4cHggMThweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICMzOTk4QzU7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmNsb3NlX2J0biBsYWJlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjMzk5OEM1O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAyNnB4O1xuICB3aWR0aDogMjZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMHB4O1xuICByaWdodDogLTEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG59IiwiJGFwcF9iYXJfY29sb3I6ICMwMTAyM0Y7XHJcbiR0ZXh0X2NvbG9yICAgOiAjMzk5OEM1O1xyXG4kZm9udF9zaXplICAgIDogMTVweDtcclxuXHJcbi8vIGhlYWRlciBzdGFydFxyXG4vLyBzdGF0dXMgYmFyIGNvbG9yXHJcbiNkZXZpY2UtYW5kcm9pZCB7XHJcbiAgLmZyYW1lLWNvbnRhaW5lciB7XHJcbiAgICAuc3RhdHVzYmFyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmlvbmxhYi1kZXZpY2UtZnJhbWUge1xyXG4gIC5mcmFtZS1jb250YWluZXIge1xyXG4gICAgLnN0YXR1c2JhciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAudG9vbGJhci1jb2xvcjEge1xyXG4gICAgaGVpZ2h0OiA1MnB4O1xyXG4gICAgd2lkdGggOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWhlYWRlciBpb24tdG9vbGJhcjpmaXJzdC1jaGlsZCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMDEwMjNGICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1tZW51LWJ1dHRvbntcclxuICAtLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDU1cHg7XHJcbiAgLy8gLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29uLnBuZykgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4ucmFvX2xvZ28ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgd2lkdGggICAgICAgICAgIDogNDdweDtcclxuICBoZWlnaHQgICAgICAgICAgOiAyMnB4O1xyXG4gIGJvcmRlci1yYWRpdXMgICA6IDMwcHg7XHJcbiAgbWFyZ2luLWxlZnQgICAgIDogMTBweDtcclxuICB0ZXh0LWFsaWduICAgICAgOiBjZW50ZXI7XHJcbiAgcG9zaXRpb24gICAgICAgIDogcmVsYXRpdmU7XHJcblxyXG4gIC5sb2dvX2ltZyB7XHJcbiAgICBtYXgtaGVpZ2h0ICAgIDogMTAwJTtcclxuICAgIG1heC13aWR0aCAgICAgOiAxMDAlO1xyXG4gICAgaGVpZ2h0ICAgICAgICA6IDEycHg7XHJcbiAgICB3aWR0aCAgICAgICAgIDogMjBweDtcclxuICAgIG1hcmdpbiAgICAgICAgOiBhdXRvO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uICAgICAgOiBhYnNvbHV0ZTtcclxuICAgIHRvcCAgICAgICAgICAgOiAwcHg7XHJcbiAgICBib3R0b20gICAgICAgIDogMHB4O1xyXG4gICAgbGVmdCAgICAgICAgICA6IDBweDtcclxuICAgIHJpZ2h0ICAgICAgICAgOiAwcHg7XHJcblxyXG4gIH1cclxufVxyXG5cclxuLm1pZGRsZV9zZWMgc3BhbiB7XHJcbiAgZm9udC1zaXplICA6ICRmb250X3NpemU7XHJcbiAgY29sb3IgICAgICA6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxufVxyXG5cclxuLmljb25fc2Vje1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDE3cHg7XHJcbiAgICB0b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5hcHBseV9sZWF2ZSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgLmFwcGx5X2xlYXZlX3RleHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRleHRfY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzICAgOiA0cHg7XHJcbiAgICB3aWR0aCAgICAgICAgICAgOiAxMDAlO1xyXG4gICAgcGFkZGluZyAgICAgICAgIDogN3B4IDE4cHg7XHJcbiAgICBmb250LXNpemUgICAgICAgOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQgICAgIDogYm9sZDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4uc2VsZWN0X3RpbWUge1xyXG4gIG1hcmdpbjogMTVweCAwcHg7XHJcblxyXG4gIGlvbi1pdGVtIHtcclxuICAgIGJveC1zaGFkb3cgICA6IDRweCA0cHggMTBweCAycHggI2RjZGNkYztcclxuICAgIGJvcmRlciAgICAgICA6IDFweCBzb2xpZCAjRDlEOUQ5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGhlaWdodCAgICAgICA6IDM4cHg7XHJcblxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgY29sb3IgICAgIDogI0Q5RDlEOTtcclxuICAgICAgZm9udC1zaXplIDogMTJweDtcclxuICAgICAgbWFyZ2luLXRvcDogLTNweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5sZWF2ZV9kZXRhaWxzIHtcclxuICAuY2FyZCB7XHJcbiAgICBib3gtc2hhZG93ICAgOiA0cHggNHB4IDEwcHggMnB4ICNkY2RjZGM7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICBwYWRkaW5nICAgICAgOiAxMHB4O1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGNvbG9yICAgIDogJHRleHRfY29sb3I7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5pb24tZGF0ZXRpbWUge1xyXG4gIGNvbG9yICAgICA6ICNEOUQ5RDk7XHJcbiAgZm9udC1zaXplIDogMTRweDtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIHdpZHRoOiAxNDBweDtcclxufVxyXG5cclxuaW9uLWRhdGV0aW1lOjphZnRlcntcclxuICBjb250ZW50OiAnXFwyNzZGJztcclxuICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMHB4O1xyXG4gIHJpZ2h0OiA0cHg7XHJcbiAgei1pbmRleDogMTtcclxuICBjb2xvcjogI0Q5RDlEOTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiB9XHJcbiAuaXRlbS1uYXRpdmV7XHJcbnBhZGRpbmc6IDBweCFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAuZGF0ZXRpbWUtdGV4dHtcclxuICAgZm9udC1zaXplOiAxMnB4O1xyXG4gfVxyXG5cclxuIGxhYmVsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgbWFyZ2luLWJvdHRvbTogMHB4IWltcG9ydGFudDtcclxufVxyXG4uY2hlY2tlcjpjaGVja2VkICsgLm1vZGFsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5tb2RhbCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7cGFkZGluZzogMjVweDtcclxuYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuNCk7XHJcbn1cclxuLm1vZGFsLWJvZHkge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXBwX2Jhcl9jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFwcF9iYXJfY29sb3IhaW1wb3J0YW50O1xyXG59XHJcbi5tb2RhbC1mb290ZXIge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLm1vZGFsLWNvbnRlbnQgcHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHghaW1wb3J0YW50O1xyXG59XHJcbi5yZWFzb25fdGV4dHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGV4dF9jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxufVxyXG4ub2tfYnRue1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgbGFiZWx7XHJcbiAgICAgIHBhZGRpbmc6IDhweCAxOHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICBjb2xvcjogJHRleHRfY29sb3I7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbn1cclxuXHJcbi5jbG9zZV9idG57XHJcbiAgbGFiZWx7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIGNvbG9yOiAjMzk5OEM1O1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgICB3aWR0aDogMjZweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IC0xMHB4O1xyXG4gICAgICByaWdodDogLTEwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgfVxyXG59Il19 */"

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
        // console.log(days);
        if (days < 0) {
            return 'You have no leaves..';
        }
        else {
            const noOfDays = Math.floor(days / 8);
            // console.log("Days", noOfDays);
            const noOfhours = days % 8;
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

module.exports = "ul {\n  margin: 0px;\n  padding: 0px;\n}\n\np {\n  margin: 0px;\n}\n\na:hover {\n  text-decoration: none;\n}\n\n#device-android .frame-container .statusbar {\n  background-color: #fff;\n}\n\nionlab-device-frame .frame-container .statusbar {\n  background-color: #fff !important;\n}\n\nion-toolbar .toolbar-color1 {\n  height: 52px;\n  width: 100%;\n}\n\nion-header ion-toolbar:first-child {\n  --background: #01023F !important;\n}\n\nion-menu-button {\n  --color: transparent;\n  --padding-start: 55px;\n}\n\n.rao_logo {\n  background-color: #fff;\n  width: 47px;\n  height: 22px;\n  border-radius: 30px;\n  margin-left: 10px;\n  text-align: center;\n  position: relative;\n}\n\n.rao_logo .logo_img {\n  max-height: 100%;\n  max-width: 100%;\n  height: 12px;\n  width: 20px;\n  margin: auto;\n  vertical-align: center;\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n\n.middle_sec span {\n  font-size: 15px;\n  color: #fff;\n  font-weight: 100;\n}\n\n.menu_icon {\n  position: absolute;\n  cursor: pointer;\n  right: 40px;\n  top: 15px;\n}\n\n.menu_icon:focus {\n  outline: none;\n}\n\n.icon_sec {\n  z-index: -1;\n  position: absolute;\n  right: 17px;\n  top: 10px;\n}\n\n.user_detail {\n  padding: 10px;\n}\n\n.single_user_profile {\n  margin-top: 2px;\n}\n\n.single_user {\n  position: relative;\n  z-index: 11;\n  width: 108px;\n  height: 108px;\n  margin: auto;\n}\n\n.profile_img {\n  width: 108px;\n  height: 108px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin: auto;\n}\n\n.profile_img img {\n  max-width: 100%;\n  min-width: 100%;\n  max-height: 100%;\n  min-height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nlabel.profile_and_cover_edit {\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n  cursor: pointer;\n  font-size: 10px;\n  position: absolute;\n  bottom: 4px;\n  right: 0;\n  background-color: #01023F;\n  z-index: 111;\n  line-height: 19px;\n  color: #fff;\n  display: inline-block;\n  border: 1px solid #01023F;\n  font-weight: normal;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n}\n\n.usee_name_text p {\n  text-transform: uppercase;\n  font-size: 20px;\n  color: #01023F;\n  font-weight: bold;\n  margin-top: 6px;\n}\n\n.card {\n  box-shadow: 4px 4px 10px 2px #dcdcdc;\n  margin-top: 3px;\n  padding: 9px;\n}\n\n.card .user_heading {\n  font-size: 12px;\n  color: #3998C5;\n  font-weight: 400;\n  text-transform: capitalize;\n}\n\n.card .single_user_name {\n  font-size: 12px;\n  color: #01023F;\n  text-transform: capitalize;\n}\n\n.leave_report {\n  margin-top: 15px;\n}\n\n.leave_report .leave_report_text {\n  background-color: #3998C5;\n  border-radius: 4px;\n  width: 100%;\n  padding: 7px 18px;\n  font-size: 18px;\n  font-weight: bold;\n  margin-bottom: 15px;\n}\n\n.leave_details span {\n  font-size: 12px;\n  color: #3998C5;\n}\n\n.no_leaves p {\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbGVhdmUtbWFuYWdlci9zcmMvYXBwL0FkbWluL3NpbmdsZS11c3JlL3NpbmdsZS11c3JlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9BZG1pbi9zaW5nbGUtdXNyZS9zaW5nbGUtdXNyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDTkY7O0FEU0E7RUFDRSxXQUFBO0FDTkY7O0FEU0E7RUFDRSxxQkFBQTtBQ05GOztBRFdJO0VBQ0Usc0JBQUE7QUNSTjs7QURlSTtFQUNFLGlDQUFBO0FDWk47O0FEa0JFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNmSjs7QURtQkE7RUFDRSxnQ0FBQTtBQ2hCRjs7QURvQkE7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0FDakJGOztBRHFCQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ2xCRjs7QURvQkU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ2xCSjs7QUR1QkE7RUFDRSxlQS9FYztFQWdGZCxXQUFBO0VBQ0EsZ0JBQUE7QUNwQkY7O0FEdUJBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNwQkY7O0FEdUJBO0VBQ0UsYUFBQTtBQ3BCRjs7QURzQkE7RUFDRSxXQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ25CSjs7QUR3QkE7RUFDRSxhQUFBO0FDckJGOztBRHdCQTtFQUNFLGVBQUE7QUNyQkY7O0FEd0JBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDckJGOztBRHdCQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNyQkY7O0FEd0JFO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ3RCSjs7QUQwQkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EseUJBbEpjO0VBbUpkLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0MsbUJBQUE7RUFDRCw0QkFBQTtFQUFBLG9CQUFBO0FDdkJGOztBRDJCRTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBaEtZO0VBaUtaLGlCQUFBO0VBQ0EsZUFBQTtBQ3hCSjs7QUQ0QkE7RUFDRSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDekJGOztBRDJCRTtFQUNFLGVBQUE7RUFDQSxjQTNLWTtFQTRLWixnQkFBQTtFQUNBLDBCQUFBO0FDekJKOztBRDRCRTtFQUNFLGVBQUE7RUFDQSxjQXBMWTtFQXFMWiwwQkFBQTtBQzFCSjs7QUQ2QkE7RUFDSSxnQkFBQTtBQzFCSjs7QUQyQkE7RUFDUSx5QkF6TFE7RUEwTFosa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ3pCSjs7QUQ2QlM7RUFDRCxlQUFBO0VBQ0EsY0FyTVE7QUMyS2hCOztBRDZCRTtFQUNJLGVBQUE7QUMxQk4iLCJmaWxlIjoic3JjL2FwcC9BZG1pbi9zaW5nbGUtdXNyZS9zaW5nbGUtdXNyZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRhcHBfYmFyX2NvbG9yOiAjMDEwMjNGO1xyXG4kZm9udF9zaXplICAgIDogMTVweDtcclxuJHRleHRfY29sb3IgICA6ICMzOTk4QzU7XHJcblxyXG4vLyBoZWFkZXIgc3RhcnQgaGVyZVxyXG5cclxuLy8gc3RhdHVzIGJhciBjb2xvclxyXG51bCB7XHJcbiAgbWFyZ2luIDogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxucCB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuI2RldmljZS1hbmRyb2lkIHtcclxuICAuZnJhbWUtY29udGFpbmVyIHtcclxuICAgIC5zdGF0dXNiYXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW9ubGFiLWRldmljZS1mcmFtZSB7XHJcbiAgLmZyYW1lLWNvbnRhaW5lciB7XHJcbiAgICAuc3RhdHVzYmFyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC50b29sYmFyLWNvbG9yMSB7XHJcbiAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICB3aWR0aCA6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5pb24taGVhZGVyIGlvbi10b29sYmFyOmZpcnN0LWNoaWxkIHtcclxuICAtLWJhY2tncm91bmQ6ICMwMTAyM0YgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbmlvbi1tZW51LWJ1dHRvbntcclxuICAtLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDU1cHg7XHJcbiAgLy8gLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29uLnBuZykgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4ucmFvX2xvZ28ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgd2lkdGggICAgICAgICAgIDogNDdweDtcclxuICBoZWlnaHQgICAgICAgICAgOiAyMnB4O1xyXG4gIGJvcmRlci1yYWRpdXMgICA6IDMwcHg7XHJcbiAgbWFyZ2luLWxlZnQgICAgIDogMTBweDtcclxuICB0ZXh0LWFsaWduICAgICAgOiBjZW50ZXI7XHJcbiAgcG9zaXRpb24gICAgICAgIDogcmVsYXRpdmU7XHJcblxyXG4gIC5sb2dvX2ltZyB7XHJcbiAgICBtYXgtaGVpZ2h0ICAgIDogMTAwJTtcclxuICAgIG1heC13aWR0aCAgICAgOiAxMDAlO1xyXG4gICAgaGVpZ2h0ICAgICAgICA6IDEycHg7XHJcbiAgICB3aWR0aCAgICAgICAgIDogMjBweDtcclxuICAgIG1hcmdpbiAgICAgICAgOiBhdXRvO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uICAgICAgOiBhYnNvbHV0ZTtcclxuICAgIHRvcCAgICAgICAgICAgOiAwcHg7XHJcbiAgICBib3R0b20gICAgICAgIDogMHB4O1xyXG4gICAgbGVmdCAgICAgICAgICA6IDBweDtcclxuICAgIHJpZ2h0ICAgICAgICAgOiAwcHg7XHJcblxyXG4gIH1cclxufVxyXG5cclxuLm1pZGRsZV9zZWMgc3BhbiB7XHJcbiAgZm9udC1zaXplICA6ICRmb250X3NpemU7XHJcbiAgY29sb3IgICAgICA6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxufVxyXG5cclxuLm1lbnVfaWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGN1cnNvciAgOiBwb2ludGVyO1xyXG4gIHJpZ2h0ICAgOiA0MHB4O1xyXG4gIHRvcCAgICAgOiAxNXB4O1xyXG59XHJcblxyXG4ubWVudV9pY29uOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5pY29uX3NlY3tcclxuICB6LWluZGV4OiAtMTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxN3B4O1xyXG4gICAgdG9wOiAxMHB4O1xyXG59XHJcblxyXG4vLyBjb250ZW50IHN0YXJ0ICBoZXJlXHJcblxyXG4udXNlcl9kZXRhaWwge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5zaW5nbGVfdXNlcl9wcm9maWxlIHtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbiBcclxufVxyXG4uc2luZ2xlX3VzZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDExO1xyXG4gIHdpZHRoICAgICAgICA6IDEwOHB4O1xyXG4gIGhlaWdodCAgICAgICA6IDEwOHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLnByb2ZpbGVfaW1nIHtcclxuICB3aWR0aCAgICAgICAgOiAxMDhweDtcclxuICBoZWlnaHQgICAgICAgOiAxMDhweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgb3ZlcmZsb3cgICAgIDogaGlkZGVuO1xyXG4gIG1hcmdpbiAgICAgICA6IGF1dG87XHJcbiAgXHJcbiBcclxuICBpbWcge1xyXG4gICAgbWF4LXdpZHRoIDogMTAwJTtcclxuICAgIG1pbi13aWR0aCA6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxufVxyXG5cclxubGFiZWwucHJvZmlsZV9hbmRfY292ZXJfZWRpdCB7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDRweDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yIDogJGFwcF9iYXJfY29sb3I7XHJcbiAgei1pbmRleDogMTExO1xyXG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXBwX2Jhcl9jb2xvcjtcclxuICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4yc1xyXG59XHJcblxyXG4udXNlZV9uYW1lX3RleHQge1xyXG4gIHAge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZSAgICAgOiAyMHB4O1xyXG4gICAgY29sb3IgICAgICAgICA6ICRhcHBfYmFyX2NvbG9yO1xyXG4gICAgZm9udC13ZWlnaHQgICA6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wICAgIDogNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJveC1zaGFkb3c6IDRweCA0cHggMTBweCAycHggI2RjZGNkYztcclxuICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgcGFkZGluZyAgIDogOXB4O1xyXG5cclxuICAudXNlcl9oZWFkaW5nIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yICAgIDogJHRleHRfY29sb3I7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgfVxyXG5cclxuICAuc2luZ2xlX3VzZXJfbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvciAgICA6ICRhcHBfYmFyX2NvbG9yO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgfVxyXG59XHJcbi5sZWF2ZV9yZXBvcnR7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4ubGVhdmVfcmVwb3J0X3RleHR7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRleHRfY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzICAgOiA0cHg7XHJcbiAgICB3aWR0aCAgICAgICAgICAgOiAxMDAlO1xyXG4gICAgcGFkZGluZyAgICAgICAgIDogN3B4IDE4cHg7XHJcbiAgICBmb250LXNpemUgICAgICAgOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQgICAgIDogYm9sZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxufVxyXG4ubGVhdmVfZGV0YWlscyB7XHJcbiAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvciAgICA6ICR0ZXh0X2NvbG9yO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIC5ub19sZWF2ZXMgcHtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIH0iLCJ1bCB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbnAge1xuICBtYXJnaW46IDBweDtcbn1cblxuYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuI2RldmljZS1hbmRyb2lkIC5mcmFtZS1jb250YWluZXIgLnN0YXR1c2JhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbmlvbmxhYi1kZXZpY2UtZnJhbWUgLmZyYW1lLWNvbnRhaW5lciAuc3RhdHVzYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG5pb24tdG9vbGJhciAudG9vbGJhci1jb2xvcjEge1xuICBoZWlnaHQ6IDUycHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24taGVhZGVyIGlvbi10b29sYmFyOmZpcnN0LWNoaWxkIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDEwMjNGICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gIC0tY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDU1cHg7XG59XG5cbi5yYW9fbG9nbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiA0N3B4O1xuICBoZWlnaHQ6IDIycHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5yYW9fbG9nbyAubG9nb19pbWcge1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTJweDtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbn1cblxuLm1pZGRsZV9zZWMgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbi5tZW51X2ljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcmlnaHQ6IDQwcHg7XG4gIHRvcDogMTVweDtcbn1cblxuLm1lbnVfaWNvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5pY29uX3NlYyB7XG4gIHotaW5kZXg6IC0xO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxN3B4O1xuICB0b3A6IDEwcHg7XG59XG5cbi51c2VyX2RldGFpbCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5zaW5nbGVfdXNlcl9wcm9maWxlIHtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4uc2luZ2xlX3VzZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDExO1xuICB3aWR0aDogMTA4cHg7XG4gIGhlaWdodDogMTA4cHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnByb2ZpbGVfaW1nIHtcbiAgd2lkdGg6IDEwOHB4O1xuICBoZWlnaHQ6IDEwOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogYXV0bztcbn1cbi5wcm9maWxlX2ltZyBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbmxhYmVsLnByb2ZpbGVfYW5kX2NvdmVyX2VkaXQge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNHB4O1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMDIzRjtcbiAgei1pbmRleDogMTExO1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgIzAxMDIzRjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG5cbi51c2VlX25hbWVfdGV4dCBwIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzAxMDIzRjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cblxuLmNhcmQge1xuICBib3gtc2hhZG93OiA0cHggNHB4IDEwcHggMnB4ICNkY2RjZGM7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgcGFkZGluZzogOXB4O1xufVxuLmNhcmQgLnVzZXJfaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMzOTk4QzU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLmNhcmQgLnNpbmdsZV91c2VyX25hbWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMDEwMjNGO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmxlYXZlX3JlcG9ydCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4ubGVhdmVfcmVwb3J0IC5sZWF2ZV9yZXBvcnRfdGV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTk4QzU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDdweCAxOHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4ubGVhdmVfZGV0YWlscyBzcGFuIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzM5OThDNTtcbn1cblxuLm5vX2xlYXZlcyBwIHtcbiAgZm9udC1zaXplOiAxNXB4O1xufSJdfQ== */"

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
        // console.log(days);
        if (days < 0) {
            return 'You have no leaves..';
        }
        else {
            const noOfDays = Math.floor(days / 8);
            // console.log("Days", noOfDays);
            const noOfhours = days % 8;
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

module.exports = "@charset \"UTF-8\";\nul {\n  margin: 0px;\n  padding: 0px;\n}\nion-toolbar .toolbar-color1 {\n  height: 98px;\n}\n.logo_img {\n  width: 184px;\n  height: 83px;\n  margin: auto;\n  padding: 6px;\n}\n.logo_img img {\n  max-width: 100%;\n  max-height: 100%;\n  min-width: 100%;\n  min-height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.user_profile {\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  z-index: 1111;\n  bottom: -32px;\n  height: 72px;\n  width: 72px;\n  margin: auto;\n}\n.profile_img {\n  height: 72px;\n  width: 72px;\n  overflow: hidden;\n  margin: auto;\n  cursor: pointer;\n}\n.profile_img img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  max-width: 100%;\n  max-height: 100%;\n  min-width: 100%;\n  min-height: 100%;\n  border-radius: 50%;\n}\np {\n  color: #01023F;\n  text-transform: uppercase;\n  font-size: 20px;\n  font-weight: 700;\n  cursor: pointer;\n}\nion-header ion-toolbar:first-child {\n  --background: #01023F !important;\n}\n.menu_content {\n  margin-top: 50px;\n}\n.developer_menu {\n  margin-top: 62px;\n}\n.developer_page {\n  color: #fff;\n  background-color: #3998C5;\n  font-size: 12px;\n  text-transform: capitalize;\n  padding: 8px 25px;\n  cursor: pointer;\n  position: relative;\n}\n.developer_page:nth-child(odd) {\n  border-top-right-radius: 35px;\n  border-bottom-right-radius: 35px;\n  margin: 12px 35px 12px 0px;\n}\n.developer_page:nth-child(even) {\n  border-top-left-radius: 35px;\n  border-bottom-left-radius: 35px;\n  margin: 12px 0px 12px 35px;\n}\n.logout {\n  color: #fff;\n  background-color: #3998C5;\n  font-size: 12px;\n  text-transform: capitalize;\n  padding: 8px 25px;\n  cursor: pointer;\n  border-top-left-radius: 35px !important;\n  border-bottom-left-radius: 35px !important;\n  margin: 12px 0px 12px 35px !important;\n  position: relative;\n}\n.page_list:focus, .logout:focus {\n  box-shadow: none !important;\n  outline: none !important;\n}\n.developer_page::after, .logout::after, .notification::after, .logout::after {\n  content: \"❯\";\n  position: absolute;\n  right: 26px;\n  top: 10px;\n  z-index: 1;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsIi92YXIvd3d3L2h0bWwvbGVhdmUtbWFuYWdlci9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDSWhCO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QURGRjtBQ01FO0VBQ0UsWUFBQTtBREhKO0FDT0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FESkY7QUNNRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QURKSjtBQ1FBO0VBQ0Usa0JBQUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FETEo7QUNPRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBREpKO0FDTUk7RUFDRSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0QsZUFBQTtFQUNDLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QURKTjtBQ1FFO0VBQ0UsY0ExRFk7RUEyRFoseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FETEo7QUNTQTtFQUNFLGdDQUFBO0FETkY7QUNXQTtFQUNFLGdCQUFBO0FEUkY7QUNVQTtFQUNFLGdCQUFBO0FEUEY7QUNTQTtFQUNHLFdBQUE7RUFDRCx5QkE5RWM7RUErRWQsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QURORjtBQ1NBO0VBQ0UsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLDBCQUFBO0FETkY7QUNTQTtFQUNFLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtBRE5GO0FDUUE7RUFDRSxXQUFBO0VBQ0EseUJBbkdjO0VBb0dkLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHVDQUFBO0VBQ0EsMENBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0FETEY7QUNPQTtFQUNFLDJCQUFBO0VBQ0Esd0JBQUE7QURKRjtBQ01BO0VBQ0UsWUFBQTtFQUNDLGtCQUFBO0VBQ0QsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBREhGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbnVsIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuaW9uLXRvb2xiYXIgLnRvb2xiYXItY29sb3IxIHtcbiAgaGVpZ2h0OiA5OHB4O1xufVxuXG4ubG9nb19pbWcge1xuICB3aWR0aDogMTg0cHg7XG4gIGhlaWdodDogODNweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiA2cHg7XG59XG4ubG9nb19pbWcgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4udXNlcl9wcm9maWxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHotaW5kZXg6IDExMTE7XG4gIGJvdHRvbTogLTMycHg7XG4gIGhlaWdodDogNzJweDtcbiAgd2lkdGg6IDcycHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnByb2ZpbGVfaW1nIHtcbiAgaGVpZ2h0OiA3MnB4O1xuICB3aWR0aDogNzJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiBhdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucHJvZmlsZV9pbWcgaW1nIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbnAge1xuICBjb2xvcjogIzAxMDIzRjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXI6Zmlyc3QtY2hpbGQge1xuICAtLWJhY2tncm91bmQ6ICMwMTAyM0YgIWltcG9ydGFudDtcbn1cblxuLm1lbnVfY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5kZXZlbG9wZXJfbWVudSB7XG4gIG1hcmdpbi10b3A6IDYycHg7XG59XG5cbi5kZXZlbG9wZXJfcGFnZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk5OEM1O1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBwYWRkaW5nOiA4cHggMjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5kZXZlbG9wZXJfcGFnZTpudGgtY2hpbGQob2RkKSB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzVweDtcbiAgbWFyZ2luOiAxMnB4IDM1cHggMTJweCAwcHg7XG59XG5cbi5kZXZlbG9wZXJfcGFnZTpudGgtY2hpbGQoZXZlbikge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzNXB4O1xuICBtYXJnaW46IDEycHggMHB4IDEycHggMzVweDtcbn1cblxuLmxvZ291dCB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk5OEM1O1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBwYWRkaW5nOiA4cHggMjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzNXB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDM1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAxMnB4IDBweCAxMnB4IDM1cHggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucGFnZV9saXN0OmZvY3VzLCAubG9nb3V0OmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5kZXZlbG9wZXJfcGFnZTo6YWZ0ZXIsIC5sb2dvdXQ6OmFmdGVyLCAubm90aWZpY2F0aW9uOjphZnRlciwgLmxvZ291dDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIuKdr1wiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyNnB4O1xuICB0b3A6IDEwcHg7XG4gIHotaW5kZXg6IDE7XG4gIGNvbG9yOiAjZmZmO1xufSIsIiRhcHBfYmFyX2NvbG9yOiAjMDEwMjNGO1xyXG4kZm9udF9zaXplICAgIDogMTVweDtcclxuJHRleHRfY29sb3IgICA6ICMzOTk4QzU7XHJcblxyXG51bCB7XHJcbiAgbWFyZ2luIDogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC50b29sYmFyLWNvbG9yMSB7XHJcbiAgICBoZWlnaHQ6IDk4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9nb19pbWcge1xyXG4gIHdpZHRoICA6IDE4NHB4O1xyXG4gIGhlaWdodCA6IDgzcHg7XHJcbiAgbWFyZ2luIDogYXV0bztcclxuICBwYWRkaW5nOiA2cHg7XHJcblxyXG4gIGltZyB7XHJcbiAgICBtYXgtd2lkdGggOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIG1pbi13aWR0aCA6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4udXNlcl9wcm9maWxlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgei1pbmRleDogMTExMTtcclxuICAgIGJvdHRvbTogLTMycHg7XHJcbiAgICBoZWlnaHQ6IDcycHg7XHJcbiAgICB3aWR0aDogNzJweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG4gIC5wcm9maWxlX2ltZyB7XHJcbiAgICBoZWlnaHQgICAgICAgOiA3MnB4O1xyXG4gICAgd2lkdGggICAgICAgIDogNzJweDtcclxuICAgIG92ZXJmbG93ICAgICA6IGhpZGRlbjtcclxuICAgIG1hcmdpbiAgICAgICA6IGF1dG87XHJcbiAgICBjdXJzb3IgICAgICAgOiBwb2ludGVyO1xyXG4gICAgXHJcbiAgICBpbWcge1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICBtYXgtd2lkdGggOiAxMDAlO1xyXG4gICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBtaW4td2lkdGggOiAxMDAlO1xyXG4gICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGNvbG9yICAgICAgICAgOiAkYXBwX2Jhcl9jb2xvcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemUgICAgIDogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0ICAgOiA3MDA7XHJcbiAgICBjdXJzb3IgICAgICAgIDogcG9pbnRlcjtcclxuICBcclxufVxyXG5cclxuaW9uLWhlYWRlciBpb24tdG9vbGJhcjpmaXJzdC1jaGlsZCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMDEwMjNGICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIGNvbnRlbnQgc3RhcnRcclxuXHJcbi5tZW51X2NvbnRlbnQge1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuLmRldmVsb3Blcl9tZW51e1xyXG4gIG1hcmdpbi10b3A6IDYycHg7XHJcbn1cclxuLmRldmVsb3Blcl9wYWdle1xyXG4gICBjb2xvciAgICAgICAgICAgOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR0ZXh0X2NvbG9yO1xyXG4gIGZvbnQtc2l6ZSAgICAgICA6IDEycHg7XHJcbiAgdGV4dC10cmFuc2Zvcm0gIDogY2FwaXRhbGl6ZTtcclxuICBwYWRkaW5nOiA4cHggMjVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gfVxyXG5cclxuLmRldmVsb3Blcl9wYWdlOm50aC1jaGlsZChvZGQpe1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzICAgOiAzNXB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzNXB4O1xyXG4gIG1hcmdpbjogMTJweCAzNXB4IDEycHggMHB4O1xyXG59XHJcblxyXG4uZGV2ZWxvcGVyX3BhZ2U6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzICAgOiAzNXB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDM1cHg7XHJcbiAgbWFyZ2luOiAxMnB4IDBweCAxMnB4IDM1cHg7XHJcbn1cclxuLmxvZ291dHtcclxuICBjb2xvciAgICAgICAgICAgOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR0ZXh0X2NvbG9yO1xyXG4gIGZvbnQtc2l6ZSAgICAgICA6IDEycHg7XHJcbiAgdGV4dC10cmFuc2Zvcm0gIDogY2FwaXRhbGl6ZTtcclxuICBwYWRkaW5nOiA4cHggMjVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cyAgIDogMzVweCFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMzVweCFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAxMnB4IDBweCAxMnB4IDM1cHghaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ucGFnZV9saXN0OmZvY3VzLCAubG9nb3V0OmZvY3Vze1xyXG4gIGJveC1zaGFkb3c6IG5vbmUhaW1wb3J0YW50O1xyXG4gIG91dGxpbmU6IG5vbmUhaW1wb3J0YW50O1xyXG59XHJcbi5kZXZlbG9wZXJfcGFnZTo6YWZ0ZXIsIC5sb2dvdXQ6OmFmdGVyLCAubm90aWZpY2F0aW9uOjphZnRlciwgLmxvZ291dDo6YWZ0ZXJ7XHJcbiAgY29udGVudDogJ1xcMjc2Ric7XHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMjZweDtcclxuICB0b3A6IDEwcHg7XHJcbiAgei1pbmRleDogMTtcclxuICBjb2xvcjogI2ZmZjtcclxuIH0iXX0= */"

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

module.exports = "ul {\n  margin: 0px;\n  padding: 0px;\n}\n\np {\n  margin: 0px;\n}\n\na:hover {\n  text-decoration: none;\n}\n\n#device-android .frame-container .statusbar {\n  background-color: #fff;\n}\n\nionlab-device-frame .frame-container .statusbar {\n  background-color: #fff !important;\n}\n\nion-toolbar .toolbar-color1 {\n  height: 52px;\n  width: 100%;\n}\n\nion-header ion-toolbar:first-child {\n  --background: #01023F !important;\n}\n\nion-menu-button {\n  --color: transparent;\n  --padding-start: 55px;\n}\n\n.rao_logo {\n  background-color: #fff;\n  width: 47px;\n  height: 22px;\n  border-radius: 30px;\n  margin-left: 10px;\n  text-align: center;\n  position: relative;\n}\n\n.rao_logo .logo_img {\n  max-height: 100%;\n  max-width: 100%;\n  height: 12px;\n  width: 20px;\n  margin: auto;\n  vertical-align: center;\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n\n.middle_sec span {\n  font-size: 15px;\n  color: #fff;\n  font-weight: 100;\n}\n\n.icon_sec {\n  z-index: -1;\n  position: absolute;\n  right: 17px;\n  top: 10px;\n}\n\n.all_content {\n  padding: 10px;\n}\n\n.select_date {\n  background-color: #3998C5;\n  border-radius: 4px;\n  width: 100%;\n  padding: 5px 18px;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.or_text {\n  color: #01023F;\n  font-size: 19px;\n  font-weight: bold;\n  padding: 5px 0px;\n}\n\nion-item {\n  height: 30px;\n  margin-bottom: 10px;\n  border-bottom: 1px solid #01023F !important;\n  background-color: #fff;\n}\n\nion-datetime, ion-input, ion-textarea {\n  color: #01023F;\n  font-size: 12px;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n\n.sc-ion-input-md-h {\n  --placeholder-opacity: 1!important;\n  margin-left: 15px !important;\n}\n\n.sc-ion-textarea-md-h {\n  margin-left: 15px !important;\n  --padding-top: 0px!important;\n  --placeholder-opacity: 1!important;\n}\n\n.add_leave_btn button {\n  background-color: #01023F;\n  border-radius: 30px;\n  font-size: 17px;\n  font-weight: 500;\n  padding: 8px 18px;\n  margin-top: 10px;\n  color: #fff;\n  cursor: pointer;\n  text-transform: uppercase;\n}\n\n.add_leave_btn button:focus {\n  box-shadow: none !important;\n  outline: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbGVhdmUtbWFuYWdlci9zcmMvYXBwL2xlYXZlLWZvcm0vbGVhdmUtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGVhdmUtZm9ybS9sZWF2ZS1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNORjs7QURTQTtFQUNFLFdBQUE7QUNORjs7QURTQTtFQUNFLHFCQUFBO0FDTkY7O0FEV0k7RUFDRSxzQkFBQTtBQ1JOOztBRGVJO0VBQ0UsaUNBQUE7QUNaTjs7QURrQkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ2ZKOztBRG1CQTtFQUNFLGdDQUFBO0FDaEJGOztBRG1CQTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7QUNoQkY7O0FEb0JBO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDakJGOztBRG1CRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDakJKOztBRHNCQTtFQUNFLGVBOUVjO0VBK0VkLFdBQUE7RUFDQSxnQkFBQTtBQ25CRjs7QURzQkE7RUFDRSxXQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ25CSjs7QUR1QkE7RUFDRSxhQUFBO0FDcEJGOztBRHNCQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNuQkY7O0FEcUJBO0VBQ0UsY0F4R2M7RUF5R2QsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNsQkY7O0FEb0JBO0VBQ0UsWUFBQTtFQUNFLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxzQkFBQTtBQ2pCSjs7QURvQkE7RUFDRSxjQXJIYztFQXNIZCxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ2pCRjs7QURtQkE7RUFDSSxrQ0FBQTtFQUNHLDRCQUFBO0FDaEJQOztBRG1CQTtFQUNFLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtBQ2hCRjs7QURrQkM7RUFDRyx5QkFySVk7RUFzSVosbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ2ZKOztBRGlCQTtFQUNFLDJCQUFBO0VBQ0Esd0JBQUE7QUNkRiIsImZpbGUiOiJzcmMvYXBwL2xlYXZlLWZvcm0vbGVhdmUtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRhcHBfYmFyX2NvbG9yOiAjMDEwMjNGO1xyXG4kZm9udF9zaXplICAgIDogMTVweDtcclxuJHRleHRfY29sb3IgICA6ICMzOTk4QzU7XHJcblxyXG4vLyBoZWFkZXIgc3RhcnQgaGVyZVxyXG5cclxuLy8gc3RhdHVzIGJhciBjb2xvclxyXG51bCB7XHJcbiAgbWFyZ2luIDogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxucCB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuI2RldmljZS1hbmRyb2lkIHtcclxuICAuZnJhbWUtY29udGFpbmVyIHtcclxuICAgIC5zdGF0dXNiYXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW9ubGFiLWRldmljZS1mcmFtZSB7XHJcbiAgLmZyYW1lLWNvbnRhaW5lciB7XHJcbiAgICAuc3RhdHVzYmFyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC50b29sYmFyLWNvbG9yMSB7XHJcbiAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICB3aWR0aCA6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5pb24taGVhZGVyIGlvbi10b29sYmFyOmZpcnN0LWNoaWxkIHtcclxuICAtLWJhY2tncm91bmQ6ICMwMTAyM0YgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLW1lbnUtYnV0dG9ue1xyXG4gIC0tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIC0tcGFkZGluZy1zdGFydDogNTVweDtcclxuICAvLyAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2ljb24ucG5nKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbi5yYW9fbG9nbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB3aWR0aCAgICAgICAgICAgOiA0N3B4O1xyXG4gIGhlaWdodCAgICAgICAgICA6IDIycHg7XHJcbiAgYm9yZGVyLXJhZGl1cyAgIDogMzBweDtcclxuICBtYXJnaW4tbGVmdCAgICAgOiAxMHB4O1xyXG4gIHRleHQtYWxpZ24gICAgICA6IGNlbnRlcjtcclxuICBwb3NpdGlvbiAgICAgICAgOiByZWxhdGl2ZTtcclxuXHJcbiAgLmxvZ29faW1nIHtcclxuICAgIG1heC1oZWlnaHQgICAgOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoICAgICA6IDEwMCU7XHJcbiAgICBoZWlnaHQgICAgICAgIDogMTJweDtcclxuICAgIHdpZHRoICAgICAgICAgOiAyMHB4O1xyXG4gICAgbWFyZ2luICAgICAgICA6IGF1dG87XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb24gICAgICA6IGFic29sdXRlO1xyXG4gICAgdG9wICAgICAgICAgICA6IDBweDtcclxuICAgIGJvdHRvbSAgICAgICAgOiAwcHg7XHJcbiAgICBsZWZ0ICAgICAgICAgIDogMHB4O1xyXG4gICAgcmlnaHQgICAgICAgICA6IDBweDtcclxuXHJcbiAgfVxyXG59XHJcblxyXG4ubWlkZGxlX3NlYyBzcGFuIHtcclxuICBmb250LXNpemUgIDogJGZvbnRfc2l6ZTtcclxuICBjb2xvciAgICAgIDogI2ZmZjtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG59XHJcblxyXG4uaWNvbl9zZWN7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTdweDtcclxuICAgIHRvcDogMTBweDtcclxufVxyXG5cclxuLy8gY29udGVudCBzdGFydCAgaGVyZVxyXG4uYWxsX2NvbnRlbnR7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4uc2VsZWN0X2RhdGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTk4QzU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDVweCAxOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ub3JfdGV4dHtcclxuICBjb2xvcjogJGFwcF9iYXJfY29sb3I7XHJcbiAgZm9udC1zaXplOiAxOXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmc6IDVweCAwcHg7XHJcbn1cclxuaW9uLWl0ZW17XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYXBwX2Jhcl9jb2xvciFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5pb24tZGF0ZXRpbWUsIGlvbi1pbnB1dCwgaW9uLXRleHRhcmVhe1xyXG4gIGNvbG9yOiAkYXBwX2Jhcl9jb2xvcjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQgICAgIDogYm9sZDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5zYy1pb24taW5wdXQtbWQtaCB7XHJcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDEhaW1wb3J0YW50OyBcclxuICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4IWltcG9ydGFudDtcclxuIH1cclxuXHJcbi5zYy1pb24tdGV4dGFyZWEtbWQtaCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHghaW1wb3J0YW50O1xyXG4gIC0tcGFkZGluZy10b3A6IDBweCFpbXBvcnRhbnQ7XHJcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxIWltcG9ydGFudDsgXHJcbiAgfVxyXG4gLmFkZF9sZWF2ZV9idG4gYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6JGFwcF9iYXJfY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmc6IDhweCAxOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4uYWRkX2xlYXZlX2J0biBidXR0b246Zm9jdXMge1xyXG4gIGJveC1zaGFkb3c6IG5vbmUhaW1wb3J0YW50O1xyXG4gIG91dGxpbmU6IG5vbmUhaW1wb3J0YW50O1xyXG59IiwidWwge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbmE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiNkZXZpY2UtYW5kcm9pZCAuZnJhbWUtY29udGFpbmVyIC5zdGF0dXNiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG5pb25sYWItZGV2aWNlLWZyYW1lIC5mcmFtZS1jb250YWluZXIgLnN0YXR1c2JhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuaW9uLXRvb2xiYXIgLnRvb2xiYXItY29sb3IxIHtcbiAgaGVpZ2h0OiA1MnB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWhlYWRlciBpb24tdG9vbGJhcjpmaXJzdC1jaGlsZCB7XG4gIC0tYmFja2dyb3VuZDogIzAxMDIzRiAhaW1wb3J0YW50O1xufVxuXG5pb24tbWVudS1idXR0b24ge1xuICAtLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA1NXB4O1xufVxuXG4ucmFvX2xvZ28ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogNDdweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucmFvX2xvZ28gLmxvZ29faW1nIHtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEycHg7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG59XG5cbi5taWRkbGVfc2VjIHNwYW4ge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogMTAwO1xufVxuXG4uaWNvbl9zZWMge1xuICB6LWluZGV4OiAtMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTdweDtcbiAgdG9wOiAxMHB4O1xufVxuXG4uYWxsX2NvbnRlbnQge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uc2VsZWN0X2RhdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk5OEM1O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHggMThweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm9yX3RleHQge1xuICBjb2xvcjogIzAxMDIzRjtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogNXB4IDBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDEwMjNGICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbmlvbi1kYXRldGltZSwgaW9uLWlucHV0LCBpb24tdGV4dGFyZWEge1xuICBjb2xvcjogIzAxMDIzRjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnNjLWlvbi1pbnB1dC1tZC1oIHtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLnNjLWlvbi10ZXh0YXJlYS1tZC1oIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHggIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXRvcDogMHB4IWltcG9ydGFudDtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxIWltcG9ydGFudDtcbn1cblxuLmFkZF9sZWF2ZV9idG4gYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMDIzRjtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nOiA4cHggMThweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmFkZF9sZWF2ZV9idG4gYnV0dG9uOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59Il19 */"

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

module.exports = "@charset \"UTF-8\";\nul {\n  margin: 0px;\n  padding: 0px;\n}\np {\n  margin: 0px;\n}\na:hover {\n  text-decoration: none;\n}\n#device-android .frame-container .statusbar {\n  background-color: #fff;\n}\nionlab-device-frame .frame-container .statusbar {\n  background-color: #fff !important;\n}\nion-toolbar .toolbar-color1 {\n  height: 52px;\n  width: 100%;\n}\nion-header ion-toolbar:first-child {\n  --background: #01023F !important;\n}\nion-menu-button {\n  --color: transparent;\n  --padding-start: 55px;\n}\n.rao_logo {\n  background-color: #fff;\n  width: 47px;\n  height: 22px;\n  border-radius: 30px;\n  margin-left: 10px;\n  text-align: center;\n  position: relative;\n}\n.rao_logo .logo_img {\n  max-height: 100%;\n  max-width: 100%;\n  height: 12px;\n  width: 20px;\n  margin: auto;\n  vertical-align: center;\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n.middle_sec span {\n  font-size: 15px;\n  color: #fff;\n  font-weight: 100;\n}\n.icon_sec {\n  z-index: -1;\n  position: absolute;\n  right: 17px;\n  top: 10px;\n}\n.leave_history {\n  padding: 10px;\n}\n.leave_history .apply_leave_text {\n  background-color: #3998C5;\n  border-radius: 4px;\n  width: 100%;\n  padding: 7px 18px;\n  font-size: 18px;\n  font-weight: bold;\n}\n.select_time {\n  margin: 15px 0px;\n}\n.select_time ion-item {\n  box-shadow: 1px 1px 4px 1px #dcdcdc;\n  border: 1px solid #D9D9D9;\n  border-radius: 30px;\n  height: 38px;\n}\n.select_time ion-item ion-label {\n  color: #D9D9D9;\n  font-size: 14px;\n  margin-top: -3px;\n}\n.leave_details .card {\n  box-shadow: 4px 4px 10px 2px #dcdcdc;\n  margin-bottom: 4px;\n  padding: 10px;\n}\n.leave_details .card span {\n  font-size: 12px;\n  color: #3998C5;\n}\n.no_leaves span {\n  font-size: 15px;\n  color: #000;\n}\nion-datetime {\n  color: #D9D9D9;\n  font-size: 14px;\n  margin-top: -10px;\n  position: relative;\n  padding: 0px;\n  width: 140px;\n}\nion-datetime::after {\n  content: \"❯\";\n  position: absolute;\n  top: 0px;\n  right: 4px;\n  z-index: 1;\n  color: #D9D9D9;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n.item-native {\n  padding: 0px !important;\n}\n.datetime-text {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVhdmUtaGlzdG9yeS9sZWF2ZS1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwiL3Zhci93d3cvaHRtbC9sZWF2ZS1tYW5hZ2VyL3NyYy9hcHAvbGVhdmUtaGlzdG9yeS9sZWF2ZS1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ09oQjtFQUNFLFdBQUE7RUFDQSxZQUFBO0FETEY7QUNRQTtFQUNFLFdBQUE7QURMRjtBQ1FBO0VBQ0UscUJBQUE7QURMRjtBQ1VJO0VBQ0Usc0JBQUE7QURQTjtBQ2NJO0VBQ0UsaUNBQUE7QURYTjtBQ2lCRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FEZEo7QUNrQkE7RUFDRSxnQ0FBQTtBRGZGO0FDaUJBO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtBRGRGO0FDaUJBO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FEZEY7QUNnQkU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBRGRKO0FDbUJBO0VBQ0UsZUE1RWM7RUE2RWQsV0FBQTtFQUNBLGdCQUFBO0FEaEJGO0FDbUJBO0VBQ0UsV0FBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QURoQko7QUNtQkE7RUFDSSxhQUFBO0FEaEJKO0FDaUJJO0VBQ0kseUJBMUZRO0VBMkZSLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FEZlI7QUNtQkE7RUFDSSxnQkFBQTtBRGhCSjtBQ2tCSTtFQUNJLG1DQUFBO0VBQ08seUJBQUE7RUFDUCxtQkFBQTtFQUNBLFlBQUE7QURoQlI7QUNrQlE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEaEJaO0FDc0JJO0VBQ0ksb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QURuQlI7QUNxQlE7RUFDSSxlQUFBO0VBQ0EsY0E1SEk7QUR5R2hCO0FDd0JJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QURyQlI7QUN3QkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBRHJCRjtBQ3dCQTtFQUNFLFlBQUE7RUFDQyxrQkFBQTtFQUNELFFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0FEckJGO0FDdUJDO0VBQ0QsdUJBQUE7QURwQkE7QUNzQkM7RUFDRSxlQUFBO0FEbkJIIiwiZmlsZSI6InNyYy9hcHAvbGVhdmUtaGlzdG9yeS9sZWF2ZS1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xudWwge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbmE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiNkZXZpY2UtYW5kcm9pZCAuZnJhbWUtY29udGFpbmVyIC5zdGF0dXNiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG5pb25sYWItZGV2aWNlLWZyYW1lIC5mcmFtZS1jb250YWluZXIgLnN0YXR1c2JhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuaW9uLXRvb2xiYXIgLnRvb2xiYXItY29sb3IxIHtcbiAgaGVpZ2h0OiA1MnB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWhlYWRlciBpb24tdG9vbGJhcjpmaXJzdC1jaGlsZCB7XG4gIC0tYmFja2dyb3VuZDogIzAxMDIzRiAhaW1wb3J0YW50O1xufVxuXG5pb24tbWVudS1idXR0b24ge1xuICAtLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA1NXB4O1xufVxuXG4ucmFvX2xvZ28ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogNDdweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucmFvX2xvZ28gLmxvZ29faW1nIHtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEycHg7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG59XG5cbi5taWRkbGVfc2VjIHNwYW4ge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogMTAwO1xufVxuXG4uaWNvbl9zZWMge1xuICB6LWluZGV4OiAtMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTdweDtcbiAgdG9wOiAxMHB4O1xufVxuXG4ubGVhdmVfaGlzdG9yeSB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ubGVhdmVfaGlzdG9yeSAuYXBwbHlfbGVhdmVfdGV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTk4QzU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDdweCAxOHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc2VsZWN0X3RpbWUge1xuICBtYXJnaW46IDE1cHggMHB4O1xufVxuLnNlbGVjdF90aW1lIGlvbi1pdGVtIHtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggMXB4ICNkY2RjZGM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNEOUQ5RDk7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGhlaWdodDogMzhweDtcbn1cbi5zZWxlY3RfdGltZSBpb24taXRlbSBpb24tbGFiZWwge1xuICBjb2xvcjogI0Q5RDlEOTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiAtM3B4O1xufVxuXG4ubGVhdmVfZGV0YWlscyAuY2FyZCB7XG4gIGJveC1zaGFkb3c6IDRweCA0cHggMTBweCAycHggI2RjZGNkYztcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmxlYXZlX2RldGFpbHMgLmNhcmQgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMzOTk4QzU7XG59XG5cbi5ub19sZWF2ZXMgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbmlvbi1kYXRldGltZSB7XG4gIGNvbG9yOiAjRDlEOUQ5O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDBweDtcbiAgd2lkdGg6IDE0MHB4O1xufVxuXG5pb24tZGF0ZXRpbWU6OmFmdGVyIHtcbiAgY29udGVudDogXCLina9cIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDRweDtcbiAgei1pbmRleDogMTtcbiAgY29sb3I6ICNEOUQ5RDk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cblxuLml0ZW0tbmF0aXZlIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kYXRldGltZS10ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufSIsIiRhcHBfYmFyX2NvbG9yOiAjMDEwMjNGO1xyXG4kZm9udF9zaXplICAgIDogMTVweDtcclxuJHRleHRfY29sb3IgICA6ICMzOTk4QzU7XHJcblxyXG4vLyBoZWFkZXIgc3RhcnQgaGVyZVxyXG5cclxuLy8gc3RhdHVzIGJhciBjb2xvclxyXG51bCB7XHJcbiAgbWFyZ2luIDogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxucCB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuI2RldmljZS1hbmRyb2lkIHtcclxuICAuZnJhbWUtY29udGFpbmVyIHtcclxuICAgIC5zdGF0dXNiYXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW9ubGFiLWRldmljZS1mcmFtZSB7XHJcbiAgLmZyYW1lLWNvbnRhaW5lciB7XHJcbiAgICAuc3RhdHVzYmFyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC50b29sYmFyLWNvbG9yMSB7XHJcbiAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICB3aWR0aCA6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5pb24taGVhZGVyIGlvbi10b29sYmFyOmZpcnN0LWNoaWxkIHtcclxuICAtLWJhY2tncm91bmQ6ICMwMTAyM0YgIWltcG9ydGFudDtcclxufVxyXG5pb24tbWVudS1idXR0b257XHJcbiAgLS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiA1NXB4O1xyXG4gIC8vIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbi5wbmcpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4ucmFvX2xvZ28ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgd2lkdGggICAgICAgICAgIDogNDdweDtcclxuICBoZWlnaHQgICAgICAgICAgOiAyMnB4O1xyXG4gIGJvcmRlci1yYWRpdXMgICA6IDMwcHg7XHJcbiAgbWFyZ2luLWxlZnQgICAgIDogMTBweDtcclxuICB0ZXh0LWFsaWduICAgICAgOiBjZW50ZXI7XHJcbiAgcG9zaXRpb24gICAgICAgIDogcmVsYXRpdmU7XHJcblxyXG4gIC5sb2dvX2ltZyB7XHJcbiAgICBtYXgtaGVpZ2h0ICAgIDogMTAwJTtcclxuICAgIG1heC13aWR0aCAgICAgOiAxMDAlO1xyXG4gICAgaGVpZ2h0ICAgICAgICA6IDEycHg7XHJcbiAgICB3aWR0aCAgICAgICAgIDogMjBweDtcclxuICAgIG1hcmdpbiAgICAgICAgOiBhdXRvO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uICAgICAgOiBhYnNvbHV0ZTtcclxuICAgIHRvcCAgICAgICAgICAgOiAwcHg7XHJcbiAgICBib3R0b20gICAgICAgIDogMHB4O1xyXG4gICAgbGVmdCAgICAgICAgICA6IDBweDtcclxuICAgIHJpZ2h0ICAgICAgICAgOiAwcHg7XHJcblxyXG4gIH1cclxufVxyXG5cclxuLm1pZGRsZV9zZWMgc3BhbiB7XHJcbiAgZm9udC1zaXplICA6ICRmb250X3NpemU7XHJcbiAgY29sb3IgICAgICA6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxufVxyXG5cclxuLmljb25fc2Vje1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDE3cHg7XHJcbiAgICB0b3A6IDEwcHg7XHJcbn1cclxuLy8gY29udGVudCBzdGFydCAgaGVyZVxyXG4ubGVhdmVfaGlzdG9yeXtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAuYXBwbHlfbGVhdmVfdGV4dCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRleHRfY29sb3I7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1cyAgIDogNHB4O1xyXG4gICAgICAgIHdpZHRoICAgICAgICAgICA6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZyAgICAgICAgIDogN3B4IDE4cHg7XHJcbiAgICAgICAgZm9udC1zaXplICAgICAgIDogMThweDtcclxuICAgICAgICBmb250LXdlaWdodCAgICAgOiBib2xkO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2VsZWN0X3RpbWUge1xyXG4gICAgbWFyZ2luOiAxNXB4IDBweDtcclxuXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgYm94LXNoYWRvdyAgIDogMXB4IDFweCA0cHggMXB4ICNkY2RjZGM7XHJcbiAgICAgICAgICAgICAgIGJvcmRlciAgICAgICA6IDFweCBzb2xpZCAjRDlEOUQ5O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0ICAgICAgIDogMzhweDtcclxuXHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgY29sb3IgICAgIDogI0Q5RDlEOTtcclxuICAgICAgICAgICAgZm9udC1zaXplIDogMTRweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTNweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5sZWF2ZV9kZXRhaWxzIHtcclxuICAgIC5jYXJkIHtcclxuICAgICAgICBib3gtc2hhZG93ICAgOiA0cHggNHB4IDEwcHggMnB4ICNkY2RjZGM7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICAgIHBhZGRpbmcgICAgICA6IDEwcHg7XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGNvbG9yICAgIDogJHRleHRfY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5ub19sZWF2ZXN7XHJcbiAgICBzcGFue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgIH1cclxufVxyXG5pb24tZGF0ZXRpbWUge1xyXG4gIGNvbG9yICAgICA6ICNEOUQ5RDk7XHJcbiAgZm9udC1zaXplIDogMTRweDtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIHdpZHRoOiAxNDBweDtcclxufVxyXG5cclxuaW9uLWRhdGV0aW1lOjphZnRlcntcclxuICBjb250ZW50OiAnXFwyNzZGJztcclxuICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMHB4O1xyXG4gIHJpZ2h0OiA0cHg7XHJcbiAgei1pbmRleDogMTtcclxuICBjb2xvcjogI0Q5RDlEOTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiB9XHJcbiAuaXRlbS1uYXRpdmV7XHJcbnBhZGRpbmc6IDBweCFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAuZGF0ZXRpbWUtdGV4dHtcclxuICAgZm9udC1zaXplOiAxMnB4O1xyXG4gfVxyXG4gIl19 */"

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
        // console.log(days);
        if (days < 0) {
            return 'You have no leaves..';
        }
        else {
            const noOfDays = Math.floor(days / 8);
            // console.log("Days", noOfDays);
            const noOfhours = days % 8;
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

module.exports = "ul {\n  margin: 0px;\n  padding: 0px;\n}\n\np {\n  margin: 0px;\n}\n\na:hover {\n  text-decoration: none;\n}\n\n#device-android .frame-container .statusbar {\n  background-color: #fff;\n}\n\nionlab-device-frame .frame-container .statusbar {\n  background-color: #fff !important;\n}\n\nion-toolbar .toolbar-color1 {\n  height: 52px;\n  width: 100%;\n}\n\nion-header ion-toolbar:first-child {\n  --background: #01023F !important;\n}\n\nion-menu-button {\n  --color: transparent;\n  --padding-start: 55px;\n}\n\n.rao_logo {\n  background-color: #fff;\n  width: 47px;\n  height: 22px;\n  border-radius: 30px;\n  margin-left: 10px;\n  text-align: center;\n  position: relative;\n}\n\n.rao_logo .logo_img {\n  max-height: 100%;\n  max-width: 100%;\n  height: 12px;\n  width: 20px;\n  margin: auto;\n  vertical-align: center;\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n\n.middle_sec span {\n  font-size: 15px;\n  color: #fff;\n  font-weight: 100;\n}\n\n.menu_icon {\n  position: absolute;\n  cursor: pointer;\n  right: 40px;\n  top: 15px;\n}\n\n.menu_icon:focus {\n  outline: none;\n}\n\n.icon_sec {\n  z-index: -1;\n  position: absolute;\n  right: 17px;\n  top: 10px;\n}\n\n.user_detail {\n  padding: 10px;\n}\n\n.single_user_profile {\n  margin-top: 2px;\n  z-index: 12;\n}\n\n.user_img {\n  position: relative;\n  z-index: 11;\n  width: 108px;\n  height: 108px;\n  margin: auto;\n}\n\n.profile_img {\n  width: 108px;\n  height: 108px;\n  border-radius: 50%;\n  margin: auto;\n}\n\n.profile_img img {\n  max-width: 100%;\n  min-width: 100%;\n  border-radius: 50%;\n  max-height: 100%;\n  min-height: 100%;\n}\n\nlabel.profile_and_cover_edit {\n  height: 24px;\n  width: 24px;\n  border-radius: 50%;\n  cursor: pointer;\n  font-size: 10px;\n  position: absolute;\n  bottom: 4px;\n  right: 0;\n  background-color: #01023F;\n  z-index: 111;\n  line-height: 23px;\n  color: #fff;\n  display: inline-block;\n  border: 1px solid #01023F;\n  font-weight: normal;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n}\n\n.usee_name_text p {\n  text-transform: uppercase;\n  font-size: 20px;\n  color: #01023F;\n  font-weight: bold;\n  margin-top: 6px;\n}\n\n.card {\n  box-shadow: 4px 4px 10px 2px #dcdcdc;\n  margin-top: 3px;\n  padding: 9px;\n}\n\n.card .user_heading {\n  font-size: 12px;\n  color: #3998C5;\n  font-weight: 400;\n  text-transform: capitalize;\n}\n\n.card .single_user_name {\n  font-size: 12px;\n  color: #01023F;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbGVhdmUtbWFuYWdlci9zcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ05GOztBRFNBO0VBQ0UsV0FBQTtBQ05GOztBRFNBO0VBQ0UscUJBQUE7QUNORjs7QURXSTtFQUNFLHNCQUFBO0FDUk47O0FEZUk7RUFDRSxpQ0FBQTtBQ1pOOztBRGtCRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDZko7O0FEbUJBO0VBQ0UsZ0NBQUE7QUNoQkY7O0FEb0JBO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtBQ2pCRjs7QURxQkE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNsQkY7O0FEb0JFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNsQko7O0FEdUJBO0VBQ0UsZUEvRWM7RUFnRmQsV0FBQTtFQUNBLGdCQUFBO0FDcEJGOztBRHVCQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDcEJGOztBRHVCQTtFQUNFLGFBQUE7QUNwQkY7O0FEc0JBO0VBQ0UsV0FBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNuQko7O0FEd0JBO0VBQ0UsYUFBQTtBQ3JCRjs7QUR3QkE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ3JCRjs7QUR3QkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNyQkY7O0FEd0JBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNDLFlBQUE7QUNyQkg7O0FEdUJFO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNyQko7O0FEMEJBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLHlCQWxKYztFQW1KZCxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNDLG1CQUFBO0VBQ0QsNEJBQUE7RUFBQSxvQkFBQTtBQ3ZCRjs7QUQyQkU7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxjQWhLWTtFQWlLWixpQkFBQTtFQUNBLGVBQUE7QUN4Qko7O0FENEJBO0VBQ0Usb0NBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ3pCRjs7QUQyQkU7RUFDRSxlQUFBO0VBQ0EsY0EzS1k7RUE0S1osZ0JBQUE7RUFDQSwwQkFBQTtBQ3pCSjs7QUQ0QkU7RUFDRSxlQUFBO0VBQ0EsY0FwTFk7RUFxTFosMEJBQUE7QUMxQkoiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGFwcF9iYXJfY29sb3I6ICMwMTAyM0Y7XHJcbiRmb250X3NpemUgICAgOiAxNXB4O1xyXG4kdGV4dF9jb2xvciAgIDogIzM5OThDNTtcclxuXHJcbi8vIGhlYWRlciBzdGFydCBoZXJlXHJcblxyXG4vLyBzdGF0dXMgYmFyIGNvbG9yXHJcbnVsIHtcclxuICBtYXJnaW4gOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG5wIHtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4jZGV2aWNlLWFuZHJvaWQge1xyXG4gIC5mcmFtZS1jb250YWluZXIge1xyXG4gICAgLnN0YXR1c2JhciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5pb25sYWItZGV2aWNlLWZyYW1lIHtcclxuICAuZnJhbWUtY29udGFpbmVyIHtcclxuICAgIC5zdGF0dXNiYXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLnRvb2xiYXItY29sb3IxIHtcclxuICAgIGhlaWdodDogNTJweDtcclxuICAgIHdpZHRoIDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXI6Zmlyc3QtY2hpbGQge1xyXG4gIC0tYmFja2dyb3VuZDogIzAxMDIzRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuaW9uLW1lbnUtYnV0dG9ue1xyXG4gIC0tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIC0tcGFkZGluZy1zdGFydDogNTVweDtcclxuICAvLyAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2ljb24ucG5nKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbi5yYW9fbG9nbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB3aWR0aCAgICAgICAgICAgOiA0N3B4O1xyXG4gIGhlaWdodCAgICAgICAgICA6IDIycHg7XHJcbiAgYm9yZGVyLXJhZGl1cyAgIDogMzBweDtcclxuICBtYXJnaW4tbGVmdCAgICAgOiAxMHB4O1xyXG4gIHRleHQtYWxpZ24gICAgICA6IGNlbnRlcjtcclxuICBwb3NpdGlvbiAgICAgICAgOiByZWxhdGl2ZTtcclxuXHJcbiAgLmxvZ29faW1nIHtcclxuICAgIG1heC1oZWlnaHQgICAgOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoICAgICA6IDEwMCU7XHJcbiAgICBoZWlnaHQgICAgICAgIDogMTJweDtcclxuICAgIHdpZHRoICAgICAgICAgOiAyMHB4O1xyXG4gICAgbWFyZ2luICAgICAgICA6IGF1dG87XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb24gICAgICA6IGFic29sdXRlO1xyXG4gICAgdG9wICAgICAgICAgICA6IDBweDtcclxuICAgIGJvdHRvbSAgICAgICAgOiAwcHg7XHJcbiAgICBsZWZ0ICAgICAgICAgIDogMHB4O1xyXG4gICAgcmlnaHQgICAgICAgICA6IDBweDtcclxuXHJcbiAgfVxyXG59XHJcblxyXG4ubWlkZGxlX3NlYyBzcGFuIHtcclxuICBmb250LXNpemUgIDogJGZvbnRfc2l6ZTtcclxuICBjb2xvciAgICAgIDogI2ZmZjtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG59XHJcblxyXG4ubWVudV9pY29uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY3Vyc29yICA6IHBvaW50ZXI7XHJcbiAgcmlnaHQgICA6IDQwcHg7XHJcbiAgdG9wICAgICA6IDE1cHg7XHJcbn1cclxuXHJcbi5tZW51X2ljb246Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLmljb25fc2Vje1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDE3cHg7XHJcbiAgICB0b3A6IDEwcHg7XHJcbn1cclxuXHJcbi8vIGNvbnRlbnQgc3RhcnQgIGhlcmVcclxuXHJcbi51c2VyX2RldGFpbCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnNpbmdsZV91c2VyX3Byb2ZpbGUge1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxuICB6LWluZGV4OiAxMjtcclxuIFxyXG59XHJcbi51c2VyX2ltZ3tcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTE7XHJcbiAgd2lkdGggICAgICAgIDogMTA4cHg7XHJcbiAgaGVpZ2h0ICAgICAgIDogMTA4cHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ucHJvZmlsZV9pbWcge1xyXG4gIHdpZHRoICAgICAgICA6IDEwOHB4O1xyXG4gIGhlaWdodCAgICAgICA6IDEwOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgbWFyZ2luICAgICAgIDogYXV0bztcclxuICBcclxuICBpbWcge1xyXG4gICAgbWF4LXdpZHRoIDogMTAwJTtcclxuICAgIG1pbi13aWR0aCA6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgICB9XHJcbn1cclxuXHJcblxyXG5sYWJlbC5wcm9maWxlX2FuZF9jb3Zlcl9lZGl0IHtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogNHB4O1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3IgOiAkYXBwX2Jhcl9jb2xvcjtcclxuICB6LWluZGV4OiAxMTE7XHJcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcHBfYmFyX2NvbG9yO1xyXG4gICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzXHJcbn1cclxuXHJcbi51c2VlX25hbWVfdGV4dCB7XHJcbiAgcCB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplICAgICA6IDIwcHg7XHJcbiAgICBjb2xvciAgICAgICAgIDogJGFwcF9iYXJfY29sb3I7XHJcbiAgICBmb250LXdlaWdodCAgIDogYm9sZDtcclxuICAgIG1hcmdpbi10b3AgICAgOiA2cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYm94LXNoYWRvdzogNHB4IDRweCAxMHB4IDJweCAjZGNkY2RjO1xyXG4gIG1hcmdpbi10b3A6IDNweDtcclxuICBwYWRkaW5nICAgOiA5cHg7XHJcblxyXG4gIC51c2VyX2hlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3IgICAgOiAkdGV4dF9jb2xvcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB9XHJcblxyXG4gIC5zaW5nbGVfdXNlcl9uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yICAgIDogJGFwcF9iYXJfY29sb3I7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB9XHJcbn1cclxuIiwidWwge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbmE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiNkZXZpY2UtYW5kcm9pZCAuZnJhbWUtY29udGFpbmVyIC5zdGF0dXNiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG5pb25sYWItZGV2aWNlLWZyYW1lIC5mcmFtZS1jb250YWluZXIgLnN0YXR1c2JhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuaW9uLXRvb2xiYXIgLnRvb2xiYXItY29sb3IxIHtcbiAgaGVpZ2h0OiA1MnB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWhlYWRlciBpb24tdG9vbGJhcjpmaXJzdC1jaGlsZCB7XG4gIC0tYmFja2dyb3VuZDogIzAxMDIzRiAhaW1wb3J0YW50O1xufVxuXG5pb24tbWVudS1idXR0b24ge1xuICAtLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA1NXB4O1xufVxuXG4ucmFvX2xvZ28ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogNDdweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucmFvX2xvZ28gLmxvZ29faW1nIHtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEycHg7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG59XG5cbi5taWRkbGVfc2VjIHNwYW4ge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogMTAwO1xufVxuXG4ubWVudV9pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHJpZ2h0OiA0MHB4O1xuICB0b3A6IDE1cHg7XG59XG5cbi5tZW51X2ljb246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uaWNvbl9zZWMge1xuICB6LWluZGV4OiAtMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTdweDtcbiAgdG9wOiAxMHB4O1xufVxuXG4udXNlcl9kZXRhaWwge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uc2luZ2xlX3VzZXJfcHJvZmlsZSB7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgei1pbmRleDogMTI7XG59XG5cbi51c2VyX2ltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTE7XG4gIHdpZHRoOiAxMDhweDtcbiAgaGVpZ2h0OiAxMDhweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ucHJvZmlsZV9pbWcge1xuICB3aWR0aDogMTA4cHg7XG4gIGhlaWdodDogMTA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLnByb2ZpbGVfaW1nIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbmxhYmVsLnByb2ZpbGVfYW5kX2NvdmVyX2VkaXQge1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNHB4O1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMDIzRjtcbiAgei1pbmRleDogMTExO1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgIzAxMDIzRjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG5cbi51c2VlX25hbWVfdGV4dCBwIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzAxMDIzRjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cblxuLmNhcmQge1xuICBib3gtc2hhZG93OiA0cHggNHB4IDEwcHggMnB4ICNkY2RjZGM7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgcGFkZGluZzogOXB4O1xufVxuLmNhcmQgLnVzZXJfaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMzOTk4QzU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLmNhcmQgLnNpbmdsZV91c2VyX25hbWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMDEwMjNGO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn0iXX0= */"

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