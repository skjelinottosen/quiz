(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/skjelinottosen/Projects/quiz/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    opentdbApi: {
        allowedUrls: [],
        retrieveTokenUrl: 'https://opentdb.com/api_token.php?command=request',
        opentdbBaseUrl: 'https://opentdb.com/',
        trivia_categories: 'https://opentdb.com/api_category.php',
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "ILr+":
/*!***********************************************************!*\
  !*** ./src/app/components/question/question.component.ts ***!
  \***********************************************************/
/*! exports provided: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComponent", function() { return QuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_question_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/question.service */ "XSv+");
/* harmony import */ var src_app_shared_services_score_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/score.service */ "reJD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_decode_html_entities_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/decode-html-entities.pipe */ "x9nd");







function QuestionComponent_main_0_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionComponent_main_0_div_9_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const alternative_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.onSelectAnswer(alternative_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "decodeHtmlEntities");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alternative_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, alternative_r4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", alternative_r4, "");
} }
function QuestionComponent_main_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "decodeHtmlEntities");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, QuestionComponent_main_0_div_9_Template, 5, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Question ", ctx_r0.currentQuestionCount, " of ", ctx_r0.amount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, ctx_r0.currentQuestion == null ? null : ctx_r0.currentQuestion.question), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.currentQuestion == null ? null : ctx_r0.currentQuestion.question, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.alternatives);
} }
function QuestionComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 11);
} }
class QuestionComponent {
    constructor(questionService, scoreService, route, router) {
        this.questionService = questionService;
        this.scoreService = scoreService;
        this.route = route;
        this.router = router;
        this.questions = [];
        this.isLoading = true;
    }
    ngOnInit() {
        this.route.params
            .subscribe((params) => {
            this.amount = params['amount'];
            this.category = +params['category'];
        });
        this.getAllQuestions(this.amount, this.category);
    }
    getAllQuestions(amount, category) {
        this.questionService.getQuestions(amount, category).subscribe(response => {
            if (response.response_code === 0) {
                this.questions = response.results;
                this.currentQuestionCount = 1;
                this.amount = this.questions.length;
                this.score = 0;
                this.scoreService.setMaxScore(this.amount);
                this.getNextQuestion(1);
            }
            if (response.response_code === 1) {
                this.getAllQuestions(--this.amount, this.category);
            }
            this.isLoading = false;
        });
    }
    getNextQuestion(currentQuestionCount) {
        if (currentQuestionCount <= this.amount) {
            this.currentQuestion = this.questions[currentQuestionCount - 1];
            this.correctAnswer = this.currentQuestion.correct_answer;
            this.incorrectAnswers = this.currentQuestion.incorrect_answers;
            const unshuffledAlternatives = this.incorrectAnswers;
            unshuffledAlternatives.push(this.correctAnswer);
            this.alternatives = unshuffledAlternatives
                .map((a) => ({ sort: Math.random(), value: a }))
                .sort((a, b) => a.sort - b.sort)
                .map((a) => a.value);
        }
        else {
            this.router.navigate(['/score']);
        }
    }
    onSelectAnswer(answer) {
        if (answer === this.correctAnswer) {
            this.scoreService.addPoints();
        }
        this.getNextQuestion(++this.currentQuestionCount);
    }
    onNavigateToMenu() {
        this.router.navigate(['/categories']);
    }
}
QuestionComponent.ɵfac = function QuestionComponent_Factory(t) { return new (t || QuestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_question_service__WEBPACK_IMPORTED_MODULE_1__["QuestionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_score_service__WEBPACK_IMPORTED_MODULE_2__["ScoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
QuestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuestionComponent, selectors: [["app-question"]], decls: 5, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["loading", ""], [1, "navigate", "text-center", 3, "click"], [1, "display-4"], [1, "container-fluid", "main-container", "d-flex", "flex-wrap", "justify-content-center"], [1, "text-center", "w-75", "question"], [1, "mb-5", 3, "innerHtml"], ["class", "card p-0 ", 3, "click", 4, "ngFor", "ngForOf"], [1, "card", "p-0", 3, "click"], [1, "card-body", "text-center"], [1, "card-title", 3, "innerHtml"], ["spin", "", 1, "fas", "fa-circle-notch", "fa-spin", "fa-2x", "spinner"]], template: function QuestionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, QuestionComponent_main_0_Template, 10, 7, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QuestionComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionComponent_Template_h6_click_3_listener() { return ctx.onNavigateToMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Back to menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_shared_decode_html_entities_pipe__WEBPACK_IMPORTED_MODULE_5__["DecodeHtmlEntitiesPipe"]], styles: [".select[_ngcontent-%COMP%] {\n    width: 100%;\n}\n.btn-light-blue[_ngcontent-%COMP%]{\n    width: 100%;\n    background-color: lightskyblue;\n    color: white;\n}\nh1[_ngcontent-%COMP%]{\n    margin-top: 2.5rem;\n    margin-bottom:1rem;\n    margin-left: 22rem;\n    font-size: 2.4rem;\n    color: lightskyblue;\n}\nh3[_ngcontent-%COMP%]{\n    color:gray;\n}\n.navigate[_ngcontent-%COMP%] {\n    margin-top: 5rem;\n    color:gray;\n}\n.navigate[_ngcontent-%COMP%]:hover {\n        color: lightskyblue;\n        cursor: pointer;\n    }\nsection[_ngcontent-%COMP%]{\n    width: 70%;\n    margin-top: 6rem;\n}\n.card[_ngcontent-%COMP%]{\n    width: 45%;\n    margin: 0.1rem;\n    border-radius: 4px;\n    background: #fff;\n    box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);\n    transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),\n                .3s box-shadow,\n                .3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);\n    padding: 120px 80px 18px 36px;\n    cursor: pointer;\n}\n.card[_ngcontent-%COMP%]:hover{\n    transform: scale(1.05);\n    box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);\n    background-color: lightskyblue;\n    color: white;\n    z-index: 999;\n}\n.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n  font-weight: 600;\n}\n.question[_ngcontent-%COMP%]{\n    height: 5rem;\n}\n.spinner[_ngcontent-%COMP%] {\n    margin-top: 3rem;\n    margin-bottom: 1rem;\n    margin-left: 15.5rem;\n    color: lightskyblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9xdWVzdGlvbi9xdWVzdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDtBQUVJO1FBQ0ksbUJBQW1CO1FBQ25CLGVBQWU7SUFDbkI7QUFFSjtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiwrREFBK0Q7SUFDL0Q7O3dFQUVvRTtJQUNwRSw2QkFBNkI7SUFDN0IsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtFQUFrRTtJQUNsRSw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9xdWVzdGlvbi9xdWVzdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uYnRuLWxpZ2h0LWJsdWV7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuaDF7XG4gICAgbWFyZ2luLXRvcDogMi41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206MXJlbTtcbiAgICBtYXJnaW4tbGVmdDogMjJyZW07XG4gICAgZm9udC1zaXplOiAyLjRyZW07XG4gICAgY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcbn1cbmgze1xuICAgIGNvbG9yOmdyYXk7XG59XG5cbi5uYXZpZ2F0ZSB7XG4gICAgbWFyZ2luLXRvcDogNXJlbTtcbiAgICBjb2xvcjpncmF5O1xufVxuXG4gICAgLm5hdmlnYXRlOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiBcbnNlY3Rpb257XG4gICAgd2lkdGg6IDcwJTtcbiAgICBtYXJnaW4tdG9wOiA2cmVtO1xufVxuLmNhcmR7XG4gICAgd2lkdGg6IDQ1JTtcbiAgICBtYXJnaW46IDAuMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDZweCAxMHB4IHJnYmEoMCwwLDAsLjA4KSwgMCAwIDZweCByZ2JhKDAsMCwwLC4wNSk7XG4gICAgdHJhbnNpdGlvbjogLjNzIHRyYW5zZm9ybSBjdWJpYy1iZXppZXIoLjE1NSwxLjEwNSwuMjk1LDEuMTIpLFxuICAgICAgICAgICAgICAgIC4zcyBib3gtc2hhZG93LFxuICAgICAgICAgICAgICAgIC4zcyAtd2Via2l0LXRyYW5zZm9ybSBjdWJpYy1iZXppZXIoLjE1NSwxLjEwNSwuMjk1LDEuMTIpO1xuICAgIHBhZGRpbmc6IDEyMHB4IDgwcHggMThweCAzNnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcmQ6aG92ZXJ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsMCwwLC4xMiksIDAgNHB4IDhweCByZ2JhKDAsMCwwLC4wNik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB6LWluZGV4OiA5OTk7XG59XG5cbi5jYXJkIGgze1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ucXVlc3Rpb257XG4gICAgaGVpZ2h0OiA1cmVtO1xufVxuLnNwaW5uZXIge1xuICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBtYXJnaW4tbGVmdDogMTUuNXJlbTtcbiAgICBjb2xvcjogbGlnaHRza3libHVlO1xufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-question',
                templateUrl: './question.component.html',
                styleUrls: ['./question.component.css']
            }]
    }], function () { return [{ type: src_app_shared_services_question_service__WEBPACK_IMPORTED_MODULE_1__["QuestionService"] }, { type: src_app_shared_services_score_service__WEBPACK_IMPORTED_MODULE_2__["ScoreService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "VB1u":
/*!*****************************************************!*\
  !*** ./src/app/components/score/score.component.ts ***!
  \*****************************************************/
/*! exports provided: ScoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreComponent", function() { return ScoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_score_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/score.service */ "reJD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class ScoreComponent {
    constructor(scoreService, route, router) {
        this.scoreService = scoreService;
        this.route = route;
        this.router = router;
        this.getMaxPoints();
        this.getScore();
    }
    ngOnInit() { }
    getScore() {
        this.finalScore = this.scoreService.getScore();
    }
    getMaxPoints() {
        this.maxPoints = this.scoreService.getMaxPoints();
    }
    onNavigateToMenu() {
        this.router.navigate(['/categories']);
    }
}
ScoreComponent.ɵfac = function ScoreComponent_Factory(t) { return new (t || ScoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_score_service__WEBPACK_IMPORTED_MODULE_1__["ScoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ScoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScoreComponent, selectors: [["app-score"]], decls: 20, vars: 2, consts: [[1, "display-4"], [1, "container-fluid", "main-container", "d-flex", "flex-wrap", "justify-content-center"], [1, "text-center", "mb-4", "w-75"], [1, "card", "p-0"], ["src", "../../../assets/images/score-image.jpg", "alt", "Photo by Heather Ford https://www.themodernlifemrs.com/", 1, "card-img-top"], [1, "card-body"], [1, "card-title"], [1, "score-span"], [1, "navigate", "text-center", 3, "click"]], template: function ScoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Scoreboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Result");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " You got ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " out of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " points! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScoreComponent_Template_h6_click_18_listener() { return ctx.onNavigateToMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Back to menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.finalScore, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.maxPoints, " ");
    } }, styles: [".select[_ngcontent-%COMP%] {\n    width: 100%;\n}\n.btn-light-blue[_ngcontent-%COMP%]{\n    width: 100%;\n    background-color: lightskyblue;\n    color: white;\n}\nh1[_ngcontent-%COMP%]{\n    margin-top: 2.5rem;\n    margin-bottom:1rem;\n    margin-left: 22rem;\n    font-size: 2.4rem;\n    color: lightskyblue;\n}\nh3[_ngcontent-%COMP%]{\n    color:gray;\n    font-size: 1.3rem;\n}\nsection[_ngcontent-%COMP%]{\n    width: 70%;\n    margin-top: 2rem;\n}\n.card[_ngcontent-%COMP%]{\n    width: 40%;\n    margin: 0.1rem;\n    border-radius: 4px;\n    box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);\n    transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),\n                .3s box-shadow,\n                .3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);\n    padding: 120px 80px 18px 36px;\n    cursor: pointer;\n    background-color: white;\n    color:gray;\n}\n.card-title[_ngcontent-%COMP%]{\n    font-size: 1.6rem;\n    margin-bottom: 0.2rem;\n}\n.score-span[_ngcontent-%COMP%]{\n    font-size: 1.5rem;\n    color: lightskyblue;\n}\n.card[_ngcontent-%COMP%]:hover{\n    transform: scale(1.05);\n    box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);\n    z-index: 999;\n}\n.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n  font-weight: 600;\n}\nimg[_ngcontent-%COMP%] {\n    object-fit: cover;\n}\n.navigate[_ngcontent-%COMP%] {\n    margin-top: 3rem;\n    color:gray;\n}\n.navigate[_ngcontent-%COMP%]:hover {\n        color: lightskyblue;\n        cursor: pointer;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zY29yZS9zY29yZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLCtEQUErRDtJQUMvRDs7d0VBRW9FO0lBQ3BFLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFVBQVU7QUFDZDtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtFQUFrRTtJQUNsRSxZQUFZO0FBQ2hCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDtBQUNJO1FBQ0ksbUJBQW1CO1FBQ25CLGVBQWU7SUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Njb3JlL3Njb3JlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0IHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5idG4tbGlnaHQtYmx1ZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5oMXtcbiAgICBtYXJnaW4tdG9wOiAyLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbToxcmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAyMnJlbTtcbiAgICBmb250LXNpemU6IDIuNHJlbTtcbiAgICBjb2xvcjogbGlnaHRza3libHVlO1xufVxuXG5oM3tcbiAgICBjb2xvcjpncmF5O1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG5zZWN0aW9ue1xuICAgIHdpZHRoOiA3MCU7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLmNhcmR7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBtYXJnaW46IDAuMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNoYWRvdzogMCA2cHggMTBweCByZ2JhKDAsMCwwLC4wOCksIDAgMCA2cHggcmdiYSgwLDAsMCwuMDUpO1xuICAgIHRyYW5zaXRpb246IC4zcyB0cmFuc2Zvcm0gY3ViaWMtYmV6aWVyKC4xNTUsMS4xMDUsLjI5NSwxLjEyKSxcbiAgICAgICAgICAgICAgICAuM3MgYm94LXNoYWRvdyxcbiAgICAgICAgICAgICAgICAuM3MgLXdlYmtpdC10cmFuc2Zvcm0gY3ViaWMtYmV6aWVyKC4xNTUsMS4xMDUsLjI5NSwxLjEyKTtcbiAgICBwYWRkaW5nOiAxMjBweCA4MHB4IDE4cHggMzZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6Z3JheTtcbn1cblxuLmNhcmQtdGl0bGV7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xufVxuLnNjb3JlLXNwYW57XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcbn1cblxuLmNhcmQ6aG92ZXJ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsMCwwLC4xMiksIDAgNHB4IDhweCByZ2JhKDAsMCwwLC4wNik7XG4gICAgei1pbmRleDogOTk5O1xufVxuXG4uY2FyZCBoM3tcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaW1nIHtcbiAgICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLm5hdmlnYXRlIHtcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgIGNvbG9yOmdyYXk7XG59XG4gICAgLm5hdmlnYXRlOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-score',
                templateUrl: './score.component.html',
                styleUrls: ['./score.component.css']
            }]
    }], function () { return [{ type: src_app_shared_services_score_service__WEBPACK_IMPORTED_MODULE_1__["ScoreService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "XSv+":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/question.service.ts ***!
  \*****************************************************/
/*! exports provided: QuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function() { return QuestionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




// Fetching data from the Open Trivia Database API: https://opentdb.com/
class QuestionService {
    constructor(http) {
        this.http = http;
    }
    getToken() {
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].opentdbApi.retrieveTokenUrl}`).subscribe((response) => {
            this.token = response.token;
        }, (error) => {
        });
    }
    getCategories() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].opentdbApi.trivia_categories);
    }
    getQuestions(amount, category) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].opentdbApi.opentdbBaseUrl}api.php?amount=${amount}&category=${category}&difficulty=easy`);
    }
}
QuestionService.ɵfac = function QuestionService_Factory(t) { return new (t || QuestionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
QuestionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: QuestionService, factory: QuestionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_category_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/category/category.component */ "mJAr");
/* harmony import */ var _components_question_question_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/question/question.component */ "ILr+");
/* harmony import */ var _shared_decode_html_entities_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/decode-html-entities.pipe */ "x9nd");
/* harmony import */ var _components_score_score_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/score/score.component */ "VB1u");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_category_category_component__WEBPACK_IMPORTED_MODULE_5__["CategoryComponent"],
        _components_question_question_component__WEBPACK_IMPORTED_MODULE_6__["QuestionComponent"],
        _shared_decode_html_entities_pipe__WEBPACK_IMPORTED_MODULE_7__["DecodeHtmlEntitiesPipe"],
        _components_score_score_component__WEBPACK_IMPORTED_MODULE_8__["ScoreComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_category_category_component__WEBPACK_IMPORTED_MODULE_5__["CategoryComponent"],
                    _components_question_question_component__WEBPACK_IMPORTED_MODULE_6__["QuestionComponent"],
                    _shared_decode_html_entities_pipe__WEBPACK_IMPORTED_MODULE_7__["DecodeHtmlEntitiesPipe"],
                    _components_score_score_component__WEBPACK_IMPORTED_MODULE_8__["ScoreComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "mJAr":
/*!***********************************************************!*\
  !*** ./src/app/components/category/category.component.ts ***!
  \***********************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_question_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/question.service */ "XSv+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function CategoryComponent_main_0_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryComponent_main_0_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const category_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.onCategorySelected(category_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r4.name, "");
} }
function CategoryComponent_main_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select a category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CategoryComponent_main_0_div_4_Template, 4, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.categories);
} }
function CategoryComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 8);
} }
class CategoryComponent {
    constructor(questionService, route, router) {
        this.questionService = questionService;
        this.route = route;
        this.router = router;
        this.categories = [];
        this.isLoading = true;
    }
    ngOnInit() {
        this.questionService.getToken();
        this.questionService.getCategories().subscribe((categories) => {
            this.categories = categories.trivia_categories.sort((category1, category2) => (category1.name > category2.name) ? 1 : -1);
            this.isLoading = false;
        });
    }
    onCategorySelected(category) {
        const amount = 10;
        this.router.navigate(['questions', amount, category.id]);
    }
}
CategoryComponent.ɵfac = function CategoryComponent_Factory(t) { return new (t || CategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_question_service__WEBPACK_IMPORTED_MODULE_1__["QuestionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoryComponent, selectors: [["app-category"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["loading", ""], [1, "display-4"], [1, "container-fluid", "main-container", "d-flex", "flex-wrap", "justify-content-center"], ["class", "card p-2 w-25", 3, "click", 4, "ngFor", "ngForOf"], [1, "card", "p-2", "w-25", 3, "click"], [1, "card-body", "text-center"], [1, "card-title"], ["spin", "", 1, "fas", "fa-circle-notch", "fa-spin", "fa-2x", "spinner"]], template: function CategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CategoryComponent_main_0_Template, 5, 1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CategoryComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["h1[_ngcontent-%COMP%]{\n    margin-top: 2.5rem;\n    margin-bottom: 1.2rem;\n    margin-left: 14.5rem;\n    font-size: 2.2rem;\n    color: lightskyblue;\n}\n\n.card[_ngcontent-%COMP%]{\n    margin: 0.1rem;\n    border-radius: 4px;\n    background: #fff;\n    box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);\n    transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),\n                .3s box-shadow,\n                .3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);\n    padding: 120px 80px 18px 36px;\n    cursor: pointer;\n}\n\n.card[_ngcontent-%COMP%]:hover{\n    transform: scale(1.05);\n    box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);\n    background-color: lightskyblue;\n    color: white;\n    z-index: 999;\n}\n\n.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n  font-weight: 600;\n}\n\n.spinner[_ngcontent-%COMP%] {\n    margin-top: 3rem;\n    margin-bottom: 1rem;\n    margin-left: 15.5rem;\n    color: lightskyblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yeS9jYXRlZ29yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLCtEQUErRDtJQUMvRDs7d0VBRW9FO0lBQ3BFLDZCQUE2QjtJQUM3QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtFQUFrRTtJQUNsRSw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcbiAgICBtYXJnaW4tdG9wOiAyLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAxNC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xuICAgIGNvbG9yOiBsaWdodHNreWJsdWU7XG59XG5cbi5jYXJke1xuICAgIG1hcmdpbjogMC4xcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggcmdiYSgwLDAsMCwuMDgpLCAwIDAgNnB4IHJnYmEoMCwwLDAsLjA1KTtcbiAgICB0cmFuc2l0aW9uOiAuM3MgdHJhbnNmb3JtIGN1YmljLWJlemllciguMTU1LDEuMTA1LC4yOTUsMS4xMiksXG4gICAgICAgICAgICAgICAgLjNzIGJveC1zaGFkb3csXG4gICAgICAgICAgICAgICAgLjNzIC13ZWJraXQtdHJhbnNmb3JtIGN1YmljLWJlemllciguMTU1LDEuMTA1LC4yOTUsMS4xMik7XG4gICAgcGFkZGluZzogMTIwcHggODBweCAxOHB4IDM2cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2FyZDpob3ZlcntcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwwLDAsLjEyKSwgMCA0cHggOHB4IHJnYmEoMCwwLDAsLjA2KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHotaW5kZXg6IDk5OTtcbn1cblxuLmNhcmQgaDN7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5zcGlubmVyIHtcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDE1LjVyZW07XG4gICAgY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-category',
                templateUrl: './category.component.html',
                styleUrls: ['./category.component.css']
            }]
    }], function () { return [{ type: src_app_shared_services_question_service__WEBPACK_IMPORTED_MODULE_1__["QuestionService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "reJD":
/*!**************************************************!*\
  !*** ./src/app/shared/services/score.service.ts ***!
  \**************************************************/
/*! exports provided: ScoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreService", function() { return ScoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/Subject */ "ds6q");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__);



class ScoreService {
    constructor() {
        // Observable source
        this.pointSource = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.maxPointSource = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // Observable streams
        this.pointSourceChanged$ = this.pointSource.asObservable();
        this.maxPointSourceChanged$ = this.pointSource.asObservable();
        this.points = 0;
    }
    addPoints() {
        this.points++;
        this.pointSource.next(this.points);
    }
    getScore() {
        return this.points;
    }
    setMaxScore(maxPoints) {
        this.maxPoints = maxPoints;
        this.maxPointSource.next(this.maxPoints);
    }
    getMaxPoints() {
        return this.maxPoints;
    }
}
ScoreService.ɵfac = function ScoreService_Factory(t) { return new (t || ScoreService)(); };
ScoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ScoreService, factory: ScoreService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_category_category_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/category/category.component */ "mJAr");
/* harmony import */ var _components_question_question_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/question/question.component */ "ILr+");
/* harmony import */ var _components_score_score_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/score/score.component */ "VB1u");







const routes = [
    { path: '', component: _components_category_category_component__WEBPACK_IMPORTED_MODULE_2__["CategoryComponent"], pathMatch: 'full' },
    { path: 'questions/:amount/:category', component: _components_question_question_component__WEBPACK_IMPORTED_MODULE_3__["QuestionComponent"] },
    { path: 'score', component: _components_score_score_component__WEBPACK_IMPORTED_MODULE_4__["ScoreComponent"] },
    { path: 'categories', component: _components_category_category_component__WEBPACK_IMPORTED_MODULE_2__["CategoryComponent"] }
    //{path: '**' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "x9nd":
/*!*****************************************************!*\
  !*** ./src/app/shared/decode-html-entities.pipe.ts ***!
  \*****************************************************/
/*! exports provided: DecodeHtmlEntitiesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecodeHtmlEntitiesPipe", function() { return DecodeHtmlEntitiesPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



class DecodeHtmlEntitiesPipe {
    constructor(sanitized) {
        this.sanitized = sanitized;
    }
    transform(value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    }
}
DecodeHtmlEntitiesPipe.ɵfac = function DecodeHtmlEntitiesPipe_Factory(t) { return new (t || DecodeHtmlEntitiesPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
DecodeHtmlEntitiesPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "decodeHtmlEntities", type: DecodeHtmlEntitiesPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DecodeHtmlEntitiesPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'decodeHtmlEntities'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map