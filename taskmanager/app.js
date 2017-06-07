/// <reference path="node_modules/practice-17-taskmanager/index.d.ts" />
var mdl = angular.module('app', [
    TaskManager.MODULE.name
]);
var LoginController = (function () {
    function LoginController(auth) {
        this.auth = auth;
    }
    LoginController.prototype.singin = function () {
        var _this = this;
        this.loading = true;
        this.auth.SignIn(this.login, this.password).then(function (token) {
            window.location.assign('page.html');
        }, function (err) {
            /*alert("Login or password incorrect");*/
        }).finally(function () {
            _this.loading = false;
        });
    };
    return LoginController;
}());
LoginController.$inject = ['tmAuthService'];
var TestController = (function () {
    function TestController(projectService) {
        var _this = this;
        this.projectService = projectService;
        this.projects = [];
        projectService.GetProjects().then(function (projects) {
            _this.projects = projects;
        });
    }
    TestController.prototype.showTasks = function (project) {
        this.selectedProject = project;
    };
    return TestController;
}());
TestController.$inject = ['tmProjectService'];
var TaskListComponent = (function () {
    function TaskListComponent() {
    }
    Object.defineProperty(TaskListComponent.prototype, "project", {
        set: function (value) {
            if (value != undefined && value != null) {
                // download tasks
            }
        },
        enumerable: true,
        configurable: true
    });
    TaskListComponent.prototype.$onInit = function () {
        console.log(this);
    };
    return TaskListComponent;
}());
mdl.component('taskList', {
    controller: TaskListComponent,
    template: "{{$ctrl.project}}",
    bindings: {
        project: '<'
    }
});
mdl.controller('testcontroller', TestController);
mdl.controller('logincontroller', LoginController);
